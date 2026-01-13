import Image from 'next/image'
import Navigation from './components/Navigation'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import ServiceCard from './components/ServiceCard'
import Testimonials from './components/Testimonials'

export default function Home() {
  const services = [
    // Technical Services
    {
      title: "Fractional CTO",
      benefit: "Executive-level technical leadership at a fraction of the cost",
      description: "Make confident architecture decisions, build the right team, and become investor-ready. Strategic guidance for fintech, healthtech, and SaaS startups across the UK.",
      image: "/img/photos/service-cto.jpg",
      outcomes: ["Save 60-80% vs full-time CTO", "Investor-ready in weeks", "Scale your team confidently"],
      track: "technical"
    },
    {
      title: "Financial & Business Strategy",
      benefit: "FP&A and strategic finance leadership",
      description: "Financial planning & analysis, business strategy, and investor-ready reporting. The financial discipline of a high-growth company — without the overhead.",
      image: "/img/photos/service-diligence.jpg",
      outcomes: ["Financial modeling & forecasting", "Business strategy development", "Investor-ready reporting"],
      track: "business"
    },
    {
      title: "0-to-1 Product Builds",
      benefit: "Launch your MVP in weeks, not months",
      description: "Go from idea to production-ready product with a system built to scale. No rebuilding later, no technical debt from day one.",
      image: "/img/photos/service-product.jpg",
      outcomes: ["8-12 week delivery", "Built to handle growth", "Full ownership handover"],
      track: "technical"
    },
    {
      title: "Financial Modeling",
      benefit: "Know your numbers before investors ask",
      description: "3-statement models, unit economics, and scenario planning. Financial models that stand up to due diligence scrutiny.",
      image: "/img/photos/infrastructure.jpg",
      outcomes: ["3-statement models", "Unit economics analysis", "Scenario planning"],
      track: "business"
    },
    {
      title: "AI & Data Engineering",
      benefit: "Turn AI experiments into production revenue",
      description: "Move beyond prototypes. We build production-grade LLM applications, ML pipelines, and data infrastructure that actually scale.",
      image: "/img/photos/service-ai.jpg",
      outcomes: ["Production-ready AI", "Cost-optimized inference", "Scalable data pipelines"],
      track: "technical"
    },
    {
      title: "Fundraising Support",
      benefit: "Close your round with confidence",
      description: "Pitch deck financial sections, data room preparation, and investor Q&A coaching. We've helped startups raise from pre-seed to Series A.",
      image: "/img/photos/hero-team.jpg",
      outcomes: ["Data room ready", "Financial due diligence prep", "Valuation support"],
      track: "business"
    },
    {
      title: "DevOps & Platform Engineering",
      benefit: "Deploy daily with zero downtime",
      description: "Automated infrastructure, CI/CD pipelines, and GitOps workflows. Ship confidently and iterate fast from day one.",
      image: "/img/photos/infrastructure.jpg",
      outcomes: ["Automated deployments", "Infrastructure as code", "Zero-downtime releases"],
      track: "technical"
    }
  ]

  const caseStudies = [
    {
      title: "Rungway: Scaling a Social Mentoring Platform",
      challenge: "A London-based HR-tech startup needed fractional CTO support to scale their social mentoring platform. The system could only handle 5 concurrent users before experiencing severe performance degradation — completely inadequate for their UK enterprise client base.",
      solution: "We delivered a complete architectural transformation as their interim startup CTO, migrating from Neo4J to a hybrid MySQL/NoSQL architecture for the primary data store (retaining Neo4J for AI/ML). Our team implemented microservices with domain-driven design, established Infrastructure as Code with AWS, built CI/CD pipelines, introduced event-driven architecture with SQS, and containerized the entire stack.",
      results: ["Scaled from 5 to 1000+ concurrent users", "Zero-downtime database migration", "Modern DevOps foundations established", "Event-driven microservices architecture"],
      tags: ["Backend Architecture", "AWS", "DevOps", "Scalability", "Microservices"],
      image: "/img/photos/case-rungway.jpg",
      imageAlt: "Data analytics dashboard showing platform scalability metrics"
    },
    {
      title: "Opayo by Elavon: Payment Platform Transformation",
      challenge: "Leading UK fintech payment provider needed Kubernetes consulting to modernize their infrastructure and integrate new payment channels (Apple Pay, Google Pay) while maintaining 100% uptime for critical transaction processing across Europe.",
      solution: "We orchestrated a comprehensive AWS EKS migration with Kubernetes and Helm, implementing GitOps workflows and Infrastructure as Code using Terraform. Our team managed the transition from monolithic architecture to microservices, established Jenkins CI/CD pipelines migrated to Kubernetes, and scaled engineering culture across distributed teams.",
      results: ["Accelerated releases from every 2 weeks to multiple times per day", "Contributed to 10% revenue increase through faster feature delivery", "Reduced CI pipeline failures through automated testing", "Successfully integrated Apple Pay and Google Pay"],
      tags: ["Payment Systems", "AWS EKS", "Kubernetes", "Terraform", "GitOps", "Team Leadership"],
      image: "/img/photos/case-opayo.jpg",
      imageAlt: "Secure payment processing and mobile payment integration"
    },
    {
      title: "AstraZeneca: Drug Delivery Tracking System MVP",
      challenge: "AstraZeneca needed to replace manual spreadsheet-based drug delivery tracking with a modern web-based tool to improve efficiency and accelerate time-to-market for pharmaceutical products. The system required integration with existing workflows while maintaining regulatory compliance.",
      solution: "We built a production-grade web application with REST APIs and automated CI/CD pipelines. Our team collaborated closely with stakeholders and business analysts to define requirements and align delivery with business goals. We architected scalable deployments on Kubernetes using Docker and Jenkins (config-as-code), establishing robust testing practices with JUnit and Spock.",
      results: ["Accelerated delivery by 40% compared to manual processes", "Cut deployment errors by 30% through automated pipelines", "Improved stakeholder confidence through transparent roadmap planning", "Delivered production-ready MVP on Kubernetes infrastructure"],
      tags: ["Healthcare", "Team Leadership", "Kubernetes", "CI/CD", "REST APIs", "Stakeholder Management"],
      image: "/img/photos/case-astrazeneca.jpg",
      imageAlt: "Healthcare technology and pharmaceutical tracking systems"
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
      question: "Do you work with non-technical founders?",
      answer: "Absolutely. Many of our clients are first-time founders without technical or financial backgrounds. We excel at translating complex concepts into clear business terms."
    },
    {
      question: "What's your pricing model?",
      answer: "We work on retainer for fractional leadership (monthly commitment) and fixed-fee for defined projects like MVP builds or financial modeling. Investment varies based on scope and intensity — typically 60-80% less than equivalent full-time hires."
    },
    {
      question: "Can you help with fundraising?",
      answer: "Yes. We prepare financial models, data rooms, and due diligence materials. We've supported raises from pre-seed through Series A across fintech, healthtech, and B2B SaaS."
    },
    {
      question: "What's the difference between FP&A and accounting?",
      answer: "Accountants handle compliance and historical reporting. FP&A is forward-looking: financial modeling, forecasting, unit economics, pricing strategy, and investor communications. We provide strategic finance leadership, not bookkeeping."
    },
    {
      question: "What's your tech stack expertise?",
      answer: "We specialize in cloud-native architectures (AWS, GCP), Kubernetes, Terraform, Python, Java, Postgres/Mysql, Gitops, and modern data/ML stacks. But our real value is in architectural thinking — we choose the right tools for your specific needs."
    },
    {
      question: "Do you offer ongoing support after delivery?",
      answer: "Yes. We offer retainer arrangements for post-launch support, scaling assistance, and continued technical and financial leadership. Many clients transition from intensive builds to lighter advisory after launch."
    },
    {
      question: "What makes you different from a dev shop?",
      answer: "Dev shops execute your specifications. We provide strategic leadership first — helping you figure out what to build, how to fund it, and how to set up your team for long-term success."
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

      {/* Hero Section */}
      <section id="home" className="pt-44 pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-accent-500 mb-8 font-medium">
                Boutique Advisory for Select Founders
              </p>
              <h1 className="font-serif text-5xl md:text-6xl font-normal text-slate-900 leading-[1.1] mb-6">
                Executive Firepower.<br />
                <span className="italic">Startup Agility.</span>
              </h1>
              <p className="text-xl text-slate-600 mb-6 leading-relaxed max-w-lg">
                Big 4 rigour meets founder empathy. Bespoke technical and financial leadership for ambitious UK startups — without the overhead of full-time executives.
              </p>
              <ul className="space-y-4 mb-8 max-w-lg">
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
                    <span className="font-medium">100% due diligence pass rate</span>
                    <span className="text-slate-500 text-sm block">Proven track record across 15+ startups</span>
                  </div>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-accent-400 text-primary-900 px-8 py-4 rounded-lg text-base font-semibold hover:bg-accent-500 transition-all text-center shadow-gold hover:shadow-gold-lg btn-premium">
                  Schedule a Strategy Call
                </a>
                <a href="#case-studies" className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg text-base font-semibold hover:border-accent-400 hover:text-primary-700 transition-all text-center">
                  View Case Studies
                </a>
              </div>
            </div>
            <div className="relative">
              {/* Premium gold frame effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-accent-400/30 via-accent-500/20 to-transparent rounded-2xl blur-sm" />
              <div className="relative rounded-xl overflow-hidden h-[520px] img-warm-overlay ring-1 ring-accent-400/20">
                <Image
                  src="/img/photos/hero-team.jpg"
                  alt="Strategic advisory session for startup founders"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                {/* Warm overlay for premium feel */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-400/5 to-transparent mix-blend-overlay pointer-events-none" />
              </div>
              {/* Gold accent decorations */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold-gradient opacity-20 rounded-full blur-xl" />
              <div className="absolute -top-2 -left-2 w-16 h-16 bg-gold-gradient opacity-15 rounded-full blur-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Client Logos */}
      <section className="py-12 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-slate-400 mb-8 uppercase tracking-[0.2em] font-medium">Trusted by category leaders</p>
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
                <p className="text-xs text-slate-400">HR Tech</p>
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

            {/* Additional credibility indicator */}
            <div className="hidden lg:flex items-center gap-2 px-6 py-3 border-l border-slate-200">
              <span className="text-2xl font-bold text-accent-500">15+</span>
              <span className="text-sm text-slate-500 leading-tight">Startups<br/>supported</span>
            </div>
          </div>
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
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold-gradient stat-number group-hover:scale-105 transition-transform">200x</div>
              <div className="text-slate-300 text-sm md:text-base">Platform scalability gains</div>
            </div>
            <div className="space-y-2 group">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold-gradient stat-number group-hover:scale-105 transition-transform">40%</div>
              <div className="text-slate-300 text-sm md:text-base">Average runway extension</div>
            </div>
            <div className="space-y-2 group">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold-gradient stat-number group-hover:scale-105 transition-transform">Series A</div>
              <div className="text-slate-300 text-sm md:text-base">Fundraises supported</div>
            </div>
            <div className="space-y-2 group">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold-gradient stat-number group-hover:scale-105 transition-transform">100%</div>
              <div className="text-slate-300 text-sm md:text-base">Due diligence pass rate</div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Two Tracks Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-accent-500 mb-4 font-medium">Integrated Partnership</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">Your Strategic Advisory Team</h2>
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
              <h3 className="text-2xl font-bold text-slate-900 mb-4 relative">Strategic & Financial Leadership</h3>
              <p className="text-slate-600 mb-6 leading-relaxed relative">
                Business strategy, FP&A, and the financial discipline that makes your startup investable.
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
              <a href="/services/fractional-cfo" className="inline-flex items-center text-accent-500 hover:text-accent-600 font-semibold link-gold relative">
                Explore Strategic Advisory
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
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Technical Leadership</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Architecture decisions, engineering team building, and infrastructure that scales from day one.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-slate-700">
                  <svg className="w-5 h-5 text-primary-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Fractional CTO Advisory
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
              <a href="/services/fractional-cto" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold">
                Explore Technical Advisory
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-accent-500 mb-4 font-medium">Selective Partnerships</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">Built for Ambitious Founders</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We partner with a limited number of high-potential startups across these sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-200 rounded-xl p-8 hover:border-primary-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-5">
                <svg className="w-8 h-8 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Fintech Startups</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Technical and financial leadership for fintech startups. We help you build compliant platforms, develop investor-ready financial models, and navigate FCA requirements.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-accent-600 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  PCI-DSS compliant architecture
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-accent-600 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Financial modeling for investors
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-accent-600 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  FCA regulatory guidance
                </li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-8 hover:border-primary-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-5">
                <svg className="w-8 h-8 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Healthtech Startups</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Technical and financial leadership for healthcare startups. We build compliant platforms, prepare fundraising materials, and help you scale sustainably in a regulated market.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-accent-600 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  GDPR & data protection
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-accent-600 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Investor due diligence prep
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-accent-600 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Unit economics analysis
                </li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-8 hover:border-primary-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-5">
                <svg className="w-8 h-8 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">SaaS & B2B Platforms</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Technical and financial leadership for B2B SaaS companies. We help you build scalable platforms, model SaaS metrics, and prepare for your next funding round.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-accent-600 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Multi-tenant architecture
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-accent-600 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  SaaS metrics & forecasting
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-accent-600 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Fundraising support
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-6">
              Based in London, serving ambitious founders across the UK tech ecosystem
            </p>
            <a href="#contact" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold">
              Discuss your sector-specific needs
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-sm uppercase tracking-[0.2em] text-accent-500 mb-4 font-medium">Bespoke Engagements</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">Advisory & Implementation</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Hands-on leadership from strategy through execution — not just advice from the sidelines
            </p>
          </div>

          {/* Technical Services */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-8 flex items-center">
              <span className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </span>
              Technical Leadership
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.filter(s => s.track === 'technical').map((service, index) => (
                <ServiceCard key={index} service={service} priority={index < 2} />
              ))}
            </div>
          </div>

          {/* Financial Services */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-8 flex items-center">
              <span className="w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-primary-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </span>
              Financial & Business Strategy
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.filter(s => s.track === 'business').map((service, index) => (
                <ServiceCard key={index} service={service} priority={false} />
              ))}
            </div>
          </div>

          {/* Co-founder mention */}
          <div className="mt-16 pt-12 border-t border-slate-200 text-center">
            <p className="text-slate-600">
              Building something exceptional? For the right opportunity, we also consider{' '}
              <a href="/cofounder" className="text-primary-600 hover:text-primary-700 font-medium">co-founder partnerships</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-sm uppercase tracking-[0.2em] text-accent-500 mb-4 font-medium">Proven Track Record</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">Client Partnerships</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From high-growth startups to FTSE 100 enterprises — transformational outcomes from deep, hands-on collaboration
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="group bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-2xl hover:border-accent-200 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className={`relative h-80 lg:h-auto overflow-hidden ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <img
                      src={study.image}
                      alt={study.imageAlt || study.title}
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      loading="lazy"
                      width={600}
                      height={400}
                    />
                    {/* Warm overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {/* Index badge */}
                    <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md">
                      <span className="text-sm font-bold text-primary-600">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                  </div>
                  <div className={`p-10 lg:p-12 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-primary-700 transition-colors">{study.title}</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">Challenge</h4>
                        <p className="text-slate-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">Solution</h4>
                        <p className="text-slate-600">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-accent-500 uppercase tracking-wide mb-3">Results</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, i) => (
                            <li key={i} className="flex items-start group">
                              <svg className="w-5 h-5 text-accent-500 mt-0.5 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="text-slate-700 font-medium">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {study.tags.map((tag, i) => (
                          <span key={i} className="px-2 py-1 bg-primary-50 text-primary-700 rounded text-xs font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">Want to see more examples of our work?</p>
            <a href="#contact" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold">
              Let's discuss your project
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section id="how-we-work" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-sm uppercase tracking-[0.2em] text-accent-500 mb-4 font-medium">Our Methodology</p>
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
            <a href="#contact" className="inline-flex items-center bg-accent-400 text-primary-900 px-8 py-4 rounded-lg font-semibold hover:bg-accent-500 transition-all shadow-gold hover:shadow-gold-lg btn-premium">
              Schedule a Strategy Call
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Why Founders Choose Us - Comparison Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-accent-400 mb-4 font-medium">The Right Partner</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Why Founders Choose Us</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Not every model works for every stage. Here's how we compare.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Full-time Exec */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold text-slate-400 mb-4">Full-time CTO/CFO</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-slate-400">£150-250k+ annual cost</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-slate-400">3-6 month hiring process</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-slate-400">Equity dilution required</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-slate-400">Often overkill for early stage</span>
                </li>
              </ul>
              <p className="text-xs text-slate-500 mt-4">Best for: Post-Series B</p>
            </div>

            {/* Dev Shop */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold text-slate-400 mb-4">Dev Shop / Agency</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-slate-400">Executes specs, not strategy</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-slate-400">No skin in the game</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-slate-400">Junior devs on your project</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-slate-400">No investor credibility</span>
                </li>
              </ul>
              <p className="text-xs text-slate-500 mt-4">Best for: Defined feature work</p>
            </div>

            {/* Solo Freelancer */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold text-slate-400 mb-4">Solo Freelancer</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-slate-400">Limited capacity</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-slate-400">Rarely has exec experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-slate-400">Single domain expertise</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-slate-400">Bus factor risk</span>
                </li>
              </ul>
              <p className="text-xs text-slate-500 mt-4">Best for: Specific technical tasks</p>
            </div>

            {/* Codenest - Highlighted */}
            <div className="bg-gradient-to-br from-accent-500/20 to-accent-600/10 rounded-xl p-6 border-2 border-accent-400 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent-400 text-primary-900 text-xs font-bold rounded-full">
                BEST FIT
              </div>
              <h3 className="text-lg font-bold text-accent-400 mb-4">Codenest</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-accent-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white">60-80% cost savings</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-accent-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white">Start in 1-2 weeks</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-accent-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white">Big 4 + startup experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-accent-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white">Tech + finance integrated</span>
                </li>
              </ul>
              <p className="text-xs text-accent-300 mt-4">Best for: Pre-seed to Series A</p>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond Advisory - Co-founder Section */}
      <section id="cofounder" className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400 mb-4 font-medium">Exceptional Opportunities</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Beyond Advisory: Co-founder Partnerships
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Most of our work is fractional — time-bound, cash-based, designed to make you self-sufficient. But occasionally, we meet a founder building something we can't stop thinking about.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* What we consider */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                For the right opportunity
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-600">
                  <svg className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Technical co-founder roles</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <svg className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Equity-based partnerships</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <svg className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Long-term commitment (2-5+ years)</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <svg className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Full technical leadership & ownership</span>
                </li>
              </ul>
            </div>

            {/* What makes it right */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-accent-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </span>
                What makes it "right"
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-600">
                  <span className="w-5 h-5 flex items-center justify-center text-accent-500 font-bold flex-shrink-0">1</span>
                  <span>Strong founder-market fit</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <span className="w-5 h-5 flex items-center justify-center text-accent-500 font-bold flex-shrink-0">2</span>
                  <span>Problem I'm genuinely passionate about</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <span className="w-5 h-5 flex items-center justify-center text-accent-500 font-bold flex-shrink-0">3</span>
                  <span>Clear path to meaningful scale</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <span className="w-5 h-5 flex items-center justify-center text-accent-500 font-bold flex-shrink-0">4</span>
                  <span>Values and vision alignment</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA and Note */}
          <div className="text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl mb-6"
            >
              Start a Confidential Conversation
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              <strong className="text-slate-700">Note:</strong> I take on at most one co-founder role per year. Most conversations start as advisory engagements — it's the best way to test working chemistry.
            </p>
          </div>
        </div>
      </section>

      {/* Secondary CTA */}
      <section className="py-20 bg-primary-600 relative overflow-hidden">
        {/* Gold accent decorations */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent-400 opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-400 opacity-5 rounded-full translate-x-1/3 translate-y-1/3" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="text-sm uppercase tracking-[0.2em] text-accent-400 mb-4 font-medium">Limited Availability</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Partner?
          </h2>
          <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
            We take on a limited number of new partnerships each quarter. Schedule a confidential strategy session to explore fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-accent-400 text-primary-900 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-accent-500 transition-all shadow-gold hover:shadow-gold-lg text-center btn-premium"
            >
              Schedule a Strategy Call
            </a>
            <a
              href="/blog"
              className="border-2 border-accent-400/50 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-accent-400/10 hover:border-accent-400 transition-all text-center"
            >
              Read Our Insights
            </a>
          </div>
        </div>
      </section>

      {/* Featured Insights Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-accent-500 mb-3 font-medium">Resources</p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900">Featured Insights</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="/blog/fractional-cto-vs-full-time-cto-uk-startups" className="group p-5 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
              <span className="text-xs font-medium text-accent-600 uppercase tracking-wide">Guide</span>
              <h3 className="text-lg font-semibold text-slate-900 mt-2 group-hover:text-primary-600 transition-colors">Fractional vs Full-Time CTO: The Real Cost Analysis</h3>
              <p className="text-sm text-slate-600 mt-2">Beyond salary: hidden costs and strategic trade-offs for UK startups.</p>
            </a>
            <a href="/blog/financial-modeling-seed-stage-startups" className="group p-5 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
              <span className="text-xs font-medium text-accent-600 uppercase tracking-wide">Finance</span>
              <h3 className="text-lg font-semibold text-slate-900 mt-2 group-hover:text-primary-600 transition-colors">Financial Modeling for Seed-Stage Startups</h3>
              <p className="text-sm text-slate-600 mt-2">What investors actually want to see in your financial model.</p>
            </a>
            <a href="/blog/investor-due-diligence-what-to-expect" className="group p-5 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
              <span className="text-xs font-medium text-accent-600 uppercase tracking-wide">Fundraising</span>
              <h3 className="text-lg font-semibold text-slate-900 mt-2 group-hover:text-primary-600 transition-colors">What Investors Look for in Due Diligence</h3>
              <p className="text-sm text-slate-600 mt-2">Prepare your data room and avoid common pitfalls.</p>
            </a>
          </div>
          <div className="text-center mt-8">
            <a href="/blog" className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-2">
              View all insights
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-accent-500 mb-4 font-medium">Got questions?</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4">Common Questions</h2>
            <p className="text-slate-600">Everything you need to know about working with us</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-white rounded-xl border border-slate-200 hover:border-accent-300 hover:shadow-md transition-all overflow-hidden">
                <summary className="font-semibold text-lg text-slate-900 cursor-pointer list-none flex items-center justify-between p-6 hover:bg-slate-50 transition-colors">
                  <span className="flex items-center gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-accent-100 rounded-full flex items-center justify-center text-accent-600 text-sm font-bold group-open:bg-accent-500 group-open:text-white transition-colors">
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
            <a href="#contact" className="inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 font-semibold">
              Let's chat
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
            <p className="text-sm uppercase tracking-[0.2em] text-accent-500 mb-4 font-medium">Start the conversation</p>
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

      <Footer />
    </div>
  )
}
