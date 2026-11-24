import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import JsonLd from '../../components/JsonLd'
import { breadcrumbs, ORGANIZATION_ID } from '../../../lib/schema'
import { getDiagram } from '../../components/diagrams/registry'

// The one guide only a firm holding both seats can write (24 Nov 2026): the
// technical and financial reviews are usually explained apart, but investors read
// the model and the architecture against each other. The single-review deep dives
// stay in the blog and are linked from here; this page owns the cross-checks.
// No week ranges for preparation (BRANDING §13.31).
const DiligenceCrossChecks = getDiagram('diligence-cross-checks')

const PAGE_URL = 'https://codenest.uk/guides/series-a-due-diligence/'

export const metadata = {
  title: 'Series A Due Diligence: Technical and Financial',
  description: 'What investors check in Series A due diligence, on the technology and the finances, and the cross-checks between them that stall raises. For UK founders.',
  openGraph: {
    title: 'Series A Due Diligence: Technical and Financial | Codenest',
    description: 'The technical review, the financial review, and the cross-checks between them that stall raises.',
    type: 'article',
    url: PAGE_URL,
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
    canonical: PAGE_URL,
  },
}

const crossChecks = [
  {
    title: 'The hiring plan against the roadmap',
    body: 'The model says four engineers by month nine. The roadmap needs a data engineer and a mobile developer the model never hired. Investors notice when the two plans describe different companies.',
  },
  {
    title: 'Cloud and tooling spend against the P&L',
    body: 'Infrastructure costs that grow with usage have to appear in the model at the rate the architecture actually spends. A flat hosting line beside a usage-priced platform reads as a model nobody checked.',
  },
  {
    title: 'Customer contracts against what the product does',
    body: 'Uptime commitments, data residency and security terms in the contracts are promises the technology has to keep. A diligence reviewer will read both and compare.',
  },
  {
    title: 'IP assignments against who wrote the code',
    body: 'Every founder, employee and contractor who wrote code should have assigned the IP to the company. A missing assignment is a legal and a technical finding at once, and open-source licences sit in the same question.',
  },
  {
    title: 'Use of funds against technical debt',
    body: 'If the review finds a rebuild is due, the use of funds has to pay for it. A raise that funds growth on a platform that cannot carry it is a question investors will ask before you do.',
  },
]

const checklist = [
  {
    seat: 'Technical',
    tone: 'text-primary-700',
    items: [
      'Architecture overview and the reasoning behind the big decisions',
      'How code reaches production, and how a bad release is reversed',
      'Infrastructure that can be rebuilt from code, with monitoring and a known cost',
      'Access control, secrets handling, and your UK GDPR position',
      'Who knows what: documentation and key-person cover',
      'A dependency and open-source licence list',
      'Known technical debt, written down with a plan',
    ],
    deepDive: { href: '/blog/startup-technical-due-diligence-checklist/', label: 'The full technical due diligence checklist' },
  },
  {
    seat: 'Financial',
    tone: 'text-accent-700',
    items: [
      'Monthly management accounts and the statutory accounts behind them',
      'Revenue that ties to bank deposits and to signed contracts',
      'A three-statement model with assumptions an investor can follow',
      'Base, upside and downside scenarios, and the runway in each',
      'A headcount plan and a use-of-funds breakdown',
      'A clean cap table, share history and option records',
      'Every liability disclosed, including the awkward ones',
    ],
    deepDive: { href: '/blog/investor-due-diligence-what-to-expect/', label: 'What investors check in due diligence' },
  },
]

const faqs = [
  {
    question: 'What do investors check in Series A due diligence?',
    answer: 'The finances, the legal position, the commercial traction, the team and, for a technology company, the technology. The financial review tests the accounts, the revenue and the model; the technical review tests the architecture, infrastructure, security, team and IP. The reviewers also compare the two, which is where many raises stall.',
  },
  {
    question: 'How long does Series A due diligence take?',
    answer: 'It varies with the investor, the size of the round and how ready the company is. The part founders control is how fast they can answer: a data room built before the term sheet turns most questions into a link rather than a project.',
  },
  {
    question: 'When should we start preparing for due diligence?',
    answer: 'Before you need to. Most technical findings, such as missing IP assignments, infrastructure nobody can rebuild or an untested release process, cannot be fixed in the fortnight before a raise, and a model takes several monthly closes to become credible.',
  },
  {
    question: 'Do we need both a CTO and a CFO for due diligence?',
    answer: 'No. Many founders cover one side themselves and bring in help for the other. What matters is that someone checks the technical and financial documents against each other before an investor does.',
  },
]

const pageSchema = [
  breadcrumbs([
    { name: 'Guides', path: '/guides/' },
    { name: 'Series A Due Diligence', path: '/guides/series-a-due-diligence/' },
  ]),
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Series A Due Diligence: The Technical and Financial Checklist',
    description: 'What investors check on the technology and the finances, and the cross-checks between them.',
    author: { '@id': ORGANIZATION_ID },
    publisher: { '@id': ORGANIZATION_ID },
    datePublished: '2026-11-24',
    dateModified: '2026-11-24',
    mainEntityOfPage: PAGE_URL,
    inLanguage: 'en-GB',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  },
]

export default function SeriesADueDiligencePage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd schema={pageSchema} />
      <Navigation />

      <main id="main-content">
        <section className="pt-24 md:pt-32 pb-16 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              Guide
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Series A Due Diligence: The Technical and Financial Checklist
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Investors review the technology and the finances, then read them against each other. This guide covers all three.
            </p>
          </div>
        </section>

        <section className="py-12 bg-primary-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-primary-100">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Quick Answer</h2>
              <p className="text-slate-700 mb-4">
                A Series A investor runs a <strong>technical review</strong> (architecture, infrastructure, security, team, IP) and a <strong>financial review</strong> (accounts, revenue, the model, cap table). Each can pass on its own.
              </p>
              <p className="text-slate-700">
                Raises more often stall in the <strong>cross-checks</strong>: a hiring plan the roadmap contradicts, cloud costs the model leaves out, code nobody assigned to the company. Check the two sets of documents against each other before an investor does.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">Two Reviews, Read Together</h2>
            <p className="text-slate-700 leading-relaxed mb-8">
              Founders usually prepare the two reviews separately, often with different people. Investors do not read them separately. The financial reviewer wants to know whether the model can be built with the technology described; the technical reviewer wants to know whether the plan is funded.
            </p>
            <DiligenceCrossChecks />
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8">The Cross-Checks That Stall Raises</h2>
            <div className="space-y-6">
              {crossChecks.map((check) => (
                <div key={check.title} className="bg-white rounded-xl border border-slate-200 p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{check.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{check.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">The Checklist</h2>
            <p className="text-slate-700 leading-relaxed mb-8">
              What each review will ask for. File it in a{' '}
              <Link href="/blog/building-your-first-data-room/" className="text-accent-700 font-semibold hover:underline">
                numbered data room
              </Link>{' '}
              before the term sheet, not after it.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {checklist.map((column) => (
                <div key={column.seat} className="rounded-2xl border border-slate-200 p-6">
                  <h3 className={`text-xs uppercase tracking-[0.2em] font-semibold mb-4 ${column.tone}`}>{column.seat} review</h3>
                  <ul className="space-y-3 mb-6">
                    {column.items.map((item) => (
                      <li key={item} className="flex items-start text-slate-700">
                        <svg className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${column.tone}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href={column.deepDive.href} className={`font-semibold hover:underline ${column.tone}`}>
                    {column.deepDive.label} &rarr;
                  </Link>
                </div>
              ))}
            </div>
            <p className="text-slate-700 leading-relaxed mt-8">
              Two free self-checks to start from: the{' '}
              <Link href="/tools/technical-due-diligence-check/" className="text-accent-700 font-semibold hover:underline">
                technical due diligence readiness check
              </Link>{' '}
              and the{' '}
              <Link href="/tools/runway-calculator/" className="text-accent-700 font-semibold hover:underline">
                runway calculator
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8">Series A Due Diligence Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-white rounded-xl border border-slate-200 p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.question}</h3>
                  <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Get Both Sides Checked Before an Investor Does</h2>
            <p className="text-xl text-primary-100 mb-8">
              Ankit Rana takes the technical side and Michelle Rana FCCA the financial side, separately or together. Request a free 30-minute call.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact/"
                className="inline-block bg-accent-500 text-primary-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-accent-600 transition-all"
              >
                Request a Strategy Call
              </Link>
            </div>
            <p className="text-primary-100 mt-6">
              <Link href="/services/fractional-cto/" className="underline hover:text-white">Fractional CTO</Link>
              {' · '}
              <Link href="/services/fractional-cfo/" className="underline hover:text-white">Fractional CFO</Link>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
