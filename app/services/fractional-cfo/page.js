import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Fractional CFO Services London | Startup Financial Planning UK',
  description: 'Expert fractional CFO for London and UK startups. Financial modeling, fundraising support, investor relations from £2.5k/month. SEIS/EIS expertise. Book consultation.',
  keywords: ['fractional CFO UK', 'fractional CFO London', 'startup CFO', 'FP&A UK', 'financial planning analysis', 'financial strategy', 'startup finance UK', 'part-time CFO'],
  openGraph: {
    title: 'Fractional CFO Services London | Codenest',
    description: 'FP&A and financial strategy for UK startups — investor-ready financials without the overhead.',
    type: 'website',
    url: 'https://codenest.uk/services/fractional-cfo',
  },
  alternates: {
    canonical: 'https://codenest.uk/services/fractional-cfo',
  },
}

export default function FractionalCFOPage() {
  const benefits = [
    {
      title: "Investor-Ready Financials",
      description: "Build financial models and reporting that satisfy even the most demanding investors.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: "Extend Your Runway",
      description: "Optimize cash flow and burn rate to give yourself more time to hit milestones.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Close Rounds Faster",
      description: "Prepared data rooms and polished financials help you close fundraising rounds with confidence.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      title: "Board-Level Reporting",
      description: "Professional financial reporting that builds confidence with your board and investors.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ]

  const services = [
    "Financial modeling and forecasting",
    "Cash flow management and optimization",
    "Unit economics analysis",
    "Data room creation and management",
    "Investor presentation support",
    "Board reporting and materials",
    "Budget planning and tracking",
    "Pricing strategy development",
    "Financial due diligence preparation",
    "Finance systems implementation",
    "Procurement systems project management",
  ]

  const faqs = [
    {
      question: "What's the difference between FP&A and accounting?",
      answer: "Accountants handle historical compliance and bookkeeping. FP&A is forward-looking: financial modeling, forecasting, unit economics, pricing strategy, and investor communications. We provide strategic finance leadership, not bookkeeping."
    },
    {
      question: "How many hours per week do you typically work?",
      answer: "Engagements typically range from 8-16 hours per week, with flexibility to scale up during fundraising rounds or board meetings. We adapt to your specific needs and stage."
    },
    {
      question: "When should a startup invest in FP&A?",
      answer: "Ideal timing is when you're preparing to raise funding, need to optimize runway, or want to professionalize your financial operations. Typically pre-seed through Series B stage."
    },
    {
      question: "Can you help us prepare for due diligence?",
      answer: "Absolutely. Due diligence preparation is one of our core strengths. We ensure your financials, projections, and data room are investor-ready and can withstand scrutiny."
    },
  ]

  // FAQ Schema for rich snippets
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }

  // Service Schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Fractional CFO Services',
    description: 'Part-time financial leadership for startups. FP&A, financial modeling, and fundraising support.',
    provider: {
      '@type': 'Organization',
      name: 'Codenest',
      url: 'https://codenest.uk'
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom'
    },
    serviceType: 'Financial Leadership Consulting'
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-gradient-to-b from-accent-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-accent-100 text-accent-800 rounded-full text-sm font-medium mb-6">
                Financial & Business Strategy
              </div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                FP&A & Business Strategy
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Financial planning & analysis, business strategy, and investor-ready reporting. The financial discipline of a high-growth company — without the overhead.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/#contact" className="bg-accent-500 text-primary-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-accent-600 transition-all shadow-lg hover:shadow-xl text-center">
                  Schedule a Conversation
                </a>
                <a href="/#case-studies" className="border-2 border-primary-600 text-primary-700 px-8 py-4 rounded-2xl text-lg font-semibold hover:border-primary-700 hover:bg-primary-50 transition-all text-center">
                  See Our Results
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[450px]">
                <Image
                  src="/img/photos/service-diligence.jpg"
                  alt="Financial and business strategy leadership for startup team"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-accent-600/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-slate-900 mb-4">Why FP&A Matters</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Strategic finance and business strategy tailored to your startup's stage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-accent-300 hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-accent-100 rounded-xl flex items-center justify-center mb-6 text-accent-700">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-slate-900 mb-6">What We Do</h2>
              <p className="text-xl text-slate-600 mb-8">
                Comprehensive financial leadership covering strategy, systems implementation, and operational excellence.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-accent-600 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-3xl p-10 border-2 border-accent-100 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Ideal For</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-8 h-8 bg-accent-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-accent-700 font-bold">1</span>
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">Startups preparing to raise</p>
                    <p className="text-slate-600 text-sm">Need investor-ready financials and data room preparation</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-8 h-8 bg-accent-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-accent-700 font-bold">2</span>
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">Founders needing financial discipline</p>
                    <p className="text-slate-600 text-sm">Want to optimize runway and understand unit economics</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-8 h-8 bg-accent-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-accent-700 font-bold">3</span>
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">Teams with board reporting needs</p>
                    <p className="text-slate-600 text-sm">Need professional financial reporting for investors</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-slate-900 mb-4">Common Questions</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-accent-300 transition-colors">
                <summary className="font-semibold text-lg text-slate-900 cursor-pointer list-none flex items-center justify-between">
                  {faq.question}
                  <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-500 to-accent-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Ready for Strategic Finance Leadership?
          </h2>
          <p className="text-xl text-primary-800 mb-8 max-w-2xl mx-auto">
            Book a free 30-minute discovery call. No sales pitch — just an honest conversation about your financial and business strategy needs.
          </p>
          <a
            href="/#contact"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl"
          >
            Book a Discovery Call
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
