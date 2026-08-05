import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

export const metadata = {
  metadataBase: new URL('https://codenest.uk'),
  title: {
    default: 'Fractional CTO & Fractional CFO for UK Startups | Codenest',
    template: '%s | Codenest'
  },
  description: 'Fractional CTO and CFO for UK startups. A 15-year engineering leader and a chartered accountant (FCCA), working with founders from pre-seed to Series A.',
  // Google ignores this tag outright and a 34-term list reads as stuffing to the
  // engines that still glance at it. Kept short and limited to terms the site
  // actually ranks pages for.
  keywords: [
    'fractional CTO UK',
    'fractional CFO UK',
    'fractional CTO London',
    'fractional CFO London',
    'startup technical leadership UK',
    'startup financial modelling',
    'technical co-founder UK',
  ],
  authors: [{ name: 'Codenest', url: 'https://codenest.uk' }],
  creator: 'Codenest',
  publisher: 'Codenest',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Fractional CTO & Fractional CFO for UK Startups | Codenest',
    description: 'Big 4 rigour meets founder empathy. Fractional CTO and CFO services for UK startups, pre-seed to Series A.',
    type: 'website',
    locale: 'en_GB',
    url: 'https://codenest.uk/',
    siteName: 'Codenest',
    images: [
      {
        url: '/img/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Codenest - Fractional CTO & CFO for UK startups',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fractional CTO & Fractional CFO for UK Startups | Codenest',
    description: 'Fractional CTO and CFO services for UK startups. Executive firepower, founder-friendly terms.',
    images: ['/img/og-default.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://codenest.uk/',
  },
}

// Names the site as an entity distinct from the company that runs it, and gives every
// other schema block on the site a stable @id to point at instead of repeating the
// organisation inline. `member` rather than `founder`/`employee`: it is the relation
// we can state for both principals without asserting a legal role we haven't confirmed.
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://codenest.uk/#website',
  url: 'https://codenest.uk/',
  name: 'Codenest',
  description: 'Fractional CTO and Fractional CFO services for UK startups.',
  publisher: { '@id': 'https://codenest.uk/#organization' },
  inLanguage: 'en-GB',
}

export default function RootLayout({ children }) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://codenest.uk/#organization',
    name: 'Codenest',
    alternateName: 'Codenest Ltd',
    url: 'https://codenest.uk/',
    member: [
      { '@id': 'https://codenest.uk/about/#ankit-rana' },
      { '@id': 'https://codenest.uk/about/#michelle-rana' },
    ],
    logo: 'https://codenest.uk/img/companylogo.png',
    image: 'https://codenest.uk/img/companylogo.png',
    description: 'Boutique technical and financial advisory for ambitious UK founders. Big 4 rigour meets founder empathy. Fractional CTO and CFO services with executive firepower.',
    priceRange: '£££',
    // The registered office — the only address the site publishes, and the one in
    // the statutory footer disclosure. It previously claimed London with the
    // generic 51.5074/-0.1278 city centroid, an address the business does not
    // occupy paired with coordinates nobody measured. The `geo` block is gone
    // rather than re-guessed. (BRANDING.md §13.25.)
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Clearways Accountants, Clearways, Colley Way',
      addressLocality: 'Reigate',
      addressRegion: 'Surrey',
      postalCode: 'RH2 9JH',
      addressCountry: 'GB'
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'United Kingdom'
      },
      {
        '@type': 'Country',
        name: 'Europe'
      }
    ],
    // LinkedIn only. The GitHub org URL was the one place the legacy `cod3nest`
    // identifier still reached a public surface, and §1 bars it from schema by
    // name. It was a real entity-disambiguation signal; the owner chose the rule
    // over the signal (5 Aug 2026).
    sameAs: [
      'https://www.linkedin.com/company/codenest-ltd'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['English'],
      email: 'hello@codenest.uk'
    },
    knowsAbout: [
      'GitOps',
      'Infrastructure as Code',
      'Kubernetes',
      'DevOps',
      'Cloud Architecture',
      'Microservices',
      'CI/CD',
      'Fractional CTO Services',
      'Fractional CFO Services',
      'Startup Engineering',
      'MVP Development',
      'Financial Modeling',
      'Fundraising',
      'Startup Financial Strategy',
      'Technical Co-founder Partnerships',
      'Startup Equity Partnerships'
    ],
    // The single offer catalogue for the site. The homepage carried a second,
    // shorter one (three offers, its own ProfessionalService provider) that had
    // drifted from this list; it was removed rather than kept in sync. Two
    // retained seats plus the two fixed-fee project shapes named in "How We Work"
    // — nothing else the site sells is a separate purchase.
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Startup Leadership Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Fractional CTO Services',
            description: 'Part-time technical leadership for startups'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Fractional CFO Services',
            description: 'Part-time financial leadership for startups'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'MVP Development',
            description: '8-12 week production-ready MVP builds'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Financial Modelling & Strategy',
            description: 'Financial models, unit economics, and fundraising preparation'
          }
        }
      ]
    }
  }

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Favicons */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=2" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/favicon-32x32.png" />

        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Blog feed — discoverable by readers and crawlers */}
        <link rel="alternate" type="application/rss+xml" title="Codenest Blog" href="/feed.xml" />

        {/* Theme Color */}
        <meta name="theme-color" content="#2C3E50" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#2C3E50" />

        {/* Performance optimizations removed - images now self-hosted */}

        {/* Structured Data - Organization + WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
