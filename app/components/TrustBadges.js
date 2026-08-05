// The reassurance strip above the contact form. It was duplicated verbatim in
// app/page.js and app/contact/page.js — three parallel claims marked up as bare
// divs, so assistive tech announced them as loose text with no relationship.
const BADGES = [
  {
    label: 'Typically respond within 24hrs',
    path: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    label: '100% confidential',
    path: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    label: 'Free 30-minute consultation',
    path: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
  },
]

export default function TrustBadges({ className = '' }) {
  return (
    // role="list" is not redundant: Tailwind's preflight sets list-style: none,
    // which makes Safari/VoiceOver drop list semantics from a ul entirely.
    <ul role="list" className={`flex flex-wrap justify-center gap-8 ${className}`.trim()}>
      {BADGES.map((badge) => (
        <li key={badge.label} className="flex items-center gap-2 text-sm text-slate-600">
          <svg
            className="w-5 h-5 text-accent-500 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={badge.path} />
          </svg>
          {badge.label}
        </li>
      ))}
    </ul>
  )
}
