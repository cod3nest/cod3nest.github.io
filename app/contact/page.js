import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import JsonLd from '../components/JsonLd'
import { breadcrumbs, ORGANIZATION_ID, WEBSITE_ID } from '../../lib/schema'

export const metadata = {
  title: 'Contact | Request a Strategy Call',
  description: 'Request a free 30-minute strategy call with Codenest — fractional CTO and CFO services for UK startups, pre-seed to Series A. We reply within 24 hours.',
  openGraph: {
    title: 'Contact Codenest — Request a Strategy Call',
    description: 'Fractional CTO and CFO services for UK startups. Free 30-minute strategy call, no sales pitch.',
    type: 'website',
    url: 'https://codenest.uk/contact/',
    images: [
      {
        url: '/img/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Codenest - Fractional CTO & CFO for UK startups',
      },
    ],
  },
  alternates: {
    canonical: 'https://codenest.uk/contact/',
  },
}

const pageSchema = [
  breadcrumbs([{ name: 'Contact', path: '/contact/' }]),
  {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Codenest',
    url: 'https://codenest.uk/contact/',
    description: 'Request a free 30-minute strategy call with Codenest.',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORGANIZATION_ID },
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd schema={pageSchema} />
      <Navigation />

      <main id="main-content">
        <section className="pt-40 pb-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-400 opacity-[0.02] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary-600 opacity-[0.03] rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.2em] text-accent-600 mb-4 font-medium">Start the conversation</p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">Let&apos;s Talk</h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Fractional CTO or CFO: tell us what you&apos;re building. Thirty minutes, no sales pitch.
              </p>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <svg className="w-5 h-5 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Typically respond within 24hrs
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <svg className="w-5 h-5 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                100% confidential
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <svg className="w-5 h-5 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Free 30-minute consultation
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
