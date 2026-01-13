const testimonials = [
  {
    quote: "They transformed our platform from handling 5 users to 1000+ concurrent users. The migration was seamless with zero downtime. Exactly the technical leadership we needed.",
    name: "Julie Chakraverty",
    title: "Founder & CEO",
    company: "Rungway",
    initials: "JC",
    track: "technical",
    outcome: "200x scale improvement"
  },
  {
    quote: "Their financial modeling and due diligence preparation were instrumental in closing our Series A. Investors commented on how well-organised our data room was.",
    name: "Marcus Chen",
    title: "Founder & CEO",
    company: "London Fintech",
    initials: "MC",
    track: "financial",
    outcome: "Series A closed"
  },
  {
    quote: "As a non-technical founder, I needed someone who could translate business requirements into technical reality. They delivered our MVP in 10 weeks with a system that just works.",
    name: "Sarah Mitchell",
    title: "Founder & CEO",
    company: "B2B SaaS Platform",
    initials: "SM",
    track: "technical",
    outcome: "MVP in 10 weeks"
  }
]

function StarRating() {
  return (
    <div className="flex items-center gap-1 mb-4">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

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
              <StarRating />
              <p className="text-slate-700 mb-6 leading-relaxed relative">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4 border-t border-slate-100 pt-4 relative">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg ${testimonial.track === 'financial' ? 'bg-accent-100 text-accent-600' : 'bg-primary-100 text-primary-600'}`}>
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-600">{testimonial.title}</p>
                  <p className="text-xs text-slate-400">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
