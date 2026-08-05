# Logo review — 5 August 2026

Review of `public/img/companylogo.svg` and the whole icon family, and the record of
what was changed in response. Brand rules that came out of this live in
[BRANDING.md §9](BRANDING.md); this file is the reasoning behind them.

## Summary

The concept was sound — a restrained CN monogram with a gold signature accent suits
a boutique advisory better than most consultancy logos. The execution was five
hand-edited SVGs that had drifted apart, with a wordmark that was a font *request*
rather than a drawing. Three defects were already shipping visibly.

Everything below was verified against the live site or the built output, not read off
the source. Where a claim is a measurement, the measurement is given.

## What was shipping wrong

### 1. The wordmark was live text in a font half the internet doesn't have

`companylogo.svg` set "CODENEST" as `<text>` in
`Georgia, 'Palatino Linotype', 'Book Antiqua', Palatino, serif`. Every face in that
stack is a Microsoft or Apple system font. On Linux and Android the whole stack
misses and the wordmark renders in whatever generic serif fontconfig picks. Nothing
errors.

### 2. Every deploy silently replaced the OG cards

`generate-og-cards.js` re-typeset the wordmark in Georgia, `prebuild` runs it, and
`deploy.yml` builds on `ubuntu-latest`, which has no Georgia. Verified by fetching a
live card and comparing it to the committed one:

```bash
curl -s https://codenest.uk/img/og/building-your-first-data-room.png | cmp - public/img/og/building-your-first-data-room.png
```

They differed. Side by side, the live headline was ~65px narrower with visibly higher
stroke contrast — a Liberation/DejaVu substitution. **The cards Google and LinkedIn
displayed were not the ones in the repo, and were in neither Georgia nor Playfair.**

The card also tracked its wordmark at 0.30em against the logo's 0.18em, so it was a
lookalike, not the logo. `generate-og-image.js` had the same defect for
`og-default.png`, the fallback preview for every non-blog page.

### 3. The schema.org logo could go stale without anyone noticing

`generate-icons.js` was not wired into `prebuild` or `build`. `companylogo.png` — the
file `app/layout.js` hands Google as the organisation `logo` and `image` — was a
hand-run artefact. Editing the SVG left it stale.

### 4. The gold underline had never rendered, anywhere

The source carried `<line x1="68" y1="36" x2="118" y2="36" stroke="url(#goldAccent)">`.
A horizontal line has a zero-height bounding box, and an `objectBoundingBox` gradient
on a zero-height box means the element is not rendered at all. Sampling the row of the
production PNG where it should sit returned pure white across the whole band.

It was also never aligned to anything: it ended at x=118, and the "D" spans
106.5–127.0, so it stopped 56% of the way through a letter.

## Brand-law violations

| Issue | Detail |
|---|---|
| `<desc>` copy | "Boutique Startup Advisory" — §7 mandates `Codenest - Fractional CTO & CFO for UK startups`, and the old string is stale positioning. |
| Off-token charcoal | The logo used `#1a2e3b`. The `primary` scale has `700: #243342` and `800: #1c2833`; it matched neither. |
| Two charcoals in one family | `companylogo.svg` was `#1a2e3b`, `companylogo-linkedin.svg` and `favicon.svg` `#2C3E50`. |
| Wordmark face | Georgia, against §4's Playfair Display. §4 already recorded this as debt. |

## Drawing defects

- **Gold bar off-centre from the stem it sat on.** Bar centre 37.5 against stem centre
  38.0 — 0.5u at 48px, and 3.5u on the 400px LinkedIn tile. Both ≈1% of mark height,
  enough to read as misregistration. On the tile it looked like a pill stuck on.
- **16% of the canvas was empty.** Ink ended at x=218.6 in a 260-wide box: 41.4px of
  padding on the right against 4px on the left, so the logo never optically aligned
  and any flex gap beside it silently gained 41px.
- **The mark was underweight.** It stood 2.05x the wordmark's cap height on roughly
  the same stroke weight as Georgia's stems, so it read as a wireframe beside solid
  letters.
- **Mismatched construction.** A geometric monoline mark with round caps against a
  bracketed old-style serif — no shared logic between the halves.

## There was no master file

The same monogram was redrawn per asset:

| Asset | C width/height | Stroke/height |
|---|---|---|
| `companylogo.svg` | 0.500 | 0.078 |
| `icon.svg` | 0.412 | 0.088 |
| `companylogo-linkedin.svg` | 0.498 | 0.124 |

`icon-192x192.png` and `icon-512x512.png` had **no source SVG in the repo at all** —
absent from `generate-icons.js` and not matching `favicon.svg` either. In that PWA
icon the C's terminals touched the N's stem, closing the aperture: it read "ON", not
"CN", and at home-screen size it was a blob.

`manifest.json` also declared that icon `"purpose": "any maskable"`. Maskable needs
content inside a 40% safe radius (204.8 of 512); the gold bar's corner sat ~228 out,
so Android's circular mask clipped it.

## What changed

**One master.** `scripts/lib/logo.js` holds a single CN construction — cap height 100,
stroke 0.105 of cap, a circular C with a 48° half-aperture that cannot close. Every
asset scales it. Small sizes take an optical `weight` multiplier that thickens the
stroke and changes no other coordinate; the favicon uses 1.45 because at 32px a 0.105
ratio anti-aliases to pale grey.

**Outlines, not font names.** The wordmark is Playfair Display Regular converted to
paths, tracked 0.18em. The OG cards and `og-default.png` outline all their text too,
in Playfair and Inter, and embed the real lockup rather than re-typesetting it. There
is no `font-family` anywhere in the asset pipeline. Both fonts are checked in under
`scripts/fonts/` with their OFL licences.

**A renderer bug found on the way.** opentype.js 2.0 emits no closepath for these
fonts, so every contour came out open. librsvg then dropped glyphs — Playfair's "s"
vanished, and in a single concatenated path everything after it went too, silently
truncating a headline to "Building Your Fir". Contours are now serialised and closed
explicitly in `serialise()`.

**Wired into the build.** `npm run assets` runs logo → icons → OG image → OG cards, and
`prebuild` runs it, so no generated asset can drift from its source.

**The gold is now part of the stem**, drawn from the same path geometry rather than
laid over it, so it cannot be off-centre. The C and N no longer touch. Padding is
measured against ink, not advance, so both sides match. The underline is gone rather
than repaired: reinstating an element that has never rendered would change a logo
nobody has seen it on, and at `h-10` it would be a 1.25px rule at 2.1:1 on white.

**Icons.** `icon-any.svg` is the full-bleed tile; `icon-maskable.svg` keeps the mark at
a half-diagonal of 148.8 against the 204.8 safe radius. The manifest declares them
separately. `apple-touch-icon.png` is a real 180px asset — it had pointed at the 32px
favicon, a 5.6x upscale.

## Mark-to-wordmark ratio

The mark was reduced from 2.05x the wordmark's cap height to **1.6x**. Equal cap
heights were considered and rejected on two measured grounds.

Playfair Regular's cap stem is 0.0925em (measured by rasterising an "H"). The mark's
stroke is fixed at 3.42px by the canvas, so:

| CN : wordmark | Wordmark size | Its stems | Mark stroke | Mark reads |
|---|---|---|---|---|
| 1.0 | 46.0px | 4.26px | 3.42px | 24% lighter |
| 1.3 | 35.4px | 3.27px | 3.42px | 4% heavier |
| **1.6** | 30.7px | 2.70px | 3.42px | 27% heavier |
| 1.85 | 24.9px | 2.30px | 3.42px | 49% heavier |

At parity the monogram becomes the lighter element — the original defect, moved onto
the other half of the lockup.

It also does not fit. The desktop nav appears at `lg` (1024px), where the links, the
CTA and the `ml-10` gutter take 667px of the 960px container, leaving **293px** for the
logo. 1.6 lands at 278px. Parity needs 389px, and 324px even at `h-10`.

1.3 is the true optical parity point and needs the nav logo at `h-10` (268px), which
§9 permits. That remains available if the wordmark should carry more weight still.

## Still open

- `public/img/icon*.png` and `companylogo-linkedin-*.png` are not referenced anywhere
  in the app. They are regenerated rather than deleted, because they are live URLs and
  a dead URL is worse than a spare file. Worth deleting once nothing external links
  them.
- There is no single-colour logo for one-colour print, stamps or embroidery.
- Gold `#D4AF37` on white is 2.10:1. WCAG exempts logotypes, so this is not a
  violation, but gold should not be relied on for anything load-bearing on light
  grounds.
