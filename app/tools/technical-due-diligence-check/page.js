import Link from 'next/link'
import DiligenceCheck from './DiligenceCheck'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import JsonLd from '../../components/JsonLd'
import { breadcrumbs, ORGANIZATION_ID, WEBSITE_ID } from '../../../lib/schema'

// The CTO counterpart to the runway calculator (site review, 23 Nov 2026).
// It captures no email: the score never leaves the browser, and the follow-up
// is the booking link, so there is nothing to promise and nothing to store.
export const metadata = {
  title: 'Technical Due Diligence Readiness Check',
  description: 'Free technical due diligence readiness check for UK startups. Twenty-five statements across seven areas investors examine, scored in your browser. Nothing is sent anywhere.',
  openGraph: {
    title: 'Technical Due Diligence Readiness Check',
    description: 'Score your startup against the seven areas investors examine in technical due diligence.',
    type: 'website',
    url: 'https://codenest.uk/tools/technical-due-diligence-check/',
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
    canonical: 'https://codenest.uk/tools/technical-due-diligence-check/',
  },
}

const pageSchema = [
  breadcrumbs([{ name: 'Technical Due Diligence Check', path: '/tools/technical-due-diligence-check/' }]),
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Technical Due Diligence Readiness Check',
    url: 'https://codenest.uk/tools/technical-due-diligence-check/',
    description: 'A self-assessment against the seven areas investors examine in technical due diligence.',
    applicationCategory: 'BusinessApplication',
    browserRequirements: 'Requires JavaScript.',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
    publisher: { '@id': ORGANIZATION_ID },
    isPartOf: { '@id': WEBSITE_ID },
  },
]

export default function DiligenceCheckPage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd schema={pageSchema} />
      <Navigation />

      <main id="main-content">
        <section className="pt-24 md:pt-32 pb-12 bg-gradient-to-b from-primary-50 to-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
              Free Tool
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Technical Due Diligence Readiness Check
            </h1>
            <p className="text-xl text-slate-600">
              Twenty-five statements across the seven areas an investor&apos;s technical review examines. It takes a few
              minutes, it is scored in your browser, and nothing you tick is sent anywhere.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <DiligenceCheck />
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">How to read your score</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                At pre-seed and seed, nobody expects every statement to be true. What a technical review tests is whether
                you know where you stand: a known gap with a plan behind it reads as competence, and a gap you did not know
                about reads as risk.
              </p>
              <p>
                The areas marked &ldquo;Gap&rdquo; are where to start, because they are the ones a reviewer reaches first.
                The full checklist, with the questions investors ask in each area and a week-by-week preparation plan, is in{' '}
                <Link href="/blog/startup-technical-due-diligence-checklist/" className="font-semibold text-primary-700 hover:text-primary-800 underline">
                  our technical due diligence checklist
                </Link>
                .
              </p>
              <p>
                Raising on a technical story the financial model has to support? The{' '}
                <Link href="/tools/runway-calculator/" className="font-semibold text-primary-700 hover:text-primary-800 underline">
                  runway calculator
                </Link>{' '}
                covers the other half, and the{' '}
                <Link href="/services/fractional-cto/" className="font-semibold text-primary-700 hover:text-primary-800 underline">
                  Fractional CTO
                </Link>{' '}
                page covers what preparing for diligence with us involves.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
