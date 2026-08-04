import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Case Studies | Fractional CTO & CFO Client Outcomes',
  description: 'How Codenest scaled Rungway from 5 to 1,000+ concurrent users, modernised payment infrastructure at Opayo, and delivered a compliant MVP for AstraZeneca.',
  openGraph: {
    title: 'Codenest Case Studies — Client Outcomes',
    description: 'Startup outcomes, backed by enterprise-grade experience. Rungway, Opayo by Elavon, AstraZeneca.',
    type: 'website',
    url: 'https://codenest.uk/case-studies/',
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
    canonical: 'https://codenest.uk/case-studies/',
  },
}

const caseStudies = [
  {
    title: "Rungway: Scaling a Social Mentoring Platform",
    challenge: "A London-based HR-tech startup needed fractional CTO support to scale their social mentoring platform. The system could only handle 5 concurrent users before experiencing severe performance degradation — completely inadequate for their UK enterprise client base.",
    solution: "As Rungway's interim CTO, our founder delivered a complete architectural transformation: migrating from Neo4J to a hybrid MySQL/NoSQL architecture for the primary data store (retaining Neo4J for AI/ML), implementing microservices with domain-driven design, establishing Infrastructure as Code with AWS, building CI/CD pipelines, introducing event-driven architecture with SQS, and containerizing the entire stack.",
    results: ["Scaled from 5 to 1000+ concurrent users", "Zero-downtime database migration", "Modern DevOps foundations established", "Event-driven microservices architecture"],
    tags: ["Backend Architecture", "AWS", "DevOps", "Scalability", "Microservices"],
    image: "/img/photos/case-rungway.jpg",
    imageAlt: "Data analytics dashboard showing platform scalability metrics"
  },
  {
    title: "Opayo by Elavon: Payment Platform Transformation",
    challenge: "Leading UK fintech payment provider needed Kubernetes consulting to modernize their infrastructure and integrate new payment channels (Apple Pay, Google Pay) while maintaining 100% uptime for critical transaction processing across Europe.",
    solution: "Working inside the Opayo platform team, our founder orchestrated a comprehensive AWS EKS migration with Kubernetes and Helm, implementing GitOps workflows and Infrastructure as Code using Terraform — managing the transition from monolithic architecture to microservices, establishing Jenkins CI/CD pipelines on Kubernetes, and scaling engineering culture across distributed teams.",
    results: ["Accelerated releases from every 2 weeks to multiple times per day", "Contributed to 10% revenue increase through faster feature delivery", "Reduced CI pipeline failures through automated testing", "Successfully integrated Apple Pay and Google Pay"],
    tags: ["Payment Systems", "AWS EKS", "Kubernetes", "Terraform", "GitOps", "Team Leadership"],
    image: "/img/photos/case-opayo.jpg",
    imageAlt: "Secure payment processing and mobile payment integration"
  },
  {
    title: "AstraZeneca: Drug Delivery Tracking System MVP",
    challenge: "AstraZeneca needed to replace manual spreadsheet-based drug delivery tracking with a modern web-based tool to improve efficiency and accelerate time-to-market for pharmaceutical products. The system required integration with existing workflows while maintaining regulatory compliance.",
    solution: "Our founder built a production-grade web application with REST APIs and automated CI/CD pipelines, collaborating closely with stakeholders and business analysts to define requirements and align delivery with business goals — architecting scalable deployments on Kubernetes using Docker and Jenkins (config-as-code), and establishing robust testing practices with JUnit and Spock.",
    results: ["Accelerated delivery by 40% compared to manual processes", "Cut deployment errors by 30% through automated pipelines", "Improved stakeholder confidence through transparent roadmap planning", "Delivered production-ready MVP on Kubernetes infrastructure"],
    tags: ["Healthcare", "Team Leadership", "Kubernetes", "CI/CD", "REST APIs", "Stakeholder Management"],
    image: "/img/photos/case-astrazeneca.jpg",
    imageAlt: "Healthcare technology and pharmaceutical tracking systems"
  }
]

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main id="main-content">
        <section className="pt-40 pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <p className="text-sm uppercase tracking-[0.2em] text-accent-600 mb-4 font-medium">Proven Track Record</p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">Case Studies</h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Startup outcomes, backed by enterprise-grade experience — deep, hands-on collaboration at every stage
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
                        className="w-full h-full object-cover"
                        loading="lazy"
                        width={600}
                        height={400}
                      />
                      {/* Index badge */}
                      <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md">
                        <span className="text-sm font-bold text-primary-600">{String(index + 1).padStart(2, '0')}</span>
                      </div>
                    </div>
                    <div className={`p-10 lg:p-12 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                      <h2 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-primary-700 transition-colors">{study.title}</h2>
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">Challenge</h3>
                          <p className="text-slate-600">{study.challenge}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">Solution</h3>
                          <p className="text-slate-600">{study.solution}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-accent-600 uppercase tracking-wide mb-3">Results</h3>
                          <ul className="space-y-2">
                            {study.results.map((result, i) => (
                              <li key={i} className="flex items-start">
                                <svg className="w-5 h-5 text-accent-500 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

            <div className="text-center mt-16">
              <a
                href="/contact"
                className="inline-block bg-accent-400 text-primary-900 px-8 py-4 rounded-lg text-base font-semibold hover:bg-accent-500 transition-all shadow-gold hover:shadow-gold-lg"
              >
                Request a Strategy Call
              </a>
              <p className="text-sm text-slate-500 mt-3">Free 30 minutes. No sales pitch.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
