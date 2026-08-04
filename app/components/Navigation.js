'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// The two named services are the commercial pages people search for; the hub
// carries the six others. Grouping them keeps all three one interaction away
// without spending three top-level slots on them.
const SERVICE_LINKS = [
  { href: '/services/fractional-cto/', label: 'Fractional CTO', hint: 'Architecture, engineering leadership, delivery' },
  { href: '/services/fractional-cfo/', label: 'Fractional CFO', hint: 'Financial models, controls, fundraising' },
  { href: '/services/', label: 'All Services', hint: 'Both tracks, eight services' },
]

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [showStickyCTA, setShowStickyCTA] = useState(false)
  const servicesRef = useRef(null)
  const servicesButtonRef = useRef(null)
  const serviceItemRefs = useRef([])
  const pendingFocusIndex = useRef(null)
  // On the homepage, scroll to its inline contact section instead of
  // navigating away (and potentially discarding in-progress form input).
  const pathname = usePathname()
  const contactHref = pathname === '/' ? '/#contact' : '/contact/'

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past 600px (roughly past hero)
      setShowStickyCTA(window.scrollY > 600)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // A dropdown that survives a route change, a click elsewhere, or Escape.
  useEffect(() => {
    setIsServicesOpen(false)
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!isServicesOpen) return
    const closeOnOutsideClick = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false)
      }
    }
    const closeOnEscape = (event) => {
      if (event.key !== 'Escape') return
      setIsServicesOpen(false)
      // Below the lg breakpoint the desktop nav is display:none, and focusing a
      // button with no CSS box silently drops focus to the body.
      const button = servicesButtonRef.current
      if (button && button.offsetParent !== null) button.focus()
    }
    document.addEventListener('pointerdown', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [isServicesOpen])

  useEffect(() => {
    // Clearing on close matters: a pending index that outlives its menu would
    // be consumed by the next open and steal focus unasked.
    if (!isServicesOpen) {
      pendingFocusIndex.current = null
      return
    }
    if (pendingFocusIndex.current === null) return
    const index = pendingFocusIndex.current
    pendingFocusIndex.current = null
    serviceItemRefs.current[index]?.focus()
  }, [isServicesOpen])

  // Keyboard activation is handled explicitly rather than leaning on the
  // button's native Enter/Space behaviour, so the disclosure also supports the
  // arrow keys a keyboard user expects from a navigation menu.
  // The item refs only exist once the open menu has committed, so the focus
  // move is deferred to an effect rather than run alongside the state update.
  const openServices = (focusIndex) => {
    pendingFocusIndex.current = focusIndex ?? null
    setIsServicesOpen(true)
  }

  // When the menu is already open, focus moves directly. Calling setState with
  // the value it already holds makes React bail out without re-rendering, so
  // the focus effect would never run and the pending index would go stale.
  const handleServicesButtonKeyDown = (event) => {
    const lastIndex = SERVICE_LINKS.length - 1
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      isServicesOpen ? serviceItemRefs.current[0]?.focus() : openServices(0)
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      isServicesOpen ? serviceItemRefs.current[lastIndex]?.focus() : openServices(lastIndex)
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      isServicesOpen ? setIsServicesOpen(false) : openServices()
    }
  }

  const handleServicesItemKeyDown = (event, index) => {
    const lastIndex = SERVICE_LINKS.length - 1
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      serviceItemRefs.current[index === lastIndex ? 0 : index + 1]?.focus()
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      serviceItemRefs.current[index === 0 ? lastIndex : index - 1]?.focus()
    }
  }

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent-500 text-primary-900 px-4 py-2 rounded-lg z-[100] font-semibold"
      >
        Skip to main content
      </a>

      {/* Sticky CTA - appears after scrolling past hero */}
      {/* Desktop: bottom-right floating button */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 hidden md:block ${
          showStickyCTA ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <a
          href={contactHref}
          className="flex items-center gap-2 bg-accent-400 text-primary-900 px-6 py-3 rounded-full text-sm font-semibold shadow-gold hover:shadow-gold-lg hover:bg-accent-500 transition-all"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Request a Strategy Call
        </a>
      </div>

      {/* Mobile: full-width bottom bar for better tap target */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 md:hidden ${
          showStickyCTA ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-sm border-t border-slate-200 px-4 py-3 safe-area-bottom">
          <a
            href={contactHref}
            className="flex items-center justify-center gap-2 bg-accent-400 text-primary-900 w-full py-3.5 rounded-xl text-base font-semibold shadow-gold hover:bg-accent-500 transition-all"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Request a Strategy Call
          </a>
        </div>
      </div>

      <nav className="bg-white/95 backdrop-blur-sm shadow-sm fixed w-full z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="/" className="flex items-center" aria-label="Codenest Home">
              <img
                src="/img/companylogo.svg"
                alt="Codenest - Fractional CTO & CFO for UK startups"
                className="h-12 w-auto company-logo"
              />
            </a>
          </div>

          {/* Desktop Menu — six links plus the CTA need lg; at md they overflow. */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-1">
              <div
                className="relative"
                ref={servicesRef}
                onBlur={(event) => {
                  // Tabbing past the last item would otherwise leave the panel
                  // open and floating with no focus inside it.
                  if (!servicesRef.current?.contains(event.relatedTarget)) {
                    setIsServicesOpen(false)
                  }
                }}
              >
                <button
                  type="button"
                  ref={servicesButtonRef}
                  onClick={() => setIsServicesOpen((open) => !open)}
                  onKeyDown={handleServicesButtonKeyDown}
                  aria-expanded={isServicesOpen}
                  aria-controls="services-menu"
                  className="flex items-center text-slate-700 hover:text-primary-700 px-3 py-2 text-sm font-medium transition-colors rounded-xl hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                >
                  Services
                  <svg
                    className={`w-4 h-4 ml-1.5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isServicesOpen && (
                  <div
                    id="services-menu"
                    className="absolute left-0 mt-2 w-72 rounded-xl bg-white py-2 shadow-xl ring-1 ring-slate-200"
                  >
                    {SERVICE_LINKS.map((link, index) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        ref={(node) => { serviceItemRefs.current[index] = node }}
                        onClick={() => setIsServicesOpen(false)}
                        onKeyDown={(event) => handleServicesItemKeyDown(event, index)}
                        className="block px-4 py-3 hover:bg-slate-50 transition-colors focus:outline-none focus-visible:bg-slate-50 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500"
                      >
                        <span className="block text-sm font-semibold text-slate-800">{link.label}</span>
                        <span className="block text-xs text-slate-500 mt-0.5">{link.hint}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <a href="/case-studies/" className="text-slate-700 hover:text-primary-700 px-3 py-2 text-sm font-medium transition-colors rounded-xl hover:bg-slate-50 link-gold">Case Studies</a>
              <a href="/about/" className="text-slate-700 hover:text-primary-700 px-3 py-2 text-sm font-medium transition-colors rounded-xl hover:bg-slate-50 link-gold">About</a>
              <a href="/blog/" className="text-slate-700 hover:text-primary-700 px-3 py-2 text-sm font-medium transition-colors rounded-xl hover:bg-slate-50 link-gold">Blog</a>
              <a href={contactHref} className="bg-accent-400 text-primary-900 px-6 py-2.5 ml-2 rounded-lg text-sm font-semibold hover:bg-accent-500 transition-all shadow-sm hover:shadow-gold">Request a Strategy Call</a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
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
          <div id="mobile-menu" className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-slate-100">
              {/* Flattened on touch: a nested tap-to-expand menu costs an extra
                  tap and hides the two pages people came for. */}
              <p id="mobile-services-heading" className="px-3 pt-2 pb-1 text-xs uppercase tracking-[0.15em] text-slate-500 font-semibold">
                Services
              </p>
              <ul aria-labelledby="mobile-services-heading" className="space-y-1">
                {SERVICE_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-slate-700 hover:text-primary-700 block pl-6 pr-3 py-2 text-base font-medium rounded-lg hover:bg-slate-50"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <a href="/case-studies/" onClick={() => setIsMenuOpen(false)} className="text-slate-700 hover:text-primary-700 block px-3 py-2 text-base font-medium rounded-lg hover:bg-slate-50">Case Studies</a>
              <a href="/about/" onClick={() => setIsMenuOpen(false)} className="text-slate-700 hover:text-primary-700 block px-3 py-2 text-base font-medium rounded-lg hover:bg-slate-50">About</a>
              <a href="/blog/" onClick={() => setIsMenuOpen(false)} className="text-slate-700 hover:text-primary-700 block px-3 py-2 text-base font-medium rounded-lg hover:bg-slate-50">Blog</a>
              <a href={contactHref} onClick={() => setIsMenuOpen(false)} className="bg-accent-400 text-primary-900 font-semibold block px-3 py-2 text-base rounded-lg hover:bg-accent-500 transition-all shadow-sm">Request a Strategy Call</a>
            </div>
          </div>
        )}
      </div>
    </nav>
    </>
  )
}
