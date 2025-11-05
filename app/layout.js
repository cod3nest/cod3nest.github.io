import './globals.css'

export const metadata = {
  metadataBase: new URL('https://codenest.uk'),
  title: {
    default: 'Codenest – Fractional CTO & Startup Engineering | GitOps, IaC & MVP Development',
    template: '%s | Codenest'
  },
  description: 'Expert fractional CTO services for startups. We help founders build scalable MVPs using GitOps, Infrastructure as Code, and Kubernetes. From 0→1 with production-grade foundations.',
  keywords: ['fractional CTO', 'startup CTO', 'GitOps consulting', 'Infrastructure as Code', 'IaC', 'MVP development', 'Kubernetes consulting', 'startup engineering', 'DevOps consulting', 'cloud architecture', 'technical leadership', '0 to 1 product', 'startup technical partner', 'microservices architecture', 'CI/CD consulting'],
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Codenest',
    url: 'https://codenest.uk',
    logo: 'https://codenest.uk/img/companylogo.png',
    description: 'Expert fractional CTO and technical leadership for startups. Specializing in GitOps, Infrastructure as Code, and cloud-native architecture.',
    sameAs: [
      'https://www.linkedin.com/company/codenest-ltd',
      'https://github.com/cod3nest'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['English']
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom'
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

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=2" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
