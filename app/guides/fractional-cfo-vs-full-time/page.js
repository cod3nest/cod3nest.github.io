import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import JsonLd from '../../components/JsonLd'
import { breadcrumbs, ORGANIZATION_ID } from '../../../lib/schema'

export const metadata = {
  title: 'Fractional CFO vs Full-Time CFO: Cost Comparison',
  description: 'Compare fractional CFO vs full-time CFO for UK startups. Year-one cost breakdown, equity dilution, time to start, and a decision framework for each stage.',
  keywords: ['fractional CFO vs full-time CFO', 'part-time CFO vs permanent CFO', 'startup CFO hiring UK', 'when to hire a full-time CFO', 'fractional vs full-time finance leader'],
  openGraph: {
    title: 'Fractional CFO vs Full-Time CFO: Complete Comparison',
    description: 'Which finance leadership model fits your stage? Costs, dilution, and the trade-offs compared for UK founders.',
    type: 'article',
    url: 'https://codenest.uk/guides/fractional-cfo-vs-full-time/',
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
    canonical: 'https://codenest.uk/guides/fractional-cfo-vs-full-time/',
  },
}

const pageSchema = [
  breadcrumbs([
    { name: 'Guides', path: '/guides/' },
    { name: 'CFO vs Full-Time', path: '/guides/fractional-cfo-vs-full-time/' },
  ]),
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Fractional CFO vs Full-Time CFO: Cost Comparison',
    description: 'Salary, employer costs, equity and time-to-start compared, plus a decision framework for each startup stage.',
    author: { '@id': ORGANIZATION_ID },
    publisher: { '@id': ORGANIZATION_ID },
    datePublished: '2026-08-05',
    dateModified: '2026-08-05',
    mainEntityOfPage: 'https://codenest.uk/guides/fractional-cfo-vs-full-time/',
    inLanguage: 'en-GB',
  },
]

// UK market ranges, consistent with the figures published in our fractional CFO
// cost guide. These describe the market; they are not a Codenest price list
// (BRANDING.md §13.24 — Codenest publishes no prices of its own).
const comparisonData = [
  { factor: 'Year-one cost', fractional: '£24,000-£144,000', fullTime: '£210,000-£360,000', advantage: 'fractional' },
  { factor: 'Equity dilution', fractional: 'None', fullTime: '0.5-2%', advantage: 'fractional' },
  { factor: 'Time to start', fractional: '1-2 weeks', fullTime: '3-6 months', advantage: 'fractional' },
  { factor: 'Weekly availability', fractional: '8-16 hours', fullTime: '40+ hours', advantage: 'fullTime' },
  { factor: 'Commitment', fractional: 'Monthly, 30-day notice typical', fullTime: 'Permanent employment', advantage: 'fractional' },
  { factor: 'Exit cost if it fails', fractional: 'Notice period', fullTime: 'Severance plus a repeat search', advantage: 'fractional' },
  { factor: 'Day-to-day presence', fractional: 'Scheduled days and fundraise spikes', fullTime: 'In the room every day', advantage: 'fullTime' },
  { factor: 'Typical fit', fractional: 'Pre-seed to Series A', fullTime: 'Series B and beyond', advantage: null },
]

const fractionalCosts = [
  { label: 'Monthly retainer', value: '£2,000-£12,000' },
  { label: 'Employer NI', value: '£0' },
  { label: 'Pension contribution', value: '£0' },
  { label: 'Benefits', value: '£0' },
  { label: 'Recruitment fees', value: '£0' },
  { label: 'Equity', value: '0%' },
]

const fullTimeCosts = [
  { label: 'Base salary', value: '£150,000-£250,000' },
  { label: 'Employer NI', value: '£18,000-£30,000' },
  { label: 'Pension', value: '£5,000-£10,000' },
  { label: 'Benefits', value: '£5,000-£15,000' },
  { label: 'Recruitment fees', value: '£30,000-£60,000' },
  { label: 'Equity', value: '0.5-2%' },
]

const chooseFractional = [
  'You are pre-seed to Series A',
  'You need investor-ready numbers before a raise',
  'Runway is under 18 months and every fixed cost matters',
  'Your finance work spikes around raises and board meetings',
  'You want senior judgement without committing equity',
  'You need someone in place in weeks',
]

const chooseFullTime = [
  'You are post-Series B with a finance team to lead',
  'Regulatory reporting demands a named, permanent officer',
  'Your model runs on daily commercial decisions at volume',
  'Investors or your board have made it a condition',
  'You need 40+ hours a week of finance leadership',
  'The role is as much people management as financial judgement',
]

export default function FractionalCFOvsFullTimePage() {
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
            Fractional CFO vs Full-Time CFO
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A complete comparison to help UK founders decide which finance leadership model fits their stage and their runway.
          </p>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-12 bg-accent-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-accent-100">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Quick answer</h2>
            <p className="text-slate-700 mb-4">
              <strong>Choose a fractional CFO if:</strong> you are pre-seed to Series A, you need
              investor-ready financials and a model you can defend, and you would rather spend
              runway on the product than on a six-figure salary.
            </p>
            <p className="text-slate-700">
              <strong>Choose a full-time CFO if:</strong> you have a finance team to lead, your
              board has made it a condition of the round, or the job genuinely fills a week.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4 text-center">
            Side-by-side comparison
          </h2>
          <p className="text-slate-600 text-center mb-8 max-w-2xl mx-auto">
            Figures are UK market ranges for 2026, not a price list. What an engagement costs
            depends on your stage and the intensity you need.
          </p>
          {/* Wide content scrolls inside its own container rather than the page. */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <caption className="sr-only">
                Fractional CFO compared with a full-time CFO hire across cost, dilution, availability and commitment
              </caption>
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th scope="col" className="px-6 py-4 text-left font-semibold">Factor</th>
                  <th scope="col" className="px-6 py-4 text-left font-semibold">Fractional CFO</th>
                  <th scope="col" className="px-6 py-4 text-left font-semibold">Full-Time CFO</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row) => (
                  <tr key={row.factor} className="odd:bg-white even:bg-slate-50">
                    <th scope="row" className="px-6 py-4 text-left font-medium text-slate-900 border-b border-slate-200">
                      {row.factor}
                    </th>
                    <td className={`px-6 py-4 border-b border-slate-200 ${row.advantage === 'fractional' ? 'text-accent-800 font-semibold' : 'text-slate-600'}`}>
                      {row.fractional}
                    </td>
                    <td className={`px-6 py-4 border-b border-slate-200 ${row.advantage === 'fullTime' ? 'text-primary-700 font-semibold' : 'text-slate-600'}`}>
                      {row.fullTime}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">
            The real cost breakdown
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl">
            A salary is the visible part of a full-time hire. Employer National Insurance, pension,
            benefits and the recruiter&apos;s fee land in the same year, and the seat usually sits
            empty for three to six months while you search.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-accent-800 mb-4">Fractional CFO</h3>
              <ul className="space-y-3 text-slate-700">
                {fractionalCosts.map((line) => (
                  <li key={line.label} className="flex justify-between gap-4">
                    <span>{line.label}</span>
                    <span className="font-semibold text-right">{line.value}</span>
                  </li>
                ))}
                <li className="flex justify-between gap-4 pt-3 border-t border-slate-200">
                  <span className="font-bold">Year-one total</span>
                  <span className="font-bold text-accent-800 text-right">£24,000-£144,000</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-700 mb-4">Full-Time CFO</h3>
              <ul className="space-y-3 text-slate-700">
                {fullTimeCosts.map((line) => (
                  <li key={line.label} className="flex justify-between gap-4">
                    <span>{line.label}</span>
                    <span className="font-semibold text-right">{line.value}</span>
                  </li>
                ))}
                <li className="flex justify-between gap-4 pt-3 border-t border-slate-200">
                  <span className="font-bold">Year-one total</span>
                  <span className="font-bold text-slate-700 text-right">£210,000-£360,000</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-slate-600 mt-8">
            At a typical seed-stage engagement of £3,500 a month, the year-one difference runs to
            well over £150,000, before counting the equity and the months the seat stands empty.
            For the full picture, read{' '}
            <Link href="/blog/how-much-does-fractional-cfo-cost-uk/" className="font-semibold text-accent-700 hover:text-accent-800 underline">
              how much a fractional CFO costs in the UK
            </Link>.
          </p>
        </div>
      </section>

      {/* When to choose each */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8 text-center">
            When to choose each option
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-accent-50 rounded-2xl p-8 border border-accent-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Choose a fractional CFO when:</h3>
              <ul className="space-y-3">
                {chooseFractional.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent-700 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-100 rounded-2xl p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Choose a full-time CFO when:</h3>
              <ul className="space-y-3">
                {chooseFullTime.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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

      {/* What the fractional model gives up */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
            What the fractional model gives up
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Availability between scheduled days</h3>
              <p className="text-slate-600 leading-relaxed">
                A fractional CFO is contactable, but they are not sitting in your standup. If your
                week turns on finance decisions taken hourly, that gap will show.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Line management depth</h3>
              <p className="text-slate-600 leading-relaxed">
                Two or three days a week can lead a small finance function. Building and managing a
                team of eight is a full-time job, and pricing it fractionally is the expensive way
                to get one.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Permanence in the eyes of a regulator</h3>
              <p className="text-slate-600 leading-relaxed">
                Some regulated activities expect a named officer with a permanent contract. Check
                your obligations before assuming a fractional appointment satisfies them.
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
              Weighing an outsourced provider instead? Read{' '}
              <Link href="/guides/fractional-cfo-vs-outsourced-finance/" className="font-semibold text-accent-700 hover:text-accent-800 underline">
                Fractional CFO vs Outsourced Finance Function
              </Link>.
              {' '}Working out when you need the role at all? Try the free{' '}
              <Link href="/tools/runway-calculator/" className="font-semibold text-accent-700 hover:text-accent-800 underline">
                Startup Runway Calculator
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
            Still not sure which is right for you?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Request a free 30-minute call. We will help you assess your stage and say so if a
            fractional CFO is the wrong answer.
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
