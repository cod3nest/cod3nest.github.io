import Link from 'next/link'
import Navigation from '../components/Navigation'
import ServiceCard from '../components/ServiceCard'
import Footer from '../components/Footer'
import JsonLd from '../components/JsonLd'
import { breadcrumbs, ORGANIZATION_ID, WEBSITE_ID } from '../../lib/schema'

// This page used to restate the homepage's two-track section almost verbatim —
// same descriptions, same eight bullets — and competed with it for the same
// queries. It now answers the question the homepage does not: which seat do I
// need? The capability grid below stays, because that is genuinely only here.
export const metadata = {
  title: 'Fractional CTO or CFO: Which Does Your Startup Need?',
  description: 'Which executive seat your startup needs now. The signals that point to a Fractional CTO, the signals that point to a Fractional CFO, and what each engagement covers. Either is engageable on its own.',
  openGraph: {
    title: 'Fractional CTO or Fractional CFO: Which Does Your Startup Need?',
    description: 'The signals that point to each seat, and what each engagement covers. UK startups, pre-seed to Series A.',
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

// Deliberately not the homepage's bullet lists. Those four-item lists are
// repeated verbatim in the capability grid further down this page; here the
// cards carry what the seat owns and who leads it, and route onward.
const tracks = [
  {
    name: 'Fractional CTO',
    href: '/services/fractional-cto/',
    accent: 'primary',
    principal: 'Led by Ankit Rana',
    owns: 'The technical plan, and the team that has to deliver it.',
    bestFor: 'Founders carrying technical risk they cannot evaluate on their own.',
  },
  {
    name: 'Fractional CFO',
    href: '/services/fractional-cfo/',
    accent: 'accent',
    principal: 'Led by Michelle Rana FCCA',
    owns: 'The financial plan, and the numbers an investor will test.',
    bestFor: 'Founders whose next decision has a cash consequence they cannot model.',
  },
]

// The decision aid. Symptoms a founder would recognise in their own week, rather
// than a list of capabilities they would have to translate first.
const signals = [
  {
    heading: 'Signs you need the Fractional CTO',
    accent: 'primary',
    items: [
      'You are making architecture decisions you have no way to evaluate',
      'The roadmap slips and you cannot tell whether the estimate or the execution was wrong',
      'You are about to hire engineers and have nobody to interview them',
      'Technical due diligence is coming and nobody owns the answers',
      'Your build is outsourced and you have no independent read on its quality',
      'Infrastructure cost is climbing faster than usage',
    ],
  },
  {
    heading: 'Signs you need the Fractional CFO',
    accent: 'accent',
    items: [
      'You cannot state your runway without rebuilding a spreadsheet first',
      'An investor asked for a model and you are starting from a blank page',
      'You price on instinct and margin is drifting',
      'Month-end takes two weeks and the numbers still get argued about',
      'A raise is six to nine months out and there is no data room',
      'The board pack gets assembled the night before',
    ],
  },
  {
    heading: 'Signs you need both',
    accent: 'dark',
    items: [
      'Your hiring plan and your engineering roadmap are two documents that disagree',
      'You are raising on a technical story the financial model does not support',
      'Build-versus-buy and runway keep arriving as the same question',
      'You are at 0-to-1, where every technical decision has an immediate cash consequence',
    ],
  },
]

const SIGNAL_STYLES = {
  primary: {
    card: 'bg-primary-50 border-primary-200',
    heading: 'text-slate-900',
    icon: 'text-primary-600',
    text: 'text-slate-700',
  },
  accent: {
    card: 'bg-accent-50 border-accent-200',
    heading: 'text-slate-900',
    icon: 'text-accent-700',
    text: 'text-slate-700',
  },
  dark: {
    card: 'bg-primary-800 border-primary-800',
    heading: 'text-white',
    icon: 'text-accent-300',
    text: 'text-slate-300',
  },
}

// Capabilities delivered inside a seat — not services you buy separately, and not
// pages. They render as static tiles (see ServiceCard). The two seats themselves are
// deliberately absent: they are the `tracks` cards at the top of this page, and
// repeating them here listed "Fractional CTO" as an item within the Fractional CTO
// track — the seat appearing three times on one page.
const services =
[
    // Technical Services
    {
      title: "0-to-1 Product Builds",
      benefit: "Launch your MVP in weeks, not months",
      description: "Go from idea to production-ready product with a system built to scale. No rebuilding later, no technical debt from day one.",
      outcomes: ["8-12 week delivery", "Built to handle growth", "Full ownership handover"],
      track: "technical"
    },
    {
      title: "Financial Modelling",
      benefit: "Know your numbers before investors ask",
      description: "3-statement models, unit economics, and scenario planning. Financial models that stand up to due diligence scrutiny.",
      outcomes: ["3-statement models", "Unit economics analysis", "Scenario planning"],
      track: "business"
    },
    {
      title: "Agentic AI Engineering",
      benefit: "Get agents past the demo and into production",
      description: "A knowledge layer over what your business already knows, and the platform that ships agents against it: shared scaffolding, evaluation, guardrails and observability.",
      outcomes: ["Company brain over internal knowledge", "Evaluation and guardrails before scale", "Cost and latency under control"],
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
    description: 'The two executive seats Codenest offers UK startups, each engageable on its own.',
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
        <section className="pt-28 md:pt-40 pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.2em] text-accent-700 mb-4 font-medium">Choosing a seat</p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Fractional CTO or Fractional CFO?
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Which seat your startup needs now, what each one owns, and what an engagement
                covers. Either is engageable on its own; taking both is an option rather than a
                condition.
              </p>
            </div>

            {/* The decision aid this page exists for. Three panels rather than the
                two-card grid the homepage already runs (BRANDING.md §5). */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
              {signals.map((group) => {
                const style = SIGNAL_STYLES[group.accent]
                return (
                  <div key={group.heading} className={`rounded-xl border p-8 ${style.card}`}>
                    <h2 className={`text-lg font-bold mb-5 ${style.heading}`}>{group.heading}</h2>
                    <ul className="space-y-3">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <svg
                            className={`w-5 h-5 mt-0.5 flex-shrink-0 ${style.icon}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className={`text-sm leading-relaxed ${style.text}`}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>

            {/* The two approved declines, worded as on the homepage. Nothing else
                goes in here without owner sign-off (BRANDING.md §13.17). */}
            <div className="max-w-3xl mx-auto mb-20 border-l-4 border-slate-300 pl-6">
              <h2 className="text-lg font-bold text-slate-900 mb-3">When neither seat is the answer</h2>
              <p className="text-slate-600 leading-relaxed">
                If technology is your moat, a novel algorithm or custom hardware needs someone in
                the building full time with their name on it. And if you need someone 40+ hours a
                week, you are describing a permanent hire, where paying fractional rates is the
                expensive route. We would rather say that on the first call than in the third month.
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
                  <h2 className="text-2xl font-bold text-slate-900 mb-1">{track.name}</h2>
                  <p className={`text-sm font-semibold mb-5 ${track.accent === 'accent' ? 'text-accent-700' : 'text-primary-700'}`}>
                    {track.principal}
                  </p>
                  <dl className="space-y-4 mb-8">
                    <div>
                      <dt className="text-xs uppercase tracking-[0.15em] text-slate-600 font-semibold mb-1">Owns</dt>
                      <dd className="text-slate-700 leading-relaxed">{track.owns}</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-[0.15em] text-slate-600 font-semibold mb-1">Best for</dt>
                      <dd className="text-slate-700 leading-relaxed">{track.bestFor}</dd>
                    </div>
                  </dl>
                  <Link
                    href={track.href}
                    className={`inline-flex items-center font-semibold ${
                      track.accent === 'accent' ? 'text-accent-700 hover:text-accent-800' : 'text-primary-600 hover:text-primary-700'
                    }`}
                  >
                    Explore {track.name} Services
                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-20">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Each Seat Covers</h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  Hands-on leadership from strategy through execution. These are the capabilities
                  delivered inside each engagement, not separate retainers.
                </p>
              </div>
              <h3 className="text-sm uppercase tracking-[0.2em] text-primary-700 font-semibold mb-6">Technical Track &mdash; Fractional CTO</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
                {services.filter(s => s.track === 'technical').map((service) => (
                  <ServiceCard key={service.title} service={service} />
                ))}
              </div>

              <h3 className="text-sm uppercase tracking-[0.2em] text-accent-700 font-semibold mb-6">Financial Track &mdash; Fractional CFO</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
