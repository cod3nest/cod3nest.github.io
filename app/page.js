import Link from 'next/link'
import Button from './components/Button'
import Navigation from './components/Navigation'
import ContactForm from './components/ContactForm'
import TrustBadges from './components/TrustBadges'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'

export default function Home() {

  // Teaser data only — the full case studies live at /case-studies. Keep the
  // `kind` values identical to the ones there; this list is hand-maintained and
  // has drifted before (§13.15).
  //
  // The featured slot is the live engagement, kept out of the grid so the agentic
  // AI work leads rather than sitting as a fourth equal tile.
  const featuredStudy = {
    kind: "Codenest client engagement",
    status: "In progress",
    title: "Regeno: A Company Brain and an AI Factory",
    summary: "Agentic AI for a UK agritech platform: a queryable layer over the client's own records, and a delivery platform that takes a ticket from Linear, GitHub or Slack and drives it to a merged pull request unattended.",
    layers: ["Agents in production", "AI factory", "Company brain"],
  }

  // Per-card labels, not one heading over the grid: Opayo and AstraZeneca are
  // client engagements and only Rungway predates the firm, so a single
  // "Founder track record" caption over all three understated the client base.
  const caseStudies = [
    {
      title: "Opayo by Elavon: Payment Platform Transformation",
      kind: "Codenest client engagement",
      results: ["Releases accelerated from fortnightly to multiple times per day"]
    },
    {
      title: "AstraZeneca: Drug Delivery Tracking System MVP",
      kind: "Codenest client engagement",
      results: ["Production-ready MVP delivered on Kubernetes infrastructure"]
    },
    {
      title: "Rungway: Scaling a Social Mentoring Platform",
      kind: "Founder track record",
      results: ["Scaled from 5 to 1000+ concurrent users"]
    }
  ]


  const faqs = [
    {
      question: "How quickly can we start?",
      answer: "Most engagements start within 1-2 weeks after our initial discovery call. For urgent projects, we can mobilize faster."
    },
    {
      question: "What does a typical engagement look like?",
      answer: "Fractional CTO/CFO engagements typically run 3-6 months at 2-3 days per week. MVP builds are fixed-scope at 8-12 weeks. We tailor every engagement to your stage and needs. No cookie-cutter packages."
    },
    {
      question: "Can I engage just the CTO or just the CFO?",
      answer: "Yes. Each seat is a separate engagement — take the Fractional CTO, the Fractional CFO, or both. Founders who take both get one roadmap and one financial model built in the same conversations, rather than two advisers reconciling afterwards, but there is no requirement to buy the pair."
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

  // No Service/OfferCatalog block here. The root layout already declares the
  // company and everything it sells; this page used to restate both, and its
  // `provider` was a second ProfessionalService node for the same business
  // (BRANDING.md §8: ProfessionalService lives in the root layout ONLY). The two
  // catalogues had also drifted apart — four offers in the layout, three here.
  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navigation />

      <main id="main-content">

      {/* Hero Section */}
      {/* At 375px this hero measured 1798px tall — 2.2 screens, with the primary
          CTA below the fold. Every size below steps up at a breakpoint rather
          than carrying its desktop value down to mobile. */}
      <section id="home" className="pt-28 md:pt-44 pb-20 md:pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-accent-700 mb-6 md:mb-8 font-medium animate-hero-1">
                Fractional CTO &amp; CFO for UK Startups
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-slate-900 leading-[1.1] mb-6 animate-hero-2">
                Executive Firepower.<br />
                <span className="italic">Startup Agility.</span>
              </h1>
              <p className="text-xl text-slate-600 mb-6 leading-relaxed max-w-lg animate-hero-3">
                Big 4 rigour meets founder empathy. A part-time CTO, a part-time CFO, or both: architecture, engineering leadership, financial models, and fundraising for founders from pre-seed to Series A.
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
              <div className="relative rounded-xl overflow-hidden min-h-[400px] sm:min-h-[520px] ring-1 ring-accent-400/20 shadow-xl flex flex-col">
                <div className="flex-1 bg-primary-800 p-6 sm:p-8 flex flex-col justify-center">
                  <p className="text-xs uppercase tracking-[0.2em] text-accent-300 mb-4 font-semibold">Fractional CTO</p>
                  <p className="font-serif text-4xl md:text-5xl font-bold text-white mb-3">5 &rarr; 1,000+</p>
                  {/* Not "interim CTO": the title was Lead Software Engineer. The
                      scope was CTO-level and the copy may say so, but the title is
                      the CV's (owner, 5 Aug 2026 — BRANDING §13.15). */}
                  <p className="text-slate-300 text-sm mb-4">Concurrent users at Rungway, where Ankit led engineering</p>
                  <p className="text-slate-300 text-xs">Architecture, engineering leadership, delivery</p>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-accent-400 to-transparent" />

                <div className="flex-1 bg-white p-6 sm:p-8 flex flex-col justify-center">
                  <p className="text-xs uppercase tracking-[0.2em] text-accent-700 mb-4 font-semibold">Fractional CFO</p>
                  <p className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-3">&pound;35m &rarr; &pound;165m</p>
                  <p className="text-slate-600 text-sm mb-4">Revenue at Dishoom, where Michelle led strategic finance</p>
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
            <p className="text-sm uppercase tracking-[0.2em] text-accent-700 mb-4 font-medium">Two Executive Seats</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">Your Fractional CTO &amp; CFO</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Take either seat on its own, or both. Founders who take both get a technical plan and a financial plan that agree, because the same two people build them together.
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
                  Agentic AI & Data Engineering
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
              {' '}including 0-to-1 product builds and agentic AI engineering.
            </p>
            <p className="text-slate-600">
              Building something exceptional? For the right opportunity, we also consider{' '}
              <a href="/cofounder/" className="text-primary-600 hover:text-primary-700 font-medium">co-founder partnerships</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Social proof, in two labelled groups.
          The strip carried one caption — "Founder track record includes" — which was
          accurate only while Codenest had no clients in it. Five of these seven marks
          are client engagements: Regeno, Opayo, AstraZeneca, HSBC and Deloitte
          Digital. Opayo and AstraZeneca were mislabelled as founder track record
          until the owner's correction of 5 Aug 2026 (Opayo ran Aug 2019 – Jun 2026,
          squarely Codenest-era; see §13.11).
          The test is the firm's August 2017 boundary, not how the name feels: an
          enterprise logo is not automatically pedigree. Only Rungway (Aug 2016 –
          Aug 2017) and Dishoom (Michelle's employer) fall before it — §13.15.
          Do not move a mark between groups without the engagement itself changing. */}
      <section className="py-12 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-slate-500 mb-8 uppercase tracking-[0.2em] font-medium">Codenest clients</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-12">
            {/* Regeno - Agritech. Square tile, so it takes Rungway's treatment. */}
            <div className="group flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white hover:shadow-sm transition-all cursor-default">
              <img
                src="/img/clients/regeno.png"
                alt="Regeno"
                className="w-10 h-10 rounded-lg object-contain"
              />
              <div>
                <span className="text-lg font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">Regeno</span>
                <p className="text-xs text-slate-500">Agritech</p>
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

            {/* HSBC and Deloitte Digital - Jul 2018 to Aug 2019, so both sit after
                the firm's Aug 2017 boundary and belong in this group, not the one
                below. The HSBC and AstraZeneca work was delivered through Deloitte
                Digital; all three are the same engagement window (BRANDING §13.11). */}
            <div className="group flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white hover:shadow-sm transition-all cursor-default">
              <img
                src="/img/clients/hsbc.png"
                alt="HSBC"
                className="h-8 w-auto object-contain"
              />
            </div>

            <div className="group flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white hover:shadow-sm transition-all cursor-default">
              <img
                src="/img/clients/deloitte.png"
                alt="Deloitte Digital"
                className="h-8 w-auto object-contain"
              />
            </div>
          </div>

          <p className="text-center text-xs text-slate-500 mb-8 uppercase tracking-[0.2em] font-medium">Founder track record includes</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {/* Rungway - HR Tech. Aug 2016 - Aug 2017, so it predates the firm by a
                month; Ankit was Lead Software Engineer with CTO-level scope. */}
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

            {/* Dishoom - Hospitality. Michelle's employer, and the only non-technical
                mark in a strip that is otherwise entirely Ankit's.
                Sized on cap-height rather than box-height: the wordmark is ~9:1,
                so h-8 would render it nearly three times wider than the others. */}
            <div className="group flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white hover:shadow-sm transition-all cursor-default">
              <img
                src="/img/clients/dishoom.svg"
                alt="Dishoom"
                className="h-5 w-auto object-contain"
              />
            </div>

          </div>
          <p className="text-center text-sm text-slate-600 mt-8">
            <a href="/about/" className="font-semibold text-primary-700 hover:text-primary-800">Ankit Rana</a>, Fractional CTO, has delivered for the Ministry of Justice, Tesco Bank, HSBC, AstraZeneca and Opayo by Elavon. <a href="/about/" className="font-semibold text-primary-700 hover:text-primary-800">Michelle Rana FCCA</a>, Fractional CFO, led strategic finance at Dishoom through &pound;35m to &pound;165m revenue growth and a four-point EBITDA margin improvement.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {/* Not "Client Outcomes": Rungway predates the firm and is founder track
                record, and the fourth cell is an offer term rather than an outcome.
                Opayo is a client engagement (§13.11, corrected 5 Aug 2026) but two of
                the four still are not, so the heading has to cover all three honestly. */}
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Track Record</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Numbers we can point to, each tied to a named engagement or offer term</p>
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
              Client engagements, and the founder track record behind them
            </p>
          </div>

          {/* Featured, on charcoal: this is the agentic AI work, and the only
              client engagement on the page. The layer names match the diagram on
              /case-studies so the two read as the same thing. */}
          <Link href="/case-studies/" className="group block mb-12">
            <article className="bg-primary-800 border border-primary-700 rounded-xl p-8 md:p-10 hover:shadow-xl transition-all">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <p className="text-xs uppercase tracking-[0.2em] text-accent-300 font-semibold">{featuredStudy.kind}</p>
                <span className="px-3 py-1 rounded-full border border-accent-300 text-accent-300 text-xs font-semibold uppercase tracking-wide">
                  {featuredStudy.status}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
                <div className="lg:col-span-3">
                  <h3 className="font-serif text-3xl font-bold text-white mb-4 leading-snug">{featuredStudy.title}</h3>
                  <p className="text-slate-300 leading-relaxed mb-6">{featuredStudy.summary}</p>
                  <span className="inline-flex items-center text-sm font-semibold text-accent-300 group-hover:text-accent-200">
                    Read the case study
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>

                <div className="lg:col-span-2 space-y-3">
                  {featuredStudy.layers.map((layer) => (
                    <div key={layer} className="rounded-lg border border-primary-600 bg-primary-700 px-4 py-3">
                      <p className="text-white text-sm font-semibold">{layer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Link key={index} href="/case-studies/" className="group">
                <article className="bg-white rounded-xl border border-slate-200 p-8 hover:shadow-lg hover:border-accent-200 transition-all h-full flex flex-col">
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-500 mb-4 font-medium">{study.kind}</p>
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

      {/* How We Work Section. Deliberately not a three-stage timeline: the FAQ below
          already carries the real engagement shape (3-6 months at 2-3 days a week,
          8-12 week fixed-scope MVPs, published rates), and a tidy Discover/Build/Scale
          pipeline said less than that in more words. Two asymmetric columns rather
          than a third card grid. */}
      <section id="how-we-work" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-accent-700 mb-4 font-medium">How We Work</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900">
              Four things we hold to
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-3">
              <dl className="space-y-10">
                <div>
                  <dt className="text-xl font-bold text-slate-900 mb-2">The roadmap and the model are built together.</dt>
                  <dd className="text-slate-600 leading-relaxed">
                    Your technical plan and your financial plan come from the same two people, in the same
                    conversations. The hiring plan in the model matches the architecture it is paying for,
                    because nobody had to reconcile them afterwards.
                  </dd>
                </div>
                <div>
                  <dt className="text-xl font-bold text-slate-900 mb-2">You own the output.</dt>
                  <dd className="text-slate-600 leading-relaxed">
                    Code, infrastructure, financial models, documentation. Handover is designed in from
                    the first week, so there is nothing to unpick when we leave and no dependency on us
                    once we have.
                  </dd>
                </div>
                <div>
                  <dt className="text-xl font-bold text-slate-900 mb-2">You know the commercial shape up front.</dt>
                  <dd className="text-slate-600 leading-relaxed">
                    Retainer for the fractional seats, fixed fee for defined projects like an MVP build
                    or a financial model. We quote against your actual requirements, and the scope is
                    agreed in writing before the first week.
                  </dd>
                </div>
                <div>
                  <dt className="text-xl font-bold text-slate-900 mb-2">We say when you should not hire us.</dt>
                  <dd className="text-slate-600 leading-relaxed">
                    Fractional suits most startups between pre-seed and Series A. It does not suit every
                    one of them, and we would rather establish that on the first call than in the third
                    month.
                  </dd>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-primary-800 rounded-xl p-8 lg:p-10 h-full">
                <h3 className="font-serif text-2xl font-bold text-white mb-6">When we are the wrong call</h3>
                <ul className="space-y-7">
                  <li>
                    <p className="text-accent-300 font-semibold mb-2">Technology is your moat.</p>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      If your edge is a novel algorithm or custom hardware, that work needs someone in the
                      building full time with their name on it. Two days a week will hold you back.
                    </p>
                  </li>
                  <li>
                    <p className="text-accent-300 font-semibold mb-2">You need someone 40+ hours a week.</p>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      At that point you are describing a full-time hire, and paying fractional rates for it
                      is the expensive way to get one. We will tell you so and, where we can, point you at
                      people worth talking to.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-14">
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
              Thirty minutes, no sales pitch. We'll tell you if you don't need us.
            </p>
          </div>

          <TrustBadges className="mb-12" />

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
