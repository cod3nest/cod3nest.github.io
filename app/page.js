import Link from 'next/link'
import Button from './components/Button'
import Navigation from './components/Navigation'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'

export default function Home() {

  // Teaser data only — the full case studies live at /case-studies
  const caseStudies = [
    {
      title: "Rungway: Scaling a Social Mentoring Platform",
      results: ["Scaled from 5 to 1000+ concurrent users"]
    },
    {
      title: "Opayo by Elavon: Payment Platform Transformation",
      results: ["Releases accelerated from fortnightly to multiple times per day"]
    },
    {
      title: "AstraZeneca: Drug Delivery Tracking System MVP",
      results: ["Production-ready MVP delivered on Kubernetes infrastructure"]
    }
  ]


  const faqs = [
    {
      question: "How quickly can we start?",
      answer: "Most engagements start within 1-2 weeks after our initial discovery call. For urgent projects, we can mobilize faster."
    },
    {
      question: "What does a typical engagement look like?",
      answer: "Fractional CTO/CFO engagements typically run 3-6 months at 2-3 days per week. MVP builds are fixed-scope at 8-12 weeks. We tailor every engagement to your stage and needs — no cookie-cutter packages."
    },
    {
      question: "Do you handle both technical and financial leadership?",
      answer: "Yes. Many startups need both CTO and CFO guidance but can't justify two executive hires. We offer integrated leadership covering technology architecture, financial planning, and investor relations."
    },
    {
      question: "What's your pricing model?",
      answer: "We work on retainer for fractional leadership (monthly commitment) and fixed-fee for defined projects like MVP builds or financial modelling. Every engagement is scoped to your stage and the intensity you need — typically 60-80% less than an equivalent full-time hire. Request a strategy call and we'll quote against your actual requirements."
    }
  ]

  // FAQ Schema for SEO
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

  // Service Schema for SEO
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Business Consulting',
    provider: {
      '@type': 'ProfessionalService',
      name: 'Codenest',
      url: 'https://codenest.uk'
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Startup Advisory Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Fractional CTO',
            description: 'Part-time technical leadership for startups. Architecture decisions, team building, and investor readiness.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Fractional CFO',
            description: 'Part-time financial leadership for startups. Financial modeling, fundraising support, and strategic planning.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '0-to-1 Product Development',
            description: 'End-to-end MVP development from strategy to launch.'
          }
        }
      ]
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navigation />

      <main id="main-content">

      {/* Hero Section */}
      <section id="home" className="pt-44 pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-accent-700 mb-8 font-medium animate-hero-1">
                Fractional CTO &amp; CFO for UK Startups
              </p>
              <h1 className="font-serif text-5xl md:text-6xl font-normal text-slate-900 leading-[1.1] mb-6 animate-hero-2">
                Executive Firepower.<br />
                <span className="italic">Startup Agility.</span>
              </h1>
              <p className="text-xl text-slate-600 mb-6 leading-relaxed max-w-lg animate-hero-3">
                Big 4 rigour meets founder empathy. Your part-time CTO and CFO in one engagement — architecture, engineering leadership, financial models, and fundraising for founders from pre-seed to Series A.
              </p>
              <ul className="space-y-4 mb-8 max-w-lg animate-hero-3">
                <li className="flex items-start text-slate-700 group">
                  <svg className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium">Save 60-80% vs full-time executives</span>
                    <span className="text-slate-500 text-sm block">Enterprise-grade expertise, founder-friendly terms</span>
                  </div>
                </li>
                <li className="flex items-start text-slate-700 group">
                  <svg className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium">Investor-ready in 8-12 weeks</span>
                    <span className="text-slate-500 text-sm block">Data room, financial models, technical architecture</span>
                  </div>
                </li>
                <li className="flex items-start text-slate-700 group">
                  <svg className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium">Every client diligence passed to date</span>
                    <span className="text-slate-500 text-sm block">Technical and financial, from pre-seed to Series A</span>
                  </div>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 animate-hero-4">
                <Button href="#contact">Request a Strategy Call</Button>
                <Button href="#case-studies" variant="secondary">View Case Studies</Button>
              </div>
            </div>
            <div className="relative animate-hero-image">
              {/* Premium gold frame effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-accent-400/30 via-accent-500/20 to-transparent rounded-2xl blur-sm" />
              {/* Two halves, equal height: the offer is 50/50 and the hero has to
                  show it. Real proof beats a stock photo of people at laptops. */}
              <div className="relative rounded-xl overflow-hidden min-h-[520px] ring-1 ring-accent-400/20 shadow-xl flex flex-col">
                <div className="flex-1 bg-primary-800 p-8 flex flex-col justify-center">
                  <p className="text-xs uppercase tracking-[0.2em] text-accent-300 mb-4 font-semibold">Fractional CTO</p>
                  <p className="font-serif text-4xl md:text-5xl font-bold text-white mb-3">5 &rarr; 1,000+</p>
                  <p className="text-slate-300 text-sm mb-4">Concurrent users scaled at Rungway</p>
                  <p className="text-slate-300 text-xs">Architecture, engineering leadership, delivery</p>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-accent-400 to-transparent" />

                <div className="flex-1 bg-white p-8 flex flex-col justify-center">
                  <p className="text-xs uppercase tracking-[0.2em] text-accent-700 mb-4 font-semibold">Fractional CFO</p>
                  <p className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-3">&pound;35m &rarr; &pound;165m</p>
                  <p className="text-slate-600 text-sm mb-4">Revenue scaled, EBITDA margin up 4%</p>
                  <p className="text-slate-500 text-xs">Financial models, controls, fundraising</p>
                </div>
              </div>
              {/* Gold accent decorations */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold-gradient opacity-20 rounded-full blur-xl" />
              <div className="absolute -top-2 -left-2 w-16 h-16 bg-gold-gradient opacity-15 rounded-full blur-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Two Tracks Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-accent-700 mb-4 font-medium">Integrated Partnership</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">Your Fractional CTO &amp; CFO</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Most startups need both CTO and CFO guidance. We deliver integrated leadership — not siloed consulting.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Strategy Track - Listed First */}
            <div className="bg-gradient-to-br from-accent-50 to-white border border-accent-200 rounded-xl p-10 hover:border-accent-400 hover:shadow-gold transition-all card-lift relative overflow-hidden">
              {/* Gold accent decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-gradient opacity-5 rounded-bl-full" />
              <div className="w-14 h-14 bg-accent-400 rounded-lg flex items-center justify-center mb-6 shadow-gold relative">
                <svg className="w-8 h-8 text-primary-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 relative">Fractional CFO</h3>
              <p className="text-slate-600 mb-6 leading-relaxed relative">
                Strategic finance, FP&A, and the financial discipline that makes your startup investable.
              </p>
              <ul className="space-y-3 mb-8 relative">
                <li className="flex items-center text-slate-700">
                  <svg className="w-5 h-5 text-accent-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Business Strategy & Planning
                </li>
                <li className="flex items-center text-slate-700">
                  <svg className="w-5 h-5 text-accent-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Financial Modeling & FP&A
                </li>
                <li className="flex items-center text-slate-700">
                  <svg className="w-5 h-5 text-accent-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Fundraising & Investor Relations
                </li>
                <li className="flex items-center text-slate-700">
                  <svg className="w-5 h-5 text-accent-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Due Diligence Preparation
                </li>
              </ul>
              <a href="/services/fractional-cfo/" className="inline-flex items-center text-accent-700 hover:text-accent-800 font-semibold link-gold relative">
                Explore Fractional CFO Services
                <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Technical Track */}
            <div className="bg-gradient-to-br from-primary-50 to-white border border-primary-200 rounded-xl p-10 hover:border-primary-400 hover:shadow-lg transition-all card-lift">
              <div className="w-14 h-14 bg-primary-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Fractional CTO</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Architecture decisions, engineering team building, and infrastructure that scales from day one.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-slate-700">
                  <svg className="w-5 h-5 text-primary-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Technical Strategy &amp; Architecture
                </li>
                <li className="flex items-center text-slate-700">
                  <svg className="w-5 h-5 text-primary-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  0-to-1 Product Builds
                </li>
                <li className="flex items-center text-slate-700">
                  <svg className="w-5 h-5 text-primary-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AI & Data Engineering
                </li>
                <li className="flex items-center text-slate-700">
                  <svg className="w-5 h-5 text-primary-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  DevOps & Platform Engineering
                </li>
              </ul>
              <a href="/services/fractional-cto/" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold">
                Explore Fractional CTO Services
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-12 text-center space-y-2">
            <p className="text-slate-600">
              Also need delivery capacity? Explore{' '}
              <Link href="/services/" className="text-primary-600 hover:text-primary-700 font-medium">all services</Link>
              {' '}including 0-to-1 product builds and AI engineering.
            </p>
            <p className="text-slate-600">
              Building something exceptional? For the right opportunity, we also consider{' '}
              <a href="/cofounder/" className="text-primary-600 hover:text-primary-700 font-medium">co-founder partnerships</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof - Client Logos */}
      <section className="py-12 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-slate-500 mb-8 uppercase tracking-[0.2em] font-medium">Founder track record includes</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {/* Rungway - HR Tech */}
            <div className="group flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white hover:shadow-sm transition-all cursor-default">
              <img
                src="/img/clients/rungway.webp"
                alt="Rungway"
                className="w-10 h-10 rounded-lg object-contain"
              />
              <div>
                <span className="text-lg font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">Rungway</span>
                <p className="text-xs text-slate-500">HR Tech</p>
              </div>
            </div>

            {/* Opayo/Elavon - Payments */}
            <div className="group flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white hover:shadow-sm transition-all cursor-default">
              <img
                src="/img/clients/opayo.png"
                alt="Opayo by Elavon"
                className="h-8 w-auto object-contain"
              />
            </div>

            {/* AstraZeneca - Pharma */}
            <div className="group flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white hover:shadow-sm transition-all cursor-default">
              <img
                src="/img/clients/astrazeneca.png"
                alt="AstraZeneca"
                className="h-8 w-auto object-contain"
              />
            </div>

          </div>
          <p className="text-center text-sm text-slate-600 mt-8">
            Led by <a href="/about/" className="font-semibold text-primary-700 hover:text-primary-800">Ankit Rana</a>, Fractional CTO — 15+ years across Deloitte Digital, Elavon (US Bancorp) and Opayo — and <a href="/about/" className="font-semibold text-primary-700 hover:text-primary-800">Michelle Rana FCCA</a>, Fractional CFO, who took a business from &pound;35m to &pound;165m revenue while improving EBITDA margin by 4%.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Client Outcomes</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Measurable impact from our technical and financial partnerships</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2 group">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold-gradient stat-number group-hover:scale-105 transition-transform">5 &rarr; 1,000+</div>
              <div className="text-slate-300 text-sm md:text-base">Concurrent users scaled at Rungway</div>
            </div>
            <div className="space-y-2 group">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold-gradient stat-number group-hover:scale-105 transition-transform">6+ yrs</div>
              <div className="text-slate-300 text-sm md:text-base">Payments engagement at Opayo by Elavon</div>
            </div>
            <div className="space-y-2 group">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold-gradient stat-number group-hover:scale-105 transition-transform">Series A</div>
              <div className="text-slate-300 text-sm md:text-base">Closed with our models and data room</div>
            </div>
            <div className="space-y-2 group">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold-gradient stat-number group-hover:scale-105 transition-transform">8-12 wks</div>
              <div className="text-slate-300 text-sm md:text-base">Fixed-scope MVP delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Teaser */}
      <section id="case-studies" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-accent-700 mb-4 font-medium">Proven Track Record</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">Case Studies</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Startup outcomes, backed by enterprise-grade experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Link key={index} href="/case-studies/" className="group">
                <article className="bg-white rounded-xl border border-slate-200 p-8 hover:shadow-lg hover:border-accent-200 transition-all h-full flex flex-col">
                  <span className="text-sm font-bold text-primary-600 mb-4">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-primary-700 transition-colors leading-snug">{study.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 flex-grow">{study.results[0]}</p>
                  <span className="inline-flex items-center text-sm font-semibold text-accent-700 group-hover:text-accent-800">
                    Read the case study
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section id="how-we-work" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-sm uppercase tracking-[0.2em] text-accent-700 mb-4 font-medium">Our Methodology</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">The Partnership Journey</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A structured, transparent process from discovery to delivery — and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line (desktop only) */}
            <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200"></div>

            <div className="bg-slate-50 rounded-xl p-10 border border-slate-200 relative">
              <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center mb-6 text-xl font-bold shadow-md relative z-10">
                1
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Discover</h3>
              <p className="text-slate-500 text-sm mb-2">Week 1-2</p>
              <p className="text-slate-600 leading-relaxed">
                Deep-dive into your vision, market, and constraints. Define your technical roadmap and path to investor readiness.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-10 border border-slate-200 relative">
              <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center mb-6 text-xl font-bold shadow-md relative z-10">
                2
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Build</h3>
              <p className="text-slate-500 text-sm mb-2">Week 3-10</p>
              <p className="text-slate-600 leading-relaxed">
                Architect scalable systems and robust financial foundations. Technology meets investor-grade reporting.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-10 border border-slate-200 relative">
              <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center mb-6 text-xl font-bold shadow-md relative z-10">
                3
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Scale</h3>
              <p className="text-slate-500 text-sm mb-2">Week 10+</p>
              <p className="text-slate-600 leading-relaxed">
                Deliver a complete system ready for growth. You own everything and can operate independently.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="#contact" className="inline-flex items-center bg-accent-400 text-primary-900 px-8 py-4 rounded-lg font-semibold hover:bg-accent-500 transition-all shadow-gold hover:shadow-gold-lg">
              Request a Strategy Call
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Testimonials />
      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-accent-700 mb-4 font-medium">Got questions?</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4">Common Questions</h2>
            <p className="text-slate-600">Everything you need to know about working with us</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-white rounded-xl border border-slate-200 hover:border-accent-300 hover:shadow-md transition-all overflow-hidden">
                <summary className="font-semibold text-lg text-slate-900 cursor-pointer list-none flex items-center justify-between p-6 hover:bg-slate-50 transition-colors">
                  <span className="flex items-center gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-accent-100 rounded-full flex items-center justify-center text-accent-700 text-sm font-bold group-open:bg-accent-500 group-open:text-white transition-colors">
                      {index + 1}
                    </span>
                    {faq.question}
                  </span>
                  <svg className="w-5 h-5 text-slate-400 group-open:text-accent-500 group-open:rotate-180 transition-all flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/50">
                  <p className="text-slate-600 leading-relaxed pl-12">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>

          {/* Additional CTA */}
          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">Still have questions?</p>
            <a href="#contact" className="inline-flex items-center gap-2 text-accent-700 hover:text-accent-800 font-semibold">
              Request a Strategy Call
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-400 opacity-[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary-600 opacity-[0.03] rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-accent-700 mb-4 font-medium">Start the conversation</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">Let's Talk</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              No sales pitch — just an honest discussion about your needs.
            </p>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <svg className="w-5 h-5 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Typically respond within 24hrs
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <svg className="w-5 h-5 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              100% confidential
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <svg className="w-5 h-5 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Free initial consultation
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      </main>

      <Footer />
    </div>
  )
}
