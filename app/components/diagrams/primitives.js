// Diagram primitives for blog posts.
//
// BRANDING §7 already settles the question of what a blog visual should be: "a
// schematic beats a stock photo when no real photo exists", and photography is
// reserved for the hero and case studies. The Regeno `PlatformDiagram` is the
// precedent. These are the reusable version of it.
//
// Every diagram is *data*, rendered by one of the shapes below, so the brand
// rules live here rather than in twenty hand-drawn SVGs: stroke 2, brand
// colours only, no emoji, one type scale, one radius. A new post writes a data
// object; it does not write markup.
//
// Accessibility: each shape renders `role="img"` with a `<title>` and a `<desc>`
// naming what the diagram shows, because an SVG with only shape elements is
// announced as nothing at all. The visible caption is a `<figcaption>` and is
// not a substitute for the description.
//
// Colour carries the track, as it does everywhere else on the site: `technical`
// is charcoal, `financial` is gold.

const TRACKS = {
  technical: {
    fill: '#eceff1',
    stroke: '#2C3E50',
    text: '#1c2833',
    accentFill: '#2C3E50',
    accentText: '#ffffff',
    muted: '#546e7a',
  },
  financial: {
    fill: '#faf5eb',
    stroke: '#7c5c07',
    text: '#403003',
    accentFill: '#7c5c07',
    accentText: '#ffffff',
    muted: '#5e4605',
  },
}

export function track(name) {
  return TRACKS[name] || TRACKS.technical
}

// Wraps every diagram: the figure element, the caption, and the horizontal
// scroll container. Wide content scrolls inside its own box; the page body never
// scrolls sideways (BRANDING §5).
export function Figure({ caption, children }) {
  return (
    <figure className="my-10 not-prose">
      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-4 sm:p-6">
        {children}
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-slate-500 leading-relaxed">{caption}</figcaption>
      )}
    </figure>
  )
}

// The SVG shell. `viewBox` plus `w-full h-auto` keeps diagrams readable at
// 375px without a fixed pixel width anywhere.
export function Canvas({ width, height, title, desc, children }) {
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full h-auto"
      style={{ minWidth: width > 560 ? 560 : undefined }}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      {desc && <desc>{desc}</desc>}
      {children}
    </svg>
  )
}

export const FONT =
  "var(--font-inter), system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"

// SVG has no flow layout, so long labels are measured character-wise and split
// into tspans; without this every label longer than its box ran off the edge.
// Exported because callers that stack text vertically have to know how many
// lines they are about to get — a fixed row height silently overlaps the row
// below as soon as one item wraps.
export function wrapLines(text, width, size) {
  const charWidth = size * 0.55
  const maxChars = Math.max(6, Math.floor(width / charWidth))
  const words = String(text).split(' ')
  const lines = []
  let line = ''
  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word
    if (candidate.length > maxChars && line) {
      lines.push(line)
      line = word
    } else {
      line = candidate
    }
  }
  if (line) lines.push(line)
  return lines
}

export function WrappedText({ x, y, width, text, fill, size = 13, weight = 400, anchor = 'middle', lineHeight = 1.35 }) {
  const lines = wrapLines(text, width, size)
  const step = size * lineHeight
  const startY = y - ((lines.length - 1) * step) / 2

  return (
    <text x={x} y={startY} fontFamily={FONT} fontSize={size} fontWeight={weight} fill={fill} textAnchor={anchor} dominantBaseline="middle">
      {lines.map((content, index) => (
        <tspan key={index} x={x} dy={index === 0 ? 0 : step}>
          {content}
        </tspan>
      ))}
    </text>
  )
}

export function Arrow({ id, colour }) {
  return (
    <defs>
      <marker id={id} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill={colour} />
      </marker>
    </defs>
  )
}
