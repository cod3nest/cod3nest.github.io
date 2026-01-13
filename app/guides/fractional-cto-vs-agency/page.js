import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Fractional CTO vs Development Agency: Which Should You Hire? | Codenest',
  description: 'Compare fractional CTO vs development agency for your startup. Understand when to hire each, cost differences, and how to get the best of both worlds.',
  keywords: ['fractional CTO vs agency', 'development agency vs CTO', 'outsource development vs CTO', 'software agency vs technical leadership', 'hire agency or CTO'],
  openGraph: {
    title: 'Fractional CTO vs Development Agency: Complete Guide',
    description: 'Which is right for your startup? Compare costs, benefits, and learn when to use each option.',
    type: 'article',
    url: 'https://codenest.uk/guides/fractional-cto-vs-agency',
  },
  alternates: {
    canonical: 'https://codenest.uk/guides/fractional-cto-vs-agency',
  },
}

export default function FractionalVsAgencyPage() {
  const comparisonData = [
    { factor: 'Primary Role', fractional: 'Strategic leadership & decisions', agency: 'Software development & delivery' },
    { factor: 'Accountability', fractional: 'Long-term technical success', agency: 'Delivering agreed scope' },
    { factor: 'Strategic Input', fractional: 'High—shapes direction', agency: 'Limited—executes your vision' },
    { factor: 'Knowledge Retention', fractional: 'Stays with your company', agency: 'Stays with the agency' },
    { factor: 'Typical Cost', fractional: '£4k-£15k/month ongoing', agency: '£50k-£200k+ per project' },
    { factor: 'Team Building', fractional: 'Helps hire your own team', agency: 'Uses their own developers' },
    { factor: 'Investor Meetings', fractional: 'Attends as your CTO', agency: 'Not typically involved' },
    { factor: 'Code Ownership', fractional: 'You own everything', agency: 'Check contract carefully' },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-accent-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-accent-100 text-accent-800 rounded-full text-sm font-medium mb-6">
            Comparison Guide
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Fractional CTO vs Development Agency
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Two different solutions for two different problems. Here's how to know which one—or both—your startup needs.
          </p>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-4">The Short Answer</h2>
            <p className="text-slate-700 mb-4">
              <strong>Development agencies</strong> build software. They take your requirements and deliver code.
            </p>
            <p className="text-slate-700 mb-4">
              <strong>Fractional CTOs</strong> provide technical leadership. They define what should be built, how, and why.
            </p>
            <p className="text-slate-700">
              <strong>The best setup?</strong> Many successful startups use both: a fractional CTO to make strategic decisions and oversee quality, with an agency handling development execution.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8 text-center">
            Key Differences
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="px-6 py-4 text-left font-semibold">Factor</th>
                  <th className="px-6 py-4 text-left font-semibold">Fractional CTO</th>
                  <th className="px-6 py-4 text-left font-semibold">Development Agency</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-6 py-4 font-medium text-slate-900 border-b border-slate-200">
                      {row.factor}
                    </td>
                    <td className="px-6 py-4 text-slate-600 border-b border-slate-200">
                      {row.fractional}
                    </td>
                    <td className="px-6 py-4 text-slate-600 border-b border-slate-200">
                      {row.agency}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* When to Choose Each */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8 text-center">
            When to Choose Each
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-primary-50 rounded-2xl p-8 border border-primary-200">
              <h3 className="text-xl font-bold text-primary-900 mb-4">Choose a Fractional CTO When:</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 font-bold">•</span>
                  You need help deciding <em>what</em> to build
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 font-bold">•</span>
                  You're preparing for investor due diligence
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 font-bold">•</span>
                  You want to build your own engineering team
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 font-bold">•</span>
                  You need someone in investor meetings
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 font-bold">•</span>
                  You're unsure if your current tech approach is right
                </li>
              </ul>
            </div>

            <div className="bg-accent-50 rounded-2xl p-8 border border-accent-200">
              <h3 className="text-xl font-bold text-accent-900 mb-4">Choose an Agency When:</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-accent-600 font-bold">•</span>
                  You know exactly what you want built
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-600 font-bold">•</span>
                  You need development capacity fast
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-600 font-bold">•</span>
                  You have a fixed budget and scope
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-600 font-bold">•</span>
                  You don't want to manage individual developers
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-600 font-bold">•</span>
                  The project has a clear end date
                </li>
              </ul>
            </div>
          </div>

          {/* Best of Both */}
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">The Best of Both Worlds</h3>
            <p className="mb-4 text-white/90">
              Many of our clients use a fractional CTO alongside an agency or contractors. Here's why this works:
            </p>
            <ul className="space-y-2 text-white/90">
              <li><strong>The fractional CTO:</strong> Defines architecture, sets standards, reviews work, attends investor meetings</li>
              <li><strong>The agency:</strong> Executes development, provides developer capacity, delivers features</li>
            </ul>
            <p className="mt-4 text-white/90">
              This ensures you get quality oversight without paying for a full-time CTO, while still having the development horsepower to ship quickly.
            </p>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8 text-center">
            Warning Signs You Chose Wrong
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-red-200">
              <h3 className="text-lg font-bold text-red-700 mb-4">You hired an agency but needed a CTO if:</h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• They built what you asked for, but it's not what you needed</li>
                <li>• Investors keep asking technical questions you can't answer</li>
                <li>• You're not sure if the code quality is good</li>
                <li>• The project keeps expanding but you don't know why</li>
                <li>• You can't evaluate if their estimates are reasonable</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-red-200">
              <h3 className="text-lg font-bold text-red-700 mb-4">You hired a fractional CTO but needed an agency if:</h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• You have great plans but nothing's getting built</li>
                <li>• Your roadmap is clear but you lack developers</li>
                <li>• You're spending CTO budget on execution work</li>
                <li>• You need a complete product, not just strategy</li>
                <li>• You have a fixed deadline that requires more hands</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Not Sure What You Need?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Book a free call. We'll help you figure out whether you need a fractional CTO, an agency, both, or neither.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-accent-500 text-primary-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-accent-600 transition-all"
          >
            Get Free Advice
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
