// Testimonial policy (BRANDING.md §2.3): only real feedback. Named attributions
// require the client's permission; confidential ones are explicitly anonymised.
// Owner-verified (4 Aug 2026): all three quotes are genuine client feedback.
// The HR-tech quote was published with a named attribution that had never been
// permission-checked, so it was anonymised on the owner's instruction (4 Aug 2026)
// rather than left standing on an assumption. Name a client only with permission.
const testimonials = [
  {
    quote: "They transformed our platform from handling 5 users to 1000+ concurrent users. The migration was seamless with zero downtime. Exactly the technical leadership we needed.",
    name: "Founder & CEO, London HR-tech platform",
    title: "Name withheld under NDA",
    company: "",
    initials: "HT",
    track: "technical",
    outcome: "5 → 1,000+ concurrent users"
  },
  {
    quote: "Their financial modeling and due diligence preparation were instrumental in closing our Series A. Investors commented on how well-organised our data room was.",
    name: "Founder & CEO, London fintech",
    title: "Name withheld under NDA",
    company: "",
    initials: "FC",
    track: "financial",
    outcome: "Series A closed"
  },
  {
    quote: "As a non-technical founder, I needed someone who could translate business requirements into technical reality. They delivered our MVP in 10 weeks with a system that just works.",
    name: "Founder & CEO, B2B SaaS startup",
    title: "Name withheld under NDA",
    company: "",
    initials: "SF",
    track: "technical",
    outcome: "MVP in 10 weeks"
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Founders Say</h2>
          <p className="text-slate-600">Real feedback from startup leaders we've worked with</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all card-lift relative overflow-hidden ${testimonial.track === 'financial' ? 'border-l-4 border-l-accent-400' : 'border-l-4 border-l-primary-600'}`}>
              {/* Subtle gold accent for financial testimonials */}
              {testimonial.track === 'financial' && (
                <div className="absolute top-0 right-0 w-16 h-16 bg-gold-gradient opacity-5 rounded-bl-full" />
              )}
              {/* Outcome badge */}
              {testimonial.outcome && (
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4 ${testimonial.track === 'financial' ? 'bg-accent-100 text-accent-700' : 'bg-primary-100 text-primary-700'}`}>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  {testimonial.outcome}
                </div>
              )}
              <p className="text-slate-700 mb-6 leading-relaxed relative">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4 border-t border-slate-100 pt-4 relative">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg ${testimonial.track === 'financial' ? 'bg-accent-100 text-accent-700' : 'bg-primary-100 text-primary-600'}`}>
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-600">{testimonial.title}</p>
                  {testimonial.company && (
                    <p className="text-xs text-slate-500">{testimonial.company}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
