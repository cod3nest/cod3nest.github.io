import Link from 'next/link'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Services | Fractional CTO & Fractional CFO for UK Startups',
  description: 'Two executive seats, one integrated partner. Fractional CTO services (architecture, engineering leadership, 0-to-1 builds) and fractional CFO services (FP&A, financial modeling, fundraising) for UK startups, pre-seed to Series A.',
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
    href: '/services/fractional-cto',
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
    href: '/services/fractional-cfo',
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

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main id="main-content">
        <section className="pt-40 pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.2em] text-accent-600 mb-4 font-medium">Integrated Partnership</p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">Fractional CTO &amp; CFO Services</h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Most startups need both CTO and CFO guidance. We deliver integrated leadership — not siloed consulting.
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

            <div className="mt-16 text-center">
              <a
                href="/contact"
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
