'use client'

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

// This form used to be markup only: a <form> inside a server component with no
// action and no submit handler. Pressing "Submit Referral" did a GET back to
// /refer/, which lost the referral entirely AND put both people's names and email
// addresses into the URL query string — and so into browser history, server logs
// and the Referer header of every request after it. (Site review, 5 Aug 2026.)
//
// It sends through the same EmailJS template as ContactForm and the runway
// calculator rather than adding a fourth one: the referral detail is packed into
// `message`, and `engagement` tags the lead so referrals are filterable at the
// other end.
//
// The referred founder's email is optional and gated behind an explicit
// confirmation that the referrer has their permission. Sharing a third party's
// contact details is the referrer's disclosure to make, not ours to assume
// (UK GDPR Art. 14; PECR for the approach that follows).
const INITIAL = {
  referrer_name: '',
  referrer_email: '',
  founder_name: '',
  founder_email: '',
  company_name: '',
  context: '',
  consent: false,
}

const FIELD_CLASS =
  'w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:ring-2 focus:ring-accent-500 focus:border-transparent'
const LABEL_CLASS = 'block text-sm font-medium text-slate-300 mb-2'

export default function ReferralForm() {
  const formRef = useRef(null)
  const [values, setValues] = useState(INITIAL)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setValues((previous) => ({ ...previous, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    const summary = [
      'Referral submitted from /refer/',
      `Referrer: ${values.referrer_name} <${values.referrer_email}>`,
      `Founder: ${values.founder_name || 'not given'}${values.founder_email ? ` <${values.founder_email}>` : ''}`,
      `Company: ${values.company_name || 'not given'}`,
      `Permission to contact the founder confirmed by referrer: ${values.consent ? 'yes' : 'no'}`,
      '',
      `What they need: ${values.context || 'not given'}`,
    ].join('\n')

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          name: `Referral from ${values.referrer_name}`,
          email: values.referrer_email,
          company: values.company_name,
          engagement: 'referral',
          message: summary,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      setStatus({
        type: 'success',
        message: "Thank you — we have your referral. We'll be in touch within 48 hours and will let you know the outcome either way.",
      })
      setValues(INITIAL)
    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus({
        type: 'error',
        message: 'Sorry, that did not send. Please try again, or email the details to hello@codenest.uk.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" aria-labelledby="refer-form-heading">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="referrer_name" className={LABEL_CLASS}>
            Your Name *
          </label>
          <input
            type="text"
            id="referrer_name"
            name="referrer_name"
            value={values.referrer_name}
            onChange={handleChange}
            required
            className={FIELD_CLASS}
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label htmlFor="referrer_email" className={LABEL_CLASS}>
            Your Email *
          </label>
          <input
            type="email"
            id="referrer_email"
            name="referrer_email"
            value={values.referrer_email}
            onChange={handleChange}
            required
            className={FIELD_CLASS}
            placeholder="jane@company.com"
          />
        </div>
      </div>

      <fieldset className="border-t border-slate-700 pt-6 space-y-6">
        <legend className="text-sm text-slate-400">Founder you&apos;re referring</legend>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="founder_name" className={LABEL_CLASS}>
              Founder&apos;s Name
            </label>
            <input
              type="text"
              id="founder_name"
              name="founder_name"
              value={values.founder_name}
              onChange={handleChange}
              className={FIELD_CLASS}
              placeholder="Alex Johnson"
            />
          </div>
          <div>
            <label htmlFor="founder_email" className={LABEL_CLASS}>
              Founder&apos;s Email <span className="text-slate-400 font-normal">(optional)</span>
            </label>
            <input
              type="email"
              id="founder_email"
              name="founder_email"
              value={values.founder_email}
              onChange={handleChange}
              className={FIELD_CLASS}
              placeholder="alex@startup.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="company_name" className={LABEL_CLASS}>
            Company Name
          </label>
          <input
            type="text"
            id="company_name"
            name="company_name"
            value={values.company_name}
            onChange={handleChange}
            className={FIELD_CLASS}
            placeholder="Startup Ltd"
          />
        </div>

        <div>
          <label htmlFor="context" className={LABEL_CLASS}>
            What do they need help with?
          </label>
          <textarea
            id="context"
            name="context"
            value={values.context}
            onChange={handleChange}
            rows={4}
            className={`${FIELD_CLASS} resize-none`}
            placeholder="e.g. They're building a fintech app, need help with architecture decisions and preparing for their seed round..."
          ></textarea>
        </div>

        {/* Only asked for when their details are actually supplied: the referrer is
            the one who can say whether the founder is happy to be introduced. */}
        {(values.founder_email || values.founder_name) && (
          <label className="flex items-start gap-3 text-sm text-slate-300 cursor-pointer">
            <input
              type="checkbox"
              name="consent"
              checked={values.consent}
              onChange={handleChange}
              required
              className="mt-1 w-4 h-4 rounded border-slate-600 bg-slate-800 text-accent-500 focus:ring-2 focus:ring-accent-500"
            />
            <span>
              They know about this introduction and are happy for me to share their details.
            </span>
          </label>
        )}
      </fieldset>

      {status.message && (
        <div
          role="status"
          className={`p-4 rounded-lg text-sm ${
            status.type === 'success'
              ? 'bg-emerald-950 border border-emerald-800 text-emerald-200'
              : 'bg-red-950 border border-red-800 text-red-200'
          }`}
        >
          {status.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full px-8 py-4 rounded-lg text-lg font-semibold transition-all ${
          isSubmitting
            ? 'bg-slate-600 text-slate-300 cursor-not-allowed'
            : 'bg-accent-400 text-primary-900 hover:bg-accent-500 shadow-gold hover:shadow-gold-lg'
        }`}
      >
        {isSubmitting ? 'Sending...' : 'Submit Referral'}
      </button>

      <p className="text-xs text-slate-400 text-center">
        We&apos;ll reach out within 48 hours and keep you updated on the progress.
      </p>
      {/* Privacy information belongs where the data is collected, not only in the
          footer (UK GDPR, Art. 13). /privacy lists this form as a collection point. */}
      <p className="text-xs text-slate-400 text-center">
        We use these details only to follow up on the referral — never for marketing lists. See our{' '}
        <a href="/privacy/" className="underline hover:text-slate-200">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  )
}
