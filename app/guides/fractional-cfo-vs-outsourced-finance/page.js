import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import JsonLd from '../../components/JsonLd'
import { breadcrumbs, ORGANIZATION_ID } from '../../../lib/schema'

export const metadata = {
  title: 'Fractional CFO vs Outsourced Finance Function',
  description: 'Outsourced finance providers run your books; a fractional CFO owns the decisions behind them. What each delivers, where they overlap, and why most UK startups end up with both.',
  keywords: ['fractional CFO vs outsourced finance', 'outsourced finance function UK', 'finance as a service startup', 'outsourced FD vs fractional CFO', 'startup bookkeeping vs CFO'],
  openGraph: {
    title: 'Fractional CFO vs Outsourced Finance Function',
    description: 'Processing versus judgement: which model your startup needs, and when the answer is both.',
    type: 'article',
    url: 'https://codenest.uk/guides/fractional-cfo-vs-outsourced-finance/',
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
    canonical: 'https://codenest.uk/guides/fractional-cfo-vs-outsourced-finance/',
  },
}

const pageSchema = [
  breadcrumbs([
    { name: 'Guides', path: '/guides/' },
    { name: 'CFO vs Outsourced Finance', path: '/guides/fractional-cfo-vs-outsourced-finance/' },
  ]),
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Fractional CFO vs Outsourced Finance Function',
    description: 'What an outsourced finance provider delivers, what a fractional CFO adds on top, and how the two work together.',
    author: { '@id': ORGANIZATION_ID },
    publisher: { '@id': ORGANIZATION_ID },
    datePublished: '2026-08-05',
    dateModified: '2026-08-05',
    mainEntityOfPage: 'https://codenest.uk/guides/fractional-cfo-vs-outsourced-finance/',
    inLanguage: 'en-GB',
  },
]

const outsourcedDelivers = [
  'Bookkeeping and transaction processing',
  'Payroll and pension administration',
  'VAT returns and statutory filings',
  'Monthly management accounts to a standard template',
  'Accounts payable and receivable runs',
  'Year-end pack prepared for your accountant',
]

const cfoAdds = [
  'A financial model that answers questions the accounts cannot',
  'Pricing and unit economics analysis with a decision attached',
  'Scenario planning and rolling forecasts against your runway',
  'A data room and the diligence answers behind it',
  'Board packs written for the people who read them',
  'Ownership of the number when an investor pushes back',
]

const comparisonData = [
  { factor: 'Primary output', outsourced: 'Accurate historical records', cfo: 'Forward-looking decisions' },
  { factor: 'Time horizon', outsourced: 'Last month', cfo: 'Next 18 months' },
  { factor: 'Typical engagement', outsourced: 'Fixed monthly fee per volume', cfo: 'Retainer scoped to your stage' },
  { factor: 'Who it reports to', outsourced: 'Your finance lead or founder', cfo: 'Founder and board' },
  { factor: 'In a fundraise', outsourced: 'Supplies the underlying numbers', cfo: 'Builds and defends the case' },
  { factor: 'Accountable for', outsourced: 'Accuracy and deadlines', cfo: 'Financial judgement and outcomes' },
  { factor: 'Replaces the other', outsourced: 'No', cfo: 'No' },
]

export default function FractionalCFOvsOutsourcedFinancePage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd schema={pageSchema} />
      <Navigation />

      <main id="main-content">

      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-16 bg-gradient-to-b from-accent-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-accent-100 text-accent-800 rounded-full text-sm font-medium mb-6">
            Comparison Guide
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Fractional CFO vs Outsourced Finance Function
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            One keeps your books right. The other decides what to do about what they say. Most UK
            startups need both, and buying the wrong one first is an expensive way to find out.
          </p>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-12 bg-accent-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-accent-100">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Quick answer</h2>
            <p className="text-slate-700 mb-4">
              <strong>An outsourced finance function</strong> is a processing capability. It closes
              your month, files your VAT, runs payroll and hands you management accounts. Buy it as
              soon as the admin outgrows a spreadsheet.
            </p>
            <p className="text-slate-700">
              <strong>A fractional CFO</strong> is a decision capability. They build the model,
              price the product, plan the runway and answer to your board. Buy it when the
              decisions get expensive, which for most startups is the raise before Series A.
            </p>
          </div>
        </div>
      </section>

      {/* What each delivers */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8 text-center">
            What each one actually delivers
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Outsourced finance function</h3>
              <p className="text-sm text-slate-600 mb-5">Bookkeeping firms, finance-as-a-service providers, outsourced FD packages</p>
              <ul className="space-y-3">
                {outsourcedDelivers.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-accent-50 rounded-2xl p-8 border border-accent-200">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Fractional CFO</h3>
              <p className="text-sm text-slate-600 mb-5">Senior finance judgement, retained for part of a week</p>
              <ul className="space-y-3">
                {cfoAdds.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent-700 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8 text-center">
            Side-by-side comparison
          </h2>
          {/* Wide content scrolls inside its own container rather than the page. */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <caption className="sr-only">
                Outsourced finance function compared with a fractional CFO across output, horizon, accountability and role in a fundraise
              </caption>
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th scope="col" className="px-6 py-4 text-left font-semibold">Factor</th>
                  <th scope="col" className="px-6 py-4 text-left font-semibold">Outsourced finance</th>
                  <th scope="col" className="px-6 py-4 text-left font-semibold">Fractional CFO</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row) => (
                  <tr key={row.factor} className="odd:bg-white even:bg-slate-50">
                    <th scope="row" className="px-6 py-4 text-left font-medium text-slate-900 border-b border-slate-200">
                      {row.factor}
                    </th>
                    <td className="px-6 py-4 border-b border-slate-200 text-slate-600">{row.outsourced}</td>
                    <td className="px-6 py-4 border-b border-slate-200 text-slate-600">{row.cfo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* The usual answer is both */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
            For most startups the answer is both
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            These two roles are complements. The outsourced provider produces clean, timely,
            reconciled numbers. The fractional CFO takes those numbers and decides what they mean
            for pricing, hiring, runway and the next raise. Paying a CFO rate for bookkeeping wastes
            money; asking a bookkeeping provider to own a fundraise asks for judgement you did not
            buy.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">The sequence that usually works</h3>
              <p className="text-slate-600 leading-relaxed">
                Bookkeeping first, from the moment invoices and payroll stop fitting in a
                spreadsheet. Fractional CFO second, six to nine months before you intend to raise,
                so the model and the data room are built before an investor asks for them.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">The mistake we see most</h3>
              <p className="text-slate-600 leading-relaxed">
                Founders assume that a provider producing management accounts is also watching the
                runway. Management accounts describe what already happened. Nobody is forecasting
                unless you have asked someone to, and named them.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">How they should work together</h3>
              <p className="text-slate-600 leading-relaxed">
                A fractional CFO should reduce your outsourced bill over time by tightening the
                chart of accounts, cutting rework at month-end and settling what gets reported. If
                the two are duplicating each other after a quarter, the scope was drawn wrong.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 bg-accent-50 rounded-2xl border border-accent-100 text-center">
            <p className="text-slate-700">
              Comparing the individual roles instead of the providers? Read{' '}
              <Link href="/blog/fractional-cfo-vs-accountant-vs-controller/" className="font-semibold text-accent-700 hover:text-accent-800 underline">
                Fractional CFO vs Accountant vs Financial Controller
              </Link>.
              {' '}Weighing a permanent hire? Read{' '}
              <Link href="/guides/fractional-cfo-vs-full-time/" className="font-semibold text-accent-700 hover:text-accent-800 underline">
                Fractional CFO vs Full-Time CFO
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-accent-300 mb-4 font-medium">Financial Leadership</p>
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Not sure which gap you are filling?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Request a free 30-minute call. We will look at what you already have in place and tell
            you where the actual hole is.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact/"
              className="inline-block bg-accent-400 text-primary-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-500 transition-all shadow-gold hover:shadow-gold-lg"
            >
              Request a Strategy Call
            </Link>
            <Link
              href="/services/fractional-cfo/"
              className="inline-block border-2 border-primary-300 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-500/30 transition-all"
            >
              Explore Fractional CFO Services
            </Link>
          </div>
        </div>
      </section>

      </main>

      <Footer />
    </div>
  )
}
