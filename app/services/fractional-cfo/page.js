import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Button from '../../components/Button'
import Footer from '../../components/Footer'
import PrincipalBand from '../../components/PrincipalBand'
import JsonLd from '../../components/JsonLd'
import { breadcrumbs, ORGANIZATION_ID, WEBSITE_ID } from '../../../lib/schema'

// No "London" in the title or keywords. The registered office is in Surrey and
// the site publishes no London address, so a city in the title was an implied
// geographic claim nothing on the site supported. `areaServed` is the United
// Kingdom, and the title now matches it. (BRANDING.md §13.25.)
export const metadata = {
  title: 'Fractional CFO Services for UK Startups',
  description: 'Fractional CFO for UK startups, pre-seed to Series A. Financial modelling, fundraising support and investor reporting. Free 30-minute strategy call.',
  keywords: ['fractional CFO UK', 'startup CFO', 'FP&A UK', 'financial planning analysis', 'financial strategy', 'startup finance UK', 'part-time CFO'],
  openGraph: {
    title: 'Fractional CFO Services for UK Startups | Codenest',
    description: 'FP&A and financial strategy for UK startups — investor-ready financials without the overhead.',
    type: 'website',
    url: 'https://codenest.uk/services/fractional-cfo/',
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
    canonical: 'https://codenest.uk/services/fractional-cfo/',
  },
}

const cfoBreadcrumbs = breadcrumbs([
  { name: 'Services', path: '/services/' },
  { name: 'Fractional CFO', path: '/services/fractional-cfo/' },
])

export default function FractionalCFOPage() {
  // Each tile carries a `proof` line, and each one names where the number comes
  // from. All four used to be figure-free while Michelle's numbers sat one screen
  // above in the PrincipalBand — the proof was on the page and unused at the point
  // it converts (site review, 5 Aug 2026). Dishoom figures attach to her *role*,
  // never to Codenest as a firm (§13.15); the Series A line is the one outcome a
  // verified client testimonial supports (§2.3).
  const benefits = [
    {
      title: "Investor-Ready Financials",
      description: "Financial models and reporting built to be tested, not admired.",
      proof: "Michelle owned Board and investor reporting at Dishoom",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: "Extend Your Runway",
      description: "Cash flow and burn under a forecast you can act on, months before the decision lands.",
      proof: "Rolling forecasts accurate to ±3% at Dishoom",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Close Rounds Faster",
      description: "A data room and a model that answer the questions before an investor has to ask them.",
      proof: "Series A closed on our models and data room (client, name withheld)",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      title: "Board-Level Reporting",
      description: "A close that lands on time, so the board pack is not assembled the night before.",
      proof: "Month-end close cut from 14 days to 8 at Dishoom",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ]

  const services = [
    "Financial modelling and forecasting",
    "Cash flow management and optimisation",
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
      answer: "Accountants handle historical compliance and bookkeeping. FP&A is forward-looking: financial modelling, forecasting, unit economics, pricing strategy, and investor communications. We provide strategic finance leadership, not bookkeeping."
    },
    {
      question: "How many hours per week do you typically work?",
      answer: "Engagements typically range from 8-16 hours per week, with flexibility to scale up during fundraising rounds or board meetings. We adapt to your specific needs and stage."
    },
    {
      question: "When should a startup invest in FP&A?",
      answer: "Ideal timing is when you're preparing to raise funding, need to optimise runway, or want to professionalise your financial operations. Typically pre-seed through Series A — and we stay on as you scale."
    },
    {
      question: "Can you help us prepare for due diligence?",
      answer: "Yes. We build the model, the data room and the supporting schedules, then work the questions an investor will actually ask against them. Michelle has been through investor due diligence from the inside, which is the fastest way to learn what it tests."
    },
    {
      question: "Can you help with fundraising?",
      answer: "Yes. Financial models, data rooms and due diligence materials, plus the investor conversations that run off them. What we will not do is put a number on your raise before we have seen your numbers."
    },
    {
      question: "Do we still need a bookkeeper or an accountant?",
      answer: "Yes, and we are not a replacement for either. A bookkeeper records what happened and an accountant files it. A Fractional CFO decides what to do next: pricing, hiring, runway, the shape of the raise. We work alongside whoever already does your compliance."
    },
    {
      question: "Can you work with the finance team we already have?",
      answer: "Yes. Michelle built and led a 20+ person finance function, so working through a team is the normal case rather than the exception. We set the reporting, the controls and the forecast rhythm, and your team runs them."
    },
    {
      question: "We are not raising. Is a Fractional CFO still worth it?",
      answer: "Often, yes. Fundraising is one use of the seat, not the point of it. Pricing, margin, month-end close, cash management, budgeting and Board reporting are the operational half, and they are what makes the next raise straightforward when it comes."
    },
    {
      question: "What does the first month look like?",
      answer: "We start with what exists: the numbers, how they are produced, and where they are argued about. From that comes a working model, an agreed reporting pack, and a short list of the decisions that need a number attached to them. No 90-day discovery phase."
    },
    {
      question: "Can you help us hire a permanent finance lead?",
      answer: "Yes. Part of the job is making the seat unnecessary: defining the role, sitting in on interviews, and handing over a function that runs without us. The same applies on the technical side with the Fractional CTO."
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
    description: 'Part-time financial leadership for startups. FP&A, financial modelling, and fundraising support.',
    // Reference the root layout's ProfessionalService by @id rather than
    // restating it: a second, differently-shaped Organization node for the same
    // business invites Google to treat them as two companies.
    provider: { '@id': ORGANIZATION_ID },
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

      <JsonLd schema={cfoBreadcrumbs} />
      <Navigation />

      <main id="main-content">

      {/* Hero Section */}
      <section className="pt-28 md:pt-40 pb-24 bg-gradient-to-b from-accent-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-accent-100 text-accent-800 rounded-full text-sm font-medium mb-6">
                Financial Leadership
              </div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Fractional CFO Services
              </h1>
              <p className="text-xl text-slate-600 mb-4 leading-relaxed">
                FP&A, financial modelling, and investor-ready reporting from a part-time CFO. The financial discipline of a high-growth company — without the overhead.
              </p>
              <p className="text-sm font-medium text-slate-700 mb-8">
                Retained monthly engagements, scoped to your stage &middot; typically 60-80% less than a full-time CFO
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact/">Request a Strategy Call</Button>
                {/* Not /case-studies: every study there is a technical engagement,
                    so a CFO buyer clicking through for proof landed on three
                    Kubernetes write-ups. /about carries Michelle's actual record
                    until this seat has case studies of its own. */}
                <Button href="/about/" variant="secondary">Meet Your Fractional CFO</Button>
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

      {/* This page carried no named human at all: a CFO buyer met a stock photo
          and a list of capabilities. Dishoom's numbers stay attached to the role
          Michelle held, never to her personally growing the business (§13.15). */}
      <PrincipalBand
        name="Michelle Rana FCCA"
        role="Fractional CFO"
        accent="accent"
        credentials={['FCCA', 'BSc Mathematics', '£165m P&L']}
        bio="Chartered accountant and strategic finance leader. As Head of Strategic Finance at Dishoom she owned the five-year model, rolling forecasts and CapEx governance through a 6-to-27-site expansion, and held the company's cash together through COVID-19. She has supported founders through fundraising and investor due diligence."
        highlights={[
          'Led strategic finance at Dishoom through £35m to £165m revenue and a four-point EBITDA margin improvement',
          'Built and led a 20+ person finance function, owning Board and investor reporting',
          'Rolling forecasts accurate to ±3%, month-end close cut from 14 days to 8, and £6m in procurement and contract improvements',
        ]}
        proof="Led strategic finance at Dishoom through £35m → £165m"
        linkedin="https://www.linkedin.com/in/michellerana1"
      />

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-slate-900 mb-4">Why Hire a Fractional CFO?</h2>
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
                {benefit.proof && (
                  <p className="mt-4 pt-4 border-t border-slate-200 text-sm font-semibold text-accent-700">
                    {benefit.proof}
                  </p>
                )}
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
                What the seat covers: the plan, the systems that produce the numbers, and the discipline that keeps them true.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-accent-700 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                    <p className="text-slate-600 text-sm">Want to optimise runway and understand unit economics</p>
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

          {/* Related resources */}
          <div className="mt-12 p-6 bg-accent-50 rounded-2xl border border-accent-100 text-center">
            <p className="text-slate-700">
              New to strategic finance? Read{' '}
              <Link href="/guides/fractional-cfo-guide/" className="font-semibold text-accent-700 hover:text-accent-800 underline">
                The Complete Guide to Fractional CFO Services
              </Link>.
              {' '}Weighing this against a permanent hire or an outsourced provider? Compare{' '}
              <Link href="/guides/fractional-cfo-vs-full-time/" className="font-semibold text-accent-700 hover:text-accent-800 underline">
                fractional vs full-time CFO
              </Link>{' '}and{' '}
              <Link href="/guides/fractional-cfo-vs-outsourced-finance/" className="font-semibold text-accent-700 hover:text-accent-800 underline">
                fractional CFO vs outsourced finance
              </Link>.
              {' '}Not sure when you&apos;ll need to raise? Try our free{' '}
              <Link href="/tools/runway-calculator/" className="font-semibold text-accent-700 hover:text-accent-800 underline">
                Startup Runway Calculator
              </Link>{' '}
              — or read{' '}
              <Link href="/blog/financial-modeling-seed-stage-startups/" className="font-semibold text-accent-700 hover:text-accent-800 underline">
                our financial modelling guide
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* Charcoal ground, gold carried on the eyebrow and the button. A full-bleed
          gold band put dark-on-gold body copy at 3.4:1 and made this page end in a
          different brand from its Fractional CTO twin (BRANDING.md §3). */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-accent-300 mb-4 font-medium">Financial Leadership</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for a Fractional CFO?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Request a free 30-minute call. No sales pitch, and we&apos;ll say so if a fractional CFO isn&apos;t what you need.
          </p>
          <a
            href="/contact/"
            className="inline-block bg-accent-400 text-primary-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-500 transition-all shadow-gold hover:shadow-gold-lg"
          >
            Request a Strategy Call
          </a>
        </div>
      </section>

      </main>

      <Footer />
    </div>
  )
}
