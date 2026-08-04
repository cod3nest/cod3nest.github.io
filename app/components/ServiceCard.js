import Link from 'next/link'

// Two kinds of card share this shape.
//
// A card with an `href` is a destination — the two executive seats, which have
// pages of their own. A card without one is a capability *inside* a seat
// (0-to-1 builds, financial controls, AI engineering); those have no page, and
// there used to be a fallback here that quietly sent them to the seat page
// instead. Six of the eight cards on /services promised a subject and delivered
// a generic CTO or CFO page. A tile that doesn't claim to be a link beats a link
// that doesn't go where it says.
//
// So: no fallback. No href, no anchor, and none of the hover affordances that
// imply one.
export default function ServiceCard({ service }) {
  const isTech = service.track === 'technical'
  const trackBorderClass = isTech ? 'service-card-tech' : 'service-card-financial'
  const href = service.href
  const isLink = Boolean(href)

  const containerClass = [
    'bg-white border border-slate-200 rounded-xl overflow-hidden h-full flex flex-col',
    trackBorderClass,
    isLink ? 'group card-lift hover:shadow-xl transition-all duration-300' : '',
  ]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
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
            <div key={i} className="flex items-start">
              <svg className={`w-4 h-4 ${isTech ? 'text-primary-600' : 'text-accent-500'} mt-0.5 mr-2 flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-xs text-slate-600">{outcome}</span>
            </div>
          ))}
        </div>

        {isLink && (
          <span className={`inline-flex items-center mt-5 text-sm font-semibold ${isTech ? 'text-primary-600' : 'text-accent-700'}`}>
            Explore {service.title}
            <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        )}
      </div>

      {isLink && (
        <div className={`h-1 ${isTech ? 'bg-gradient-to-r from-primary-600 to-primary-400' : 'bg-gold-gradient'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      )}
    </>
  )

  if (!isLink) {
    return <div className={containerClass}>{content}</div>
  }

  return (
    <Link href={href} className={containerClass}>
      {content}
    </Link>
  )
}
