import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'The Complete Guide to Fractional CTO Services UK (2025) | Codenest',
  description: 'Everything UK founders need to know about fractional CTO services: costs, benefits, when to hire, what to expect, and how to choose the right fractional CTO for your startup.',
  keywords: ['fractional CTO guide', 'what is a fractional CTO', 'fractional CTO cost UK', 'when to hire fractional CTO', 'fractional CTO vs full-time CTO', 'part-time CTO startup', 'CTO as a service UK'],
  openGraph: {
    title: 'The Complete Guide to Fractional CTO Services UK (2025)',
    description: 'Everything UK founders need to know about fractional CTO services: costs, benefits, when to hire, and how to choose.',
    type: 'article',
    url: 'https://codenest.uk/guides/fractional-cto-guide',
  },
  alternates: {
    canonical: 'https://codenest.uk/guides/fractional-cto-guide',
  },
}

export default function FractionalCTOGuidePage() {
  const tableOfContents = [
    { id: 'what-is', title: 'What is a Fractional CTO?' },
    { id: 'responsibilities', title: 'What Does a Fractional CTO Do?' },
    { id: 'when-to-hire', title: 'When Should You Hire a Fractional CTO?' },
    { id: 'costs', title: 'How Much Does a Fractional CTO Cost?' },
    { id: 'vs-full-time', title: 'Fractional CTO vs Full-Time CTO' },
    { id: 'vs-agency', title: 'Fractional CTO vs Development Agency' },
    { id: 'how-to-choose', title: 'How to Choose a Fractional CTO' },
    { id: 'working-together', title: 'Working with a Fractional CTO' },
    { id: 'transition', title: 'Transitioning to a Full-Time CTO' },
    { id: 'faq', title: 'Frequently Asked Questions' },
  ]

  const faqs = [
    {
      question: 'What is the difference between a fractional CTO and a consultant?',
      answer: 'A fractional CTO is embedded in your team and accountable for outcomes, not just advice. They attend standups, participate in hiring, and own technical decisions. Consultants typically provide recommendations and leave implementation to you.'
    },
    {
      question: 'How many hours per week does a fractional CTO work?',
      answer: 'Typically 8-20 hours per week, depending on your stage and needs. Early-stage startups often start with 8-12 hours, scaling up during critical periods like fundraising or major product launches.'
    },
    {
      question: 'Can a fractional CTO help with fundraising?',
      answer: 'Yes. Fractional CTOs often attend investor meetings, prepare technical due diligence materials, and help answer technical questions from VCs. This is one of the most valuable contributions during fundraising rounds.'
    },
    {
      question: 'What industries do fractional CTOs work in?',
      answer: 'Fractional CTOs work across all technology sectors. Common industries include fintech, healthtech, B2B SaaS, e-commerce, marketplaces, and proptech. The key is matching industry experience to your specific needs.'
    },
    {
      question: 'How long do fractional CTO engagements typically last?',
      answer: 'Engagements typically range from 6 months to 2+ years. Some startups use fractional CTOs as a bridge until they can afford full-time leadership; others maintain the relationship through Series A and beyond.'
    },
    {
      question: 'Do fractional CTOs write code?',
      answer: 'It depends on the engagement. Some fractional CTOs are hands-on and contribute code, especially at early stages. Others focus purely on strategy, architecture, and team leadership. Clarify expectations upfront.'
    },
  ]

  // Structured data
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Complete Guide to Fractional CTO Services UK (2025)',
    description: 'Everything UK founders need to know about fractional CTO services.',
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
    datePublished: '2025-01-13',
    dateModified: '2025-01-13',
    mainEntityOfPage: 'https://codenest.uk/guides/fractional-cto-guide'
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

      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              Complete Guide
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              The Complete Guide to<br />Fractional CTO Services
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Everything UK founders need to know about hiring a fractional CTO: costs, benefits, timing, and how to make it work for your startup.
            </p>
            <p className="text-sm text-slate-500">
              Updated January 2025 &middot; 15 min read
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

            {/* What is a Fractional CTO */}
            <section id="what-is" className="scroll-mt-24 mb-16">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
                What is a Fractional CTO?
              </h2>
              <p>
                A <strong>fractional CTO</strong> is a senior technology executive who provides part-time technical leadership to companies that need strategic guidance but aren't ready for—or can't afford—a full-time Chief Technology Officer.
              </p>
              <p>
                Unlike consultants who provide advice and leave, a fractional CTO becomes embedded in your organization. They attend your standups, join your Slack channels, participate in investor meetings, and take accountability for technical outcomes.
              </p>
              <p>
                The "fractional" model has become increasingly popular among UK startups, particularly in the pre-seed to Series A stages. It allows founders to access executive-level expertise while preserving runway and avoiding premature scaling of their leadership team.
              </p>
              <div className="bg-primary-50 border border-primary-200 rounded-xl p-6 my-8 not-prose">
                <p className="font-semibold text-primary-900 mb-2">Key Point</p>
                <p className="text-primary-800">
                  A fractional CTO typically works 8-20 hours per week, costs 60-80% less than a full-time hire, and can start within 1-2 weeks versus 3-6 months for a permanent search.
                </p>
              </div>
            </section>

            {/* What Does a Fractional CTO Do */}
            <section id="responsibilities" className="scroll-mt-24 mb-16">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
                What Does a Fractional CTO Do?
              </h2>
              <p>
                The responsibilities of a fractional CTO vary based on your startup's stage and needs, but typically include:
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Technical Strategy & Architecture</h3>
              <ul>
                <li>Defining technical roadmaps aligned with business goals</li>
                <li>Making build vs. buy decisions</li>
                <li>Selecting technology stacks and frameworks</li>
                <li>Designing scalable system architectures</li>
                <li>Establishing coding standards and best practices</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Team Building & Leadership</h3>
              <ul>
                <li>Defining engineering team structure</li>
                <li>Hiring and interviewing developers</li>
                <li>Mentoring junior engineers and tech leads</li>
                <li>Establishing engineering culture and processes</li>
                <li>Managing contractors and development agencies</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Investor & Board Relations</h3>
              <ul>
                <li>Attending investor meetings as the technical voice</li>
                <li>Preparing technical due diligence materials</li>
                <li>Creating board presentation content</li>
                <li>Answering VC technical questions</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Operational Excellence</h3>
              <ul>
                <li>Implementing DevOps and CI/CD pipelines</li>
                <li>Security architecture and compliance</li>
                <li>Performance optimization</li>
                <li>Vendor negotiation (cloud providers, tools)</li>
              </ul>
            </section>

            {/* When to Hire */}
            <section id="when-to-hire" className="scroll-mt-24 mb-16">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
                When Should You Hire a Fractional CTO?
              </h2>
              <p>
                The right time to hire a fractional CTO depends on your specific situation, but here are the most common triggers:
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">You're a Non-Technical Founder</h3>
              <p>
                If you're building a technology product without technical co-founder, you need someone who can translate your vision into technical reality, evaluate developers' work, and make informed architecture decisions.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">You're Preparing to Fundraise</h3>
              <p>
                Investors will ask detailed technical questions. Having a credible CTO (even fractional) in investor meetings significantly increases your chances of closing a round. They'll also help prepare due diligence materials.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Your Development Is Stalling</h3>
              <p>
                If you have developers but lack senior leadership, you might see symptoms like: missed deadlines, accumulating technical debt, team conflicts, or difficulty shipping features. A fractional CTO can diagnose and fix these issues.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">You Can't Afford a Full-Time CTO</h3>
              <p>
                A full-time CTO in London costs £150,000-£220,000+ in salary alone, plus equity, benefits, and recruitment fees. If that's not in your budget but you need the expertise, fractional is the answer.
              </p>

              <div className="bg-accent-50 border border-accent-200 rounded-xl p-6 my-8 not-prose">
                <p className="font-semibold text-accent-900 mb-2">Signs You Need a Fractional CTO</p>
                <ul className="text-accent-800 space-y-1 text-sm">
                  <li>• You're spending more time managing developers than running the business</li>
                  <li>• Technical decisions are being made without strategic oversight</li>
                  <li>• Investors are asking questions you can't confidently answer</li>
                  <li>• Your product roadmap feels disconnected from technical reality</li>
                  <li>• Development costs are spiraling without clear ROI</li>
                </ul>
              </div>
            </section>

            {/* Costs */}
            <section id="costs" className="scroll-mt-24 mb-16">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
                How Much Does a Fractional CTO Cost?
              </h2>
              <p>
                Fractional CTO costs in the UK vary based on experience level, engagement intensity, and industry specialization. Here's what to expect:
              </p>

              <div className="overflow-x-auto my-8 not-prose">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-slate-300 px-4 py-3 text-left font-semibold">Engagement Level</th>
                      <th className="border border-slate-300 px-4 py-3 text-left font-semibold">Hours/Week</th>
                      <th className="border border-slate-300 px-4 py-3 text-left font-semibold">Monthly Cost</th>
                      <th className="border border-slate-300 px-4 py-3 text-left font-semibold">Annual Equivalent</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-300 px-4 py-3">Light Touch</td>
                      <td className="border border-slate-300 px-4 py-3">4-8 hours</td>
                      <td className="border border-slate-300 px-4 py-3">£2,000-£4,000</td>
                      <td className="border border-slate-300 px-4 py-3">£24,000-£48,000</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-300 px-4 py-3">Standard</td>
                      <td className="border border-slate-300 px-4 py-3">8-12 hours</td>
                      <td className="border border-slate-300 px-4 py-3">£4,000-£8,000</td>
                      <td className="border border-slate-300 px-4 py-3">£48,000-£96,000</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-4 py-3">Intensive</td>
                      <td className="border border-slate-300 px-4 py-3">12-20 hours</td>
                      <td className="border border-slate-300 px-4 py-3">£8,000-£15,000</td>
                      <td className="border border-slate-300 px-4 py-3">£96,000-£180,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Cost Comparison: Fractional vs Full-Time</h3>
              <p>
                A full-time CTO in London typically costs:
              </p>
              <ul>
                <li><strong>Base salary:</strong> £150,000-£220,000</li>
                <li><strong>Employer NI:</strong> £18,000-£26,000</li>
                <li><strong>Pension:</strong> £6,000-£9,000</li>
                <li><strong>Benefits:</strong> £5,000-£15,000</li>
                <li><strong>Equity:</strong> 1-4% (immediate dilution)</li>
                <li><strong>Recruitment:</strong> £30,000-£50,000 (one-time)</li>
              </ul>
              <p>
                <strong>Total Year 1:</strong> £210,000-£320,000+ plus equity dilution
              </p>
              <p>
                A fractional CTO at the "Standard" level costs £48,000-£96,000 annually—<strong>60-80% savings</strong> with no equity dilution and no recruitment fees.
              </p>
            </section>

            {/* vs Full-Time */}
            <section id="vs-full-time" className="scroll-mt-24 mb-16">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
                Fractional CTO vs Full-Time CTO
              </h2>

              <div className="overflow-x-auto my-8 not-prose">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-slate-300 px-4 py-3 text-left font-semibold">Factor</th>
                      <th className="border border-slate-300 px-4 py-3 text-left font-semibold">Fractional CTO</th>
                      <th className="border border-slate-300 px-4 py-3 text-left font-semibold">Full-Time CTO</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-300 px-4 py-3 font-medium">Cost</td>
                      <td className="border border-slate-300 px-4 py-3">£48k-£180k/year</td>
                      <td className="border border-slate-300 px-4 py-3">£210k-£320k/year</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-300 px-4 py-3 font-medium">Equity</td>
                      <td className="border border-slate-300 px-4 py-3">None typically</td>
                      <td className="border border-slate-300 px-4 py-3">1-4%</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-4 py-3 font-medium">Time to Start</td>
                      <td className="border border-slate-300 px-4 py-3">1-2 weeks</td>
                      <td className="border border-slate-300 px-4 py-3">3-6 months</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-300 px-4 py-3 font-medium">Availability</td>
                      <td className="border border-slate-300 px-4 py-3">8-20 hours/week</td>
                      <td className="border border-slate-300 px-4 py-3">40+ hours/week</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-4 py-3 font-medium">Flexibility</td>
                      <td className="border border-slate-300 px-4 py-3">Scale up/down easily</td>
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
                      <td className="border border-slate-300 px-4 py-3">Series A+ with 15+ engineers</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                <strong>Choose fractional when:</strong> You need strategic leadership but don't require 40+ hours of CTO time weekly, your runway is under 18 months, or you want to de-risk before committing to a full-time hire.
              </p>
              <p>
                <strong>Choose full-time when:</strong> You have 15+ engineers requiring daily leadership, technology is your core differentiator requiring constant innovation, or you've secured significant funding and can justify the investment.
              </p>

              <p className="mt-6">
                <Link href="/blog/fractional-cto-vs-full-time-cto-uk-startups" className="text-primary-600 hover:text-primary-700 font-medium">
                  Read our detailed analysis: Fractional CTO vs Full-Time CTO →
                </Link>
              </p>
            </section>

            {/* vs Agency */}
            <section id="vs-agency" className="scroll-mt-24 mb-16">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
                Fractional CTO vs Development Agency
              </h2>
              <p>
                Many founders consider hiring a development agency instead of a fractional CTO. Here's how they compare:
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Development Agency</h3>
              <ul>
                <li><strong>Focus:</strong> Building software to your specifications</li>
                <li><strong>Accountability:</strong> Delivering agreed scope on time</li>
                <li><strong>Strategic Input:</strong> Limited—they execute, you decide</li>
                <li><strong>Knowledge Retention:</strong> Stays with the agency</li>
                <li><strong>Cost:</strong> £50,000-£200,000+ per project</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Fractional CTO</h3>
              <ul>
                <li><strong>Focus:</strong> Technical strategy and leadership</li>
                <li><strong>Accountability:</strong> Long-term technical success</li>
                <li><strong>Strategic Input:</strong> High—they shape technical direction</li>
                <li><strong>Knowledge Retention:</strong> Stays with your company</li>
                <li><strong>Cost:</strong> £48,000-£180,000 per year</li>
              </ul>

              <div className="bg-slate-100 border border-slate-200 rounded-xl p-6 my-8 not-prose">
                <p className="font-semibold text-slate-900 mb-2">The Best of Both Worlds</p>
                <p className="text-slate-700">
                  Many startups combine both: a fractional CTO to define architecture, oversee quality, and make strategic decisions, while an agency or contractors handle development execution. The fractional CTO ensures the agency builds the right thing, the right way.
                </p>
              </div>
            </section>

            {/* How to Choose */}
            <section id="how-to-choose" className="scroll-mt-24 mb-16">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
                How to Choose a Fractional CTO
              </h2>

              <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Green Flags</h3>
              <ul>
                <li><strong>Relevant industry experience</strong> — They've built similar products before</li>
                <li><strong>Founder empathy</strong> — They've been in your shoes, not just worked at big companies</li>
                <li><strong>Execution focus</strong> — They talk about outcomes, not just methodologies</li>
                <li><strong>Clear communication</strong> — They can explain complex topics simply</li>
                <li><strong>Strong references</strong> — Past clients willing to vouch for them</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Red Flags</h3>
              <ul>
                <li><strong>All theory, no practice</strong> — Lots of frameworks, no shipping stories</li>
                <li><strong>No team experience</strong> — Great individual contributors don't always make good leaders</li>
                <li><strong>Overcommitted</strong> — Managing 10+ clients means you won't get attention</li>
                <li><strong>Equity-first pricing</strong> — Fractional should be cash-based; equity is for full-time</li>
                <li><strong>Can't get technical</strong> — If they can't discuss architecture specifics, question their depth</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Questions to Ask</h3>
              <ol>
                <li>"Walk me through a technical decision you made that didn't work out. What did you learn?"</li>
                <li>"How do you handle disagreements with the engineering team?"</li>
                <li>"What's your availability for investor meetings and urgent issues?"</li>
                <li>"Can I speak with 2-3 past clients?"</li>
                <li>"What does a successful 90-day engagement look like for us?"</li>
              </ol>
            </section>

            {/* Working Together */}
            <section id="working-together" className="scroll-mt-24 mb-16">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
                Working with a Fractional CTO
              </h2>
              <p>
                To get the most value from your fractional CTO engagement:
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Define Clear Outcomes</h3>
              <p>
                Instead of vague goals like "provide technical leadership," set specific objectives:
              </p>
              <ul>
                <li>Complete technical due diligence documentation by Q2</li>
                <li>Hire 2 senior engineers within 60 days</li>
                <li>Reduce deployment time from 2 days to 2 hours</li>
                <li>Define 12-month technical roadmap</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Integrate Properly</h3>
              <p>
                Treat your fractional CTO as a team member, not an outsider:
              </p>
              <ul>
                <li>Add them to Slack, email, and project management tools</li>
                <li>Include them in relevant meetings</li>
                <li>Introduce them to the team with appropriate authority</li>
                <li>Give them access to codebase and documentation</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Establish Communication Rhythm</h3>
              <ul>
                <li><strong>Daily:</strong> Async availability on Slack for quick questions</li>
                <li><strong>Weekly:</strong> 30-60 minute sync with founders</li>
                <li><strong>Monthly:</strong> Progress review and goal adjustment</li>
                <li><strong>Quarterly:</strong> Strategic planning session</li>
              </ul>
            </section>

            {/* Transition */}
            <section id="transition" className="scroll-mt-24 mb-16">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
                Transitioning to a Full-Time CTO
              </h2>
              <p>
                A good fractional CTO should help you eventually outgrow them. Here's how the transition typically works:
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Option 1: Promote from Within</h3>
              <p>
                If you have a strong VP Engineering or Tech Lead, the fractional CTO can mentor them into the CTO role while gradually reducing their own involvement.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Option 2: Hire Full-Time</h3>
              <p>
                The fractional CTO helps define the full-time role, participates in interviews, and ensures a smooth knowledge transfer to their replacement.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Option 3: Convert to Advisory</h3>
              <p>
                Many fractional CTOs transition to a lighter advisory role (2-4 hours/month) once a full-time CTO is in place, providing ongoing strategic guidance.
              </p>
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
                Need a Fractional CTO?
              </h2>
              <p className="text-primary-100 mb-6 max-w-xl mx-auto">
                We provide fractional CTO services for UK startups from pre-seed to Series A. Book a free discovery call to discuss your needs.
              </p>
              <Link
                href="/services/fractional-cto"
                className="inline-block bg-accent-500 text-primary-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-accent-600 transition-all"
              >
                Learn About Our Services
              </Link>
            </section>

          </article>
        </div>
      </div>

      <Footer />
    </div>
  )
}
