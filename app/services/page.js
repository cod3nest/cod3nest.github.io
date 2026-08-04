import Link from 'next/link'
import Navigation from '../components/Navigation'
import ServiceCard from '../components/ServiceCard'
import Footer from '../components/Footer'
import JsonLd from '../components/JsonLd'
import { breadcrumbs, ORGANIZATION_ID, WEBSITE_ID } from '../../lib/schema'

export const metadata = {
  title: 'Fractional CTO & CFO Services for UK Startups',
  description: 'Two executive seats, one integrated partner. Fractional CTO and Fractional CFO services for UK startups, pre-seed to Series A. Eight services, two tracks.',
  openGraph: {
    title: 'Codenest Services — Fractional CTO & Fractional CFO',
    description: 'Technical and financial leadership for UK startups, pre-seed to Series A.',
    type: 'website',
    url: 'https://codenest.uk/services/',
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
    canonical: 'https://codenest.uk/services/',
  },
}

const tracks = [
  {
    name: 'Fractional CTO',
    href: '/services/fractional-cto/',
    accent: 'primary',
    description: 'Architecture decisions, engineering team building, and infrastructure that scales from day one.',
    items: [
      'Technical Strategy & Architecture',
      '0-to-1 Product Builds',
      'AI & Data Engineering',
      'DevOps & Platform Engineering',
    ],
  },
  {
    name: 'Fractional CFO',
    href: '/services/fractional-cfo/',
    accent: 'accent',
    description: 'Strategic finance, FP&A, and the financial discipline that makes your startup investable.',
    items: [
      'Financial Modeling & FP&A',
      'Business Strategy & Planning',
      'Fundraising & Investor Relations',
      'Due Diligence Preparation',
    ],
  },
]

const services =
[
    // Technical Services
    {
      title: "Fractional CTO",
      benefit: "Executive-level technical leadership at a fraction of the cost",
      description: "Make confident architecture decisions, build the right team, and become investor-ready. Strategic guidance for fintech, healthtech, and SaaS startups across the UK.",
      outcomes: ["Save 60-80% vs full-time CTO", "Investor-ready in weeks", "Scale your team confidently"],
      track: "technical"
    },
    {
      title: "Fractional CFO",
      benefit: "FP&A and strategic finance leadership",
      description: "Financial planning & analysis, business strategy, and investor-ready reporting. The financial discipline of a high-growth company — without the overhead.",
      outcomes: ["Financial modeling & forecasting", "Business strategy development", "Investor-ready reporting"],
      track: "business"
    },
    {
      title: "0-to-1 Product Builds",
      benefit: "Launch your MVP in weeks, not months",
      description: "Go from idea to production-ready product with a system built to scale. No rebuilding later, no technical debt from day one.",
      outcomes: ["8-12 week delivery", "Built to handle growth", "Full ownership handover"],
      track: "technical"
    },
    {
      title: "Financial Modeling",
      benefit: "Know your numbers before investors ask",
      description: "3-statement models, unit economics, and scenario planning. Financial models that stand up to due diligence scrutiny.",
      outcomes: ["3-statement models", "Unit economics analysis", "Scenario planning"],
      track: "business"
    },
    {
      title: "AI & Data Engineering",
      benefit: "Turn AI experiments into production revenue",
      description: "Move beyond prototypes. We build production-grade LLM applications, ML pipelines, and data infrastructure that actually scale.",
      outcomes: ["Production-ready AI", "Cost-optimized inference", "Scalable data pipelines"],
      track: "technical"
    },
    {
      title: "Fundraising Support",
      benefit: "Close your round with confidence",
      description: "Pitch deck financial sections, data room preparation, and investor Q&A coaching. We've helped startups raise from pre-seed to Series A.",
      outcomes: ["Data room ready", "Financial due diligence prep", "Valuation support"],
      track: "business"
    },
    {
      title: "DevOps & Platform Engineering",
      benefit: "Deploy daily with zero downtime",
      description: "Automated infrastructure, CI/CD pipelines, and GitOps workflows. Ship confidently and iterate fast from day one.",
      outcomes: ["Automated deployments", "Infrastructure as code", "Zero-downtime releases"],
      track: "technical"
    },
    {
      title: "Financial Controls & Governance",
      benefit: "Close the books faster, with numbers you can trust",
      description: "Month-end close discipline, purchasing and payroll controls, and CapEx governance. The financial plumbing that stops surprises reaching your board.",
      outcomes: ["Faster, cleaner month-end close", "Audit-ready controls", "CapEx and spend governance"],
      track: "business"
    }
  ]

const pageSchema = [
  breadcrumbs([{ name: 'Services', path: '/services/' }]),
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Codenest Services',
    description: 'Fractional CTO and Fractional CFO services for UK startups.',
    itemListElement: tracks.map((track, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: track.name,
      url: `https://codenest.uk${track.href}`,
    })),
  },
]

export default function ServicesPage() {

  return (
    <div className="min-h-screen bg-white">
      <JsonLd schema={pageSchema} />
      <Navigation />

      <main id="main-content">
        <section className="pt-40 pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.2em] text-accent-600 mb-4 font-medium">Integrated Partnership</p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">Fractional CTO &amp; CFO Services</h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Most startups need both CTO and CFO guidance. We cover both seats in one engagement, so the technical plan and the financial plan agree.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {tracks.map((track) => (
                <div
                  key={track.name}
                  className={`rounded-xl p-10 border transition-all card-lift ${
                    track.accent === 'accent'
                      ? 'bg-gradient-to-br from-accent-50 to-white border-accent-200 hover:border-accent-400 hover:shadow-gold'
                      : 'bg-gradient-to-br from-primary-50 to-white border-primary-200 hover:border-primary-400 hover:shadow-lg'
                  }`}
                >
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">{track.name}</h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">{track.description}</p>
                  <ul className="space-y-3 mb-8">
                    {track.items.map((item) => (
                      <li key={item} className="flex items-center text-slate-700">
                        <svg
                          className={`w-5 h-5 mr-3 ${track.accent === 'accent' ? 'text-accent-500' : 'text-primary-600'}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={track.href}
                    className={`inline-flex items-center font-semibold ${
                      track.accent === 'accent' ? 'text-accent-600 hover:text-accent-700' : 'text-primary-600 hover:text-primary-700'
                    }`}
                  >
                    Explore {track.name} Services
                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-20">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">Advisory &amp; Implementation</h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  Hands-on leadership from strategy through execution
                </p>
              </div>
              <h3 className="text-sm uppercase tracking-[0.2em] text-primary-700 font-semibold mb-6">Technical Track &mdash; Fractional CTO</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
                {services.filter(s => s.track === 'technical').map((service) => (
                  <ServiceCard key={service.title} service={service} />
                ))}
              </div>

              <h3 className="text-sm uppercase tracking-[0.2em] text-accent-700 font-semibold mb-6">Financial Track &mdash; Fractional CFO</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.filter(s => s.track === 'business').map((service) => (
                  <ServiceCard key={service.title} service={service} />
                ))}
              </div>
            </div>

            <div className="mt-16 text-center">
              <a
                href="/contact/"
                className="inline-block bg-accent-400 text-primary-900 px-8 py-4 rounded-lg text-base font-semibold hover:bg-accent-500 transition-all shadow-gold hover:shadow-gold-lg"
              >
                Request a Strategy Call
              </a>
              <p className="text-sm text-slate-500 mt-3">Free 30 minutes. No sales pitch.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
