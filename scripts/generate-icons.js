// Rasterises every SVG written by generate-logo.js. Run: node scripts/generate-icons.js
// (wired into prebuild, after generate-logo.js).
//
// This used to be a manual script nobody ran, which meant companylogo.png — the file
// layout.js hands Google as the schema.org `logo` and `image` — went stale the moment
// the SVG changed. The root PWA icons were not produced by any script at all and had
// no source file in the repo, so the mark on an Android home screen was a drawing
// that existed nowhere else.

const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const PUBLIC = path.join(__dirname, '../public')

// [source svg, output png, width] — square sources render square.
const conversions = [
  // Lockup. companylogo.png is the schema.org logo, so it leads.
  ['img/companylogo.svg', 'img/companylogo.png', 1200],
  ['img/companylogo.svg', 'img/companylogo-480.png', 480],
  ['img/companylogo.svg', 'img/companylogo-960.png', 960],
  ['img/companylogo-light.svg', 'img/companylogo-light-480.png', 480],
  ['img/companylogo-light.svg', 'img/companylogo-light-960.png', 960],

  // Social tile.
  ['img/companylogo-linkedin.svg', 'img/companylogo-linkedin-200.png', 200],
  ['img/companylogo-linkedin.svg', 'img/companylogo-linkedin-400.png', 400],

  // Bare mark, kept because /img/icon*.png are live URLs.
  ['img/icon.svg', 'img/icon-64.png', 64],
  ['img/icon.svg', 'img/icon-128.png', 128],
  ['img/icon.svg', 'img/icon-256.png', 256],
  ['img/icon.svg', 'img/icon-512.png', 512],

  // Browser + PWA icons.
  ['favicon.svg', 'favicon-16x16.png', 16],
  ['favicon.svg', 'favicon-32x32.png', 32],
  // apple-touch-icon is rendered at 180 on retina home screens; layout.js used to
  // point it at the 32px favicon, which iOS upscaled.
  ['icon-any.svg', 'apple-touch-icon.png', 180],
  ['icon-any.svg', 'icon-192x192.png', 192],
  ['icon-any.svg', 'icon-512x512.png', 512],
  ['icon-maskable.svg', 'icon-maskable-512.png', 512],
]

async function main() {
  for (const [input, output, width] of conversions) {
    const inputPath = path.join(PUBLIC, input)
    if (!fs.existsSync(inputPath)) {
      throw new Error(`${input} is missing — run scripts/generate-logo.js first`)
    }
    await sharp(fs.readFileSync(inputPath))
      .resize({ width })
      .png()
      .toFile(path.join(PUBLIC, output))
  }
  console.log(`Rasterised ${conversions.length} icons from the generated SVGs`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
