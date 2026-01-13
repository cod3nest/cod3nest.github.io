import Image from 'next/image'
import Navigation from './components/Navigation'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import ServiceCard from './components/ServiceCard'
import ClientLogos from './components/ClientLogos'

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
    },
    {
      title: "Due Diligence",
      benefit: "Satisfy investors with comprehensive assessments",
      description: "Technical and financial due diligence that gives investors confidence. We identify risks, validate scalability, and create actionable roadmaps.",
      image: "/img/photos/service-diligence.jpg",
      outcomes: ["Investor-ready reports", "Risk mitigation plan", "Scalability roadmap"],
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
      question: "Do you handle both technical and financial leadership?",
      answer: "Yes. Many startups need both CTO and CFO guidance but can't justify two executive hires. We offer integrated leadership covering technology architecture, financial planning, and investor relations."
    },
    {
      question: "Do you work with non-technical founders?",
      answer: "Absolutely. Many of our clients are first-time founders without technical or financial backgrounds. We excel at translating complex concepts into clear business terms."
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
      answer: "Yes. We offer retainer arrangements for post-launch support, scaling assistance, and continued technical and financial leadership."
    },
    {
      question: "What makes you different from a dev shop?",
      answer: "Dev shops execute your specifications. We provide strategic leadership first — helping you figure out what to build, how to fund it, and how to set up your team for long-term success."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="pt-44 pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400 mb-8">
                Fractional CTO & CFO for UK Startups
              </p>
              <h1 className="font-serif text-5xl md:text-6xl font-normal text-slate-900 leading-[1.1] mb-6">
                Technical & Financial Leadership,<br />
                <span className="italic">Without the Overhead</span>
              </h1>
              <p className="text-xl text-slate-600 mb-6 leading-relaxed max-w-lg">
                Scale faster with enterprise-grade systems and investor-ready financial rigour — without hiring full-time executives.
              </p>
              <ul className="space-y-3 mb-8 max-w-lg">
                <li className="flex items-center text-slate-700">
                  <svg className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Save 60-80% vs full-time executive hires
                </li>
                <li className="flex items-center text-slate-700">
                  <svg className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Investor-ready in weeks, not months
                </li>
                <li className="flex items-center text-slate-700">
                  <svg className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  100% due diligence pass rate
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-primary-600 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-primary-700 transition-all text-center shadow-lg hover:shadow-xl">
                  Book a Strategy Call
                </a>
                <a href="#case-studies" className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg text-base font-semibold hover:border-primary-400 hover:text-primary-700 transition-all text-center">
                  View Case Studies
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden h-[520px]">
                <Image
                  src="/img/photos/hero-team.jpg"
                  alt="Technical and financial team collaborating on startup strategy"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Client Logos */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-slate-400 mb-10 uppercase tracking-widest">Trusted by leading companies</p>
          <ClientLogos />
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
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent-400">200x</div>
              <div className="text-slate-300 text-sm md:text-base">Platform scalability gains</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent-400">40%</div>
              <div className="text-slate-300 text-sm md:text-base">Average runway extension</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent-400">Series A</div>
              <div className="text-slate-300 text-sm md:text-base">Fundraises supported</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent-400">100%</div>
              <div className="text-slate-300 text-sm md:text-base">Due diligence pass rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Founders Say</h2>
            <p className="text-slate-600">Real feedback from startup leaders we've worked with</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 - Replace with named testimonial when available */}
            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">
                "They transformed our platform from handling 5 users to 1000+ concurrent users. The migration was seamless with zero downtime. Exactly the technical leadership we needed."
              </p>
              <div className="flex items-center gap-4 border-t border-slate-100 pt-4">
                {/* Avatar placeholder - replace with actual photo */}
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-semibold text-lg">
                  EL
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Engineering Lead</p>
                  <p className="text-sm text-slate-500">Rungway, London</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">
                "Their financial modeling and due diligence preparation were instrumental in closing our Series A. Investors commented on how well-organised our data room was."
              </p>
              <div className="flex items-center gap-4 border-t border-slate-100 pt-4">
                <div className="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center text-accent-700 font-semibold text-lg">
                  FC
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Founder & CEO</p>
                  <p className="text-sm text-slate-500">Fintech Startup, London</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">
                "As a non-technical founder, I needed someone who could translate business requirements into technical reality. They delivered our MVP in 10 weeks with a system that just works."
              </p>
              <div className="flex items-center gap-4 border-t border-slate-100 pt-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-semibold text-lg">
                  FC
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Founder & CEO</p>
                  <p className="text-sm text-slate-500">SaaS Startup, Manchester</p>
                </div>
              </div>
            </div>
          </div>

          {/* Review platforms - placeholder for Trustpilot/Clutch */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <div className="flex flex-wrap justify-center items-center gap-8 text-slate-400">
              <p className="text-sm">Also reviewed on:</p>
              {/* Placeholder for Trustpilot - replace with actual widget */}
              <a href="#" className="flex items-center gap-2 hover:text-slate-600 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
                <span className="text-sm font-medium">Trustpilot</span>
              </a>
              {/* Placeholder for Clutch - replace with actual widget */}
              <a href="#" className="flex items-center gap-2 hover:text-slate-600 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span className="text-sm font-medium">Clutch</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-10 md:p-16 border border-primary-100 shadow-lg">
            <div className="text-center mb-8">
              <p className="text-sm uppercase tracking-widest text-primary-600 mb-4">Best for founders who want</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">Scalable Tech, Clear Strategy, Confident Fundraising</h2>
            </div>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p className="text-center">
                We believe in <span className="font-semibold text-slate-900">scalable systems</span>, <span className="font-semibold text-slate-900">financial rigour</span>, and <span className="font-semibold text-slate-900">founder autonomy</span>.
              </p>
              <p className="text-center max-w-3xl mx-auto">
                Every foundation we build is designed to scale with you. Enterprise-grade discipline from day one.
              </p>
              <p className="text-center text-primary-600 font-semibold text-xl pt-4">
                Built to scale. Ready to raise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Tracks Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">Two Sides of Startup Leadership</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Most startups need both. We deliver both.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Technical Track */}
            <div className="bg-gradient-to-br from-primary-50 to-white border border-primary-200 rounded-xl p-10 hover:border-primary-400 hover:shadow-lg transition-all">
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
                  Fractional CTO
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
                Explore Technical Services
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Business Track */}
            <div className="bg-gradient-to-br from-accent-50 to-white border border-accent-200 rounded-xl p-10 hover:border-accent-400 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-accent-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Financial & Business Strategy</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                FP&A, business strategy, and the financial discipline that makes your startup investable.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-slate-700">
                  <svg className="w-5 h-5 text-accent-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Financial Planning & Analysis
                </li>
                <li className="flex items-center text-slate-700">
                  <svg className="w-5 h-5 text-accent-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Business Strategy
                </li>
                <li className="flex items-center text-slate-700">
                  <svg className="w-5 h-5 text-accent-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Fundraising Support
                </li>
                <li className="flex items-center text-slate-700">
                  <svg className="w-5 h-5 text-accent-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Investor Due Diligence Prep
                </li>
              </ul>
              <a href="/services/fractional-cfo" className="inline-flex items-center text-accent-700 hover:text-accent-800 font-semibold">
                Explore Financial Services
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
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">Who We Serve</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Fractional CTO and CFO services for UK startups across high-growth sectors
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
              Serving startups across London, Manchester, Edinburgh, and throughout the UK and Europe
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
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">How We Help</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Technical and financial leadership from strategy to execution
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
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">Recent Engagements</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real problems solved for real startups
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-2xl transition-shadow duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className={`relative h-80 lg:h-auto ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <img
                      src={study.image}
                      alt={study.imageAlt || study.title}
                      className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                      loading="lazy"
                      width={600}
                      height={400}
                    />
                  </div>
                  <div className={`p-10 lg:p-12 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">{study.title}</h3>
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
                        <h4 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-3">Results</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, i) => (
                            <li key={i} className="flex items-start">
                              <svg className="w-5 h-5 text-accent-600 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">How We Work</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A structured process to get you from idea to investor-ready.
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
              <p className="text-slate-600 leading-relaxed">
                Deep-dive into your vision, market, and constraints. Define your technical roadmap and path to investor readiness.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-10 border border-slate-200 relative">
              <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center mb-6 text-xl font-bold shadow-md relative z-10">
                2
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Build</h3>
              <p className="text-slate-600 leading-relaxed">
                Architect scalable systems and robust financial foundations. Technology meets investor-grade reporting.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-10 border border-slate-200 relative">
              <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center mb-6 text-xl font-bold shadow-md relative z-10">
                3
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Scale</h3>
              <p className="text-slate-600 leading-relaxed">
                Deliver a complete system ready for growth. You own everything and can operate independently.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="#contact" className="inline-flex items-center bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl">
              Start the Conversation
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">About Codenest</h2>
              <div className="space-y-5 text-slate-600 leading-relaxed text-lg">
                <p>
                  We partner with ambitious founders who need executive leadership — both technical and financial — but can't yet justify full-time hires.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Technology</h4>
                    <ul className="space-y-1 text-base">
                      <li>Platform transformations</li>
                      <li>Scalable system design</li>
                      <li>Engineering team building</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Finance</h4>
                    <ul className="space-y-1 text-base">
                      <li>Investor-ready models</li>
                      <li>Data room preparation</li>
                      <li>Board-level reporting</li>
                    </ul>
                  </div>
                </div>
                <p>
                  We've worked with fintech, healthtech, and B2B SaaS founders across the UK — helping them fundraise, build investor confidence, and scale.
                </p>
                <p className="text-slate-900 font-semibold text-xl pt-2">
                  Leadership that scales with you.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/img/photos/hero-team.jpg"
                  alt="Technical and financial leadership team collaborating on startup strategy"
                  className="w-full h-[500px] object-cover filter grayscale"
                  loading="lazy"
                  width={800}
                  height={500}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary CTA */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Scale?
          </h2>
          <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
            Book a free strategy call. No pitch — just an honest conversation about your technical and financial needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-accent-500 text-primary-900 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-accent-400 transition-all shadow-lg text-center"
            >
              Book a Strategy Call
            </a>
            <a
              href="/blog"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all text-center"
            >
              Read Our Insights
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">Common Questions</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-white rounded-lg p-6 border border-slate-200 hover:border-primary-300 transition-colors">
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

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">Let's Talk</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Schedule a conversation. No sales pitch — just an honest discussion about your technical and financial needs.
            </p>
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
