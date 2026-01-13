import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import CopyButton from '../components/CopyButton'

export const metadata = {
  title: 'Refer a UK Startup, Earn Up to £2,000 | Codenest Partner Program',
  description: 'Refer London and UK startups needing fractional CTO or CFO support. Earn up to £2,000 per successful engagement. Simple referral program for VCs, accelerators, and founders.',
  keywords: ['startup referral program UK', 'refer a startup', 'fractional CTO referral', 'VC referral fees', 'startup partner program London'],
  openGraph: {
    title: 'Codenest Referral Program – Earn Up to £2,000',
    description: 'Know a UK founder who needs a fractional CTO or CFO? Refer them to Codenest and earn up to £2,000 per engagement.',
    type: 'website',
    url: 'https://codenest.uk/refer',
  },
  alternates: {
    canonical: 'https://codenest.uk/refer',
  },
}

export default function ReferralPage() {
  const referralTiers = [
    {
      title: 'Developer Referral',
      reward: '10% of first project',
      cap: 'Up to £2,000',
      description: 'For engineers who refer startups needing technical leadership',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: 'primary'
    },
    {
      title: 'Founder Referral',
      reward: '£500 flat fee',
      cap: 'Or 5% off your next project',
      description: 'For founders who introduce us to other founders',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: 'accent'
    },
    {
      title: 'VC / Accelerator',
      reward: '15% of first project',
      cap: 'No cap',
      description: 'For investors and programs who refer portfolio companies',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      color: 'emerald'
    }
  ]

  const idealClients = [
    {
      title: 'Non-technical founders',
      description: 'Building their first product and need technical leadership'
    },
    {
      title: 'Startups preparing to fundraise',
      description: 'Need investor-ready financial models or technical due diligence prep'
    },
    {
      title: 'Growing teams',
      description: 'Have developers but lack senior architecture guidance'
    },
    {
      title: 'Fintech, healthtech, B2B SaaS',
      description: 'Our core expertise areas'
    },
    {
      title: 'UK-based',
      description: 'Pre-seed to Series A stage'
    }
  ]

  const howItWorks = [
    {
      step: '1',
      title: 'Make an Introduction',
      description: 'Email intro, LinkedIn connection, or use our referral form'
    },
    {
      step: '2',
      title: 'We Take It From There',
      description: 'We reach out, assess fit, and keep you updated on progress'
    },
    {
      step: '3',
      title: 'Get Paid',
      description: 'Once the engagement starts, we send your referral fee within 30 days'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-accent-400 mb-6 font-medium">
            Referral Program
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Know a Founder Who<br />Needs Technical Help?
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Earn up to £2,000 for every successful introduction. Help founders get the leadership they need while getting rewarded for your network.
          </p>
          <a
            href="#refer-form"
            className="inline-block bg-accent-400 text-primary-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-500 transition-all shadow-gold hover:shadow-gold-lg"
          >
            Make a Referral
          </a>
        </div>
      </section>

      {/* Referral Tiers */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Referral Rewards
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Different reward structures based on your relationship with the referral
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {referralTiers.map((tier, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 border-2 transition-all hover:shadow-lg ${
                  tier.color === 'accent'
                    ? 'border-accent-400 bg-gradient-to-br from-accent-50 to-white'
                    : tier.color === 'emerald'
                    ? 'border-emerald-400 bg-gradient-to-br from-emerald-50 to-white'
                    : 'border-primary-400 bg-gradient-to-br from-primary-50 to-white'
                }`}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  tier.color === 'accent'
                    ? 'bg-accent-100 text-accent-600'
                    : tier.color === 'emerald'
                    ? 'bg-emerald-100 text-emerald-600'
                    : 'bg-primary-100 text-primary-600'
                }`}>
                  {tier.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{tier.title}</h3>
                <div className={`text-3xl font-bold mb-1 ${
                  tier.color === 'accent'
                    ? 'text-accent-600'
                    : tier.color === 'emerald'
                    ? 'text-emerald-600'
                    : 'text-primary-600'
                }`}>
                  {tier.reward}
                </div>
                <p className="text-sm text-slate-500 mb-4">{tier.cap}</p>
                <p className="text-slate-600">{tier.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who's a Good Fit */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Who's a Good Fit?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                We work best with ambitious founders who need executive-level technical or financial guidance but aren't ready for full-time hires.
              </p>
              <ul className="space-y-4">
                {idealClients.map((client, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-semibold text-slate-900">{client.title}</span>
                      <span className="text-slate-600"> — {client.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6">What We Offer</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-700">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  Fractional CTO services
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  Fractional CFO / FP&A services
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  0-to-1 MVP development
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  Financial modeling & fundraising support
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  Technical due diligence prep
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  DevOps & platform engineering
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-slate-600">
              Simple process, quick payouts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-accent-200 via-accent-400 to-accent-200"></div>

            {howItWorks.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="w-16 h-16 bg-accent-500 text-primary-900 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 relative z-10 shadow-gold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Form */}
      <section id="refer-form" className="py-20 bg-slate-900 text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Make a Referral
            </h2>
            <p className="text-lg text-slate-300">
              Fill in the details below, or simply email us at{' '}
              <a href="mailto:hello@codenest.uk" className="text-accent-400 hover:text-accent-300">
                hello@codenest.uk
              </a>
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="referrer_name"
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  placeholder="Jane Smith"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="referrer_email"
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  placeholder="jane@company.com"
                />
              </div>
            </div>

            <div className="border-t border-slate-700 pt-6">
              <p className="text-sm text-slate-400 mb-4">Founder you're referring:</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Founder's Name
                </label>
                <input
                  type="text"
                  name="founder_name"
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  placeholder="Alex Johnson"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Founder's Email
                </label>
                <input
                  type="email"
                  name="founder_email"
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  placeholder="alex@startup.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Company Name
              </label>
              <input
                type="text"
                name="company_name"
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                placeholder="Startup Ltd"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                What do they need help with?
              </label>
              <textarea
                name="context"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:ring-2 focus:ring-accent-500 focus:border-transparent resize-none"
                placeholder="e.g., They're building a fintech app, need help with architecture decisions and preparing for their seed round..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-accent-400 text-primary-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-500 transition-all shadow-gold hover:shadow-gold-lg"
            >
              Submit Referral
            </button>

            <p className="text-xs text-slate-500 text-center">
              We'll reach out to them within 48 hours and keep you updated on the progress.
            </p>
          </form>
        </div>
      </section>

      {/* Intro Email Template */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Prefer to Make an Email Intro?
            </h2>
            <p className="text-lg text-slate-600">
              Copy this template and CC us at hello@codenest.uk
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <div className="font-mono text-sm text-slate-700 space-y-4">
              <p><strong>Subject:</strong> Intro: [Founder Name] {'<>'} Ankit at Codenest</p>
              <hr className="border-slate-200" />
              <p>Hi [Founder Name],</p>
              <p>
                I wanted to connect you with Ankit from Codenest. He helps startups with fractional CTO/CFO support — technical architecture, financial modeling, fundraising prep, that kind of thing.
              </p>
              <p>
                Given what you mentioned about [their specific challenge], I thought it might be worth a conversation.
              </p>
              <p>
                Ankit — [Founder Name] is building [brief description]. They're at [stage] and looking for [what they need].
              </p>
              <p>
                I'll leave you both to connect.
              </p>
              <p>[Your name]</p>
            </div>

            <CopyButton text={`Subject: Intro: [Founder Name] <> Ankit at Codenest

Hi [Founder Name],

I wanted to connect you with Ankit from Codenest. He helps startups with fractional CTO/CFO support — technical architecture, financial modeling, fundraising prep, that kind of thing.

Given what you mentioned about [their specific challenge], I thought it might be worth a conversation.

Ankit — [Founder Name] is building [brief description]. They're at [stage] and looking for [what they need].

I'll leave you both to connect.

[Your name]`} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <details className="bg-white rounded-xl border border-slate-200 overflow-hidden group">
              <summary className="font-semibold text-lg text-slate-900 cursor-pointer p-6 hover:bg-slate-50 transition-colors flex justify-between items-center">
                When do I get paid?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-slate-600">
                Referral fees are paid within 30 days of the engagement starting (first invoice paid). We'll keep you updated on progress throughout.
              </div>
            </details>

            <details className="bg-white rounded-xl border border-slate-200 overflow-hidden group">
              <summary className="font-semibold text-lg text-slate-900 cursor-pointer p-6 hover:bg-slate-50 transition-colors flex justify-between items-center">
                What if they don't become a client?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-slate-600">
                No worries — there's no obligation. We only pay out on successful engagements, but we appreciate every introduction and will let you know the outcome either way.
              </div>
            </details>

            <details className="bg-white rounded-xl border border-slate-200 overflow-hidden group">
              <summary className="font-semibold text-lg text-slate-900 cursor-pointer p-6 hover:bg-slate-50 transition-colors flex justify-between items-center">
                Can I refer multiple founders?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-slate-600">
                Absolutely. There's no limit to how many referrals you can make. Each successful referral earns its own fee.
              </div>
            </details>

            <details className="bg-white rounded-xl border border-slate-200 overflow-hidden group">
              <summary className="font-semibold text-lg text-slate-900 cursor-pointer p-6 hover:bg-slate-50 transition-colors flex justify-between items-center">
                Do you work with startups outside the UK?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-slate-600">
                We primarily work with UK-based startups, but we're open to EU companies if there's a strong fit. Feel free to make the introduction and we'll assess.
              </div>
            </details>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
