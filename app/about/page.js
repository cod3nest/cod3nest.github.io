import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Our Story',
  description: 'Meet Ankit Rana, founder of Codenest. 15+ years at Deloitte Digital, Elavon, and high-growth startups. Fractional CTO and CFO helping ambitious UK founders build and scale.',
  openGraph: {
    title: 'Our Story | Codenest',
    description: 'Meet Ankit Rana, founder of Codenest. 15+ years at Deloitte Digital, Elavon, and high-growth startups.',
  },
}

export default function AboutPage() {
  const milestones = [
    {
      year: "2011-2015",
      title: "Enterprise Foundations",
      description: "Built scalable systems at Deloitte Digital and Elavon (US Bancorp), working on payment processors and financial services platforms. Learned what 'enterprise-grade' really means — and what startups can borrow from it."
    },
    {
      year: "2015-2017",
      title: "Scaling Startups",
      description: "Led engineering teams from 5 to 50+ engineers across fintech and healthtech. Experienced the chaos of hypergrowth firsthand — the technical debt, the hiring mistakes, the architecture decisions that come back to haunt you."
    },
    {
      year: "2017-Present",
      title: "Codenest",
      description: "Founded Codenest to provide integrated technical and financial leadership for ambitious founders. Fractional CTO and CFO for startups across fintech, healthtech, proptech, and B2B SaaS — helping them build right and raise successfully."
    }
  ]

  const values = [
    {
      title: "Founder-First",
      description: "Your success is our success. We're not here to rack up billable hours — we're here to make you self-sufficient.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: "No Fluff",
      description: "We don't do PowerPoint consulting. Every recommendation comes with implementation. We build alongside you.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Long-Term Thinking",
      description: "We build systems that scale. No shortcuts that create technical debt. No financial models that fall apart under scrutiny.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: "Radical Honesty",
      description: "We'll tell you if your idea won't work. We'll push back on bad decisions. Honest guidance beats comfortable agreement.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    }
  ]

  const expertise = [
    { category: "Cloud & Infrastructure", items: ["AWS", "GCP", "Kubernetes", "Terraform", "GitOps"] },
    { category: "Engineering", items: ["Python", "Java", "Node.js", "React", "Microservices"] },
    { category: "Data & AI", items: ["ML Pipelines", "LLM Integration", "Data Engineering", "Analytics"] },
    { category: "Financial", items: ["Financial Modeling", "FP&A", "Unit Economics", "Fundraising"] }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-accent-500 mb-4 font-medium">Our Story</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Built by an Operator,<br />for Founders
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              I've been in your shoes. Now I help ambitious founders avoid the costly mistakes I've seen — and made.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Photo/Avatar Column */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <div className="w-48 h-48 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center text-white text-6xl font-serif shadow-xl mb-6">
                  A
                </div>
                <div className="text-center lg:text-left">
                  <h2 className="text-2xl font-bold text-slate-900 mb-1">Ankit Rana</h2>
                  <p className="text-accent-600 font-medium mb-4">Founder</p>

                  {/* Credentials */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
                    <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-700">AWS Certified</span>
                    <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-700">15+ Years</span>
                    <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-700">Series A Experience</span>
                  </div>

                  {/* Social Links */}
                  <a
                    href="https://www.linkedin.com/in/arana198"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Story Column */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">The Short Version</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  I spent 15+ years building and scaling technology platforms — from payment processors at Deloitte Digital and Elavon (US Bancorp) to startups going through hypergrowth across fintech, healthtech, and proptech. I've led engineering teams from 5 to 50+, navigated Series A due diligence, and seen firsthand what separates startups that scale from those that struggle.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Now I help founders get it right the first time.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Why I Started Codenest</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Too many startups fail not because of bad ideas, but because of avoidable mistakes: architecture that doesn't scale, financial models that fall apart under investor scrutiny, technical debt that slows everything down.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  I kept seeing the same patterns. Founders who needed senior guidance but couldn't justify a full-time CTO or CFO. Startups that hired dev shops and got code, but not strategy. Companies that raised money but couldn't answer basic questions about unit economics.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Codenest exists to fill that gap. We provide the technical and financial leadership that early-stage startups need — with Big 4 rigour and the empathy of someone who's been in the founder's seat.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">What I Believe</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-slate-900">Build it right the first time.</strong> Technical debt is a tax on every future decision. Start with solid foundations.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-slate-900">Know your numbers.</strong> Great products fail without financial discipline. Understand your unit economics before investors ask.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-slate-900">Hire for where you're going.</strong> The team that gets you to product-market fit isn't always the team that scales you to Series B.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-slate-900">Move fast, but don't break things.</strong> Speed matters, but not at the cost of quality. You can have both.</span>
                  </li>
                </ul>
              </div>

              {/* Co-founder Note */}
              <div className="mt-8 p-6 bg-gradient-to-r from-accent-50 to-amber-50 rounded-xl border border-accent-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 mb-1">Beyond Advisory</p>
                    <p className="text-sm text-slate-600">
                      In rare cases, for exceptional opportunities, I consider deeper partnerships — including technical co-founder roles. If you're building something truly ambitious and looking for a committed partner, not just an advisor, <a href="/#contact" className="text-accent-600 font-medium hover:text-accent-700 underline">let's talk</a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">The Journey</h2>
            <p className="text-slate-600">15+ years of building, breaking, and learning</p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0 w-28 text-right">
                  <span className="text-sm font-bold text-accent-600">{milestone.year}</span>
                </div>
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-accent-400 border-4 border-white shadow"></div>
                  {index < milestones.length - 1 && <div className="w-0.5 h-full bg-slate-200 mt-2"></div>}
                </div>
                <div className="pb-8">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{milestone.title}</h3>
                  <p className="text-slate-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">How We Work</h2>
            <p className="text-slate-600">The principles that guide every engagement</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:border-accent-300 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center text-accent-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">Technical & Financial Expertise</h2>
            <p className="text-slate-600">Deep experience across the full stack — technology and finance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((area, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4">{area.category}</h3>
                <ul className="space-y-2">
                  {area.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                      <svg className="w-4 h-4 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">Ready to Talk?</h2>
          <p className="text-xl text-primary-200 mb-8">
            Let's discuss how we can help you build something great.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center bg-accent-400 text-primary-900 px-8 py-4 rounded-lg font-semibold hover:bg-accent-500 transition-all shadow-gold hover:shadow-gold-lg btn-premium"
          >
            Schedule a Strategy Call
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
