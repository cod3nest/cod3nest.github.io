import './globals.css'

export const metadata = {
  metadataBase: new URL('https://codenest.uk'),
  title: {
    default: 'Codenest – Fractional CTO & Startup Engineering | GitOps, IaC & MVP Development',
    template: '%s | Codenest'
  },
  description: 'Expert fractional CTO services for UK startups. We help founders build scalable MVPs using GitOps, Infrastructure as Code, and Kubernetes. From 0→1 with production-grade foundations. Based in the UK, serving Europe.',
  keywords: ['fractional CTO UK', 'fractional CTO London', 'startup CTO UK', 'GitOps consulting UK', 'Infrastructure as Code UK', 'IaC consulting', 'MVP development UK', 'Kubernetes consulting UK', 'startup engineering UK', 'DevOps consulting UK', 'cloud architecture UK', 'technical leadership UK', '0 to 1 product UK', 'startup technical partner UK', 'microservices architecture', 'CI/CD consulting UK', 'fractional CTO Europe', 'part-time CTO UK', 'interim CTO UK'],
  authors: [{ name: 'Codenest', url: 'https://codenest.uk' }],
  creator: 'Codenest',
  publisher: 'Codenest',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Codenest – Fractional CTO & Startup Engineering Services',
    description: 'Expert technical leadership for startups. Build scalable products with GitOps, IaC, and cloud-native architecture. Fractional CTO services that accelerate your 0→1 journey.',
    type: 'website',
    locale: 'en_GB',
    url: 'https://codenest.uk',
    siteName: 'Codenest',
    images: [
      {
        url: '/img/companylogo.png',
        width: 1200,
        height: 630,
        alt: 'Codenest - Technical Leadership for Startups',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Codenest – Fractional CTO & Startup Engineering',
    description: 'Expert technical leadership for startups. GitOps, IaC, Kubernetes. Build scalable products from day one.',
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
    name: 'Codenest',
    alternateName: 'Codenest Ltd',
    url: 'https://codenest.uk',
    logo: 'https://codenest.uk/img/companylogo.png',
    image: 'https://codenest.uk/img/companylogo.png',
    description: 'Expert fractional CTO and technical leadership for startups. Specializing in GitOps, Infrastructure as Code, and cloud-native architecture.',
    priceRange: '££-£££',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'GB'
    },
    geo: {
      '@type': 'GeoCoordinates',
      addressCountry: 'United Kingdom'
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
      availableLanguage: ['English']
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
      'Startup Engineering',
      'MVP Development'
    ]
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
          text: 'Yes! We specialize in helping startups go from 0→1. Whether you\'re pre-seed or Series A, we provide the technical leadership and engineering execution you need to build and scale.'
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
    <html lang="en">
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

        {/* Performance & Security */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />

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
      <body>{children}</body>
    </html>
  )
}
