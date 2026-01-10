import Navigation from './components/Navigation'
import ContactForm from './components/ContactForm'

export default function Home() {
  const services = [
    {
      title: "Fractional CTO",
      benefit: "Get executive-level technical leadership at a fraction of the cost",
      description: "Make confident architecture decisions, build the right team, and become investor-ready. Strategic guidance for fintech, healthtech, and SaaS startups across the UK.",
      image: "/img/photos/service-cto.jpg",
      outcomes: ["Save 60-80% vs full-time CTO", "Investor-ready in weeks", "Scale your team confidently"]
    },
    {
      title: "0-to-1 Product Builds",
      benefit: "Launch your MVP in weeks, not months",
      description: "Go from idea to production-ready product with a system built to scale. No rebuilding later, no technical debt from day one.",
      image: "/img/photos/service-product.jpg",
      outcomes: ["8-12 week delivery", "Built to handle growth", "Full ownership handover"]
    },
    {
      title: "AI & Data Engineering",
      benefit: "Turn AI experiments into production revenue",
      description: "Move beyond prototypes. We build production-grade LLM applications, ML pipelines, and data infrastructure that actually scale.",
      image: "/img/photos/service-ai.jpg",
      outcomes: ["Production-ready AI", "Cost-optimized inference", "Scalable data pipelines"]
    },
    {
      title: "DevOps & Platform Engineering",
      benefit: "Deploy daily with zero downtime",
      description: "Automated infrastructure, CI/CD pipelines, and GitOps workflows. Ship confidently and iterate fast from day one.",
      image: "/img/photos/infrastructure.jpg",
      outcomes: ["Automated deployments", "Infrastructure as code", "Zero-downtime releases"]
    },
    {
      title: "Technical Due Diligence",
      benefit: "Close your funding round with confidence",
      description: "Comprehensive technical assessments that satisfy investors. We identify risks, validate scalability, and create actionable roadmaps.",
      image: "/img/photos/service-diligence.jpg",
      outcomes: ["Investor-ready reports", "Risk mitigation plan", "Scalability roadmap"]
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
      question: "Do you work with non-technical founders?",
      answer: "Absolutely. Many of our clients are first-time founders without technical backgrounds. We excel at translating technical concepts into clear business terms."
    },
    {
      question: "What's your tech stack expertise?",
      answer: "We specialize in cloud-native architectures (AWS, GCP), Kubernetes, Terraform, Python, Java, Postgres/Mysql, Gitops, and modern data/ML stacks. But our real value is in architectural thinking — we choose the right tools for your specific needs."
    },
    {
      question: "Do you offer ongoing support after delivery?",
      answer: "Yes. We offer retainer arrangements for post-launch support, scaling assistance, and continued technical leadership."
    },
    {
      question: "What makes you different from a dev shop?",
      answer: "Dev shops execute your specifications. We provide strategic technical leadership first — helping you figure out what to build, how to build it sustainably, and how to set up your team for long-term success."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="pt-40 pb-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* Business benefit tagline */}
              <p className="text-accent-600 font-semibold text-lg mb-4 tracking-wide">
                Ship faster. Scale smarter. Save CTO budget.
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
                Technical Leadership Without the Full-Time Cost
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-4 leading-relaxed">
                We help startups go from idea to scalable product in weeks, not months.
              </p>
              <p className="text-lg text-slate-700 mb-8">
                Fractional CTO services for UK startups. Get enterprise-grade architecture, automated infrastructure, and hands-on engineering leadership, without hiring a full-time technical executive.
              </p>
              {/* Benefits strip */}
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="flex items-center text-sm text-slate-600">
                  <svg className="w-5 h-5 text-accent-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Reduce time to market
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <svg className="w-5 h-5 text-accent-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Scale without rebuilding
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <svg className="w-5 h-5 text-accent-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Investor-ready systems
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-accent-500 text-primary-900 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-accent-600 transition-all shadow-lg hover:shadow-xl text-center">
                  Book a Free Discovery Call
                </a>
                <a href="#case-studies" className="border-2 border-primary-600 text-primary-700 px-8 py-4 rounded-2xl text-lg font-semibold hover:border-primary-700 hover:bg-primary-50 transition-all text-center">
                  See Our Results
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/img/photos/hero-team.jpg"
                  alt="Technical team collaborating on startup product development"
                  className="w-full h-[500px] object-cover"
                  width={800}
                  height={500}
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Client Logos */}
      <section className="py-12 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-slate-500 mb-8 uppercase tracking-wider font-medium">Trusted by engineering teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <div className="text-2xl font-bold text-slate-600">Rungway</div>
            <div className="text-2xl font-bold text-slate-600">Opayo</div>
            <div className="text-2xl font-bold text-slate-600">Elavon</div>
            <div className="text-2xl font-bold text-slate-600">AstraZeneca</div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Real Results for Real Startups</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Measurable impact from our engineering partnerships</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-accent-400">2wk → Daily</div>
              <div className="text-slate-300 text-sm md:text-base">Release frequency improvement</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-accent-400">4h → 15m</div>
              <div className="text-slate-300 text-sm md:text-base">Deployment time reduction</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-accent-400">Zero</div>
              <div className="text-slate-300 text-sm md:text-base">Downtime during migrations</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-accent-400">200x</div>
              <div className="text-slate-300 text-sm md:text-base">User capacity increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Founders Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="flex items-center mb-4">
                <div className="flex text-accent-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-slate-600 mb-6 italic">
                "They transformed our platform from handling 5 users to 1000+ concurrent users. The migration was seamless with zero downtime. Exactly the technical leadership we needed."
              </p>
              <div>
                <p className="font-semibold text-slate-900">Engineering Lead</p>
                <p className="text-sm text-slate-500">HR-Tech Startup, London</p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="flex items-center mb-4">
                <div className="flex text-accent-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-slate-600 mb-6 italic">
                "Release cycles went from every two weeks to multiple times per day. The GitOps workflows they implemented gave us the confidence to ship fast without breaking things."
              </p>
              <div>
                <p className="font-semibold text-slate-900">VP of Engineering</p>
                <p className="text-sm text-slate-500">Payment Platform, UK</p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="flex items-center mb-4">
                <div className="flex text-accent-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-slate-600 mb-6 italic">
                "As a non-technical founder, I needed someone who could translate business requirements into technical reality. They delivered our MVP in 10 weeks with a system that just works."
              </p>
              <div>
                <p className="font-semibold text-slate-900">Founder &amp; CEO</p>
                <p className="text-sm text-slate-500">SaaS Startup, Manchester</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-10 md:p-16 border-2 border-primary-100 shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Philosophy</h2>
            </div>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p className="text-center">
                We believe in <span className="font-semibold text-slate-900">infrastructure as code</span>, <span className="font-semibold text-slate-900">repeatable delivery</span>, and <span className="font-semibold text-slate-900">developer autonomy</span>.
              </p>
              <p className="text-center max-w-3xl mx-auto">
                Every system we build is designed to scale and evolve — because startups deserve enterprise-grade foundations from day one.
              </p>
              <p className="text-center text-primary-600 font-semibold text-xl pt-4">
                Speed comes from structure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Who We Serve</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Fractional CTO services for UK startups across high-growth sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-3xl p-8 hover:border-primary-300 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Fintech Startups</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Fractional CTO for fintech startups in London and across the UK. From payment platforms to lending apps, we help you navigate complex compliance requirements while building scalable, secure infrastructure.
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
                  Payment gateway integration
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-accent-600 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  FCA regulatory guidance
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-3xl p-8 hover:border-primary-300 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Healthtech Startups</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Fractional CTO for healthcare startups navigating GDPR, NHS integrations, and medical device regulations. We build secure, compliant platforms that can scale with your patient base.
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
                  NHS integration experience
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-accent-600 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Clinical data security
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-3xl p-8 hover:border-primary-300 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">SaaS & B2B Platforms</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Startup CTO expertise for UK B2B SaaS companies. We help you build multi-tenant architectures, implement usage-based billing, and scale infrastructure as you grow from 10 to 10,000 customers.
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
                  API-first design
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-accent-600 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Usage-based billing
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
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">How We Help</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Results-focused technical leadership from strategy to execution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white border border-slate-200 rounded-3xl hover:border-primary-300 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} - ${service.benefit}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                    loading="lazy"
                    width={400}
                    height={256}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-accent-600 font-semibold mb-3">{service.benefit}</p>
                  <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.outcomes.map((outcome, i) => (
                      <div key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-accent-600 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-slate-700">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Recent Work</h2>
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
                          <span key={i} className="px-3 py-1 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium">
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
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">How We Work</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A simple, three-step process to get you from idea to automated reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-3xl p-10 border border-slate-200">
              <div className="bg-primary-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-2xl font-bold shadow-lg">
                1
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Assess</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                We start with a deep-dive discovery session to understand your vision, market, and technical constraints. Then we define a clear MVP scope and technical roadmap.
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-10 border border-slate-200">
              <div className="bg-primary-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-2xl font-bold shadow-lg">
                2
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Architect</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Before writing code, we set up IaC, CI/CD, and GitOps workflows. This foundation enables rapid, safe iteration from day one.
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-10 border border-slate-200">
              <div className="bg-primary-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-2xl font-bold shadow-lg">
                3
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Automate</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                We launch your MVP with full observability, documentation, and knowledge transfer. You own the system and can iterate independently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">About Codenest</h2>
              <div className="space-y-5 text-slate-600 leading-relaxed text-lg">
                <p>
                  We've spent years engineering platforms in fast-moving startups — where every architectural choice can decide whether a product scales smoothly or collapses under pressure.
                </p>
                <p>
                  At Rungway, we were the core backend and DevOps team transforming a fragile system that could barely handle five concurrent users into a resilient platform serving thousands. That experience taught us one thing: <span className="font-semibold text-slate-900">structure enables speed.</span>
                </p>
                <p>
                  Since then, we've led architectural migrations, designed microservice ecosystems with domain-driven design, built Infrastructure as Code and CI/CD pipelines from the ground up, and scaled databases under live production load. We've also worked shoulder-to-shoulder with founders, PMs, and engineers — turning business ideas into systems that deliver at scale.
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Our core belief:</span> The fastest teams aren't the ones who skip infrastructure — they're the ones who automate it.
                </p>
                <p>
                  That's why we build every system with GitOps, IaC, and observability from day one. It's how we help startups move fast without breaking things.
                </p>
                <p className="text-slate-900 font-semibold text-xl pt-4">
                  Speed comes from structure. Let's build yours.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/img/photos/infrastructure.jpg"
                  alt="Cloud infrastructure and DevOps automation representing modern startup engineering"
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

      {/* Secondary CTA - Lead Magnet */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Not Ready to Talk Yet?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Get our free Startup Tech Readiness Checklist - 15 questions to assess if your technical foundation is ready to scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.linkedin.com/company/codenest-ltd"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-700 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-primary-50 transition-all shadow-lg text-center"
            >
              Follow Us on LinkedIn
            </a>
            <a
              href="/blog"
              className="border-2 border-white text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white/10 transition-all text-center"
            >
              Read Our Engineering Blog
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Common Questions</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-primary-300 transition-colors">
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
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Book a Free 30-Min Strategy Call</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Book a free 30-minute discovery call. No sales pitch — just an honest conversation about your technical needs.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <img
                src="/img/companylogo-light.svg"
                alt="Codenest - Fractional CTO and Startup Engineering Services"
                className="h-10 w-auto mb-4 company-logo"
              />
              <p className="text-slate-400 text-sm">
                Build a product that scales from day one — with automation-first engineering and cloud-native delivery.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#case-studies" className="text-slate-400 hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#services" className="text-slate-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#how-we-work" className="text-slate-400 hover:text-white transition-colors">Our Process</a></li>
                <li><a href="#about" className="text-slate-400 hover:text-white transition-colors">Our Story</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors">Book a Discovery Call</a></li>
                <li><a href="https://www.linkedin.com/company/codenest-ltd" className="text-slate-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-center">
            <p className="text-slate-500 text-sm">
              © 2025 Codenest. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
