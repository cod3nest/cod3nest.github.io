import Link from 'next/link'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import JsonLd from '../components/JsonLd'
import { breadcrumbs } from '../../lib/schema'

// /tools/ returned a 404 while both tools lived beneath it. Outreach to resource pages
// links here, and anyone trimming a tool URL back to its parent lands here too.
export const metadata = {
  title: 'Free Tools for UK Startup Founders',
  description: 'Free tools for UK founders: a startup runway calculator and a technical due diligence readiness check. Both run in your browser, with no sign-up.',
  openGraph: {
    title: 'Free Tools for UK Startup Founders | Codenest',
    description: 'A startup runway calculator and a technical due diligence readiness check. Free, no sign-up.',
    type: 'website',
    url: 'https://codenest.uk/tools/',
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
    canonical: 'https://codenest.uk/tools/',
  },
}

const tools = [
  {
    title: 'Startup Runway Calculator',
    href: '/tools/runway-calculator/',
    description: 'Enter cash, monthly burn and revenue growth to see how many months of runway you have and when to start raising.',
    seat: 'Finance',
  },
  {
    title: 'Technical Due Diligence Readiness Check',
    href: '/tools/technical-due-diligence-check/',
    description: 'Twenty-five statements across the seven areas investors examine, scored in your browser. Nothing is sent anywhere.',
    seat: 'Technology',
  },
]

const pageSchema = [
  breadcrumbs([{ name: 'Tools', path: '/tools/' }]),
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Codenest Free Tools',
    itemListElement: tools.map((tool, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: tool.title,
      url: `https://codenest.uk${tool.href}`,
    })),
  },
]

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd schema={pageSchema} />
      <Navigation />

      <main id="main-content">
        <section className="pt-28 md:pt-40 pb-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.2em] text-accent-700 mb-4 font-medium">Resources</p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">Free Tools for Founders</h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Two self-checks for founders. Free, with no sign-up.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {tools.map((tool) => (
                <Link key={tool.href} href={tool.href} className="group">
                  <article className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md hover:border-slate-300 transition-all h-full">
                    <span className="text-xs font-medium px-2 py-0.5 bg-slate-100 text-slate-600 rounded">{tool.seat}</span>
                    <h2 className="text-lg font-semibold text-slate-900 mt-3 mb-2 group-hover:text-primary-600 transition-colors leading-snug">
                      {tool.title}
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed">{tool.description}</p>
                  </article>
                </Link>
              ))}
            </div>

            <p className="text-center text-slate-600">
              Want to go further than a self-check?{' '}
              <Link href="/guides/" className="font-semibold text-accent-700 hover:text-accent-800">
                Read the guides
              </Link>{' '}
              or{' '}
              <Link href="/contact/" className="font-semibold text-accent-700 hover:text-accent-800">
                request a strategy call
              </Link>
              .
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
