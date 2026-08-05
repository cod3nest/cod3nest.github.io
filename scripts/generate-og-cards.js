// Generates one 1200x630 Open Graph card per blog post, into
// public/img/og/<slug>.png. Run: node scripts/generate-og-cards.js
//
// Every post shipped the same og-default.png, so twenty different articles
// produced one identical LinkedIn preview — on the channel a consultancy
// actually gets referred through. These cards carry the post's own title and
// its track, and no photography: BRANDING §7 reserves photographs for the hero
// and case studies, and there is no real photograph of a blog post.
//
// Fonts are named rather than embedded because sharp rasterises through the
// system font stack. Georgia and Helvetica are the safe pair here and match the
// existing og-default card, which is deliberately the same shape.

const fs = require('fs')
const path = require('path')
const sharp = require('sharp')
const matter = require('gray-matter')

const BLOG_DIR = path.join(__dirname, '../content/blog')
const OUT_DIR = path.join(__dirname, '../public/img/og')

const CHARCOAL = '#2C3E50'
const GOLD = '#D4AF37'
const WHITE = '#FFFFFF'
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

function escapeXml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

// SVG has no text wrapping. Titles are measured character-wise against the
// available width and split, then capped at four lines so a long headline
// cannot push the footer off the card.
function wrap(text, maxChars, maxLines) {
  const words = String(text).split(/\s+/)
  const lines = []
  let line = ''
  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word
    if (candidate.length > maxChars && line) {
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

function card({ title, track, readTime, author }) {
  const accent = track === 'financial' ? GOLD : '#8FA6BD'
  const label = track === 'financial' ? 'Fractional CFO' : 'Fractional CTO'
  const lines = wrap(title, 34, 4)
  // Centred in the band between the track label (y 190) and the footer rule
  // (y 548) rather than anchored to a fixed top, so a one-line title and a
  // four-line title are both balanced and neither collides with the label.
  const startY = 372 - ((lines.length - 1) * 62) / 2

  const titleTspans = lines
    .map((line, i) => `<tspan x="90" dy="${i === 0 ? 0 : 62}">${escapeXml(line)}</tspan>`)
    .join('')

  return `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="${CHARCOAL}"/>
  <rect x="0" y="0" width="1200" height="6" fill="${GOLD}"/>
  <text x="90" y="118" font-family="Georgia, 'Times New Roman', serif" font-size="30" letter-spacing="9" fill="${WHITE}">CODENEST</text>
  <rect x="92" y="140" width="120" height="3" fill="${GOLD}"/>
  <text x="90" y="190" font-family="Helvetica, Arial, sans-serif" font-size="21" letter-spacing="3.5" fill="${accent}">${escapeXml(label.toUpperCase())}</text>
  <text y="${startY}" font-family="Georgia, 'Times New Roman', serif" font-size="54" fill="${WHITE}">${titleTspans}</text>
  <rect x="90" y="548" width="60" height="3" fill="${GOLD}"/>
  <text x="90" y="600" font-family="Helvetica, Arial, sans-serif" font-size="23" fill="${MUTED}">${escapeXml([author, readTime].filter(Boolean).join('  ·  '))}</text>
  <text x="1110" y="600" text-anchor="end" font-family="Helvetica, Arial, sans-serif" font-size="23" fill="${MUTED}">codenest.uk</text>
</svg>`
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true })
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'))

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
