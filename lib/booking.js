// One scheduling link per seat (owner, 23 Nov 2026). Paste each principal's
// public booking page here: a Google Calendar appointment page, Cal.com or
// Calendly. An empty url means that seat's calendar is not live yet, and every
// surface falls back to the contact form with the label "Request a Strategy
// Call" (BRANDING §13.3). Nothing else needs editing when a link goes live.
export const BOOKING = {
  // Both seats share one Calendly page for now (owner, 23 Nov 2026). Give the
  // CFO seat Michelle's own link when she has one; liveBookings() then shows
  // two buttons instead of one.
  cto: { url: 'https://calendly.com/arana198/30min', person: 'Ankit Rana', seat: 'Fractional CTO' },
  cfo: { url: 'https://calendly.com/arana198/30min', person: 'Michelle Rana FCCA', seat: 'Fractional CFO' },
}

export const BOOK_LABEL = 'Book a Strategy Call'
export const REQUEST_LABEL = 'Request a Strategy Call'

// The primary CTA for one seat's journey: its calendar when live, otherwise the
// contact form with that seat already selected.
export function seatCta(seat) {
  const url = BOOKING[seat]?.url
  if (url) {
    return { href: url, label: BOOK_LABEL, external: true }
  }
  return { href: `/contact/?seat=${seat}`, label: REQUEST_LABEL, external: false }
}

// One entry per distinct link. When seats share a calendar, a single button
// names both seats and no person, so a CFO visitor is not told they are
// booking with Michelle on a page that belongs to someone else.
export function liveBookings() {
  const byUrl = new Map()
  for (const [seat, b] of Object.entries(BOOKING)) {
    if (!b.url) continue
    const existing = byUrl.get(b.url)
    if (existing) {
      existing.seat += `-${seat}`
      existing.label = 'Fractional CTO or CFO'
    } else {
      byUrl.set(b.url, { seat, url: b.url, label: `${b.seat} \u00b7 ${b.person}` })
    }
  }
  return [...byUrl.values()]
}

// Opening a third-party calendar in a new tab keeps a half-typed form intact.
export const EXTERNAL_LINK_PROPS = { target: '_blank', rel: 'noopener noreferrer' }
