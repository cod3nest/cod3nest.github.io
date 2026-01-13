import Image from 'next/image'

export default function ServiceCard({ service, priority = false }) {
  const isTech = service.track === 'technical'
  const trackColor = isTech ? 'primary' : 'accent'
  const trackBorderClass = isTech ? 'service-card-tech' : 'service-card-financial'

  return (
    <div className={`group bg-white border border-slate-200 rounded-xl hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col card-lift ${trackBorderClass}`}>
      {/* Image Section with warm overlay */}
      <div className="relative h-56 overflow-hidden img-warm-overlay">
        <Image
          src={service.image}
          alt={`${service.title} - ${service.benefit}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
          priority={priority}
        />
        {/* Gradient overlay with track-specific tint */}
        <div className={`absolute inset-0 bg-gradient-to-t ${isTech ? 'from-primary-900/80' : 'from-accent-900/70'} via-slate-900/30 to-transparent`} />

        {/* Track indicator badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${isTech ? 'bg-primary-600 text-white' : 'bg-accent-400 text-primary-900'}`}>
            {isTech ? 'Technical' : 'Financial'}
          </span>
        </div>

        <div className="absolute bottom-5 left-5 right-5">
          <h3 className="font-serif text-xl font-bold text-white drop-shadow-lg">{service.title}</h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <p className={`${isTech ? 'text-primary-600' : 'text-accent-500'} font-semibold text-sm mb-2`}>{service.benefit}</p>
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
    </div>
  )
}
