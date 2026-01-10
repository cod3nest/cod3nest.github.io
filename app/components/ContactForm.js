'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import emailjs from '@emailjs/browser'

// Email format regex - comprehensive pattern
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/

// Common typo patterns
const COMMON_TYPOS = {
  'gmial.com': 'gmail.com',
  'gmal.com': 'gmail.com',
  'gamil.com': 'gmail.com',
  'gnail.com': 'gmail.com',
  'gmail.con': 'gmail.com',
  'gmail.co': 'gmail.com',
  'hotmal.com': 'hotmail.com',
  'hotmial.com': 'hotmail.com',
  'hotmail.con': 'hotmail.com',
  'outlok.com': 'outlook.com',
  'outloo.com': 'outlook.com',
  'yahoo.con': 'yahoo.com',
  'yaho.com': 'yahoo.com',
}

const ContactForm = () => {
  const formRef = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' })
  const [emailValidation, setEmailValidation] = useState({
    status: 'idle', // idle, validating, valid, invalid, warning
    message: '',
    suggestion: null
  })
  const validationTimeoutRef = useRef(null)

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (validationTimeoutRef.current) {
        clearTimeout(validationTimeoutRef.current)
      }
    }
  }, [])

  // Check for common typos in email domain
  const checkForTypos = useCallback((email) => {
    const domain = email.split('@')[1]?.toLowerCase()
    if (domain && COMMON_TYPOS[domain]) {
      return {
        hasSuggestion: true,
        suggestion: email.replace(/@.+$/, '@' + COMMON_TYPOS[domain])
      }
    }
    return { hasSuggestion: false, suggestion: null }
  }, [])

  // Validate email format client-side
  const validateEmailFormat = useCallback((email) => {
    if (!email) return { valid: false, message: '' }
    if (!email.includes('@')) return { valid: false, message: 'Email must contain @' }
    if (!EMAIL_REGEX.test(email)) return { valid: false, message: 'Please enter a valid email format' }
    return { valid: true, message: '' }
  }, [])

  // Validate email domain using Abstract API
  const validateEmailDomain = useCallback(async (email) => {
    const apiKey = process.env.NEXT_PUBLIC_ABSTRACT_API_KEY

    // Skip API validation if no key configured
    if (!apiKey) {
      return { valid: true, message: '', skipped: true }
    }

    try {
      const response = await fetch(
        `https://emailvalidation.abstractapi.com/v1/?api_key=${apiKey}&email=${encodeURIComponent(email)}`
      )

      if (!response.ok) {
        // API error - don't block form submission
        console.warn('Email validation API error:', response.status)
        return { valid: true, message: '', skipped: true }
      }

      const data = await response.json()

      // Check deliverability and validity
      if (data.deliverability === 'UNDELIVERABLE') {
        return { valid: false, message: 'This email address appears to be undeliverable' }
      }

      if (data.is_valid_format?.value === false) {
        return { valid: false, message: 'Invalid email format' }
      }

      if (data.is_mx_found?.value === false) {
        return { valid: false, message: 'This email domain does not accept emails' }
      }

      if (data.is_disposable_email?.value === true) {
        return { valid: false, message: 'Please use a non-disposable email address' }
      }

      return { valid: true, message: 'Email verified' }
    } catch (error) {
      console.warn('Email validation error:', error)
      // Don't block form submission on API errors
      return { valid: true, message: '', skipped: true }
    }
  }, [])

  // Debounced email validation
  const validateEmail = useCallback(async (email) => {
    // Clear any pending validation
    if (validationTimeoutRef.current) {
      clearTimeout(validationTimeoutRef.current)
    }

    // Skip if empty
    if (!email) {
      setEmailValidation({ status: 'idle', message: '', suggestion: null })
      return
    }

    // First check format
    const formatCheck = validateEmailFormat(email)
    if (!formatCheck.valid) {
      setEmailValidation({ status: 'invalid', message: formatCheck.message, suggestion: null })
      return
    }

    // Check for typos
    const typoCheck = checkForTypos(email)
    if (typoCheck.hasSuggestion) {
      setEmailValidation({
        status: 'warning',
        message: 'Did you mean',
        suggestion: typoCheck.suggestion
      })
      return
    }

    // Debounce API call
    setEmailValidation({ status: 'validating', message: 'Checking email...', suggestion: null })

    validationTimeoutRef.current = setTimeout(async () => {
      const domainCheck = await validateEmailDomain(email)

      if (domainCheck.skipped) {
        setEmailValidation({ status: 'valid', message: '', suggestion: null })
      } else if (domainCheck.valid) {
        setEmailValidation({ status: 'valid', message: domainCheck.message, suggestion: null })
      } else {
        setEmailValidation({ status: 'invalid', message: domainCheck.message, suggestion: null })
      }
    }, 800) // Wait 800ms after user stops typing
  }, [validateEmailFormat, validateEmailDomain, checkForTypos])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })

    // Trigger email validation on email field change
    if (name === 'email') {
      validateEmail(value)
    }
  }

  // Accept typo suggestion
  const acceptSuggestion = () => {
    if (emailValidation.suggestion) {
      setFormData({ ...formData, email: emailValidation.suggestion })
      validateEmail(emailValidation.suggestion)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Prevent submission if email is invalid
    if (emailValidation.status === 'invalid') {
      setSubmitStatus({
        type: 'error',
        message: 'Please fix the email address before submitting.'
      })
      return
    }

    // Prevent submission while validating
    if (emailValidation.status === 'validating') {
      setSubmitStatus({
        type: 'error',
        message: 'Please wait while we verify your email address.'
      })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus({ type: '', message: '' })

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )

      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We will get back to you soon.'
      })
      setFormData({ name: '', email: '', company: '', message: '' })
      setEmailValidation({ status: 'idle', message: '', suggestion: null })
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again or email us directly.'
      })
      console.error('EmailJS Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-slate-900"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
            Email Address *
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full px-4 py-3 pr-10 border rounded-xl focus:ring-2 focus:border-transparent transition-all text-slate-900 ${
                emailValidation.status === 'invalid'
                  ? 'border-red-400 focus:ring-red-500'
                  : emailValidation.status === 'valid'
                  ? 'border-green-400 focus:ring-green-500'
                  : emailValidation.status === 'warning'
                  ? 'border-amber-400 focus:ring-amber-500'
                  : 'border-slate-300 focus:ring-primary-500'
              }`}
              placeholder="john@company.com"
            />
            {/* Validation status icon */}
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              {emailValidation.status === 'validating' && (
                <svg className="animate-spin h-5 w-5 text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              )}
              {emailValidation.status === 'valid' && (
                <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
              {emailValidation.status === 'invalid' && (
                <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              )}
              {emailValidation.status === 'warning' && (
                <svg className="h-5 w-5 text-amber-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              )}
            </div>
          </div>
          {/* Validation feedback message */}
          {emailValidation.status !== 'idle' && emailValidation.message && (
            <div className={`mt-2 text-sm ${
              emailValidation.status === 'invalid' ? 'text-red-600' :
              emailValidation.status === 'valid' ? 'text-green-600' :
              emailValidation.status === 'warning' ? 'text-amber-600' :
              'text-slate-500'
            }`}>
              {emailValidation.message}
              {emailValidation.suggestion && (
                <>
                  {' '}
                  <button
                    type="button"
                    onClick={acceptSuggestion}
                    className="font-semibold underline hover:no-underline"
                  >
                    {emailValidation.suggestion}
                  </button>
                  ?
                </>
              )}
            </div>
          )}
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
            Company / Startup
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-slate-900"
            placeholder="Your Company"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
            How can we help? *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-slate-900 resize-none"
            placeholder="Tell us about your project, challenges, or what you're looking to build..."
          ></textarea>
        </div>

        {submitStatus.message && (
          <div
            className={`p-4 rounded-xl ${
              submitStatus.type === 'success'
                ? 'bg-green-50 border border-green-200 text-green-800'
                : 'bg-red-50 border border-red-200 text-red-800'
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting || emailValidation.status === 'invalid' || emailValidation.status === 'validating'}
          className={`w-full py-4 px-6 rounded-xl text-lg font-semibold transition-all ${
            isSubmitting || emailValidation.status === 'invalid' || emailValidation.status === 'validating'
              ? 'bg-slate-400 cursor-not-allowed'
              : 'bg-primary-600 hover:bg-primary-700 shadow-lg hover:shadow-xl'
          } text-white`}
        >
          {isSubmitting ? 'Sending...' : emailValidation.status === 'validating' ? 'Verifying email...' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}

export default ContactForm