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
  description: 'Fractional CTO client engagements led by Ankit Rana: an agentic AI platform for Regeno, payments transformation at Opayo by Elavon, a compliant MVP for AstraZeneca, and scaling Rungway to 1,000+ concurrent users.',
  openGraph: {
    title: 'Codenest Case Studies — Track Record',
    description: 'Agentic AI platform engineering, scaling, payments and regulated delivery. Regeno, Rungway, Opayo by Elavon, AstraZeneca.',
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

// `kind` is the load-bearing field. Three of these are Codenest client
// engagements — Regeno, Opayo and AstraZeneca. Only Rungway predates the firm and
// is Ankit's own track record (§13.15). Opayo and AstraZeneca were briefly
// mislabelled "Founder track record" here; corrected by the owner 5 Aug 2026,
// and §13.11 already dated Opayo as Codenest-era. Understating the client base
// is as inaccurate as overstating it. Every study states which it is.
//
// Three of these are completed engagements. Regeno is live, so it carries
// `status` and its third block is scope rather than results — the card renderer
// relabels the headings from `labels` and prints `note` instead of inventing
// figures nobody has measured yet (§4, §13.28). Fill in real numbers and drop
// `status`/`note` when the engagement produces them.
//
// `results` entries state what was built or what changed, with a bound or a
// named artefact. They must not carry a bare percentage. The claims stripped from
// the homepage under §2.2 survived here until 5 Aug 2026: "maintaining 100%
// uptime", "contributed to 10% revenue increase" (a revenue claim about a third
// party), "accelerated delivery by 40%" and "cut deployment errors by 30%" — four
// figures with no denominator and no source, on the page a diligence-minded
// investor reads hardest, directly above a study that prints "outcome figures go
// up once they are measured". If a number cannot be sourced, name the artefact
// instead.
const caseStudies = [
  {
    title: "Regeno: A Company Brain and an AI Factory",
    kind: "Codenest client engagement",
    status: "In progress",
    labels: { challenge: "The Brief", solution: "The Build", results: "What Is Being Built" },
    challenge: "Regeno builds land-management and compliance software for UK farmers, where the evidence that proves an agreement was met arrives as documents, photographs, audio and video rather than as tidy data. Two problems sat behind the AI work: knowledge the business already held that nothing could query, and a delivery backlog that no realistic amount of hiring was going to clear. Codenest was brought in to treat both as one platform problem rather than two initiatives.",
    solution: "The company brain makes Regeno's own records queryable and exposes them to agents over MCP, so that people and agents answer from what the business already knows rather than from whatever fits in a prompt. The AI factory is the delivery half. It takes a unit of work from where it already lives — a Linear ticket, a GitHub issue, a Slack message — and drives it to a merged pull request: typed workflow graphs, an isolated sandbox per run, bounded test and review loops, and a merge policy the operator sets. Every run leaves a ledger of its decisions, and writes back what it learned for the next one to recall.",
    results: [
      "Queryable layer over the organisation's own records, exposed to agents over MCP",
      "Ticket in, reviewed and tested pull request out, running unattended",
      "Typed workflow graphs: bounded retry, review and merge gates rather than one long prompt",
      "A learning loop that ranks each run's lessons back into the next"
    ],
    note: "Outcome figures go up once they are measured and the client has approved them. This engagement is still running, so there are none here yet.",
    tags: ["Agentic AI", "AI Platform Engineering", "MCP", "Cloudflare Workers", "Knowledge Retrieval", "LLMOps"],
    diagram: [
      {
        label: "Agents in production",
        detail: "Work arrives where it already lives, and leaves as a merged pull request.",
        items: ["Linear", "GitHub", "Slack"],
      },
      {
        label: "AI factory",
        detail: "The platform that makes the tenth agent cheaper than the first.",
        items: ["Workflow graphs", "Sandbox per run", "Merge gates", "Decision ledger"],
      },
      {
        label: "Company brain",
        detail: "What the business already knows, made answerable.",
        items: ["Documents", "Photos", "Audio", "Video"],
      },
    ]
  },
  {
    title: "Opayo by Elavon: Payment Platform Transformation",
    kind: "Codenest client engagement",
    challenge: "A UK payments provider needed to move off self-managed infrastructure and add new payment channels (Apple Pay, Google Pay), on a platform that had to keep processing transactions across Europe throughout.",
    solution: "Working inside the Opayo platform team from August 2019 to June 2026, Ankit led an AWS EKS migration with Kubernetes and Helm, GitOps workflows and Infrastructure as Code in Terraform, the move from a payments monolith to microservices, and Jenkins CI/CD pipelines running on Kubernetes.",
    results: ["Releases went from every two weeks to multiple times per day", "Apple Pay and Google Pay integrated as new payment channels", "Automated test gates in the pipeline, so a failing build stops before a release branch", "Monolith decomposed to microservices on AWS EKS, migrated in place"],
    tags: ["Payment Systems", "AWS EKS", "Kubernetes", "Terraform", "GitOps", "Team Leadership"],
    image: "/img/photos/case-opayo.jpg",
    imageAlt: "Secure payment processing and mobile payment integration"
  },
  {
    title: "AstraZeneca: Drug Delivery Tracking System MVP",
    kind: "Codenest client engagement",
    challenge: "AstraZeneca needed to replace manual spreadsheet-based drug delivery tracking with a modern web-based tool to improve efficiency and accelerate time-to-market for pharmaceutical products. The system required integration with existing workflows while maintaining regulatory compliance.",
    solution: "Ankit built a web application with REST APIs behind it, defining requirements with stakeholders and business analysts, deploying on Kubernetes with Docker and Jenkins as config-as-code, and putting the test suite in JUnit and Spock behind the pipeline.",
    results: ["Production-ready MVP delivered on Kubernetes infrastructure", "Spreadsheet-based tracking replaced by a single web tool", "Deployments automated end to end, with tests as a release gate", "Requirements agreed with stakeholders before each delivery increment"],
    tags: ["Healthcare", "Team Leadership", "Kubernetes", "CI/CD", "REST APIs", "Stakeholder Management"],
    image: "/img/photos/case-astrazeneca.jpg",
    imageAlt: "Healthcare technology and pharmaceutical tracking systems"
  },
  {
    title: "Rungway: Scaling a Social Mentoring Platform",
    kind: "Founder track record",
    challenge: "A London-based HR-tech startup needed its social mentoring platform rebuilt to carry an enterprise client base. The system degraded badly beyond 5 concurrent users. Ankit joined as Lead Software Engineer, with the scope of a CTO, a year before Codenest existed.",
    solution: "Ankit led the rebuild: migrating from Neo4J to a hybrid MySQL/NoSQL primary data store (keeping Neo4J for AI/ML), microservices along domain boundaries, Infrastructure as Code on AWS, CI/CD pipelines, event-driven messaging over SQS, and containerising the stack.",
    results: ["Scaled from 5 to 1,000+ concurrent users", "Zero-downtime database migration", "Event-driven microservices replacing the original architecture", "CI/CD and Infrastructure as Code established from scratch"],
    tags: ["Backend Architecture", "AWS", "DevOps", "Scalability", "Microservices"],
    image: "/img/photos/case-rungway.jpg",
    imageAlt: "Data analytics dashboard showing platform scalability metrics"
  }
]

const pageSchema = [
  breadcrumbs([{ name: 'Case Studies', path: '/case-studies/' }]),
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Codenest Case Studies',
    // Every study on this page is technical and led by Ankit. The description
    // said "technical and financial" while no financial study existed — a claim
    // the page could not back (BRANDING.md §2.2). It names both categories the
    // page holds rather than implying all four are client work (§13.15).
    description: 'Fractional CTO work led by Ankit Rana: Codenest client engagements and the founder track record behind them.',
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
// Read bottom-up: the brain is the base, the factory sits on it, agents run on
// top. Each layer names what is actually in it, which is why the panel can fill
// a column sized by the prose beside it.
//
// Connectors are a fixed height on purpose. They used to be `flex-1` so the
// stack stretched to the text column, which at 1440px meant 234px of content
// pulled across 983px — three small boxes joined by 300px hairlines. Height
// belongs to the layers; the connector only has to show direction.
function PlatformDiagram({ layers }) {
  return (
    <div className="h-full bg-primary-800 px-8 pb-8 pt-16 lg:px-10 flex flex-col">
      <p className="text-xs uppercase tracking-[0.2em] text-accent-300 font-medium">How the platform stacks</p>

      {/* Label pinned top, footnote pinned bottom, stack centred between them.
          Centring the whole panel instead left the eyebrow floating 348px down
          its own panel, which reads as a mistake rather than as composition. */}
      <div className="flex-1 flex flex-col justify-center py-10">
      {layers.map((layer, i) => (
        <Fragment key={layer.label}>
          <div className="rounded-xl border border-primary-600 bg-primary-700 px-6 py-6">
            <p className="text-white font-semibold mb-1">{layer.label}</p>
            <p className="text-slate-300 text-sm leading-relaxed mb-3">{layer.detail}</p>
            <div className="flex flex-wrap gap-1.5">
              {layer.items.map((item) => (
                <span key={item} className="px-2 py-0.5 rounded bg-primary-800 text-slate-300 text-xs">
                  {item}
                </span>
              ))}
            </div>
          </div>
          {/* Grows to share the column's slack, but capped. Uncapped `flex-1`
              turned these into 300px hairlines beside a tall block of prose. */}
          {i < layers.length - 1 && (
            <div className="flex-1 min-h-[2.5rem] max-h-28 flex flex-col items-center justify-center gap-1" aria-hidden="true">
              <svg className="w-4 h-4 text-accent-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
              <span className="w-px flex-1 bg-primary-600" />
            </div>
          )}
        </Fragment>
      ))}
      </div>

      <p className="text-xs text-slate-400 leading-relaxed border-t border-primary-700 pt-4">
        Read bottom-up: the company brain is the base, and agents run on top of it.
      </p>
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
                Client engagements and the founder track record behind them, led by Ankit Rana, Fractional CTO. Each is labelled for which it is
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
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-accent-700 font-semibold">{study.kind}</p>
                        {study.status && (
                          <span className="px-3 py-1 rounded-full border border-accent-300 bg-accent-50 text-accent-800 text-xs font-semibold uppercase tracking-wide">
                            {study.status}
                          </span>
                        )}
                      </div>
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
