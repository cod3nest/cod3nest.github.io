import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import { seatCta, EXTERNAL_LINK_PROPS } from '../../../lib/booking'
import Button from '../../components/Button'
import Footer from '../../components/Footer'
import PrincipalBand from '../../components/PrincipalBand'
import SoundsFamiliar from '../../components/SoundsFamiliar'
import FirstNinetyDays from '../../components/FirstNinetyDays'
import JsonLd from '../../components/JsonLd'
import { breadcrumbs, ORGANIZATION_ID, WEBSITE_ID } from '../../../lib/schema'

// No "London" in the title or keywords. The registered office is in Surrey and
// the site publishes no London address, so a city in the title was an implied
// geographic claim nothing on the site supported. `areaServed` is the United
// Kingdom, and the title now matches it. (BRANDING.md §13.25.)
export const metadata = {
  title: 'Fractional CTO Services for UK Startups',
  description: 'Fractional CTO for UK startups at pre-seed and seed. Agentic AI engineering, architecture, hiring and due diligence prep. Free 30-minute strategy call.',
  keywords: ['fractional CTO UK', 'part-time CTO', 'startup CTO', 'technical leadership', 'CTO as a service', 'interim CTO UK', 'agentic AI engineering', 'fractional CTO AI', 'startup technical leadership'],
  openGraph: {
    title: 'Fractional CTO Services for UK Startups | Codenest',
    description: 'Engineering rigour, agentic AI delivery and technical leadership for UK startups.',
    type: 'website',
    url: 'https://codenest.uk/services/fractional-cto/',
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
    canonical: 'https://codenest.uk/services/fractional-cto/',
  },
}

const ctoBreadcrumbs = breadcrumbs([
  { name: 'Services', path: '/services/' },
  { name: 'Fractional CTO', path: '/services/fractional-cto/' },
])

export default function FractionalCTOPage() {
  const cta = seatCta('cto')
  const benefits = [
    {
      title: "Save 60-80% vs Full-Time",
      description: "Get executive-level technical guidance at a fraction of the cost of a full-time CTO hire.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Investor-Ready Architecture",
      description: "Build systems that pass technical due diligence and give investors confidence in your technology.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Scale Your Team Confidently",
      description: "Get help hiring, structuring, and leading your engineering team as you grow.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Ship Faster, Break Less",
      description: "Implement GitOps, CI/CD, and infrastructure as code from day one for rapid, reliable delivery.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ]

  // Drafted from what this page already says the seat delivers (23 Nov 2026).
  // Owner to confirm each phase before it is treated as settled.
  const firstNinetyDays = [
    {
      days: '1-30',
      name: 'Assess, then fix',
      work: 'The first two weeks go on the codebase, the infrastructure and the delivery process, and the people who built them. The rest of the month goes on the fixes that cost least and matter most.',
      keep: 'A written assessment by the end of week two, with the risks ranked by cost and consequence, and the first of those fixes done.',
    },
    {
      days: '31-60',
      name: 'Decide and write it down',
      work: 'The architecture and technology decisions the next year depends on, made with you and recorded with their trade-offs. Delivery gets a cadence: reviewed changes, automated tests and deployments.',
      keep: 'Written architecture decisions, and a delivery process that does not depend on any one person.',
    },
    {
      days: '61-90',
      name: 'Tie it to the money',
      work: 'The technical roadmap mapped to the milestones your next round is meant to fund, and the hiring plan matched to the one the financial model pays for.',
      keep: 'A roadmap, a hiring plan, and documentation a diligence team can read without us in the room.',
    },
  ]

  // Drafted 23 Nov 2026, confirmed by the owner 24 Nov 2026. Each item is a situation the
  // page goes on to answer; none carries a figure or an outcome.
  const situations = [
    {
      title: 'You are about to commit to a build you cannot judge.',
      body: 'An agency quote, a freelancer\'s estimate, a stack someone swears by. Each sounds plausible, and nobody on your side can tell you which one is right.',
    },
    {
      title: 'The MVP worked. Now it is in the way.',
      body: 'It won the first users. It cannot take the next feature, the pivot or a second kind of customer, and someone has already said the word "rewrite".',
    },
    {
      title: 'Your first engineering hire will set the bar for the rest.',
      body: 'You can judge a pitch, not a senior engineer. Getting this hire wrong costs months of roadmap, not one salary.',
    },
    {
      title: 'Engineering spend is rising. Output is not.',
      body: 'More contractors, more tools, the same roadmap. Nobody inside the business can say what the spend should be buying.',
    },
    {
      title: 'A round is coming, and so is technical due diligence.',
      body: 'You do not know what an investor\'s reviewer will find in the code, the infrastructure or the IP, and you would rather find it first.',
    },
    {
      title: 'AI is on the roadmap and nobody owns it.',
      body: 'The demo took a weekend. Putting it into production with evaluation, guardrails and a cost you can predict is a different job.',
    },
  ]

  const services = [
    "Technical strategy and roadmap development",
    "Architecture design and review",
    "Agentic AI strategy and delivery",
    "LLM evaluation, guardrails and cost control",
    "Technology selection and evaluation",
    "Engineering team structure and hiring",
    "Code review and quality standards",
    "DevOps and infrastructure guidance",
    "Vendor and contractor management",
    "Technical due diligence preparation",
    "Board and investor presentations",
    "Mentoring junior technical leaders",
  ]

  // The capability the market is asking for right now, given its own band rather
  // than a bullet inside "What We Do". Each block describes work Codenest does,
  // not a claim about results — the Regeno engagement is live and its outcome
  // figures are not published yet (§13.28).
  const agenticLayers = [
    {
      title: "The company brain",
      description: "One queryable layer over your own documents, records and process, exposed to agents over MCP, so that people and agents answer from what the business already knows rather than from whatever fits in a prompt.",
    },
    {
      title: "The AI factory",
      description: "The platform underneath agent delivery: typed workflow graphs, an isolated sandbox per run, bounded test and review loops, merge gates you control, and a ledger of every decision. It is what stops the tenth agent costing what the first one did.",
    },
    {
      title: "Evaluation and learning",
      description: "An agent with no evaluation harness is a demo. Measurement goes in before volume does, and what each run learns is captured and recalled into the next, so the system gets cheaper as it runs rather than dearer.",
    },
    {
      title: "Cost and latency discipline",
      description: "Model choice, routing, caching and context hygiene. Inference bills scale with usage, and left alone they scale faster than the usage does.",
    },
  ]

  // How AI work starts (owner, 24 Nov 2026): discovery maps the business process
  // before anything is built. Describes the method, not results (§13.28).
  const aiProcessSteps = [
    {
      title: "Map the process",
      description: "Discovery starts with how the work actually gets done: who does what, where it waits, where data is typed in twice, and where the judgement sits.",
    },
    {
      title: "Find where AI removes work",
      description: "Then we mark the steps AI can take over, the ones it should only assist, and the ones it should leave alone. Where the process itself is unclear, that gets fixed first.",
    },
    {
      title: "Build small, then measure",
      description: "The smallest version that proves the time saved, with an evaluation in place before it handles volume. What works is kept; what does not is switched off.",
    },
  ]

  // The company brain as a deliverable (owner, 24 Nov 2026). Codenest runs its own,
  // which is what the closing line claims; client builds stay with the client.
  const companyBrainBenefits = [
    "What people know stays when they leave: decisions and the reasons for them, suppliers, and how the systems fit together.",
    "New starters get up to speed by asking it, not by borrowing a colleague's afternoon.",
    "Answers cite their sources, so people can check them rather than take them on trust.",
    "Documentation and key-person cover that a diligence team can inspect.",
    "Agents answer from what the business already knows, not from whatever fits in a prompt.",
  ]

  const faqs = [
    {
      question: "Do you build agentic AI, or only advise on it?",
      answer: "Build. Regeno is a current Codenest client, and the engagement is a company brain and an AI factory: a queryable layer over their own records, and a delivery platform that takes a ticket from Linear, GitHub or Slack and drives it to a merged pull request unattended. The person advising on the architecture is the person writing it."
    },
    {
      question: "Who owns the company brain when the engagement ends?",
      answer: "You do. It is built in your own accounts from your own documents, and it stays with you, with the documentation behind it, when the engagement ends. A knowledge base that left with the people who built it would recreate the key-person risk it exists to remove."
    },
    {
      question: "Everyone is telling us to build AI agents. How do you decide whether we should?",
      answer: "By asking what breaks if you do nothing. Agents earn their place on work that is repetitive, judgement-light, and already written down somewhere. Where the process itself is undefined, an agent automates the confusion faster. We will tell you when that is what we see."
    },
    {
      // Replaces the consultant-only question rather than adding an eleventh, so the
      // CTO and CFO pages keep the same FAQ count. It also carries the search terms
      // founders use for the same seat (competitor comparison, 23 Nov 2026).
      question: "Fractional, part-time, interim, CTO as a service, consultant: what's the difference?",
      answer: "Fractional and part-time CTO mean the same thing: a senior technical leader who holds the seat for a set number of days a month, ongoing. CTO as a service is the same arrangement under another name. An interim CTO covers a gap full time, usually between permanent hires, for a fixed period. A consultant hands you a recommendation and leaves. A fractional CTO is in your standups and your Slack, owns the technical outcome, and is still there when the decision has to survive contact with production. We work fractionally; if what you need is interim cover, say so on the call and we will tell you whether we can do it."
    },
    {
      question: "How many hours per week do you typically work?",
      answer: "Engagements typically range from 8-20 hours per week, depending on your stage and needs. We can flex up during critical periods like fundraising or major launches."
    },
    {
      question: "When should a startup hire a fractional CTO?",
      answer: "Ideal timing is when you need technical leadership for strategic decisions but aren't ready for a £150-200k+ full-time hire. For us, that means pre-seed and seed."
    },
    {
      question: "Can you help us hire a full-time CTO eventually?",
      answer: "Yes. Part of our role is building the foundation for your permanent leadership. We help define the role, source candidates, and ensure a smooth transition when you're ready."
    },
    {
      question: "Do you work with non-technical founders?",
      answer: "Yes, and it is a large part of the job. The work is translation as much as architecture: what a decision costs, what it forecloses, and what you are actually buying when an engineer recommends something. You should never have to take a technical answer on trust."
    },
    {
      question: "What's your tech stack expertise?",
      answer: "We specialise in cloud-native architectures (AWS, GCP), Kubernetes, Terraform, Python, Java, Postgres/MySQL, GitOps, and agentic AI stacks: LLM orchestration, retrieval, evaluation and guardrails. But our real value is in architectural thinking — we choose the right tools for your specific needs."
    },
    {
      question: "What makes you different from a dev shop?",
      answer: "Dev shops execute your specifications. We provide strategic leadership first, helping you figure out what to build, how to fund it, and how to set up your team for long-term success."
    },
    {
      question: "Do you offer ongoing support after delivery?",
      answer: "Yes. A build usually steps down into a lighter retainer once it is live: scaling questions, hiring, and the architecture decisions that only surface under real load. The step down is planned, not improvised at the end."
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
    name: 'Fractional CTO Services',
    description: 'Part-time technical leadership for startups. Architecture, agentic AI engineering, team building, and strategic guidance.',
    // Reference the root layout's ProfessionalService by @id rather than
    // restating it: a second, differently-shaped Organization node for the same
    // business invites Google to treat them as two companies.
    provider: { '@id': ORGANIZATION_ID },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom'
    },
    serviceType: 'Technical Leadership Consulting'
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

      <JsonLd schema={ctoBreadcrumbs} />
      <Navigation />

      <main id="main-content">

      {/* Hero Section */}
      <section className="pt-28 md:pt-40 pb-24 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
                Technical Leadership
              </div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Fractional CTO Services
              </h1>
              <p className="text-xl text-slate-600 mb-4 leading-relaxed">
                Engineering rigour and technical leadership for ambitious startups. Make confident architecture decisions, put agentic AI into production, build the right team, and become investor-ready.
              </p>
              <p className="text-sm font-medium text-slate-700 mb-8">
                Retained monthly engagements, scoped to your stage &middot; typically 60-80% less than a full-time CTO
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href={cta.href} {...(cta.external ? EXTERNAL_LINK_PROPS : {})}>{cta.label}</Button>
                <Button href="/case-studies/" variant="secondary">View Case Studies</Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[450px]">
                <Image
                  src="/img/photos/service-cto.jpg"
                  alt="Fractional CTO providing technical leadership to startup team"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directly after the pitch, because that is where the question "who
          actually is this?" lands. Facts restated from /about; nothing new. */}
      <PrincipalBand
        name="Ankit Rana"
        role="Fractional CTO"
        accent="primary"
        photo={{ src: '/img/team/ankit-rana.jpg', alt: 'Ankit Rana, Fractional CTO at Codenest' }}
        credentials={['AWS Certified', '15+ years engineering', 'Kubernetes & Cloud', 'Agentic AI']}
        bio="Fifteen years building and scaling technology platforms: consumer-scale Java at Rated People and Rightmove, then leading engineering at Rungway, then regulated delivery through Codenest since 2017 across government, banking, pharma and payments. He has sat on the receiving end of technical due diligence, which is the fastest way to learn what it actually tests."
        highlights={[
          'Leads the Regeno engagement, a current Codenest client: a company brain over their own records, and an AI factory that drives a ticket to a merged pull request unattended',
          'Led engineering teams from 5 to 50+ across fintech and healthtech',
          'Ran a near seven-year platform transformation at Opayo by Elavon: AWS EKS migration, GitOps, a payments monolith moved to microservices',
          'Delivered under regulatory scrutiny for the Ministry of Justice, Tesco Bank, HSBC and AstraZeneca',
          'Rebuilt Rungway as its lead engineer, taking the platform from 5 to 1,000+ concurrent users with a zero-downtime migration',
        ]}
        proof="Rungway: 5 → 1,000+ concurrent users"
        linkedin="https://www.linkedin.com/in/arana198"
      />

      <SoundsFamiliar
        seat="cto"
        intro="Founders rarely book a call about technology for its own sake. A decision is due, and nobody on their side can judge it. These are the usual ones."
        items={situations}
      />

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-slate-900 mb-4">Why Choose a Fractional CTO?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Strategic technical leadership tailored to your startup's stage and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-primary-300 hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 text-primary-600">
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
              <h2 className="font-serif text-4xl font-bold text-slate-900 mb-6">What a Fractional CTO Does for Your Startup</h2>
              <p className="text-xl text-slate-600 mb-8">
                What the seat covers: strategy, architecture, the team, and the delivery of both.
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
            <div className="bg-white rounded-3xl p-10 border-2 border-primary-100 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Ideal For</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-8 h-8 bg-accent-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-accent-700 font-bold">1</span>
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">Pre-seed and seed startups</p>
                    <p className="text-slate-600 text-sm">Need technical leadership before you can justify a full-time hire</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-8 h-8 bg-accent-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-accent-700 font-bold">2</span>
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">Non-technical founders</p>
                    <p className="text-slate-600 text-sm">Need a technical partner to translate vision into architecture</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-8 h-8 bg-accent-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-accent-700 font-bold">3</span>
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">Teams preparing for due diligence</p>
                    <p className="text-slate-600 text-sm">Need to get investor-ready quickly with proper documentation</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FirstNinetyDays
        seat="cto"
        title="Your First 90 Days"
        intro="What the Fractional CTO seat delivers in its first three months. The order flexes to your stage and to what we find; every phase ends in something you keep."
        phases={firstNinetyDays}
      />

      {/* Agentic AI. Charcoal rather than another white card grid: this is the
          capability buyers are actively searching for, and it should not read as
          the fifth item in a list. Gold grounds stay banned (§13.22). */}
      <section className="py-24 bg-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-1">
              <p className="text-sm uppercase tracking-[0.2em] text-accent-300 mb-4 font-medium">In demand right now</p>
              <h2 className="font-serif text-4xl font-bold text-white mb-6">Agentic AI Engineering</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Most companies have AI pilots. Far fewer have anything underneath them: no shared knowledge layer, no evaluation, no way to ship the second agent faster than the first. That gap is the work.
              </p>
              <Link href="/case-studies/" className="inline-flex items-center gap-2 font-semibold text-accent-300 hover:text-accent-200">
                See the Regeno engagement
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {agenticLayers.map((layer) => (
                <div key={layer.title} className="border-l-2 border-accent-500 pl-6">
                  <h3 className="text-xl font-bold text-white mb-3">{layer.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{layer.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process first, then AI (owner, 24 Nov 2026). Slate, so it does not run into the white FAQ. */}
      <section id="ai-process" className="py-24 bg-slate-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-accent-700 mb-4 font-medium">How we use AI</p>
            <h2 className="font-serif text-4xl font-bold text-slate-900 mb-6">Process First, Then AI</h2>
            <p className="text-xl text-slate-600">
              AI earns its place on a process someone understands. So discovery starts with the business, not the model.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              With both seats, the{' '}
              <Link href="/services/fractional-cfo/#ai-finance" className="font-semibold text-accent-700 hover:text-accent-800 underline">
                Fractional CFO
              </Link>{' '}
              runs the same discovery on the finance function, and the two build it together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <ol className="space-y-10">
              {aiProcessSteps.map((step, index) => (
                <li key={step.title} className="flex items-start">
                  <span className="w-10 h-10 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mr-5 flex-shrink-0 font-bold" aria-hidden="true">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">A company brain that stays yours</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                A searchable record of how your business works, built in your own accounts. It searches by meaning, not only by keyword, so people can ask it questions in their own words.
              </p>
              <ul className="space-y-4 mb-8">
                {companyBrainBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start text-slate-700">
                    <svg className="w-5 h-5 text-accent-700 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-slate-600 border-t border-slate-200 pt-6">
                We run one ourselves: both Codenest seats work from a company brain of our own, and every answer it gives cites the note it came from.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-slate-900 mb-4">Fractional CTO Questions</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-primary-300 transition-colors">
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
          <div className="mt-12 p-6 bg-primary-50 rounded-2xl border border-primary-100 text-center">
            <p className="text-slate-700">
              Still researching? Read{' '}
              <Link href="/guides/fractional-cto-guide/" className="font-semibold text-primary-700 hover:text-primary-800 underline">
                What Is a Fractional CTO? A Guide for UK Founders
              </Link>{' '}
              or compare{' '}
              <Link href="/guides/fractional-cto-vs-full-time/" className="font-semibold text-primary-700 hover:text-primary-800 underline">
                fractional vs full-time
              </Link>{' '}
              and{' '}
              <Link href="/guides/fractional-cto-vs-agency/" className="font-semibold text-primary-700 hover:text-primary-800 underline">
                fractional vs agency
              </Link>. Raising soon? Score yourself with the free{' '}
              <Link href="/tools/technical-due-diligence-check/" className="font-semibold text-primary-700 hover:text-primary-800 underline">
                technical due diligence readiness check
              </Link>{' '}or read the{' '}
              <Link href="/blog/startup-technical-due-diligence-checklist/" className="font-semibold text-primary-700 hover:text-primary-800 underline">
                technical due diligence checklist
              </Link>. Budgeting for the seat? See{' '}
              <Link href="/blog/how-much-does-fractional-cto-cost-uk/" className="font-semibold text-primary-700 hover:text-primary-800 underline">
                what a fractional CTO costs in the UK
              </Link>{' '}and{' '}
              <Link href="/guides/fractional-cto-guide/#when-to-hire" className="font-semibold text-primary-700 hover:text-primary-800 underline">
                the seven signs it is time to hire one
              </Link>. Facing an infrastructure decision? Read{' '}
              <Link href="/blog/gitops-startup-deployment-github-actions/" className="font-semibold text-primary-700 hover:text-primary-800 underline">
                whether automating deployments is worth it
              </Link>{' '}and{' '}
              <Link href="/blog/kubernetes-startups-overkill-essential/" className="font-semibold text-primary-700 hover:text-primary-800 underline">
                whether you need Kubernetes yet
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Level Up Your Technical Leadership?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Request a free 30-minute call. No sales pitch, and we'll say so if a fractional CTO isn't what you need.
          </p>
          <a
            href={cta.href}
            {...(cta.external ? EXTERNAL_LINK_PROPS : {})}
            className="inline-block bg-accent-500 text-primary-900 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-accent-600 transition-all shadow-lg hover:shadow-xl"
          >
            {cta.label}
          </a>
        </div>
      </section>

      </main>

      <Footer />
    </div>
  )
}
