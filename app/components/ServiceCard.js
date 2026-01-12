import Image from 'next/image'

export default function ServiceCard({ service, priority = false }) {
  return (
    <div className="group bg-white border border-slate-200 rounded-xl hover:border-slate-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={service.image}
          alt={`${service.title} - ${service.benefit}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/30 to-transparent" />
        <div className="absolute bottom-5 left-5 right-5">
          <h3 className="font-serif text-xl font-bold text-white">{service.title}</h3>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-accent-700 font-medium text-sm mb-2">{service.benefit}</p>
        <p className="text-slate-600 text-sm leading-relaxed mb-5">{service.description}</p>
        <div className="space-y-2 mt-auto">
          {service.outcomes.map((outcome, i) => (
            <div key={i} className="flex items-start">
              <svg className="w-4 h-4 text-accent-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-xs text-slate-600">{outcome}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
