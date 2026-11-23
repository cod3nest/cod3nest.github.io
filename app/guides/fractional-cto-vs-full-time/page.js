import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import JsonLd from '../../components/JsonLd'
import { breadcrumbs, ORGANIZATION_ID, WEBSITE_ID } from '../../../lib/schema'
import { getDiagram } from '../../components/diagrams/registry'

// This guide absorbed /blog/fractional-cto-vs-full-time-cto-uk-startups/ on
// 23 Nov 2026: the two pages answered the same question and split its signals.
// The blog URL 301s here via a Cloudflare Redirect Rule (docs/SEO_STRATEGY_2026-11-23.md).
const FractionalToFullTime = getDiagram('fractional-to-fulltime')

export const metadata = {
  title: 'Fractional CTO vs Full-Time CTO: Cost Comparison',
  description: 'Compare fractional CTO vs full-time CTO for UK startups. Cost analysis, pros and cons, decision framework, and when each option makes sense for your stage.',
  keywords: ['fractional CTO vs full-time CTO', 'part-time CTO vs permanent CTO', 'CTO hiring decision', 'startup CTO options UK', 'fractional vs full-time executive'],
  openGraph: {
    title: 'Fractional CTO vs Full-Time CTO: Complete Comparison',
    description: 'Which CTO model is right for your startup? Compare costs, benefits, and find out when each option makes sense.',
    type: 'article',
    url: 'https://codenest.uk/guides/fractional-cto-vs-full-time/',
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
    canonical: 'https://codenest.uk/guides/fractional-cto-vs-full-time/',
  },
}

const pageSchema = [
  breadcrumbs([
    { name: 'Guides', path: '/guides/' },
    { name: 'CTO vs Full-Time', path: '/guides/fractional-cto-vs-full-time/' },
  ]),
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Fractional CTO vs Full-Time CTO: Cost Comparison',
    description: 'Salary, equity and hidden costs compared, plus a decision framework for each startup stage.',
    author: { '@id': ORGANIZATION_ID },
    publisher: { '@id': ORGANIZATION_ID },
    datePublished: '2026-01-13',
    dateModified: '2026-11-23',
    mainEntityOfPage: 'https://codenest.uk/guides/fractional-cto-vs-full-time/',
    inLanguage: 'en-GB',
  },
]

export default function FractionalVsFullTimePage() {
  const comparisonData = [
    { factor: 'Annual Cost', fractional: '£48,000-£180,000', fullTime: '£210,000-£320,000+', winner: 'fractional' },
    { factor: 'Equity Dilution', fractional: 'None', fullTime: '1-4%', winner: 'fractional' },
    { factor: 'Time to Start', fractional: '1-2 weeks', fullTime: '3-6 months', winner: 'fractional' },
    { factor: 'Weekly Availability', fractional: '8-20 hours', fullTime: '40+ hours', winner: 'fullTime' },
    { factor: 'Flexibility', fractional: 'Scale up/down monthly', fullTime: 'Fixed commitment', winner: 'fractional' },
    { factor: 'Hiring Risk', fractional: 'Low (easy to end)', fullTime: 'High (severance costs)', winner: 'fractional' },
    { factor: 'Team Integration', fractional: 'Part-time presence', fullTime: 'Daily presence', winner: 'fullTime' },
    { factor: 'Long-term Commitment', fractional: 'Project-based', fullTime: 'Company-building', winner: 'fullTime' },
  ]

  return (
    <div className="min-h-screen bg-white">
      <JsonLd schema={pageSchema} />
      <Navigation />

      <main id="main-content">

      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
            Comparison Guide
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Fractional CTO vs Full-Time CTO
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A complete comparison to help UK founders decide which technical leadership model is right for their startup's stage and budget.
          </p>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-12 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-primary-100">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Quick Answer</h2>
            <p className="text-slate-700 mb-4">
              <strong>Choose a Fractional CTO if:</strong> You're pre-seed to Series A, have under 15 engineers, need to preserve runway, or want to move fast without a 3-6 month hiring process.
            </p>
            <p className="text-slate-700">
              <strong>Choose a Full-Time CTO if:</strong> You're post-Series A with 15+ engineers, technology is your core competitive moat, or you've found a perfect cultural fit willing to join.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8 text-center">
            Side-by-Side Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="px-6 py-4 text-left font-semibold">Factor</th>
                  <th className="px-6 py-4 text-left font-semibold">Fractional CTO</th>
                  <th className="px-6 py-4 text-left font-semibold">Full-Time CTO</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-6 py-4 font-medium text-slate-900 border-b border-slate-200">
                      {row.factor}
                    </td>
                    <td className={`px-6 py-4 border-b border-slate-200 ${row.winner === 'fractional' ? 'text-green-700 font-semibold' : 'text-slate-600'}`}>
                      {row.fractional}
                      {row.winner === 'fractional' && ' ✓'}
                    </td>
                    <td className={`px-6 py-4 border-b border-slate-200 ${row.winner === 'fullTime' ? 'text-green-700 font-semibold' : 'text-slate-600'}`}>
                      {row.fullTime}
                      {row.winner === 'fullTime' && ' ✓'}
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
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8">
            The Real Cost Breakdown
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-primary-600 mb-4">Fractional CTO</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex justify-between">
                  <span>Monthly retainer</span>
                  <span className="font-semibold">£4,000-£15,000</span>
                </li>
                <li className="flex justify-between">
                  <span>Employer NI</span>
                  <span className="font-semibold">£0</span>
                </li>
                <li className="flex justify-between">
                  <span>Pension contribution</span>
                  <span className="font-semibold">£0</span>
                </li>
                <li className="flex justify-between">
                  <span>Benefits</span>
                  <span className="font-semibold">£0</span>
                </li>
                <li className="flex justify-between">
                  <span>Recruitment fees</span>
                  <span className="font-semibold">£0</span>
                </li>
                <li className="flex justify-between">
                  <span>Equity</span>
                  <span className="font-semibold">0%</span>
                </li>
                <li className="flex justify-between pt-3 border-t border-slate-200">
                  <span className="font-bold">Year 1 Total</span>
                  <span className="font-bold text-primary-600">£48,000-£180,000</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-600 mb-4">Full-Time CTO</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex justify-between">
                  <span>Base salary</span>
                  <span className="font-semibold">£150,000-£220,000</span>
                </li>
                <li className="flex justify-between">
                  <span>Employer NI</span>
                  <span className="font-semibold">£18,000-£26,000</span>
                </li>
                <li className="flex justify-between">
                  <span>Pension (3%)</span>
                  <span className="font-semibold">£6,000-£9,000</span>
                </li>
                <li className="flex justify-between">
                  <span>Benefits</span>
                  <span className="font-semibold">£5,000-£15,000</span>
                </li>
                <li className="flex justify-between">
                  <span>Recruitment fees</span>
                  <span className="font-semibold">£30,000-£50,000</span>
                </li>
                <li className="flex justify-between">
                  <span>Equity</span>
                  <span className="font-semibold">1-4%</span>
                </li>
                <li className="flex justify-between pt-3 border-t border-slate-200">
                  <span className="font-bold">Year 1 Total</span>
                  <span className="font-bold text-slate-600">£210,000-£320,000+</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-center text-slate-600 mt-8">
            <strong>Savings with fractional:</strong> £130,000-£200,000 in Year 1, plus preserved equity
          </p>
        </div>
      </section>

      {/* When to Choose Each */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8 text-center">
            When to Choose Each Option
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-primary-50 rounded-2xl p-8 border border-primary-200">
              <h3 className="text-xl font-bold text-primary-900 mb-4">Choose Fractional CTO When:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">You're pre-seed to Series A stage</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Your engineering team is under 15 people</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Runway is under 18 months</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">You need leadership fast (1-2 weeks)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">You want to test the relationship first</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">You're a non-technical founder</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-100 rounded-2xl p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Choose Full-Time CTO When:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-slate-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">You're post-Series A with strong funding</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-slate-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">You have 15+ engineers to manage</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-slate-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Technology is your core competitive moat</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-slate-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">You found a unicorn candidate</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-slate-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Your board specifically requires it</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-slate-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">You need 40+ hours/week of technical leadership</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Costs founders miss */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8">
            The Costs Founders Miss
          </h2>
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p>
              <strong>Hiring time.</strong> A permanent CTO search usually takes three to six months. Technical decisions do not wait for it: they stall, or they get made by whoever is nearest, and both show up later in due diligence.
            </p>
            <p>
              <strong>Founder time.</strong> Twenty hours a week on a search for four months is over 300 hours not spent on customers, product or the raise.
            </p>
            <p>
              <strong>A wrong hire.</strong> An executive who does not work out costs the salary already paid, the severance, a second search, and the months of drift in between. A fractional engagement that is not working ends at the next monthly review.
            </p>
            <p>
              <strong>Hiring for a team you do not have yet.</strong> A CTO who can run fifty engineers is expensive overhead for three. You pay for capability you may not need for two or three years.
            </p>
          </div>
        </div>
      </section>

      {/* Fractional to full-time */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
            From Fractional to Full-Time
          </h2>
          <p className="text-slate-700 leading-relaxed mb-8">
            The choice is rarely permanent. Many startups use a fractional CTO as the bridge to a full-time hire, and plan it that way from the start.
          </p>
          <FractionalToFullTime />
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-2">1. Fractional</h3>
              <p className="text-slate-700">The fractional CTO sets the architecture, the hiring process and the engineering habits, while runway goes on growth.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-2">2. Hire or promote</h3>
              <p className="text-slate-700">Once the team needs a full-time leader, promote a strong engineering lead or hire against a role the fractional CTO helped define.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-2">3. Handover</h3>
              <p className="text-slate-700">The permanent CTO inherits a documented system. Some companies keep the fractional CTO on as an adviser for a while.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to evaluate */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8">
            How to Evaluate a Fractional CTO
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Good signs</h3>
              <ul className="space-y-3 text-slate-700 list-disc pl-5">
                <li>Experience at your stage and in a similar sector</li>
                <li>Strategy that comes with hands-on delivery, not just a document</li>
                <li>They describe outcomes, not hours</li>
                <li>Past clients who will take your call</li>
                <li>A clear plan for handing over to a permanent hire</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Warning signs</h3>
              <ul className="space-y-3 text-slate-700 list-disc pl-5">
                <li>Frameworks and methodology, but nothing shipped</li>
                <li>No experience leading a team</li>
                <li>Too many clients to be available when it matters</li>
                <li>Asking for equity in place of a fee</li>
                <li>No technical depth behind the diagrams</li>
              </ul>
            </div>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">Questions to ask</h3>
          <ol className="space-y-3 text-slate-700 list-decimal pl-5">
            <li>Walk me through a technical decision at a similar-stage startup that did not work out. What did you learn?</li>
            <li>How do you handle the engineering team disagreeing with your recommendation?</li>
            <li>What is your availability for investor meetings and due diligence calls?</li>
            <li>Which past clients can I speak to?</li>
            <li>What does a successful first 90 days look like for a company at our stage?</li>
          </ol>
        </div>
      </section>

      {/* Making it work */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8">
            Making a Fractional CTO Work
          </h2>
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p><strong>Define outcomes, not a role.</strong> Not &quot;provide technical leadership&quot; but &quot;set up the deployment pipeline, hire two senior engineers, prepare the technical due diligence pack&quot;.</p>
            <p><strong>Integrate them properly.</strong> Slack, the standups that matter, an introduction to the team. Part-time does not mean outsider.</p>
            <p><strong>Set a rhythm.</strong> A weekly founder sync, an agreed route for urgent questions, and a monthly written update.</p>
            <p><strong>Plan the exit from day one.</strong> The goal is a team that can run without the fractional CTO, or a clean handover to a permanent one, never dependency.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Still Not Sure Which Is Right for You?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Request a free 30-minute call. We'll help you assess your needs and recommend the best path forward—even if it's not us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact/"
              className="inline-block bg-accent-500 text-primary-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              Request a Strategy Call
            </Link>
            <Link
              href="/services/fractional-cto/"
              className="inline-block border-2 border-primary-300 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-500/30 transition-all"
            >
              Explore Fractional CTO Services
            </Link>
          </div>
        </div>
      </section>

      </main>

      <Footer />
    </div>
  )
}
