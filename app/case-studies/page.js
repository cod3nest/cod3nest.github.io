import { Fragment } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import JsonLd from '../components/JsonLd'
import { breadcrumbs, ORGANIZATION_ID, WEBSITE_ID } from '../../lib/schema'

// Every study on this page is technical. The title claimed "CTO & CFO Outcomes"
// against no CFO content at all, and the description opened "How Codenest scaled
// Rungway", which attributes founder track record to the firm (§13.15). Both now
// say what the page holds. Restore the dual framing when the CFO seat has studies
// of its own, and not before.
export const metadata = {
  title: 'Case Studies: Fractional CTO Engagements',
  description: 'Technical engagements led by Ankit Rana, Fractional CTO: an agentic AI platform at Regono, scaling Rungway to 1,000+ concurrent users, transforming payments at Opayo, and a compliant MVP for AstraZeneca.',
  openGraph: {
    title: 'Codenest Case Studies — Track Record',
    description: 'Agentic AI platform engineering, scaling, payments and regulated delivery. Regono, Rungway, Opayo by Elavon, AstraZeneca.',
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

// Three of these are completed engagements with measured outcomes. Regono is
// live, so it carries `status` and its third block is scope rather than results
// — the card renderer relabels the headings from `labels` and prints `note`
// instead of inventing figures nobody has measured yet (§4, §13.28). Fill in
// real numbers and drop `status`/`note` when the engagement produces them.
const caseStudies = [
  {
    title: "Regono: A Company Brain and an AI Factory",
    status: "Engagement in progress",
    labels: { challenge: "The Brief", solution: "The Build", results: "What Is Being Built" },
    challenge: "Most companies meet AI twice over: institutional knowledge spread across documents, tools and people's heads with no way to query it, and AI pilots that arrive one at a time with nothing shared underneath them. This engagement treats both as a single platform problem rather than two initiatives.",
    solution: "Ankit is building the company brain first: a retrieval layer over Regono's own documents, systems and process, so that people and agents answer from what the business already knows rather than from whatever fits in a prompt. The AI factory sits on top of it: shared agent scaffolding, an evaluation harness, guardrails, and the deployment and observability that agents need once they are doing real work. It exists so the tenth agent does not cost what the first one did.",
    results: [
      "Retrieval layer over internal knowledge sources",
      "Shared agent scaffolding and an evaluation harness",
      "Guardrails, deployment and observability for production agents",
      "One platform for agent delivery, rather than a build per project"
    ],
    note: "Outcome figures go up once they are measured and the client has approved them. This engagement is still running, so there are none here yet.",
    tags: ["Agentic AI", "AI Platform Engineering", "Knowledge Retrieval", "Evaluation & Guardrails", "LLMOps"],
    diagram: [
      { label: "Agents in production", detail: "Doing real work, watched" },
      { label: "AI factory", detail: "Scaffolding, evaluation, deployment" },
      { label: "Company brain", detail: "Retrieval over internal knowledge" },
    ]
  },
  {
    title: "Rungway: Scaling a Social Mentoring Platform",
    challenge: "A London-based HR-tech startup needed fractional CTO support to scale their social mentoring platform. The system could only handle 5 concurrent users before experiencing severe performance degradation — completely inadequate for their UK enterprise client base.",
    solution: "As Rungway's interim CTO, Ankit delivered a complete architectural transformation: migrating from Neo4J to a hybrid MySQL/NoSQL architecture for the primary data store (retaining Neo4J for AI/ML), implementing microservices with domain-driven design, establishing Infrastructure as Code with AWS, building CI/CD pipelines, introducing event-driven architecture with SQS, and containerizing the entire stack.",
    results: ["Scaled from 5 to 1000+ concurrent users", "Zero-downtime database migration", "Modern DevOps foundations established", "Event-driven microservices architecture"],
    tags: ["Backend Architecture", "AWS", "DevOps", "Scalability", "Microservices"],
    image: "/img/photos/case-rungway.jpg",
    imageAlt: "Data analytics dashboard showing platform scalability metrics"
  },
  {
    title: "Opayo by Elavon: Payment Platform Transformation",
    challenge: "Leading UK fintech payment provider needed Kubernetes consulting to modernize their infrastructure and integrate new payment channels (Apple Pay, Google Pay) while maintaining 100% uptime for critical transaction processing across Europe.",
    solution: "Working inside the Opayo platform team from August 2019 to June 2026, Ankit orchestrated a comprehensive AWS EKS migration with Kubernetes and Helm, implementing GitOps workflows and Infrastructure as Code using Terraform — managing the transition from monolithic architecture to microservices, establishing Jenkins CI/CD pipelines on Kubernetes, and scaling engineering culture across distributed teams.",
    results: ["Accelerated releases from every 2 weeks to multiple times per day", "Contributed to 10% revenue increase through faster feature delivery", "Reduced CI pipeline failures through automated testing", "Successfully integrated Apple Pay and Google Pay"],
    tags: ["Payment Systems", "AWS EKS", "Kubernetes", "Terraform", "GitOps", "Team Leadership"],
    image: "/img/photos/case-opayo.jpg",
    imageAlt: "Secure payment processing and mobile payment integration"
  },
  {
    title: "AstraZeneca: Drug Delivery Tracking System MVP",
    challenge: "AstraZeneca needed to replace manual spreadsheet-based drug delivery tracking with a modern web-based tool to improve efficiency and accelerate time-to-market for pharmaceutical products. The system required integration with existing workflows while maintaining regulatory compliance.",
    solution: "Ankit built a production-grade web application with REST APIs and automated CI/CD pipelines, collaborating closely with stakeholders and business analysts to define requirements and align delivery with business goals — architecting scalable deployments on Kubernetes using Docker and Jenkins (config-as-code), and establishing robust testing practices with JUnit and Spock.",
    results: ["Accelerated delivery by 40% compared to manual processes", "Cut deployment errors by 30% through automated pipelines", "Improved stakeholder confidence through transparent roadmap planning", "Delivered production-ready MVP on Kubernetes infrastructure"],
    tags: ["Healthcare", "Team Leadership", "Kubernetes", "CI/CD", "REST APIs", "Stakeholder Management"],
    image: "/img/photos/case-astrazeneca.jpg",
    imageAlt: "Healthcare technology and pharmaceutical tracking systems"
  }
]

const pageSchema = [
  breadcrumbs([{ name: 'Case Studies', path: '/case-studies/' }]),
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Codenest Case Studies',
    // Every study on this page is a technical engagement led by Ankit. The
    // description said "technical and financial" while no financial study
    // existed — a claim the page could not back (BRANDING.md §2.2).
    description: 'Technical leadership engagements led by Ankit Rana, Fractional CTO.',
    itemListElement: caseStudies.map((study, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: study.title,
    })),
  },
]

// Stands in for the photograph on studies that have no usable one. The only AI
// image in `public/img/photos` is a blue 3D "AI" render that is off-palette and
// says nothing; a labelled stack of the actual layers carries more information
// than a stock photo would, and stays in brand colours (§7).
function PlatformDiagram({ layers }) {
  return (
    <div className="h-full bg-primary-800 px-8 pb-8 pt-16 lg:px-10 lg:pb-10 flex flex-col">
      <p className="text-xs uppercase tracking-[0.2em] text-accent-300 mb-6 font-medium">How the platform stacks</p>
      {layers.map((layer, i) => (
        <Fragment key={layer.label}>
          <div className="rounded-xl border border-primary-600 bg-primary-700 px-5 py-4">
            <p className="text-white font-semibold">{layer.label}</p>
            <p className="text-slate-300 text-sm">{layer.detail}</p>
          </div>
          {/* The connector grows, so the stack fills a column sized by the text
              beside it instead of floating in the middle of a tall void. */}
          {i < layers.length - 1 && (
            <div className="flex-1 min-h-[2.5rem] flex flex-col items-center py-2" aria-hidden="true">
              <svg className="w-4 h-4 text-accent-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
              <span className="w-px flex-1 bg-primary-600" />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  )
}

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd schema={pageSchema} />
      <Navigation />

      <main id="main-content">
        <section className="pt-28 md:pt-40 pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <p className="text-sm uppercase tracking-[0.2em] text-accent-700 mb-4 font-medium">Proven Track Record</p>
              {/* Carries the target term, per §8. A bare "Case Studies" h1 sat
                  under a title that named the service and matched neither. */}
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">Fractional CTO Case Studies</h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Technical engagements led by Ankit Rana, Fractional CTO. Agentic AI platforms, scaling, payments and regulated delivery
              </p>
            </div>

            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <div key={index} className="group bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-2xl hover:border-accent-200 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Photo cards get a fixed mobile height so the crop stays
                        consistent; the diagram sizes to its own content instead,
                        because a fixed 20rem box would clip the bottom layer. */}
                    <div className={`relative overflow-hidden ${study.diagram ? '' : 'h-80'} lg:h-auto ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                      {study.diagram ? (
                        <PlatformDiagram layers={study.diagram} />
                      ) : (
                        <img
                          src={study.image}
                          alt={study.imageAlt || study.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          width={600}
                          height={400}
                        />
                      )}
                      {/* Index badge */}
                      <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md">
                        <span className="text-sm font-bold text-primary-600">{String(index + 1).padStart(2, '0')}</span>
                      </div>
                    </div>
                    <div className={`p-10 lg:p-12 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                      {study.status && (
                        <p className="inline-block mb-4 px-3 py-1 rounded-full border border-accent-300 bg-accent-50 text-accent-800 text-xs font-semibold uppercase tracking-wide">
                          {study.status}
                        </p>
                      )}
                      <h2 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-primary-700 transition-colors">{study.title}</h2>
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">{study.labels?.challenge || 'Challenge'}</h3>
                          <p className="text-slate-600">{study.challenge}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">{study.labels?.solution || 'Solution'}</h3>
                          <p className="text-slate-600">{study.solution}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-accent-700 uppercase tracking-wide mb-3">{study.labels?.results || 'Results'}</h3>
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
                          {study.note && (
                            <p className="mt-4 text-sm text-slate-500 border-l-2 border-slate-200 pl-4">{study.note}</p>
                          )}
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
                href="/contact/"
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
