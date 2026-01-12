import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Fractional CTO Services UK | Technical Leadership for Ambitious Startups',
  description: 'Fractional CTO leadership for UK startups. We bring the engineering rigour of a high-growth company — without the cost or risk of a full-time executive.',
  keywords: ['fractional CTO UK', 'fractional CTO London', 'part-time CTO', 'startup CTO', 'technical leadership', 'CTO as a service', 'interim CTO UK'],
  openGraph: {
    title: 'Fractional CTO Services | Codenest',
    description: 'Engineering rigour and technical leadership for UK startups — without the overhead.',
    type: 'website',
    url: 'https://codenest.uk/services/fractional-cto',
  },
  alternates: {
    canonical: 'https://codenest.uk/services/fractional-cto',
  },
}

export default function FractionalCTOPage() {
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

  const services = [
    "Technical strategy and roadmap development",
    "Architecture design and review",
    "Technology selection and evaluation",
    "Engineering team structure and hiring",
    "Code review and quality standards",
    "DevOps and infrastructure guidance",
    "Vendor and contractor management",
    "Technical due diligence preparation",
    "Board and investor presentations",
    "Mentoring junior technical leaders",
  ]

  const faqs = [
    {
      question: "What's the difference between a fractional CTO and a consultant?",
      answer: "A fractional CTO is embedded in your team and takes ownership of technical outcomes. Unlike consultants who provide advice and leave, we're accountable for execution and stay engaged as your technical leader."
    },
    {
      question: "How many hours per week do you typically work?",
      answer: "Engagements typically range from 8-20 hours per week, depending on your stage and needs. We can flex up during critical periods like fundraising or major launches."
    },
    {
      question: "When should a startup hire a fractional CTO?",
      answer: "Ideal timing is when you need technical leadership for strategic decisions but aren't ready for a £150-200k+ full-time hire. This is typically pre-seed through Series A stage."
    },
    {
      question: "Can you help us hire a full-time CTO eventually?",
      answer: "Yes. Part of our role is building the foundation for your permanent leadership. We help define the role, source candidates, and ensure a smooth transition when you're ready."
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
                Technical Leadership
              </div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Fractional CTO Services
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Engineering rigour and technical leadership for ambitious startups. Make confident architecture decisions, build the right team, and become investor-ready — without the overhead.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/#contact" className="bg-accent-500 text-primary-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-accent-600 transition-all shadow-lg hover:shadow-xl text-center">
                  Schedule a Conversation
                </a>
                <a href="/#case-studies" className="border-2 border-primary-600 text-primary-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-primary-700 hover:bg-primary-50 transition-all text-center">
                  View Client Outcomes
                </a>
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
              <h2 className="font-serif text-4xl font-bold text-slate-900 mb-6">What We Do</h2>
              <p className="text-xl text-slate-600 mb-8">
                Comprehensive technical leadership covering strategy, architecture, team, and execution.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-accent-600 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                    <p className="font-semibold text-slate-900">Pre-seed to Series A startups</p>
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

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-slate-900 mb-4">Common Questions</h2>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Level Up Your Technical Leadership?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Book a free 30-minute discovery call. No sales pitch — just an honest conversation about your technical needs.
          </p>
          <a
            href="/#contact"
            className="inline-block bg-accent-500 text-primary-900 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-accent-600 transition-all shadow-lg hover:shadow-xl"
          >
            Book a Discovery Call
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
