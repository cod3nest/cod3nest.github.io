import './globals.css'

export const metadata = {
  title: 'Codenest – Technical Leadership for Startups | Fractional CTO & MVP Development',
  description: 'Codenest helps startups go from 0→1 with technical leadership, MVP development, and production-grade IaC & GitOps foundations. Fractional CTO services for early-stage founders.',
  keywords: 'startup CTO, fractional CTO, 0-1 product, GitOps consulting, Infrastructure as Code, startup technical partner, MVP development, IaC, technical leadership, startup engineering',
  authors: [{ name: 'Codenest' }],
  openGraph: {
    title: 'Codenest – Technical Leadership for Startups | Fractional CTO & MVP Development',
    description: 'We help founders build fast and scale smart — combining engineering execution with reproducible IaC and GitOps foundations.',
    type: 'website',
    url: 'https://codenest.uk',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Codenest – Technical Leadership for Startups | Fractional CTO & MVP Development',
    description: 'We help founders build fast and scale smart — combining engineering execution with reproducible IaC and GitOps foundations.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
