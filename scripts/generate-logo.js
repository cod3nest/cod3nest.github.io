// Writes every logo, icon and favicon SVG from scripts/lib/logo.js.
// Run: node scripts/generate-logo.js  (wired into prebuild)
//
// These files are build output. Edit scripts/lib/logo.js, not the SVGs — anything
// you hand-edit here is overwritten on the next build.

const fs = require('fs')
const path = require('path')
const {
  INK, TILE, GOLD, GOLD_DEEP, GOLD_LIGHT, RULE, WHITE,
  monogramInk, monogramPaths, lockup, round,
} = require('./lib/logo')

const OUT = path.join(__dirname, '../public/img')
const PUBLIC = path.join(__dirname, '../public')

function lockupFile({ ink, gold, rule, idPrefix }) {
  const { markup, width, height } = lockup({ ink, gold, rule })
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="${idPrefix}-title ${idPrefix}-desc">
  <title id="${idPrefix}-title">Codenest</title>
  <desc id="${idPrefix}-desc">Codenest - Fractional CTO &amp; CFO for UK startups</desc>
${markup}
</svg>
`
}

// A tile scales the same monogram; `inset` is the share of the tile width the mark
// takes, `weight` its optical-size stroke adjustment.
function tile({ size, radius, border = 0, inset, weight = 1, idPrefix }) {
  const ink = monogramInk(weight)
  const s = (size * inset) / ink.width
  const x = (size - ink.width * s) / 2 - ink.offsetX * s
  const y = (size - ink.height * s) / 2 - ink.offsetY * s
  const borderRect = border
    ? `\n  <rect x="${border / 2}" y="${border / 2}" width="${size - border}" height="${size - border}" rx="${radius}" fill="none" stroke="url(#${idPrefix}-gold)" stroke-width="${border}"/>`
    : ''
  const defs = border
    ? `\n  <defs>
    <linearGradient id="${idPrefix}-gold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${GOLD_DEEP}"/>
      <stop offset="50%" stop-color="${GOLD}"/>
      <stop offset="100%" stop-color="${GOLD_DEEP}"/>
    </linearGradient>
  </defs>`
    : ''
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" role="img" aria-labelledby="${idPrefix}-title">
  <title id="${idPrefix}-title">Codenest</title>${defs}
  <rect width="${size}" height="${size}" rx="${radius}" fill="${TILE}"/>${borderRect}
  <g transform="translate(${round(x)} ${round(y)}) scale(${round(s)})">
${monogramPaths({ ink: WHITE, gold: GOLD, weight })}
  </g>
</svg>
`
}

// The mark on its own, no ground. Square canvas so it drops into any icon slot.
function mark({ ink, idPrefix }) {
  const box = monogramInk()
  const size = Math.ceil(box.width)
  const y = (size - box.height) / 2 - box.offsetY
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" role="img" aria-labelledby="${idPrefix}-title">
  <title id="${idPrefix}-title">Codenest</title>
  <g transform="translate(${round(-box.offsetX)} ${round(y)})">
${monogramPaths({ ink, gold: GOLD })}
  </g>
</svg>
`
}

const files = [
  // ids are prefixed per file so two variants can be inlined on one page without
  // colliding — both old files declared id="logo-title".
  [path.join(OUT, 'companylogo.svg'), lockupFile({
    ink: INK, gold: GOLD, rule: RULE, idPrefix: 'cn-logo',
  })],
  // On dark grounds the deep gold drops towards the background, so the dark variant
  // takes the lighter accent.
  [path.join(OUT, 'companylogo-light.svg'), lockupFile({
    ink: WHITE, gold: GOLD_LIGHT, rule: '#475569', idPrefix: 'cn-logo-light',
  })],
  [path.join(OUT, 'companylogo-linkedin.svg'), tile({
    size: 400, radius: 48, border: 6, inset: 0.68, idPrefix: 'cn-li',
  })],
  // The favicon is a distinct optical size, not the logo shrunk: at 32px a 0.105
  // stroke ratio anti-aliases to pale grey, and a hairline gold border blurs into
  // the tile edge. Heavier stroke, no border, tighter inset.
  [path.join(PUBLIC, 'favicon.svg'), tile({
    size: 64, radius: 12, inset: 0.78, weight: 1.45, idPrefix: 'cn-fav',
  })],
  // Maskable: Android crops to a circle of radius 0.4*size, so the mark sits well
  // inside it. The old icon declared "any maskable" with the gold segment ~228u
  // from centre against a 204.8u safe radius, so Android clipped it.
  [path.join(PUBLIC, 'icon-maskable.svg'), tile({
    size: 512, radius: 0, inset: 0.5, weight: 1.15, idPrefix: 'cn-mask',
  })],
  [path.join(PUBLIC, 'icon-any.svg'), tile({
    size: 512, radius: 96, border: 12, inset: 0.68, idPrefix: 'cn-any',
  })],
  // The bare mark on a transparent ground. Nothing in the app references it, but it
  // is served at /img/icon.svg and had PNG renditions alongside it, so it is kept
  // and regenerated rather than deleted — a dead URL is worse than a spare file.
  [path.join(OUT, 'icon.svg'), mark({ ink: INK, idPrefix: 'cn-mark' })],
]

for (const [file, contents] of files) {
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, contents)
  console.log(`  ${path.relative(path.join(__dirname, '..'), file)}`)
}
console.log(`Wrote ${files.length} logo files from scripts/lib/logo.js`)
