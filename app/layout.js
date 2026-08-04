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
  description: 'London-based fractional CTO and CFO for UK startups. Ex-Deloitte leadership delivering technical architecture, financial modeling, and fundraising support. Trusted by pre-seed to Series A founders across fintech, healthtech, and B2B SaaS.',
  keywords: ['boutique startup advisory London', 'fractional CTO UK', 'fractional CFO UK', 'startup advisory London', 'executive advisory startups', 'premium tech consultancy UK', 'bespoke startup consulting', 'Big 4 startup advisory', 'GitOps consulting UK', 'Infrastructure as Code UK', 'financial modeling startups', 'MVP development UK', 'Kubernetes consulting UK', 'startup engineering UK', 'DevOps consulting UK', 'fundraising support UK', 'technical leadership UK', 'financial strategy startups', '0 to 1 product UK', 'startup technical partner UK', 'Series A preparation', 'startup due diligence UK', 'boutique consultancy UK', 'select founders UK', 'investor ready startups', 'startup scale up UK', 'technical co-founder UK', 'startup co-founder London', 'CTO co-founder', 'find technical co-founder', 'tech co-founder partnership', 'co-founder for startup UK', 'technical partner equity', 'startup equity partnership'],
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
    url: 'https://codenest.uk',
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
    canonical: 'https://codenest.uk',
  },
}

export default function RootLayout({ children }) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://codenest.uk/#organization',
    name: 'Codenest',
    alternateName: 'Codenest Ltd',
    url: 'https://codenest.uk',
    logo: 'https://codenest.uk/img/companylogo.png',
    image: 'https://codenest.uk/img/companylogo.png',
    description: 'Boutique technical and financial advisory for ambitious UK founders. Big 4 rigour meets founder empathy. Fractional CTO and CFO services with executive firepower.',
    priceRange: '£££',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'London',
      addressRegion: 'Greater London',
      addressCountry: 'GB'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.5074,
      longitude: -0.1278
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
    sameAs: [
      'https://www.linkedin.com/company/codenest-ltd',
      'https://github.com/cod3nest'
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
            name: 'Financial Modeling & Strategy',
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

        {/* Theme Color */}
        <meta name="theme-color" content="#2C3E50" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#2C3E50" />

        {/* Performance optimizations removed - images now self-hosted */}

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
