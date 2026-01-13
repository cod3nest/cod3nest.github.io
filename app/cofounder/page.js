import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Technical Co-founder for UK Startups | Find Your Tech Partner | Codenest',
  description: 'Looking for a technical co-founder in London or the UK? Experienced CTO open to equity partnerships with exceptional founders. 15+ years building scalable platforms across fintech, healthtech, and B2B SaaS.',
  keywords: [
    'technical cofounder',
    'technical co-founder',
    'tech cofounder uk',
    'technical cofounder london',
    'find technical cofounder',
    'startup cofounder search',
    'cto cofounder',
    'technical partner startup',
    'equity partner tech',
    'cofounder for startup',
    'technical cofounder for hire',
    'find cto cofounder',
    'startup technical partner uk',
    'tech partner for startup',
    'cofounder matching uk'
  ],
  openGraph: {
    title: 'Technical Co-founder for UK Startups | Codenest',
    description: 'Experienced CTO open to equity partnerships with exceptional founders. 15+ years in fintech, healthtech, and B2B SaaS.',
    type: 'website',
    url: 'https://codenest.uk/cofounder',
    siteName: 'Codenest',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technical Co-founder for UK Startups',
    description: 'Experienced CTO open to equity partnerships with exceptional founders.',
  },
  alternates: {
    canonical: 'https://codenest.uk/cofounder',
  },
}

export default function CofounderPage() {
  const idealFit = [
    {
      title: 'Strong Founder-Market Fit',
      description: "You deeply understand the problem you're solving. You've lived it, researched it, or have unique insight others don't.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: 'Ambitious Scale',
      description: "You're not building a lifestyle business. You have a clear vision for how this becomes a significant company.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: 'Values Alignment',
      description: "You believe in building things right. You value transparency, long-term thinking, and doing right by users and stakeholders.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: 'Complementary Skills',
      description: "You bring domain expertise, business acumen, sales ability, or industry connections. We don't need two technical people.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ]

  const whatIBring = [
    '15+ years building scalable platforms (Deloitte Digital, Elavon, startups)',
    'Full-stack technical leadership (architecture, engineering, DevOps)',
    'Financial modeling and investor-readiness expertise',
    'Experience scaling teams from 5 to 50+ engineers',
    'Series A due diligence and fundraising support',
    'AWS, Kubernetes, microservices, AI/ML integration'
  ]

  const industries = [
    { name: 'Fintech', examples: 'Payments, lending, wealth management, crypto infrastructure' },
    { name: 'Healthtech', examples: 'Digital health, clinical tools, health data platforms' },
    { name: 'B2B SaaS', examples: 'Enterprise software, developer tools, workflow automation' },
    { name: 'Proptech', examples: 'Property management, real estate tech, construction tech' }
  ]

  // Schema.org structured data for co-founder page
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ankit Rana',
    jobTitle: 'Technical Co-founder & CTO',
    description: 'Experienced technical leader open to co-founder partnerships with exceptional UK startup founders. 15+ years in fintech, healthtech, and B2B SaaS.',
    url: 'https://codenest.uk/cofounder',
    sameAs: [
      'https://www.linkedin.com/in/arana198',
      'https://codenest.uk'
    ],
    knowsAbout: [
      'Technical Co-founder',
      'Startup CTO',
      'Software Architecture',
      'Fintech',
      'Healthtech',
      'B2B SaaS',
      'Fundraising',
      'Technical Due Diligence'
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Codenest',
      url: 'https://codenest.uk'
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-accent-400 mb-6 font-medium">
              Technical Co-founder
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Looking for a Technical<br />Co-founder in the UK?
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              I'm selectively open to co-founding the right company. If you're an exceptional founder with a compelling vision, let's explore whether we're a fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#apply"
                className="bg-accent-400 text-primary-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-accent-500 transition-all shadow-gold hover:shadow-gold-lg"
              >
                Start the Conversation
              </a>
              <Link
                href="/about"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all"
              >
                Learn About Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Not for Everyone Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-200">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              This Isn't for Everyone
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              I take on <strong className="text-slate-900">at most one co-founder opportunity per year</strong>. Most of my work is fractional CTO consulting — time-bound, cash-based engagements that help founders build and scale without giving up equity.
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              But occasionally, I meet a founder building something I can't stop thinking about. Something where I want to be all-in, not just advisory.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              If you're looking for a technical co-founder who brings enterprise experience to startup speed, who can build the architecture and lead the team from day one to Series A and beyond — keep reading.
            </p>
          </div>
        </div>
      </section>

      {/* What I'm Looking For */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What I'm Looking For
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The criteria that make a co-founder opportunity compelling
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {idealFit.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-primary-300 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-5">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Bring */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                What I Bring as a Technical Co-founder
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                15+ years of building platforms that scale, leading teams through hypergrowth, and helping startups raise successfully.
              </p>
              <ul className="space-y-4">
                {whatIBring.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Industries I'm Most Interested In</h3>
              <div className="space-y-4">
                {industries.map((industry, index) => (
                  <div key={index} className="pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                    <p className="font-semibold text-slate-900">{industry.name}</p>
                    <p className="text-sm text-slate-500">{industry.examples}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              How This Usually Works
            </h2>
            <p className="text-lg text-slate-300">
              Co-founder relationships are too important to rush
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-500 text-primary-900 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Initial Conversation</h3>
              <p className="text-slate-400">
                30-minute call to understand your vision, the problem you're solving, and why you're looking for a technical co-founder.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-500 text-primary-900 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Trial Period</h3>
              <p className="text-slate-400">
                Most partnerships start with a paid advisory engagement (1-3 months). This lets us test working chemistry before committing.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-500 text-primary-900 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Partnership Decision</h3>
              <p className="text-slate-400">
                If we both feel it's right, we formalize the co-founder relationship with clear equity terms, roles, and expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section id="apply" className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Think We Might Be a Fit?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Tell me about what you're building. I read every message personally.
          </p>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 text-left">
            <p className="text-slate-600 mb-6">
              When you reach out, it helps to include:
            </p>
            <ul className="space-y-3 text-slate-600 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-accent-100 rounded-full flex items-center justify-center text-accent-600 text-sm font-bold flex-shrink-0">1</span>
                <span>The problem you're solving and why it matters to you</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-accent-100 rounded-full flex items-center justify-center text-accent-600 text-sm font-bold flex-shrink-0">2</span>
                <span>Your background and what you bring to the table</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-accent-100 rounded-full flex items-center justify-center text-accent-600 text-sm font-bold flex-shrink-0">3</span>
                <span>Why you're looking for a technical co-founder specifically</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-accent-100 rounded-full flex items-center justify-center text-accent-600 text-sm font-bold flex-shrink-0">4</span>
                <span>Where you are in the journey (idea, MVP, revenue, etc.)</span>
              </li>
            </ul>

            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 w-full bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition-all"
            >
              Start the Conversation
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <p className="text-sm text-slate-500 mt-6">
            Not ready for co-founder? <Link href="/services/fractional-cto" className="text-primary-600 hover:text-primary-700 font-medium">Fractional CTO services</Link> might be a better fit.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
