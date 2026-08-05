import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import TrustBadges from '../components/TrustBadges'
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
        {/* Shares the homepage's #contact id so the sticky CTA suppresses itself
            here too — on this page the shortcut has nothing to offer. */}
        <section id="contact" className="pt-28 md:pt-40 pb-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-400 opacity-[0.02] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary-600 opacity-[0.03] rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.2em] text-accent-700 mb-4 font-medium">Start the conversation</p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">Let&apos;s Talk</h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Fractional CTO or CFO: tell us what you&apos;re building. Thirty minutes, no sales pitch.
              </p>
            </div>

            <TrustBadges className="mb-12" />

            {/* The page's only content heading. Without it the sub-h1 outline was
                empty, and the four footer column labels were the whole of it until
                they became h3s. "Let's Talk" carries the tone; this carries the
                query, and matches both the page title and the §6 CTA label. */}
            <div className="max-w-3xl mx-auto">
              <h2 id="contact-form-heading" className="font-serif text-2xl md:text-3xl font-bold text-slate-900 text-center mb-8">
                Request a Strategy Call
              </h2>
              <ContactForm labelledBy="contact-form-heading" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
