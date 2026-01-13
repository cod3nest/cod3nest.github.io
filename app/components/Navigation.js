'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showStickyCTA, setShowStickyCTA] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past 600px (roughly past hero)
      setShowStickyCTA(window.scrollY > 600)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent-500 text-primary-900 px-4 py-2 rounded-lg z-[100] font-semibold"
      >
        Skip to main content
      </a>

      {/* Sticky CTA - appears after scrolling past hero */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
          showStickyCTA ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <a
          href="#contact"
          className="flex items-center gap-2 bg-accent-400 text-primary-900 px-6 py-3 rounded-full text-sm font-semibold shadow-gold hover:shadow-gold-lg hover:bg-accent-500 transition-all btn-premium"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Schedule a Strategy Call
        </a>
      </div>

      <nav className="bg-white/95 backdrop-blur-sm shadow-sm fixed w-full z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="/" className="flex items-center" aria-label="Codenest Home">
              <img
                src="/img/companylogo.svg"
                alt="Codenest - Fractional CTO Services"
                className="h-10 w-auto company-logo"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              <a href="/#case-studies" className="text-slate-700 hover:text-primary-700 px-4 py-2 text-sm font-medium transition-colors rounded-xl hover:bg-slate-50 link-gold">Case Studies</a>
              <a href="/#services" className="text-slate-700 hover:text-primary-700 px-4 py-2 text-sm font-medium transition-colors rounded-xl hover:bg-slate-50 link-gold">Services</a>
              <a href="/#how-we-work" className="text-slate-700 hover:text-primary-700 px-4 py-2 text-sm font-medium transition-colors rounded-xl hover:bg-slate-50 link-gold">Our Process</a>
              <a href="/#about" className="text-slate-700 hover:text-primary-700 px-4 py-2 text-sm font-medium transition-colors rounded-xl hover:bg-slate-50 link-gold">Our Story</a>
              <a href="/blog" className="text-slate-700 hover:text-primary-700 px-4 py-2 text-sm font-medium transition-colors rounded-xl hover:bg-slate-50 link-gold">Blog</a>
              <a href="/#contact" className="bg-accent-400 text-primary-900 px-6 py-2.5 ml-2 rounded-lg text-sm font-semibold hover:bg-accent-500 transition-all shadow-sm hover:shadow-gold btn-premium">Schedule a Strategy Call</a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg p-2"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-slate-100">
              <a href="/#case-studies" className="text-slate-700 hover:text-primary-700 block px-3 py-2 text-base font-medium rounded-lg hover:bg-slate-50">Case Studies</a>
              <a href="/#services" className="text-slate-700 hover:text-primary-700 block px-3 py-2 text-base font-medium rounded-lg hover:bg-slate-50">Services</a>
              <a href="/#how-we-work" className="text-slate-700 hover:text-primary-700 block px-3 py-2 text-base font-medium rounded-lg hover:bg-slate-50">Our Process</a>
              <a href="/#about" className="text-slate-700 hover:text-primary-700 block px-3 py-2 text-base font-medium rounded-lg hover:bg-slate-50">Our Story</a>
              <a href="/blog" className="text-slate-700 hover:text-primary-700 block px-3 py-2 text-base font-medium rounded-lg hover:bg-slate-50">Blog</a>
              <a href="/#contact" className="bg-accent-400 text-primary-900 font-semibold block px-3 py-2 text-base rounded-lg hover:bg-accent-500 transition-all shadow-sm">Schedule a Strategy Call</a>
            </div>
          </div>
        )}
      </div>
    </nav>
    </>
  )
}
