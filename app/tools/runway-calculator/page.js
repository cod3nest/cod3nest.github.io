import RunwayCalculator from './RunwayCalculator'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import JsonLd from '../../components/JsonLd'
import { breadcrumbs, ORGANIZATION_ID, WEBSITE_ID } from '../../../lib/schema'

export const metadata = {
  title: 'Free Startup Runway Calculator',
  description: 'Free startup runway calculator. Calculate how many months of runway you have based on your cash position and burn rate. Plan your fundraising timeline.',
  keywords: ['startup runway calculator', 'burn rate calculator', 'how long is my runway', 'startup cash runway', 'months of runway', 'when to fundraise', 'startup financial planning'],
  openGraph: {
    title: 'Free Startup Runway Calculator',
    description: 'Calculate your runway and plan your fundraising timeline.',
    type: 'website',
    url: 'https://codenest.uk/tools/runway-calculator/',
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
    canonical: 'https://codenest.uk/tools/runway-calculator/',
  },
}

const pageSchema = [
  breadcrumbs([{ name: 'Runway Calculator', path: '/tools/runway-calculator/' }]),
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Startup Runway Calculator',
    url: 'https://codenest.uk/tools/runway-calculator/',
    description: 'Calculate how many months of runway you have from your cash position and monthly burn rate.',
    applicationCategory: 'FinanceApplication',
    browserRequirements: 'Requires JavaScript.',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
    publisher: { '@id': ORGANIZATION_ID },
    isPartOf: { '@id': WEBSITE_ID },
  },
]

export default function RunwayCalculatorPage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd schema={pageSchema} />
      <Navigation />

      <main id="main-content">

      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-12 bg-gradient-to-b from-accent-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-accent-100 text-accent-800 rounded-full text-sm font-medium mb-6">
            Free Tool
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Startup Runway Calculator
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Calculate how many months of runway you have and when you should start fundraising.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RunwayCalculator />
        </div>
      </section>

      {/* Educational Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8">
            Understanding Your Runway
          </h2>

          <div className="prose prose-lg prose-slate max-w-none">
            <h3>What is Startup Runway?</h3>
            <p>
              Runway is the number of months your startup can operate before running out of cash, assuming no additional funding or revenue changes. It's calculated by dividing your current cash position by your monthly burn rate.
            </p>

            <h3>What is Burn Rate?</h3>
            <p>
              <strong>Gross burn</strong> is your total monthly expenses. <strong>Net burn</strong> is your monthly expenses minus monthly revenue. For early-stage startups with minimal revenue, these are often the same.
            </p>

            <h3>When Should You Start Fundraising?</h3>
            <p>
              The general rule is to start fundraising when you have 9-12 months of runway remaining. Fundraising typically takes 3-6 months, so this gives you buffer for:
            </p>
            <ul>
              <li>The fundraising process itself</li>
              <li>Time to find the right investors</li>
              <li>Negotiation and closing</li>
              <li>Unexpected delays</li>
            </ul>

            <h3>Healthy Runway Benchmarks</h3>
            <div className="not-prose overflow-x-auto my-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-200">
                    <th className="border border-slate-300 px-4 py-3 text-left">Runway</th>
                    <th className="border border-slate-300 px-4 py-3 text-left">Status</th>
                    <th className="border border-slate-300 px-4 py-3 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-4 py-3">18+ months</td>
                    <td className="border border-slate-300 px-4 py-3 text-green-700">Healthy</td>
                    <td className="border border-slate-300 px-4 py-3">Focus on growth and milestones</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-4 py-3">12-18 months</td>
                    <td className="border border-slate-300 px-4 py-3 text-green-700">Good</td>
                    <td className="border border-slate-300 px-4 py-3">Start thinking about fundraising strategy</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-3">9-12 months</td>
                    <td className="border border-slate-300 px-4 py-3 text-yellow-700">Caution</td>
                    <td className="border border-slate-300 px-4 py-3">Begin active fundraising now</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-4 py-3">6-9 months</td>
                    <td className="border border-slate-300 px-4 py-3 text-orange-700">Warning</td>
                    <td className="border border-slate-300 px-4 py-3">Urgent: fundraise or cut costs</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-3">&lt;6 months</td>
                    <td className="border border-slate-300 px-4 py-3 text-red-600">Critical</td>
                    <td className="border border-slate-300 px-4 py-3">Emergency mode: bridge or pivot</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Tips to Extend Your Runway</h3>
            <ul>
              <li><strong>Reduce burn rate:</strong> Cut non-essential expenses, renegotiate contracts</li>
              <li><strong>Increase revenue:</strong> Focus on sales, improve pricing</li>
              <li><strong>Defer payments:</strong> Negotiate extended payment terms with vendors</li>
              <li><strong>Bridge financing:</strong> Consider convertible notes from existing investors</li>
              <li><strong>Government grants:</strong> R&D tax credits, Innovate UK grants</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help Extending Your Runway?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Our Fractional CFO service helps startups optimise burn rate, build financial models, and prepare for fundraising.
          </p>
          <a
            href="/contact/"
            className="inline-block bg-accent-500 text-primary-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-accent-600 transition-all"
          >
            Request a Strategy Call
          </a>
        </div>
      </section>

      </main>

      <Footer />
    </div>
  )
}
