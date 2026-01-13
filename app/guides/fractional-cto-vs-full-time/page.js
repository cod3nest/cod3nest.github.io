import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Fractional CTO vs Full-Time CTO: Which Is Right for Your Startup? | Codenest',
  description: 'Compare fractional CTO vs full-time CTO for UK startups. Cost analysis, pros and cons, decision framework, and when each option makes sense for your stage.',
  keywords: ['fractional CTO vs full-time CTO', 'part-time CTO vs permanent CTO', 'CTO hiring decision', 'startup CTO options UK', 'fractional vs full-time executive'],
  openGraph: {
    title: 'Fractional CTO vs Full-Time CTO: Complete Comparison',
    description: 'Which CTO model is right for your startup? Compare costs, benefits, and find out when each option makes sense.',
    type: 'article',
    url: 'https://codenest.uk/guides/fractional-cto-vs-full-time',
  },
  alternates: {
    canonical: 'https://codenest.uk/guides/fractional-cto-vs-full-time',
  },
}

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
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-slate-50 to-white">
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

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Still Not Sure Which Is Right for You?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Book a free 30-minute call. We'll help you assess your needs and recommend the best path forward—even if it's not us.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-accent-500 text-primary-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-accent-600 transition-all"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
