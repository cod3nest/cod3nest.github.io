// The single source of truth for the Codenest mark.
//
// Every logo, icon and favicon in the repo is generated from the geometry below,
// so the mark cannot drift between assets the way it had: the C was drawn at three
// different widths (0.500, 0.412 and 0.498 w/h) and three stroke weights across
// companylogo.svg, icon.svg and companylogo-linkedin.svg, because each file had
// been hand-edited in isolation.
//
// The wordmark is emitted as outlined paths, never as <text>. An SVG <text> element
// is a font *request*: the old logo asked for Georgia, which does not exist on Linux
// or Android, so the wordmark silently rendered in whatever serif fontconfig chose.
// That is also why the CI-built OG cards never matched the ones committed from macOS.

const fs = require('fs')
const path = require('path')
const opentype = require('opentype.js')

const FONT_DIR = path.join(__dirname, '../fonts')

function loadFont(file) {
  const buf = fs.readFileSync(path.join(FONT_DIR, file))
  return opentype.parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength))
}

const fontCache = new Map()
function font(file) {
  if (!fontCache.has(file)) fontCache.set(file, loadFont(file))
  return fontCache.get(file)
}

const PLAYFAIR = 'PlayfairDisplay-Regular.ttf'
const INTER = 'Inter-Regular.ttf'

// Brand tokens (tailwind.config.js). The old files used #1a2e3b, which is not on the
// scale at all — primary-700 is #243342 and primary-800 is #1c2833.
const INK = '#1c2833' // primary-800: the mark on light grounds
const TILE = '#2C3E50' // primary-600: filled icon grounds, matches manifest background_color
const GOLD = '#D4AF37' // accent-400
const GOLD_DEEP = '#B8860B' // accent-500
const GOLD_LIGHT = '#E5C158'
const RULE = '#cbd5e1' // slate-300
const WHITE = '#ffffff'

// ---------------------------------------------------------------------------
// Monogram
// ---------------------------------------------------------------------------
// Design space: cap height 100. Scale it, never redraw it.

const CAP = 100
const STROKE = 10.5 // 0.105 of cap height
const APERTURE = 48 // half-angle of the C's opening, degrees
const N_WIDTH = 72
const GAP = 11 // C ink to N stem. The PWA icon had these touching, so it read "ON".
const GOLD_LEN = 32 // gold segment down the N's right stem

const R = CAP / 2
const HALF = STROKE / 2
const rad = (deg) => (deg * Math.PI) / 180

// C terminals sit at ±APERTURE off the horizontal, so the aperture stays open at
// every size. The arc is the long way round (largeArc=1) anticlockwise (sweep=0).
const CX = R + HALF
const CY = R + HALF
const termX = CX + R * Math.cos(rad(APERTURE))
const termDY = R * Math.sin(rad(APERTURE))

const C_INK_RIGHT = termX + HALF
const N_LEFT = C_INK_RIGHT + GAP + HALF
const N_RIGHT = N_LEFT + N_WIDTH
const STEM_TOP = HALF
const STEM_BOTTOM = HALF + CAP

const MONOGRAM = {
  inkWidth: N_RIGHT + HALF,
  inkHeight: CAP + STROKE,
  stroke: STROKE,
  cap: CAP,
}

// The skeleton is fixed; a heavier stroke pushes the round caps further out, so the
// ink box has to be measured per weight or tiles centre the mark wrongly.
function monogramInk(weight = 1) {
  const hs = (STROKE * weight) / 2
  return {
    width: N_RIGHT + hs - (CX - R - hs),
    height: CAP + 2 * hs,
    offsetX: CX - R - hs,
    offsetY: HALF - hs,
  }
}

// Two-tone stem, not a bar laid over one. The old gold rect was a *different width*
// from the stroke it sat on and 0.5u off centre (3.5u on the LinkedIn tile), which
// read as misregistration. Here the gold is the same path geometry as the stem, so
// it can only ever be concentric.
//
// `weight` is an optical-size adjustment, not a second drawing: the skeleton, the
// aperture and every coordinate stay identical, only the stroke thickens. A 0.105
// ratio that reads correctly at 400px turns into pale grey mush at 32px, which is
// what the old favicon did.
function monogramPaths({ ink, gold, weight = 1 }) {
  const stroke = round(STROKE * weight)
  const arc =
    `M${round(termX)} ${round(CY - termDY)} ` +
    `A${R} ${R} 0 1 0 ${round(termX)} ${round(CY + termDY)}`
  const strokeAttrs = `stroke-width="${stroke}" stroke-linecap="round" fill="none"`
  return [
    `<path d="${arc}" stroke="${ink}" ${strokeAttrs}/>`,
    `<path d="M${round(N_LEFT)} ${STEM_BOTTOM} L${round(N_LEFT)} ${STEM_TOP}" stroke="${ink}" ${strokeAttrs}/>`,
    `<path d="M${round(N_LEFT)} ${STEM_TOP} L${round(N_RIGHT)} ${STEM_BOTTOM}" stroke="${ink}" ${strokeAttrs}/>`,
    `<path d="M${round(N_RIGHT)} ${STEM_BOTTOM} L${round(N_RIGHT)} ${STEM_TOP}" stroke="${ink}" ${strokeAttrs}/>`,
    `<path d="M${round(N_RIGHT)} ${round(STEM_TOP + GOLD_LEN)} L${round(N_RIGHT)} ${STEM_TOP}" stroke="${gold}" ${strokeAttrs}/>`,
  ].join('\n')
}

function round(n) {
  return Number(n.toFixed(3))
}

// ---------------------------------------------------------------------------
// Text as outlines
// ---------------------------------------------------------------------------

// opentype.js 2.0's toPathData emits no closepath for these fonts — every contour
// comes out open. librsvg then drops glyphs (Playfair's "s" vanished, and in a
// single concatenated path everything after it went with it), so contours are
// serialised here and explicitly closed instead.
function serialise(commands, dp = 2) {
  const n = (v) => Number(v.toFixed(dp))
  let d = ''
  let open = false
  for (const c of commands) {
    switch (c.type) {
      case 'M':
        if (open) d += 'Z'
        d += `M${n(c.x)} ${n(c.y)}`
        open = true
        break
      case 'L':
        d += `L${n(c.x)} ${n(c.y)}`
        break
      case 'Q':
        d += `Q${n(c.x1)} ${n(c.y1)} ${n(c.x)} ${n(c.y)}`
        break
      case 'C':
        d += `C${n(c.x1)} ${n(c.y1)} ${n(c.x2)} ${n(c.y2)} ${n(c.x)} ${n(c.y)}`
        break
      case 'Z':
        d += 'Z'
        open = false
        break
    }
  }
  return open ? d + 'Z' : d
}

// opentype's getPath has no letter-spacing, so glyphs are placed one at a time.
// Returns the path data plus the x after each glyph, which is what lets the gold
// underline land on a real letter boundary instead of the hardcoded x=118 that
// used to stop 56% of the way through the "D".
function textOutline(text, { fontFile, size, tracking = 0, x = 0, y = 0 }) {
  const f = font(fontFile)
  const scale = size / f.unitsPerEm
  let cursor = x
  let data = ''
  const boundaries = [cursor]
  let inkLeft = Infinity
  let inkRight = -Infinity
  for (const ch of text) {
    const glyph = f.charToGlyph(ch)
    const p = glyph.getPath(cursor, y, size)
    data += serialise(p.commands)
    for (const c of p.commands) {
      if (c.x === undefined) continue
      inkLeft = Math.min(inkLeft, c.x)
      inkRight = Math.max(inkRight, c.x)
    }
    cursor += glyph.advanceWidth * scale + tracking
    boundaries.push(cursor)
  }
  return {
    d: data,
    // The final tracking step is a gap after the last glyph, not part of the word.
    width: cursor - x - tracking,
    // Ink extent, which is what optical spacing has to be measured against — the
    // advance width carries the first glyph's side bearing as invisible slack.
    inkLeft: Number.isFinite(inkLeft) ? inkLeft : x,
    inkRight: Number.isFinite(inkRight) ? inkRight : x,
    boundaries,
    capHeight: f.tables.os2.sCapHeight * scale,
  }
}

function textWidth(text, { fontFile, size, tracking = 0 }) {
  return textOutline(text, { fontFile, size, tracking }).width
}

// ---------------------------------------------------------------------------
// Lockup
// ---------------------------------------------------------------------------
// Returned as markup rather than a whole document so the OG cards can embed the
// real logo instead of re-typesetting a lookalike. The old cards set their own
// "CODENEST" at 0.30em tracking against the logo's 0.18em, so the wordmark on a
// shared link was never the wordmark on the site.

const LOCKUP_H = 48 // nav uses h-12, footer h-10 (BRANDING §9)
const LOCKUP_PAD = 4
const LOCKUP_INK_H = 36 // monogram ink fills the canvas rather than floating in it
// The mark used to stand 2.05x the wordmark cap height on the same stroke weight
// as the wordmark's stems, which made it read as a wireframe beside solid letters.
const MARK_TO_CAP = 1.6
const LOCKUP_GAP = 12 // mark to divider, and divider to wordmark
const TRACKING_EM = 0.18 // matches the old 4/22

function lockup({ ink, gold, rule }) {
  const k = LOCKUP_INK_H / MONOGRAM.inkHeight
  const capPx = MONOGRAM.cap * k
  const size = capPx / MARK_TO_CAP / (font(PLAYFAIR).tables.os2.sCapHeight / font(PLAYFAIR).unitsPerEm)
  const tracking = size * TRACKING_EM

  const monoW = MONOGRAM.inkWidth * k
  const monoY = (LOCKUP_H - LOCKUP_INK_H) / 2
  const dividerX = LOCKUP_PAD + monoW + LOCKUP_GAP

  // Placed so the wordmark's *ink* clears the divider by LOCKUP_GAP. Setting the
  // pen there instead leaves the C's left side bearing as extra air, which is why
  // the gaps either side of the divider did not read as equal.
  const probe = textOutline('CODENEST', { fontFile: PLAYFAIR, size, tracking, x: 0, y: 0 })
  const wordX = dividerX + LOCKUP_GAP - probe.inkLeft

  const baseline = (LOCKUP_H + probe.capHeight) / 2
  const glyphs = textOutline('CODENEST', {
    fontFile: PLAYFAIR, size, tracking, x: wordX, y: round(baseline),
  })

  // No gold underline. The old files carried one, but it never rendered anywhere:
  // it was a horizontal <line>, so its bounding box had zero height, and an
  // objectBoundingBox gradient on a zero-height box means the element is dropped.
  // Sampling the production PNG confirms pure white across that band. Reinstating
  // it would change a logo nobody has seen it on, and at h-10 it would be a 1.25px
  // rule at 2.1:1 on white. The gold signature lives on the N's stem instead.
  const markup = `  <g transform="translate(${LOCKUP_PAD} ${monoY}) scale(${round(k)})">
${monogramPaths({ ink, gold })}
  </g>
  <line x1="${round(dividerX)}" y1="12" x2="${round(dividerX)}" y2="36" stroke="${rule}" stroke-width="1.5"/>
  <path d="${glyphs.d}" fill="${ink}"/>`

  // Trailing padding matches the leading padding against ink, not advance. The old
  // file declared width 260 with the wordmark ending at 218.6, so 16% of the logo
  // was empty space on one side and any flex gap beside it silently gained 41px.
  return { markup, width: Math.ceil(glyphs.inkRight + LOCKUP_PAD), height: LOCKUP_H }
}

module.exports = {
  INK,
  TILE,
  GOLD,
  GOLD_DEEP,
  GOLD_LIGHT,
  RULE,
  WHITE,
  PLAYFAIR,
  INTER,
  MONOGRAM,
  monogramInk,
  monogramPaths,
  lockup,
  textOutline,
  textWidth,
  round,
}
