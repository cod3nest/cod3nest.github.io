import Link from 'next/link'

export default function ServiceCard({ service }) {
  const isTech = service.track === 'technical'
  const trackBorderClass = isTech ? 'service-card-tech' : 'service-card-financial'
  const href = service.href || (isTech ? '/services/fractional-cto' : '/services/fractional-cfo')

  return (
    <Link href={href} className={`group bg-white border border-slate-200 rounded-xl hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col card-lift ${trackBorderClass}`}>
      {/* Track panel. Deliberately not a photograph: every stock image available
          is an engineering scene, which mislabelled the financial services as
          technical work. Colour carries the track instead. */}
      <div
        className={`relative h-56 overflow-hidden flex items-end ${
          isTech
            ? 'bg-gradient-to-br from-primary-800 to-primary-600'
            : 'bg-gradient-to-br from-accent-800 to-accent-600'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />

        {/* Track indicator badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${isTech ? 'bg-white text-primary-800' : 'bg-accent-400 text-primary-900'}`}>
            {isTech ? 'Technical' : 'Financial'}
          </span>
        </div>

        <div className="relative p-5">
          <h3 className="text-xl font-bold text-white">{service.title}</h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <p className={`${isTech ? 'text-primary-600' : 'text-accent-700'} font-semibold text-sm mb-2`}>{service.benefit}</p>
        <p className="text-slate-600 text-sm leading-relaxed mb-5">{service.description}</p>

        {/* Outcomes with track-colored checkmarks */}
        <div className="space-y-2 mt-auto">
          {service.outcomes.map((outcome, i) => (
            <div key={i} className="flex items-start group/item">
              <svg className={`w-4 h-4 ${isTech ? 'text-primary-600' : 'text-accent-500'} mt-0.5 mr-2 flex-shrink-0 transition-transform group-hover/item:scale-110`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-xs text-slate-600">{outcome}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom accent bar */}
      <div className={`h-1 ${isTech ? 'bg-gradient-to-r from-primary-600 to-primary-400' : 'bg-gold-gradient'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
    </Link>
  )
}
