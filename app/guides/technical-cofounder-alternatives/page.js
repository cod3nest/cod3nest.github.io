import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Technical Co-founder Alternatives: Options for Non-Technical Founders | Codenest',
  description: 'Can\'t find a technical co-founder? Explore alternatives: fractional CTO, development agencies, technical advisors, and more. Find the right path for your startup.',
  keywords: ['technical co-founder alternative', 'can\'t find technical co-founder', 'non-technical founder options', 'startup without technical co-founder', 'fractional CTO vs co-founder', 'hire CTO instead of co-founder'],
  openGraph: {
    title: 'Technical Co-founder Alternatives for Non-Technical Founders',
    description: 'Can\'t find the right technical co-founder? Here are your options.',
    type: 'article',
    url: 'https://codenest.uk/guides/technical-cofounder-alternatives',
  },
  alternates: {
    canonical: 'https://codenest.uk/guides/technical-cofounder-alternatives',
  },
}

export default function TechnicalCofounderAlternativesPage() {
  const alternatives = [
    {
      title: 'Fractional CTO',
      description: 'Part-time technical leadership on a retainer basis',
      cost: '£4,000-£15,000/month',
      equity: 'None',
      commitment: 'Monthly (flexible)',
      bestFor: 'Strategic decisions, team building, investor meetings',
      pros: ['No equity dilution', 'Start in 1-2 weeks', 'Flexible commitment', 'Experienced leadership'],
      cons: ['Not full-time', 'Less emotional investment', 'May serve multiple clients'],
      score: 9
    },
    {
      title: 'Development Agency',
      description: 'Outsourced team to build your product',
      cost: '£50,000-£200,000+ per project',
      equity: 'None',
      commitment: 'Project-based',
      bestFor: 'Building MVP when you know exactly what you want',
      pros: ['Full team immediately', 'Fixed scope/budget', 'No management overhead'],
      cons: ['No strategic input', 'Knowledge leaves with them', 'Quality varies widely'],
      score: 6
    },
    {
      title: 'Technical Advisor',
      description: 'Experienced CTO who advises a few hours per month',
      cost: '£500-£2,000/month or equity',
      equity: '0.1-0.5%',
      commitment: '2-4 hours/month',
      bestFor: 'Occasional guidance, introductions, board credibility',
      pros: ['Very affordable', 'Access to expertise', 'Credibility signal'],
      cons: ['Very limited time', 'No execution support', 'Arm\'s length relationship'],
      score: 5
    },
    {
      title: 'Full-Time CTO Hire',
      description: 'Permanent employee as Chief Technology Officer',
      cost: '£150,000-£220,000/year + benefits',
      equity: '1-4%',
      commitment: 'Full-time permanent',
      bestFor: 'Post-Series A companies with 15+ engineers',
      pros: ['Full dedication', 'Team integration', 'Long-term alignment'],
      cons: ['Expensive', '3-6 month search', 'High risk if wrong hire'],
      score: 7
    },
    {
      title: 'Freelance Senior Developer',
      description: 'Experienced contractor who can lead small projects',
      cost: '£400-£800/day',
      equity: 'None',
      commitment: 'Project or ongoing',
      bestFor: 'Execution with some technical guidance',
      pros: ['Hands-on coding', 'Flexible terms', 'Good value'],
      cons: ['Limited strategic thinking', 'May not scale', 'Variable quality'],
      score: 6
    },
    {
      title: 'No-Code/Low-Code',
      description: 'Build initial product without traditional development',
      cost: '£100-£500/month in tools',
      equity: 'None',
      commitment: 'Self-service',
      bestFor: 'Validating ideas before investing in development',
      pros: ['Very cheap', 'Fast to launch', 'No technical dependency'],
      cons: ['Limited functionality', 'May need rebuild later', 'Scalability limits'],
      score: 4
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
            Founder Guide
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Can't Find a Technical Co-founder?
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            You're not alone. Here are your alternatives—and how to choose the right one for your stage and situation.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-4">The Co-founder Myth</h2>
            <p className="text-slate-700 mb-4">
              You've heard it everywhere: "Every startup needs a technical co-founder." But here's the reality:
            </p>
            <ul className="space-y-2 text-slate-700 mb-4">
              <li>• Great technical co-founders are rare and in high demand</li>
              <li>• Finding the right match can take 12-18 months</li>
              <li>• A bad co-founder relationship is worse than none at all</li>
              <li>• Many successful companies started without technical co-founders</li>
            </ul>
            <p className="text-slate-700">
              <strong>The good news:</strong> There are several viable alternatives that can get you to market faster and with less risk than waiting for the perfect co-founder.
            </p>
          </div>
        </div>
      </section>

      {/* Alternatives Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-12 text-center">
            Your Options, Compared
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alternatives.map((alt, index) => (
              <div key={index} className={`rounded-2xl p-6 border-2 ${index === 0 ? 'border-primary-400 bg-primary-50' : 'border-slate-200 bg-white'}`}>
                {index === 0 && (
                  <span className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full mb-4">
                    Recommended
                  </span>
                )}
                <h3 className="text-xl font-bold text-slate-900 mb-2">{alt.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{alt.description}</p>

                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Cost:</span>
                    <span className="font-medium text-slate-900">{alt.cost}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Equity:</span>
                    <span className="font-medium text-slate-900">{alt.equity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Commitment:</span>
                    <span className="font-medium text-slate-900">{alt.commitment}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-600 mb-4">
                  <strong>Best for:</strong> {alt.bestFor}
                </p>

                <div className="pt-4 border-t border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-slate-500">Fit Score:</span>
                    <div className="flex-1 bg-slate-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${index === 0 ? 'bg-primary-500' : 'bg-slate-400'}`}
                        style={{ width: `${alt.score * 10}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-bold text-slate-700">{alt.score}/10</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decision Framework */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8 text-center">
            Decision Framework
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">If you need strategic guidance + investor credibility:</h3>
              <p className="text-slate-600">→ <strong>Fractional CTO</strong> is your best option. They provide leadership, attend investor meetings, and help build your team.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">If you know exactly what to build and just need it done:</h3>
              <p className="text-slate-600">→ <strong>Development Agency</strong> can execute your vision. Consider pairing with a fractional CTO to oversee quality.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">If you're just validating an idea:</h3>
              <p className="text-slate-600">→ <strong>No-Code tools</strong> let you test with real users before investing in development. Upgrade later when you have traction.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">If you have significant funding and a large team:</h3>
              <p className="text-slate-600">→ <strong>Full-time CTO hire</strong> makes sense when you need 40+ hours/week and have the budget to support it.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">If you want occasional expert input:</h3>
              <p className="text-slate-600">→ <strong>Technical Advisor</strong> provides credibility and occasional guidance, but won't be hands-on.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8 text-center">
            Companies That Succeeded Without Technical Co-founders
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <p className="text-4xl font-bold text-primary-600 mb-2">Airbnb</p>
              <p className="text-sm text-slate-600">Brian Chesky and Joe Gebbia were designers. They brought in Nathan Blecharczyk later.</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-primary-600 mb-2">Groupon</p>
              <p className="text-sm text-slate-600">Andrew Mason wasn't technical. The first version was a WordPress blog.</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-primary-600 mb-2">Alibaba</p>
              <p className="text-sm text-slate-600">Jack Ma was an English teacher. He hired developers to build the platform.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Move Forward Without Waiting?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            A fractional CTO can give you the technical leadership you need—starting next week, not next year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services/fractional-cto"
              className="inline-block bg-accent-500 text-primary-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              Learn About Fractional CTO
            </Link>
            <Link
              href="/cofounder"
              className="inline-block bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-all"
            >
              Explore Co-founder Partnerships
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
