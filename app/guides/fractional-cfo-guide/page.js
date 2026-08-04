import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import JsonLd from '../../components/JsonLd'
import { breadcrumbs, ORGANIZATION_ID, WEBSITE_ID } from '../../../lib/schema'

export const metadata = {
  title: 'The Complete Guide to Fractional CFO Services UK',
  description: 'What a fractional CFO does, UK costs, when to hire one, and how they differ from an accountant — the full picture for startup founders.',
  keywords: ['fractional CFO guide', 'what is a fractional CFO', 'fractional CFO cost UK', 'when to hire a fractional CFO', 'fractional CFO vs accountant', 'part-time CFO startup', 'fractional CFO services UK'],
  openGraph: {
    title: 'The Complete Guide to Fractional CFO Services UK',
    description: 'Everything UK founders need to know about fractional CFO services: what they do, costs, when to hire, and how to choose.',
    type: 'article',
    url: 'https://codenest.uk/guides/fractional-cfo-guide/',
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
    canonical: 'https://codenest.uk/guides/fractional-cfo-guide/',
  },
}

const guideBreadcrumbs = breadcrumbs([
  { name: 'Guides', path: '/guides/' },
  { name: 'Fractional CFO Guide', path: '/guides/fractional-cfo-guide/' },
])

export default function FractionalCFOGuidePage() {
  const tableOfContents = [
    { id: 'what-is', title: 'What is a Fractional CFO?' },
    { id: 'responsibilities', title: 'What Does a Fractional CFO Do?' },
    { id: 'when-to-hire', title: 'When Should You Hire a Fractional CFO?' },
    { id: 'costs', title: 'How Much Does a Fractional CFO Cost?' },
    { id: 'vs-full-time', title: 'Fractional CFO vs Full-Time CFO' },
    { id: 'vs-accountant', title: 'Fractional CFO vs Accountant vs Controller' },
    { id: 'how-to-choose', title: 'How to Choose a Fractional CFO' },
    { id: 'working-together', title: 'Working with a Fractional CFO' },
    { id: 'faq', title: 'Frequently Asked Questions' },
  ]

  const faqs = [
    {
      question: 'How much does a fractional CFO cost in the UK?',
      answer: 'Most UK fractional CFO engagements fall roughly between £2,000 and £12,000 per month depending on intensity, from light-touch advisory through to two or three days per week. A full-time CFO, by comparison, typically costs £150,000-£250,000+ in salary alone, plus equity, benefits and recruitment fees.'
    },
    {
      question: 'What is the difference between a fractional CFO and an accountant?',
      answer: 'An accountant looks backwards: statutory accounts, corporation tax, VAT and payroll compliance. A fractional CFO looks forwards: financial models, runway and cash management, fundraising, pricing and board reporting. Most startups need both, and a fractional CFO builds on the records your accountant keeps rather than replacing them.'
    },
    {
      question: 'How many hours per week does a fractional CFO work?',
      answer: 'Typically between half a day and three days per week, depending on stage and workload. Many engagements start light and scale up around a fundraise, then settle back into a steady monthly rhythm of reporting, reforecasting and board support.'
    },
    {
      question: 'When should a startup hire a fractional CFO?',
      answer: 'The most common triggers are preparing to raise, deploying a fresh round with discipline, runway pressure, and growing board or investor reporting demands. If financial questions are consuming founder time or going unanswered, it is usually time to bring in part-time finance leadership.'
    },
    {
      question: 'Can a fractional CFO help with fundraising?',
      answer: 'Yes. For most early-stage engagements it is the core of the role. A fractional CFO builds the financial model, prepares the data room, stress-tests your assumptions before investors do, and helps you answer diligence questions with confidence.'
    },
  ]

  // Structured data
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Complete Guide to Fractional CFO Services UK',
    description: 'Everything UK founders need to know about fractional CFO services.',
    author: {
      '@type': 'Organization',
      name: 'Codenest',
      url: 'https://codenest.uk'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Codenest',
      logo: {
        '@type': 'ImageObject',
        url: 'https://codenest.uk/img/companylogo.png'
      }
    },
    datePublished: '2026-08-04',
    dateModified: '2026-08-04',
    mainEntityOfPage: 'https://codenest.uk/guides/fractional-cfo-guide/'
  }

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

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <JsonLd schema={guideBreadcrumbs} />
      <Navigation />

      <main id="main-content">

        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-primary-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="inline-block px-4 py-2 bg-accent-50 text-accent-700 rounded-full text-sm font-medium mb-6">
                Complete Guide
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                The Complete Guide to<br />Fractional CFO Services in the UK
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                Everything UK founders need to know about hiring a fractional CFO: what they do, what they cost, when to bring one in, and how to choose the right one.
              </p>
              <p className="text-sm text-slate-500">
                Updated August 2026 &middot; 15 min read
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Table of Contents - Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h2 className="font-bold text-slate-900 mb-4">Contents</h2>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-sm text-slate-600 hover:text-primary-600 transition-colors py-1"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Article Content */}
            <article className="lg:col-span-3 prose prose-lg prose-slate max-w-none">

              {/* What is a Fractional CFO */}
              <section id="what-is" className="scroll-mt-24 mb-16">
                <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
                  What is a Fractional CFO?
                </h2>
                <p>
                  A <strong>fractional CFO</strong> is a senior finance executive who provides part-time strategic financial leadership to companies that need the judgement of a Chief Financial Officer without the cost of a full-time hire.
                </p>
                <p>
                  The key word is <em>strategic</em>. A fractional CFO is not a bookkeeper and not a replacement for your accountant. Bookkeeping and accounting record what has already happened; a fractional CFO is concerned with what happens next — how long your cash lasts, what your next round needs to look like, whether your pricing supports the business you are building, and what the board should be told and when.
                </p>
                <p>
                  Like a fractional CTO, a fractional CFO is embedded rather than advisory-only. They own the financial model, sit in board meetings, field investor questions, and take accountability for the quality of your numbers — typically for one to three days a week rather than five.
                </p>
                <p>
                  The model has become a natural fit for UK startups between pre-seed and Series A: the financial workload at that stage is genuinely executive-level, but it is not yet a five-day-a-week job. Fractional finance leadership is one of the two executive seats Codenest provides — you can read exactly what an engagement includes on our <Link href="/services/fractional-cfo/" className="text-primary-600 hover:text-primary-700 font-medium">Fractional CFO services page</Link>.
                </p>
                <div className="bg-primary-50 border border-primary-200 rounded-xl p-6 my-8 not-prose">
                  <p className="font-semibold text-primary-900 mb-2">Key Point</p>
                  <p className="text-primary-800">
                    A fractional CFO typically works between half a day and three days per week, costs 60-80% less than a full-time hire, and can usually start within a couple of weeks — rather than the months a full-time executive search takes.
                  </p>
                </div>
              </section>

              {/* What Does a Fractional CFO Do */}
              <section id="responsibilities" className="scroll-mt-24 mb-16">
                <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
                  What Does a Fractional CFO Do?
                </h2>
                <p>
                  The responsibilities of a fractional CFO flex with your stage and situation, but for a pre-seed to Series A startup they typically cover five areas:
                </p>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Financial Modelling &amp; FP&amp;A</h3>
                <ul>
                  <li>Building and maintaining a three-statement financial model founders can actually use</li>
                  <li>Budgeting, and monthly budget-versus-actuals reviews</li>
                  <li>Scenario and sensitivity analysis — what happens if sales slip a quarter, or a hire is delayed</li>
                  <li>Defining the KPIs that matter for your business model, and reporting them consistently</li>
                  <li>Modelling the cash impact of hiring plans and major spend decisions before they are made</li>
                </ul>
                <p className="mt-4">
                  <Link href="/blog/financial-modeling-seed-stage-startups/" className="text-primary-600 hover:text-primary-700 font-medium">
                    Related reading: Financial modelling for seed-stage startups →
                  </Link>
                </p>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Cash &amp; Runway Management</h3>
                <ul>
                  <li>A 13-week rolling cash flow, so short-term cash is never a surprise</li>
                  <li>Burn tracking and runway scenarios under different growth and spend assumptions</li>
                  <li>Working-capital management — debtor chasing, creditor terms, VAT timing</li>
                  <li>Cost reviews and supplier renegotiation when runway needs extending</li>
                </ul>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Fundraising Support &amp; Data Rooms</h3>
                <ul>
                  <li>Sizing and timing the raise against your milestones and runway</li>
                  <li>Preparing a model that survives investor diligence, with assumptions you can defend</li>
                  <li>Building and managing the data room before investors ask for it</li>
                  <li>Supporting term-sheet review and cap-table modelling alongside your lawyers</li>
                  <li>Preparing founders for the financial questions investors will ask</li>
                </ul>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Board &amp; Investor Reporting</h3>
                <ul>
                  <li>A monthly management accounts and KPI pack, produced on a reliable rhythm</li>
                  <li>Owning the financial section of the board pack — and the narrative around the numbers</li>
                  <li>Regular investor updates that build confidence between rounds</li>
                  <li>Grant, covenant or R&amp;D-claim reporting where relevant</li>
                </ul>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Unit Economics &amp; Pricing</h3>
                <ul>
                  <li>Customer acquisition cost, lifetime value and payback period — measured, not guessed</li>
                  <li>Contribution margin by product, plan or customer segment</li>
                  <li>Pricing structure and pricing-change analysis grounded in margin and willingness to pay</li>
                  <li>Discounting policy, so sales flexibility does not quietly erode the model</li>
                </ul>
              </section>

              {/* When to Hire */}
              <section id="when-to-hire" className="scroll-mt-24 mb-16">
                <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
                  When Should You Hire a Fractional CFO?
                </h2>
                <p>
                  Most founders bring in a fractional CFO in response to one of five triggers:
                </p>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">You&apos;re Preparing to Raise</h3>
                <p>
                  This is the most common trigger, and the one with the clearest payoff. Investors will diligence your numbers: the model, the assumptions behind it, historical performance and the data room. A fractional CFO gets all of that investor-ready — ideally starting three to six months before you go out, so the numbers shape the raise rather than scramble after it.
                </p>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">You&apos;ve Just Closed a Round</h3>
                <p>
                  New capital demands new discipline. The plan you pitched needs to become a budget; the investors who wired the money expect regular reporting; and spend decisions now carry someone else&apos;s money. A fractional CFO turns post-raise good intentions into a working financial operating rhythm.
                </p>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Runway Is Under Pressure</h3>
                <p>
                  When cash is tight, precision matters. A fractional CFO replaces a vague sense of &quot;about a year left&quot; with a 13-week cash flow, runway scenarios, and a clear-eyed view of which costs to cut, defer or renegotiate — and how those choices trade off against growth.
                </p>
                <p>
                  <Link href="/tools/runway-calculator/" className="text-primary-600 hover:text-primary-700 font-medium">
                    Not sure where you stand? Use our free runway calculator →
                  </Link>
                </p>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Board Reporting Is Getting Demanding</h3>
                <p>
                  Once institutional investors join your cap table, expectations change. Monthly management accounts, a proper board pack, and answers that hold up to scrutiny become the baseline. A fractional CFO takes that burden off the founders and raises the standard at the same time.
                </p>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">You&apos;re Making Pricing and Unit-Economics Decisions</h3>
                <p>
                  Pricing changes, discount policies, and which customers to pursue are finance questions as much as commercial ones. If those calls are being made on instinct rather than margin analysis, a fractional CFO pays for themselves quickly.
                </p>

                <div className="bg-accent-50 border border-accent-200 rounded-xl p-6 my-8 not-prose">
                  <p className="font-semibold text-accent-900 mb-2">Signs You Need a Fractional CFO</p>
                  <ul className="text-accent-800 space-y-1 text-sm">
                    <li>• You can&apos;t state this month&apos;s burn or your runway without opening several spreadsheets</li>
                    <li>• Investor questions about your numbers take days to answer</li>
                    <li>• The financial model was built for the last raise and hasn&apos;t been touched since</li>
                    <li>• Pricing is set by gut feel rather than margin analysis</li>
                    <li>• The board pack is assembled the night before the meeting</li>
                  </ul>
                </div>
              </section>

              {/* Costs */}
              <section id="costs" className="scroll-mt-24 mb-16">
                <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
                  How Much Does a Fractional CFO Cost?
                </h2>
                <p>
                  UK fractional CFO pricing varies with experience, sector and — above all — intensity. Most engagements fall roughly between £2,000 and £12,000 per month:
                </p>

                <div className="overflow-x-auto my-8 not-prose">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="border border-slate-300 px-4 py-3 text-left font-semibold">Engagement Level</th>
                        <th className="border border-slate-300 px-4 py-3 text-left font-semibold">Typical Commitment</th>
                        <th className="border border-slate-300 px-4 py-3 text-left font-semibold">Monthly Cost</th>
                        <th className="border border-slate-300 px-4 py-3 text-left font-semibold">Annual Equivalent</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-300 px-4 py-3">Light-Touch Advisory</td>
                        <td className="border border-slate-300 px-4 py-3">A few hours per week</td>
                        <td className="border border-slate-300 px-4 py-3">£2,000-£3,500</td>
                        <td className="border border-slate-300 px-4 py-3">£24,000-£42,000</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-300 px-4 py-3">Standard</td>
                        <td className="border border-slate-300 px-4 py-3">Around one day per week</td>
                        <td className="border border-slate-300 px-4 py-3">£3,500-£6,000</td>
                        <td className="border border-slate-300 px-4 py-3">£42,000-£72,000</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 px-4 py-3">Intensive</td>
                        <td className="border border-slate-300 px-4 py-3">Two to three days per week</td>
                        <td className="border border-slate-300 px-4 py-3">£6,000-£12,000</td>
                        <td className="border border-slate-300 px-4 py-3">£72,000-£144,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p>
                  Codenest Fractional CFO engagements are scoped to your stage and the intensity you need — see the <Link href="/services/fractional-cfo/" className="text-primary-600 hover:text-primary-700 font-medium">Fractional CFO services page</Link> for what each engagement includes.
                </p>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Cost Comparison: Fractional vs Full-Time</h3>
                <p>
                  A full-time CFO in the UK typically costs:
                </p>
                <ul>
                  <li><strong>Base salary:</strong> £150,000-£250,000+</li>
                  <li><strong>Employer&apos;s National Insurance:</strong> £20,000-£35,000</li>
                  <li><strong>Pension contributions:</strong> £5,000-£12,000</li>
                  <li><strong>Benefits:</strong> £5,000-£15,000</li>
                  <li><strong>Equity:</strong> typically 0.5-2% (immediate dilution)</li>
                  <li><strong>Recruitment fees:</strong> £35,000-£75,000 one-off, often 25-30% of base salary</li>
                </ul>
                <p>
                  <strong>Total Year 1:</strong> roughly £210,000-£360,000+ plus equity dilution.
                </p>
                <p>
                  A fractional CFO at around one day per week costs £48,000-£96,000 a year — typically <strong>60-80% less</strong> than the all-in cost of a full-time hire, with no equity dilution, no recruitment fees, and no severance exposure if your needs change.
                </p>
              </section>

              {/* vs Full-Time */}
              <section id="vs-full-time" className="scroll-mt-24 mb-16">
                <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
                  Fractional CFO vs Full-Time CFO
                </h2>

                <div className="overflow-x-auto my-8 not-prose">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="border border-slate-300 px-4 py-3 text-left font-semibold">Factor</th>
                        <th className="border border-slate-300 px-4 py-3 text-left font-semibold">Fractional CFO</th>
                        <th className="border border-slate-300 px-4 py-3 text-left font-semibold">Full-Time CFO</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-300 px-4 py-3 font-medium">Cost</td>
                        <td className="border border-slate-300 px-4 py-3">£24k-£144k/year</td>
                        <td className="border border-slate-300 px-4 py-3">£215k-£350k+/year all-in</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-300 px-4 py-3 font-medium">Equity</td>
                        <td className="border border-slate-300 px-4 py-3">None typically</td>
                        <td className="border border-slate-300 px-4 py-3">0.5-2%</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 px-4 py-3 font-medium">Time to Start</td>
                        <td className="border border-slate-300 px-4 py-3">1-2 weeks</td>
                        <td className="border border-slate-300 px-4 py-3">3-6 months</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-300 px-4 py-3 font-medium">Availability</td>
                        <td className="border border-slate-300 px-4 py-3">Half a day to 3 days/week</td>
                        <td className="border border-slate-300 px-4 py-3">Full-time</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 px-4 py-3 font-medium">Flexibility</td>
                        <td className="border border-slate-300 px-4 py-3">Scale up and down around a raise</td>
                        <td className="border border-slate-300 px-4 py-3">Fixed commitment</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-300 px-4 py-3 font-medium">Risk</td>
                        <td className="border border-slate-300 px-4 py-3">Low (monthly terms)</td>
                        <td className="border border-slate-300 px-4 py-3">High (severance, rehiring)</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 px-4 py-3 font-medium">Best For</td>
                        <td className="border border-slate-300 px-4 py-3">Pre-seed to Series A</td>
                        <td className="border border-slate-300 px-4 py-3">Series B+ or complex finance operations</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p>
                  <strong>Choose fractional when:</strong> the finance workload is strategic but not yet a five-day-a-week job, you raise every 12-24 months rather than run continuous corporate-finance activity, or your runway means every senior hire has to justify itself.
                </p>
                <p>
                  <strong>Choose full-time when:</strong> you have a finance team that needs daily executive leadership, you are running M&amp;A, international expansion or complex revenue operations, or post-Series B governance genuinely demands a full-time seat at the table.
                </p>
                <p>
                  The honest answer for most pre-seed to Series A startups is that the full-time question simply arrives later. A good fractional CFO will tell you when you have outgrown them — and help you hire their replacement.
                </p>
              </section>

              {/* vs Accountant vs Controller */}
              <section id="vs-accountant" className="scroll-mt-24 mb-16">
                <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
                  Fractional CFO vs Accountant vs Financial Controller
                </h2>
                <p>
                  These three roles are often confused, and the confusion is expensive in both directions — founders either pay CFO rates for bookkeeping, or expect strategic finance from an accountant who was never hired to provide it. The distinction is about time horizon:
                </p>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Accountant — Historical &amp; Compliance</h3>
                <ul>
                  <li><strong>Answers:</strong> what happened, and are we compliant?</li>
                  <li><strong>Covers:</strong> statutory accounts, corporation tax, VAT returns, payroll, Companies House filings</li>
                  <li><strong>Cadence:</strong> monthly to annually, deadline-driven</li>
                  <li><strong>Typical cost:</strong> a few hundred pounds a month outsourced at early stage</li>
                </ul>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Financial Controller — Operational</h3>
                <ul>
                  <li><strong>Answers:</strong> are the numbers right, and is the machine running?</li>
                  <li><strong>Covers:</strong> bookkeeping oversight, month-end close, invoicing and collections, spend controls, management accounts production</li>
                  <li><strong>Cadence:</strong> daily to monthly</li>
                  <li><strong>Typically arrives:</strong> once transaction volume outgrows the founder-plus-accountant setup</li>
                </ul>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Fractional CFO — Strategic &amp; Forward-Looking</h3>
                <ul>
                  <li><strong>Answers:</strong> where are we going, and can we afford to get there?</li>
                  <li><strong>Covers:</strong> financial modelling, runway scenarios, fundraising and data rooms, pricing and unit economics, board narrative</li>
                  <li><strong>Cadence:</strong> weekly rhythm, quarterly deep work, intense around a raise</li>
                  <li><strong>Typically arrives:</strong> pre-seed to Series A, usually triggered by a raise or a round just closed</li>
                </ul>

                <div className="bg-slate-100 border border-slate-200 rounded-xl p-6 my-8 not-prose">
                  <p className="font-semibold text-slate-900 mb-2">They Complement, Not Compete</p>
                  <p className="text-slate-700">
                    A fractional CFO does not replace your accountant — they build on the records your accountant keeps and will usually work with them directly. At pre-seed and seed, an outsourced accountant plus a fractional CFO covers both the compliance and the strategy; a controller tends to join later, as transaction volume grows.
                  </p>
                </div>
              </section>

              {/* How to Choose */}
              <section id="how-to-choose" className="scroll-mt-24 mb-16">
                <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
                  How to Choose a Fractional CFO
                </h2>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Green Flags</h3>
                <ul>
                  <li><strong>Sector experience</strong> — They know your business model&apos;s economics, whether that is fintech, healthtech or B2B SaaS</li>
                  <li><strong>Stage fit</strong> — Pre-seed to Series A finance is a different craft from corporate finance; scrappy data and fast decisions should not faze them</li>
                  <li><strong>Fundraising track record</strong> — They have supported rounds like the one you are planning and know what UK investors actually ask</li>
                  <li><strong>Hands-on with models</strong> — They build and maintain the model themselves, rather than reviewing someone else&apos;s work from a distance</li>
                  <li><strong>Plain-English communication</strong> — They make the numbers clearer, not more intimidating; you will spend hours together, so chemistry matters</li>
                </ul>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Red Flags</h3>
                <ul>
                  <li><strong>Compliance background rebadged</strong> — A career in historical reporting does not automatically translate into forward-looking strategy</li>
                  <li><strong>Template models</strong> — If every model they show ends in the same hockey stick, the assumptions are decoration, not analysis</li>
                  <li><strong>Overcommitted</strong> — Too many concurrent clients means your board week gets whatever attention is left over</li>
                  <li><strong>Can&apos;t face investors</strong> — If they cannot defend the model in a diligence conversation, you will be doing it alone</li>
                  <li><strong>Equity-first pricing</strong> — Fractional engagements should be cash-based; significant equity is for full-time commitment</li>
                </ul>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Questions to Ask</h3>
                <ol>
                  <li>&quot;Which fundraises have you supported at our stage, and what was your role in them?&quot;</li>
                  <li>&quot;Walk me through a model you built. Which three assumptions mattered most, and how did you test them?&quot;</li>
                  <li>&quot;How would you approach our cash position and runway in your first 30 days?&quot;</li>
                  <li>&quot;What does a monthly reporting rhythm look like with you — what do we get, and when?&quot;</li>
                  <li>&quot;What would make you advise us not to raise?&quot;</li>
                </ol>
                <p>
                  That last question matters. A fractional CFO&apos;s job is to tell you the truth about your numbers, including when the truth is inconvenient. Anyone who treats every situation as raise-ready is selling, not advising.
                </p>
              </section>

              {/* Working Together */}
              <section id="working-together" className="scroll-mt-24 mb-16">
                <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
                  Working with a Fractional CFO
                </h2>
                <p>
                  A well-run fractional CFO engagement has a predictable shape. Here is what to expect — and what to insist on.
                </p>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">The First 30 Days: Diagnostic</h3>
                <p>
                  The engagement should open with a clear-eyed review of where you stand:
                </p>
                <ul>
                  <li>Cash position and a first-cut 13-week cash flow</li>
                  <li>Review (or rebuild) of the financial model and its assumptions</li>
                  <li>A baseline for reporting: what the board and investors currently see, and what they should</li>
                  <li>Quick wins — cost anomalies, billing gaps, working-capital timing</li>
                </ul>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">The Ongoing Cadence</h3>
                <ul>
                  <li><strong>Weekly:</strong> a founder sync, plus async availability for decisions that cannot wait</li>
                  <li><strong>Monthly:</strong> management accounts, KPI pack and budget-versus-actuals review</li>
                  <li><strong>Quarterly:</strong> reforecast and a strategic review of runway, hiring and pricing</li>
                  <li><strong>Around a raise:</strong> intensity increases — model, data room, investor Q&amp;A support</li>
                </ul>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">The Deliverables You Should Expect</h3>
                <ul>
                  <li>A three-statement financial model you own and understand</li>
                  <li>A 13-week cash flow, maintained, with runway scenarios</li>
                  <li>A monthly board and investor pack produced on time</li>
                  <li>An investor-ready data room, kept current between rounds</li>
                  <li>Documented unit economics and pricing analysis</li>
                </ul>
                <p className="mt-4">
                  <Link href="/blog/building-your-first-data-room/" className="text-primary-600 hover:text-primary-700 font-medium">
                    Related reading: Building your first data room →
                  </Link>
                </p>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Tools and Ownership</h3>
                <p>
                  Expect the work to live in tools you control: your accounting platform (typically Xero or QuickBooks), spreadsheet models shared in your own drive, and dashboards built on your data. Everything should be documented and owned by the company — if the engagement ends, the model, the data room and the reporting rhythm stay with you. A fractional CFO who keeps the model as a black box has built a dependency, not a finance function.
                </p>

                <div className="bg-slate-100 border border-slate-200 rounded-xl p-6 my-8 not-prose">
                  <p className="font-semibold text-slate-900 mb-2">Also Hiring Technical Leadership?</p>
                  <p className="text-slate-700">
                    Many founders face the technical and financial leadership gaps at the same time — and the two searches follow the same logic.{' '}
                    <Link href="/guides/fractional-cto-guide/" className="text-primary-600 hover:text-primary-700 font-medium">
                      Read the Complete Guide to Fractional CTO Services →
                    </Link>
                  </p>
                </div>
              </section>

              {/* FAQ */}
              <section id="faq" className="scroll-mt-24 mb-16">
                <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6 not-prose">
                  {faqs.map((faq, index) => (
                    <details key={index} className="group bg-slate-50 rounded-xl p-6 border border-slate-200">
                      <summary className="font-semibold text-lg text-slate-900 cursor-pointer list-none flex items-center justify-between">
                        {faq.question}
                        <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <p className="mt-4 text-slate-600">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>

              {/* CTA */}
              <section className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-center not-prose">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Need a Fractional CFO?
                </h2>
                <p className="text-primary-100 mb-6 max-w-xl mx-auto">
                  Codenest provides Fractional CFO services for UK startups from pre-seed to Series A — financial modelling, runway management, fundraising support and board reporting.
                </p>
                <Link
                  href="/contact/"
                  className="inline-block bg-accent-400 text-primary-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-500 transition-all"
                >
                  Request a Strategy Call
                </Link>
                <p className="text-primary-100 text-sm mt-4">
                  Free 30-minute consultation &middot; 100% confidential &middot;{' '}
                  <Link href="/services/fractional-cfo/" className="underline hover:text-white">
                    Explore Fractional CFO Services
                  </Link>
                </p>
              </section>

            </article>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}
