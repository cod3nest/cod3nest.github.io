import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Link from 'next/link'
import JsonLd from '../components/JsonLd'
import { breadcrumbs, ORGANIZATION_ID, WEBSITE_ID } from '../../lib/schema'

export const metadata = {
  title: 'Meet Our Fractional CTO & CFO',
  description: 'Meet the two people behind Codenest: Ankit Rana, Fractional CTO with 15+ years in engineering leadership, and Michelle Rana FCCA, Fractional CFO.',
  openGraph: {
    title: 'About Codenest | Our Fractional CTO & CFO',
    description: 'Ankit Rana, Fractional CTO, and Michelle Rana FCCA, Fractional CFO — the two executives behind Codenest.',
    type: 'website',
    url: 'https://codenest.uk/about/',
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
    canonical: 'https://codenest.uk/about/',
  },
}

// Two principals, two Person entities. Ankit owns the technical track and
// Michelle the financial one — never model one person as holding both seats.
// Reference the root layout's ProfessionalService by @id rather than restating it:
// two differently-shaped Organization nodes for the same company invite Google to
// treat them as two companies.
const codenest = { '@id': 'https://codenest.uk/#organization' }

const peopleSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://codenest.uk/about/#ankit-rana',
    name: 'Ankit Rana',
    jobTitle: 'Fractional CTO',
    worksFor: codenest,
    // Pre-Codenest employers only. Deloitte Digital and Elavon were removed on
    // 5 Aug 2026: both post-date Aug 2017 and are client engagements delivered
    // through the firm, so alumniOf mislabelled them as employment (BRANDING §13.11).
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'University of Leicester' },
      { '@type': 'Organization', name: 'Rated People' },
      { '@type': 'Organization', name: 'Rightmove' },
      { '@type': 'Organization', name: 'Rungway' },
    ],
    knowsAbout: [
      'Fractional CTO services',
      'Startup engineering',
      'Agentic AI engineering',
      'LLM application development',
      'Cloud architecture',
      'Kubernetes',
      'DevOps',
      'Technical due diligence',
    ],
    sameAs: ['https://www.linkedin.com/in/arana198'],
    url: 'https://codenest.uk/about/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://codenest.uk/about/#michelle-rana',
    name: 'Michelle Rana',
    jobTitle: 'Fractional CFO',
    worksFor: codenest,
    alumniOf: [{ '@type': 'CollegeOrUniversity', name: 'University of Leicester' }],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Professional Certification',
      name: 'FCCA — Fellow, Association of Chartered Certified Accountants',
    },
    knowsAbout: [
      'Fractional CFO services',
      'Financial modelling and scenario planning',
      'Budgeting and rolling forecasts',
      'Financial controls and governance',
      'Board and investor reporting',
      'Fundraising and investor due diligence',
      'Margin and cost optimisation',
    ],
    sameAs: ['https://www.linkedin.com/in/michellerana1'],
    url: 'https://codenest.uk/about/',
  },
]

// Tailwind cannot resolve interpolated class names, so each track's palette is
// spelled out. Gold text stays at accent-700 or darker on light (BRANDING.md §8).
const ACCENT_STYLES = {
  primary: {
    avatar: 'from-primary-600 to-primary-700',
    role: 'text-primary-700',
    chip: 'bg-primary-50 text-primary-700',
    proof: 'bg-primary-50 text-primary-800 border-primary-200',
  },
  accent: {
    avatar: 'from-accent-500 to-accent-700',
    role: 'text-accent-700',
    chip: 'bg-accent-50 text-accent-700',
    proof: 'bg-accent-50 text-accent-800 border-accent-200',
  },
}

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const aboutBreadcrumbs = breadcrumbs([{ name: 'About', path: '/about/' }])

export default function AboutPage() {
  const principals = [
    {
      name: "Ankit Rana",
      role: "Fractional CTO",
      initial: "A",
      accent: "primary",
      linkedin: "https://www.linkedin.com/in/arana198",
      credentials: ["AWS Certified", "15+ Years Engineering", "Kubernetes & Cloud", "Agentic AI"],
      bio: "Fifteen years building and scaling technology platforms. Consumer-scale Java at Rated People and Rightmove, then leading engineering at Rungway. Since 2017, through Codenest: regulated delivery for the Ministry of Justice, Tesco Bank, HSBC and AstraZeneca, a near seven-year payments transformation at Opayo by Elavon, and now agentic AI platforms. Has led engineering teams from 5 to 50+, and sat on the receiving end of technical due diligence.",
      proof: "Scaled Rungway from 5 to 1,000+ concurrent users",
      // The Aug 2017 line is the firm's boundary: everything from the Ministry of
      // Justice onward is a Codenest engagement, everything before it is Ankit's own
      // track record. Corrected against the owner's CV on 5 Aug 2026 — the first two
      // blocks previously read "Enterprise Foundations" and "Scaling Startups" and
      // dated Deloitte Digital and Elavon to 2011-2015. Deloitte was Jul 2018 - Aug
      // 2019 and the only Elavon period is Aug 2019 - Jun 2026 (BRANDING §13.11).
      tracks: [
        { year: "2011-2016", title: "Foundations", description: "Java and platform engineering at the University of Leicester, Muddyboots, then Rated People (2013-2015) and Rightmove in 2016 — consumer-scale systems, and the habits that come from being on call for them." },
        { year: "2016-2017", title: "Leading Engineering", description: "Lead Software Engineer at Rungway with the scope of a CTO: rebuilt the platform, took it from 5 to 1,000+ concurrent users, and ran a zero-downtime database migration. The last engagement before Codenest." },
        { year: "2017-2019", title: "Codenest: Regulated Delivery", description: "The firm's first engagements: the Ministry of Justice, then Tesco Bank, then Deloitte Digital delivering for HSBC and AstraZeneca. Government, banking and pharma — where the compliance bar is set before the first line of code." },
        { year: "2019-2026", title: "Codenest: Payments at Scale", description: "A near seven-year platform transformation at Opayo by Elavon — AWS EKS migration, GitOps and Infrastructure as Code, moving a payments monolith to microservices without dropping a transaction — alongside a 0→1 identity platform for LDN Labs (Hitachi)." },
        { year: "2025-present", title: "Codenest: Agentic AI Platforms", description: "0→1 backend and AI infrastructure for Frekkel, then the Regeno engagement: a company brain over the client's own records, and an AI factory that drives a ticket to a merged pull request unattended, with bounded review loops and a ledger of every decision." },
      ],
    },
    {
      name: "Michelle Rana",
      role: "Fractional CFO",
      initial: "M",
      accent: "accent",
      linkedin: "https://www.linkedin.com/in/michellerana1",
      credentials: ["FCCA", "BSc Mathematics", "£165m P&L"],
      bio: "Chartered accountant (FCCA) and strategic finance leader who took a multi-site business from 6 to 27 locations and £35m to £165m revenue while improving EBITDA margin by 4%. Has built and led a 20+ person finance function, owned Board and investor reporting, held a company's cash together through COVID-19, and supported founders through fundraising and investor due diligence.",
      proof: "£35m → £165m revenue, +4% EBITDA margin",
      tracks: [
        { year: "2012-2014", title: "Commercial Foundations", description: "Pricing and commercial analysis at Ryder and Select Service Partners — negotiating contract hire deals over £1m and partnering with senior leaders across a £67m revenue budget." },
        { year: "2014-2017", title: "Multi-Channel Finance", description: "Omni-channel finance manager at Oasis & Warehouse, owning reporting and budgeting for franchise, wholesale, licensing and distribution, and delivering Board packs to CEO and CFO." },
        { year: "2017-2026", title: "Scale-Up Finance", description: "Head of Strategic Finance at Dishoom through the 6-to-27-site expansion: five-year strategic model, rolling forecasts accurate to ±3%, CapEx governance, £6m in procurement and contract improvements, and month-end close cut from 14 days to 8." },
      ],
    },
  ]

  const values = [
    {
      title: "Founder-First",
      description: "We're here to make you self-sufficient. Billable hours are not the measure.",
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

  // Two technical categories, two financial — the grid itself has to read 50/50.
  const expertise = [
    { category: "Cloud & Infrastructure", items: ["AWS", "GCP", "Kubernetes", "Terraform", "GitOps"] },
    { category: "Engineering & AI", items: ["Python", "Java", "Node.js", "Microservices", "Agentic AI & LLM Systems"] },
    { category: "Planning & Reporting", items: ["Financial Modelling", "Rolling Forecasts", "Scenario Planning", "Board & Investor Reporting", "Fundraising Support"] },
    { category: "Controls & Commercial", items: ["Financial Controls", "Margin Optimisation", "Procurement & Cost", "CapEx Governance", "Cash Management"] }
  ]

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(peopleSchema) }}
      />
      <JsonLd schema={aboutBreadcrumbs} />
      <Navigation />

      <main id="main-content">

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-accent-700 mb-4 font-medium">Our Story</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Built by Operators,<br />for Founders
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Codenest is two executives, not one generalist. A CTO who has scaled the systems, and a CFO who has scaled the numbers.
            </p>
          </div>
        </div>
      </section>

      {/* Principals Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {principals.map((person) => {
              const style = ACCENT_STYLES[person.accent]
              return (
                <div key={person.name} className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                  <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${style.avatar} flex items-center justify-center text-white text-4xl font-serif shadow-lg mb-6`}>
                    {person.initial}
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-1">{person.name}</h2>
                  <p className={`${style.role} font-semibold mb-5`}>{person.role}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {person.credentials.map((credential) => (
                      <span key={credential} className={`px-3 py-1 ${style.chip} rounded-full text-xs font-medium`}>
                        {credential}
                      </span>
                    ))}
                  </div>

                  <p className="text-slate-600 leading-relaxed mb-5">{person.bio}</p>

                  <p className={`text-sm font-semibold border rounded-lg px-4 py-3 mb-6 ${style.proof}`}>
                    {person.proof}
                  </p>

                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
                  >
                    <LinkedInIcon />
                    {person.name.split(' ')[0]} on LinkedIn
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Why We Started Codenest</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Too many startups fail not because of bad ideas, but because of avoidable mistakes: architecture that doesn't scale, financial models that fall apart under scrutiny, technical debt that slows everything down.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We kept seeing the same patterns. Founders who needed senior guidance but couldn't justify a full-time CTO or CFO. Startups that hired dev shops and got code, but not strategy. Companies that grew revenue but couldn't answer basic questions about their unit economics.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Codenest exists to fill that gap, and to fill it properly. You get an engineer who has actually run the platform and an accountant who has actually owned the P&amp;L, rather than one generalist doing a passable impression of both.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">What We Believe</h3>
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
                    <svg className="w-5 h-5 text-accent-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 mb-1">Beyond Advisory</p>
                    <p className="text-sm text-slate-600">
                      In rare cases, for exceptional opportunities, Ankit considers deeper partnerships, including technical co-founder roles. If you're building something truly ambitious and looking for a committed partner, not just an advisor, <a href="/contact/" className="text-accent-700 font-medium hover:text-accent-800 underline">let's talk</a>.
                    </p>
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
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">Two Careers, One Practice</h2>
            <p className="text-slate-600">Where the technical and financial track records were built</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {principals.map((person) => {
              const style = ACCENT_STYLES[person.accent]
              return (
                <div key={person.name}>
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-slate-900">{person.name}</h3>
                    <p className={`${style.role} text-sm font-semibold`}>{person.role}</p>
                  </div>
                  <div>
                    {person.tracks.map((milestone, index) => (
                      <div key={milestone.year} className="flex gap-4">
                        <div className="flex-shrink-0 w-24 text-right">
                          <span className="text-sm font-bold text-accent-700">{milestone.year}</span>
                        </div>
                        <div className="flex-shrink-0 flex flex-col items-center">
                          <div className="w-3.5 h-3.5 rounded-full bg-accent-400 border-4 border-white shadow"></div>
                          {index < person.tracks.length - 1 && <div className="w-0.5 h-full bg-slate-200 mt-2"></div>}
                        </div>
                        <div className="pb-8">
                          <h4 className="font-bold text-slate-900 mb-1">{milestone.title}</h4>
                          <p className="text-sm text-slate-600">{milestone.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
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
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center text-accent-700 mb-4">
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
            <p className="text-slate-600">Deep experience across the full stack: technology and finance</p>
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
            href="/contact/"
            className="inline-flex items-center bg-accent-400 text-primary-900 px-8 py-4 rounded-lg font-semibold hover:bg-accent-500 transition-all shadow-gold hover:shadow-gold-lg"
          >
            Request a Strategy Call
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      </main>

      <Footer />
    </div>
  )
}
