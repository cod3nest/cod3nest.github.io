// Generates the default 1200x630 Open Graph card (public/img/og-default.png) — the
// social preview for every page that is not a blog post.
// Run: node scripts/generate-og-image.js  (wired into `npm run assets`)
//
// Text is outlined, not named, for the same reason as the per-post cards: this file
// was previously typeset in Georgia <text>, so it rendered in one face on a Mac and
// another on the CI runner that actually builds the site.

const path = require('path')
const sharp = require('sharp')
const { PLAYFAIR, INTER, TILE, GOLD, WHITE, lockup, textOutline } = require('./lib/logo')

const MUTED = '#B8C2CC'
const FAINT = '#8A98A5'

const brand = lockup({ ink: WHITE, gold: GOLD, rule: '#54657A' })

function line(text, { fontFile, size, tracking = 0, x, y, fill }) {
  return `<path d="${textOutline(text, { fontFile, size, tracking, x, y }).d}" fill="${fill}"/>`
}

const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="${TILE}"/>
  <rect x="0" y="0" width="1200" height="6" fill="${GOLD}"/>
  <g transform="translate(86 108) scale(1.9)">
${brand.markup}
  </g>
  <rect x="90" y="232" width="180" height="3" fill="${GOLD}"/>
  ${line('Fractional CTO & CFO', { fontFile: PLAYFAIR, size: 52, x: 90, y: 330, fill: GOLD })}
  ${line('for UK Startups', { fontFile: PLAYFAIR, size: 52, x: 90, y: 400, fill: WHITE })}
  ${line('Big 4 rigour meets founder empathy. Pre-seed to Series A.', { fontFile: INTER, size: 28, x: 90, y: 490, fill: MUTED })}
  ${line('codenest.uk', { fontFile: INTER, size: 24, x: 90, y: 560, fill: FAINT })}
</svg>`

sharp(Buffer.from(svg))
  .png()
  .toFile(path.join(__dirname, '../public/img/og-default.png'))
  .then(() => console.log('Wrote public/img/og-default.png'))
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
