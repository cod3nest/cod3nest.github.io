import Link from 'next/link'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import JsonLd from '../components/JsonLd'
import { breadcrumbs, ORGANIZATION_ID, WEBSITE_ID } from '../../lib/schema'

export const metadata = {
  title: 'Fractional CTO & CFO Guides for UK Founders',
  description: 'Free in-depth guides for UK startup founders: fractional CTO costs and comparisons, technical co-founder alternatives, and the startup runway calculator.',
  openGraph: {
    title: 'Codenest Guides — Startup Leadership Resources',
    description: 'Free in-depth guides and tools for UK startup founders evaluating fractional CTO and CFO support.',
    type: 'website',
    url: 'https://codenest.uk/guides/',
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
    canonical: 'https://codenest.uk/guides/',
  },
}

const guides = [
  {
    title: 'The Complete Guide to Fractional CFO Services',
    href: '/guides/fractional-cfo-guide/',
    description: 'What a fractional CFO does, when to hire one, UK costs, and how they differ from accountants and controllers.',
    tag: 'Guide',
  },
  {
    title: 'The Complete Guide to Fractional CTO Services',
    href: '/guides/fractional-cto-guide/',
    description: 'What a fractional CTO does, when you need one, costs, and how to choose — the full picture for UK founders.',
    tag: 'Guide',
  },
  {
    title: 'Fractional CTO vs Full-Time CTO',
    href: '/guides/fractional-cto-vs-full-time/',
    description: 'The real cost analysis: salary, equity, hidden costs, and the strategic trade-offs at each stage.',
    tag: 'Comparison',
  },
  {
    title: 'Fractional CTO vs Development Agency',
    href: '/guides/fractional-cto-vs-agency/',
    description: 'Strategy versus execution: which model fits your startup, and when to combine both.',
    tag: 'Comparison',
  },
  {
    title: 'Technical Co-founder Alternatives',
    href: '/guides/technical-cofounder-alternatives/',
    description: "Can't find a technical co-founder? The realistic alternatives, with equity and cost trade-offs.",
    tag: 'Guide',
  },
]

const pageSchema = [
  breadcrumbs([{ name: 'Guides', path: '/guides/' }]),
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Codenest Guides',
    description: 'In-depth guides for UK founders evaluating fractional CTO and CFO support.',
    itemListElement: guides.map((guide, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: guide.title,
      url: `https://codenest.uk${guide.href}`,
    })),
  },
]

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd schema={pageSchema} />
      <Navigation />

      <main id="main-content">
        <section className="pt-40 pb-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.2em] text-accent-700 mb-4 font-medium">Resources</p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">Guides for Founders</h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Free, in-depth resources for evaluating technical and financial leadership at your stage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {guides.map((guide) => (
                <Link key={guide.href} href={guide.href} className="group">
                  <article className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md hover:border-slate-300 transition-all h-full">
                    <span className="text-xs font-medium px-2 py-0.5 bg-slate-100 text-slate-600 rounded">{guide.tag}</span>
                    <h2 className="text-lg font-semibold text-slate-900 mt-3 mb-2 group-hover:text-primary-600 transition-colors leading-snug">
                      {guide.title}
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed">{guide.description}</p>
                  </article>
                </Link>
              ))}
            </div>

            {/* Runway calculator cross-link */}
            <div className="bg-gradient-to-br from-accent-50 to-white border border-accent-200 rounded-xl p-8 text-center">
              <span className="text-xs font-medium px-2 py-0.5 bg-accent-100 text-accent-700 rounded">Free Tool</span>
              <h2 className="text-xl font-semibold text-slate-900 mt-3 mb-2">Startup Runway Calculator</h2>
              <p className="text-slate-600 mb-4 max-w-xl mx-auto">
                Work out how many months of runway you have and when to start fundraising.
              </p>
              <Link href="/tools/runway-calculator/" className="inline-flex items-center font-semibold text-accent-700 hover:text-accent-800">
                Open the calculator
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
