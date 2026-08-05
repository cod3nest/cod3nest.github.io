// Generates one 1200x630 Open Graph card per blog post, into
// public/img/og/<slug>.png. Run: node scripts/generate-og-cards.js
//
// Every post shipped the same og-default.png, so twenty different articles
// produced one identical LinkedIn preview — on the channel a consultancy
// actually gets referred through. These cards carry the post's own title and
// its track, and no photography: BRANDING §7 reserves photographs for the hero
// and case studies, and there is no real photograph of a blog post.
//
// Every glyph is emitted as an outline, never as <text>. Naming fonts and letting
// sharp resolve them through the system font stack meant these cards rendered in
// Georgia locally and in whatever serif fontconfig picked on the ubuntu CI runner,
// so every deploy silently replaced the committed cards with different type. The
// wordmark is now the real lockup from lib/logo.js rather than a re-typeset
// lookalike — the old card tracked it at 0.30em against the logo's 0.18em.

const fs = require('fs')
const path = require('path')
const sharp = require('sharp')
const matter = require('gray-matter')
const {
  PLAYFAIR, INTER, TILE, GOLD, WHITE, lockup, textOutline, textWidth, round,
} = require('./lib/logo')

const BLOG_DIR = path.join(__dirname, '../content/blog')
const OUT_DIR = path.join(__dirname, '../public/img/og')

const CHARCOAL = TILE
const MUTED = '#B8C2CC'

// Same tag vocabulary the post CTA routes on, so a post's card and its CTA can
// never disagree about which track it belongs to.
const FINANCE_TAGS = new Set([
  'Fractional CFO', 'Finance', 'Startup Finance', 'Financial Modelling',
  'Fundraising', 'Cash Management', 'Unit Economics', 'Data Room', 'Metrics',
])
const TECH_OVERRIDE_TAGS = new Set(['Fractional CTO', 'Technical Leadership', 'Infrastructure'])

function trackOf(tags = []) {
  const finance = tags.some((t) => FINANCE_TAGS.has(t))
  const override = tags.some((t) => TECH_OVERRIDE_TAGS.has(t))
  return finance && !override ? 'financial' : 'technical'
}

// SVG has no text wrapping. Now that the font is loaded rather than named, lines
// are measured in actual glyph advances instead of counting characters — a
// character count treats "Illinois" and "Wormwood" as the same width.
function wrap(text, maxWidth, maxLines, style) {
  const words = String(text).split(/\s+/)
  const lines = []
  let line = ''
  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word
    if (textWidth(candidate, style) > maxWidth && line) {
      lines.push(line)
      line = word
      if (lines.length === maxLines) break
    } else {
      line = candidate
    }
  }
  if (lines.length < maxLines && line) lines.push(line)
  if (lines.length === maxLines) {
    const last = lines[maxLines - 1]
    if (words.join(' ').length > lines.join(' ').length) {
      lines[maxLines - 1] = last.replace(/[,.;:]?$/, '') + '…'
    }
  }
  return lines
}

function outline(text, { fontFile, size, tracking = 0, x = 0, y, fill, anchorEnd }) {
  const start = anchorEnd ? x - textWidth(text, { fontFile, size, tracking }) : x
  const { d } = textOutline(text, { fontFile, size, tracking, x: start, y })
  return `<path d="${d}" fill="${fill}"/>`
}

const TITLE = { fontFile: PLAYFAIR, size: 54 }
const LABEL = { fontFile: INTER, size: 21, tracking: 3.5 }
const FOOTER = { fontFile: INTER, size: 23 }

// The lockup is drawn once and reused at card scale, so the card's wordmark is by
// construction the same one the site renders.
const LOGO_SCALE = 1.45
const brand = lockup({ ink: WHITE, gold: GOLD, rule: '#54657A' })

function card({ title, track, readTime, author }) {
  const accent = track === 'financial' ? GOLD : '#8FA6BD'
  const label = track === 'financial' ? 'Fractional CFO' : 'Fractional CTO'
  const lines = wrap(title, 1020, 4, TITLE)
  // Centred in the band between the track label and the footer rule rather than
  // anchored to a fixed top, so a one-line title and a four-line title are both
  // balanced and neither collides with the label.
  const startY = 372 - ((lines.length - 1) * 62) / 2

  const titlePaths = lines
    .map((line, i) => outline(line, { ...TITLE, x: 90, y: startY + i * 62, fill: WHITE }))
    .join('\n  ')

  return `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="${CHARCOAL}"/>
  <rect x="0" y="0" width="1200" height="6" fill="${GOLD}"/>
  <g transform="translate(86 74) scale(${LOGO_SCALE})">
${brand.markup}
  </g>
  <rect x="90" y="168" width="120" height="3" fill="${GOLD}"/>
  ${outline(label.toUpperCase(), { ...LABEL, x: 90, y: 214, fill: accent })}
  ${titlePaths}
  <rect x="90" y="548" width="60" height="3" fill="${GOLD}"/>
  ${outline([author, readTime].filter(Boolean).join('  ·  '), { ...FOOTER, x: 90, y: 600, fill: MUTED })}
  ${outline('codenest.uk', { ...FOOTER, x: 1110, y: 600, fill: MUTED, anchorEnd: true })}
</svg>`
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true })
  // Posts are lowercase-kebab (the filename is the slug); any other .md dropped in
  // here would otherwise render a card titled "undefined". Kept in step with
  // `isPostFile` in lib/blog.js.
  const files = fs.readdirSync(BLOG_DIR).filter((f) => /^[a-z0-9-]+\.md$/.test(f))

  for (const file of files) {
    const slug = file.replace(/\.md$/, '')
    const { data } = matter(fs.readFileSync(path.join(BLOG_DIR, file), 'utf8'))
    const svg = card({
      title: data.title,
      track: trackOf(data.tags),
      readTime: data.readTime,
      author: data.author,
    })
    await sharp(Buffer.from(svg)).png().toFile(path.join(OUT_DIR, `${slug}.png`))
  }

  console.log(`Wrote ${files.length} cards to public/img/og/`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
