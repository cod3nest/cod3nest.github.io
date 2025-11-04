'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm fixed w-full z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="/" className="flex items-center" aria-label="Codenest Home">
              <img
                src="/img/companylogo.png"
                alt="codenest logo"
                className="h-9 w-auto company-logo"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              <a href="#case-studies" className="text-slate-700 hover:text-sky-700 px-4 py-2 text-sm font-medium transition-colors rounded-xl hover:bg-slate-50">Case Studies</a>
              <a href="#services" className="text-slate-700 hover:text-sky-700 px-4 py-2 text-sm font-medium transition-colors rounded-xl hover:bg-slate-50">Services</a>
              <a href="#approach" className="text-slate-700 hover:text-sky-700 px-4 py-2 text-sm font-medium transition-colors rounded-xl hover:bg-slate-50">Our Process</a>
              <a href="#about" className="text-slate-700 hover:text-sky-700 px-4 py-2 text-sm font-medium transition-colors rounded-xl hover:bg-slate-50">Our Story</a>
              <a href="#contact" className="bg-gradient-to-r from-sky-600 to-cyan-500 text-white px-6 py-2.5 ml-2 rounded-xl text-sm font-semibold hover:from-sky-700 hover:to-cyan-600 transition-all shadow-sm hover:shadow">Book a Discovery Call</a>
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
              <a href="#case-studies" className="text-slate-700 hover:text-sky-700 block px-3 py-2 text-base font-medium rounded-lg hover:bg-slate-50">Case Studies</a>
              <a href="#services" className="text-slate-700 hover:text-sky-700 block px-3 py-2 text-base font-medium rounded-lg hover:bg-slate-50">Services</a>
              <a href="#approach" className="text-slate-700 hover:text-sky-700 block px-3 py-2 text-base font-medium rounded-lg hover:bg-slate-50">Our Process</a>
              <a href="#about" className="text-slate-700 hover:text-sky-700 block px-3 py-2 text-base font-medium rounded-lg hover:bg-slate-50">Our Story</a>
              <a href="#contact" className="text-sky-700 font-semibold block px-3 py-2 text-base">Book a Discovery Call</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
