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
    default: 'Codenest – Boutique Technical & Financial Advisory for UK Startups',
    template: '%s | Codenest'
  },
  description: 'Boutique advisory for ambitious founders. Big 4 rigour meets startup agility. Bespoke technical and financial leadership for select UK startups — executive firepower without the overhead.',
  keywords: ['boutique startup advisory London', 'fractional CTO UK', 'fractional CFO UK', 'startup advisory London', 'executive advisory startups', 'premium tech consultancy UK', 'bespoke startup consulting', 'Big 4 startup advisory', 'GitOps consulting UK', 'Infrastructure as Code UK', 'financial modeling startups', 'MVP development UK', 'Kubernetes consulting UK', 'startup engineering UK', 'DevOps consulting UK', 'fundraising support UK', 'technical leadership UK', 'financial strategy startups', '0 to 1 product UK', 'startup technical partner UK', 'Series A preparation', 'startup due diligence UK', 'boutique consultancy UK', 'select founders UK', 'investor ready startups', 'startup scale up UK'],
  authors: [{ name: 'Codenest', url: 'https://codenest.uk' }],
  creator: 'Codenest',
  publisher: 'Codenest',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Codenest – Boutique Advisory for Ambitious Founders',
    description: 'Big 4 rigour meets startup agility. Bespoke technical and financial leadership for select UK startups. Executive firepower, startup pricing.',
    type: 'website',
    locale: 'en_GB',
    url: 'https://codenest.uk',
    siteName: 'Codenest',
    images: [
      {
        url: '/img/companylogo.png',
        width: 1200,
        height: 630,
        alt: 'Codenest - Boutique Startup Advisory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Codenest – Boutique Advisory for Ambitious Founders',
    description: 'Big 4 rigour meets startup agility. Executive firepower, startup pricing.',
    images: ['/img/companylogo.png'],
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
    description: 'Boutique technical and financial advisory for ambitious UK founders. Big 4 rigour meets startup agility. Executive firepower, startup pricing.',
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
      'Startup Financial Strategy'
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

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'Service',
        name: 'Fractional CTO Services',
        description: 'Part-time CTO leadership for startups. Technical strategy, team building, and architectural guidance without full-time costs.',
        provider: {
          '@type': 'Organization',
          name: 'Codenest'
        },
        areaServed: 'United Kingdom',
        serviceType: 'Technical Leadership'
      },
      {
        '@type': 'Service',
        name: 'Fractional CFO Services',
        description: 'Part-time CFO leadership for startups. Financial strategy, investor reporting, and cash flow management without full-time costs.',
        provider: {
          '@type': 'Organization',
          name: 'Codenest'
        },
        areaServed: 'United Kingdom',
        serviceType: 'Financial Leadership'
      },
      {
        '@type': 'Service',
        name: 'MVP Development',
        description: 'Build production-ready MVPs using modern tech stack, GitOps workflows, and Infrastructure as Code from day one.',
        provider: {
          '@type': 'Organization',
          name: 'Codenest'
        },
        areaServed: 'United Kingdom',
        serviceType: 'Software Development'
      },
      {
        '@type': 'Service',
        name: 'Financial Modeling & Strategy',
        description: 'Unit economics, revenue forecasting, and scenario planning. Build financial models that stand up to investor scrutiny.',
        provider: {
          '@type': 'Organization',
          name: 'Codenest'
        },
        areaServed: 'United Kingdom',
        serviceType: 'Financial Consulting'
      },
      {
        '@type': 'Service',
        name: 'GitOps & Infrastructure as Code Consulting',
        description: 'Implement GitOps workflows and Infrastructure as Code to accelerate deployments and improve reliability.',
        provider: {
          '@type': 'Organization',
          name: 'Codenest'
        },
        areaServed: 'United Kingdom',
        serviceType: 'DevOps Consulting'
      },
      {
        '@type': 'Service',
        name: 'Kubernetes & Cloud Native Architecture',
        description: 'Design and implement Kubernetes-based architectures for scalable, cloud-native applications.',
        provider: {
          '@type': 'Organization',
          name: 'Codenest'
        },
        areaServed: 'United Kingdom',
        serviceType: 'Cloud Architecture'
      },
      {
        '@type': 'Service',
        name: 'Technical Due Diligence',
        description: 'Comprehensive technical audits for investors. Evaluate architecture, team, code quality, and scalability.',
        provider: {
          '@type': 'Organization',
          name: 'Codenest'
        },
        areaServed: 'United Kingdom',
        serviceType: 'Consulting'
      },
      {
        '@type': 'Service',
        name: 'Fundraising Support',
        description: 'Pitch deck financial sections, data room preparation, and investor Q&A coaching for pre-seed to Series A.',
        provider: {
          '@type': 'Organization',
          name: 'Codenest'
        },
        areaServed: 'United Kingdom',
        serviceType: 'Financial Consulting'
      }
    ]
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a Fractional CTO?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A Fractional CTO is a part-time Chief Technology Officer who provides strategic technical leadership without the cost of a full-time executive. Perfect for early-stage startups that need experienced technical guidance but aren\'t ready for a full-time CTO.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is a Fractional CFO?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A Fractional CFO is a part-time Chief Financial Officer who provides strategic financial leadership without the cost of a full-time executive. They handle financial planning, investor reporting, cash flow management, and fundraising preparation.'
        }
      },
      {
        '@type': 'Question',
        name: 'How long does it take to build an MVP?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Typically 6-12 weeks for a production-ready MVP, depending on complexity. We focus on shipping core features fast while building on solid foundations (GitOps, IaC, CI/CD) so you can scale without rebuilding.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you work with early-stage startups?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! We specialize in helping startups go from 0→1. Whether you\'re pre-seed or Series A, we provide both the technical and financial leadership you need to build and scale.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can you help with fundraising?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We prepare financial models, data rooms, and due diligence materials. We\'ve supported raises from pre-seed through Series A across fintech, healthtech, and B2B SaaS.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is GitOps and why does it matter?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'GitOps is a way of managing infrastructure and deployments using Git as the single source of truth. It enables automated, repeatable deployments with full audit trails. For startups, it means faster releases, fewer bugs, and easier scaling.'
        }
      }
    ]
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

        {/* Structured Data - Services */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />

        {/* Structured Data - FAQs */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
