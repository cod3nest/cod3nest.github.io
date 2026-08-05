# Codenest Brand & Style Guide

**v1.0 · 4 August 2026**

The canonical brand reference for the Codenest website (this repo). Any agent or human
touching copy, components, metadata, or design reads this first. It encodes the
decisions from the August 2026 site review (`WEBSITE_REVIEW.md`) — where the two
disagree, this file wins, because it is the decided state.

The system has a name for its feel: **"the operator's letterhead"** — Big-4 restraint
with a founder's directness. Charcoal authority, one disciplined gold accent, a serif
editorial voice for headlines, and claims you could defend in a due-diligence room.

**Live token sources** (change these, not call sites):

- Colour palette + type scale: `tailwind.config.js` (`primary` charcoal ramp, `accent` gold ramp)
- Global CSS / animations: `app/globals.css`
- Fonts: `app/layout.js` (next/font: Inter, Playfair Display)
- Sitewide metadata + JSON-LD: `app/layout.js`
- Logo assets: `public/img/companylogo.svg` (light bg), `companylogo-light.svg` (dark bg)

---

## 1. Brand essence

- **Company:** Codenest — always "Codenest", capital C, one word. Never "CodeNest",
  "Code Nest", or "cod3nest" (the GitHub org `cod3nest` is a legacy identifier only;
  never surface it in copy, schema, or user-facing links — see §13.6).
- **The offer (say it plainly, always):** **Fractional CTO and Fractional CFO services**
  for UK startups, pre-seed to Series A. Two named executive seats, **each engageable on
  its own.** Taking both is an option, not a condition — a founder who needs only a CFO
  buys only the CFO seat. The integrated pairing is an advantage to offer, never a
  minimum to imply. If a page or component cannot name at least one of the two services,
  it is off-brand.
- **Positioning line (the tagline):** "Big 4 rigour meets founder empathy."
- **Brand flourish (secondary, display use only):** "Executive firepower. Startup agility."
- **Retired lines — do not reintroduce:** "Where Startups Scale", "Big 4 rigour meets
  startup agility" (the mutated variant), "Boutique Advisory for Select Founders" as a
  hero badge, "Strategic Advisory" in any form.
- **The audience (ICP):** UK startup founders on the 0→1 journey, **pre-seed to
  Series A** (one phrasing, everywhere), in fintech, healthtech, and B2B SaaS.
  Many of them are London-based; Codenest works remotely across the UK and Europe
  and claims no London base of its own. Describing a *client* as London-based is
  fine and true; describing *Codenest* that way is not (§13.25).
- **The operators:** Codenest is founder-led in each track, and the tracks do not
  overlap. **Ankit Rana, Fractional CTO** — ex-Deloitte Digital, Elavon (US Bancorp),
  Opayo — leads the technical seat. **Michelle Rana FCCA, Fractional CFO** — strategic
  finance at Dishoom — leads the financial seat. Being founder-led is a strength, not a
  secret (see §2 voice rules), but "founder-led" never means one person covering both:
  each seat is named to its own principal in copy and in schema (§2 rule 4, §13 rule 14).

## 2. Voice & tone

Professional, technical, direct. The reader is a time-poor founder who will diligence
every claim — write as if they will check, because they will.

**Rules (non-negotiable):**

1. **Name the service.** The financial track is called **"Fractional CFO"** and the
   technical track **"Fractional CTO"** — in navigation, headings, cards, links,
   footers, alt text, and metadata. Banned aliases for the CFO service:
   "Strategic Advisory", "Financial & Business Strategy", "Financial Strategy",
   "Strategic & Financial Leadership". Descriptors like "FP&A", "financial leadership"
   may appear in *subtitles and body copy only*, never as the service's name.
   ("Financial Leadership" is acceptable as the CFO page's badge/eyebrow category.)
2. **Truth-first claims.** Every number carries its bound or denominator: prefer
   "Rungway: 5 → 1,000+ concurrent users" over "200x scalability gains"; prefer
   "Every client diligence passed to date" over "100% due diligence pass rate".
   No firm-wide averages ("40% average runway extension") without a real, citable
   basis. No absolute claims in sitewide metadata.
3. **No fabricated proof.** No placeholder testimonials, no decorative star ratings,
   no logos captioned as clients unless they were Codenest clients. Pre-Codenest
   employment is framed as pedigree: "Founder track record includes…" — never
   "Trusted by…". Anonymous testimonials are labelled as discretion
   ("Founder & CEO, London fintech — name withheld under NDA"), never left ambiguous.
   All three testimonials (HR-tech scale-up; fintech Series A; B2B SaaS MVP) are
   verified genuine — owner confirmed 4 Aug 2026. All three are now anonymised:
   the HR-tech quote carried a named attribution that had never been
   permission-checked, and was anonymised on the owner's instruction rather than
   left standing on an assumption. Keep all three; name a client only with that
   client's written permission.
4. **Two principals, two seats.** Codenest is **Ankit Rana, Fractional CTO** and
   **Michelle Rana FCCA, Fractional CFO** — not one generalist covering both.
   Never attribute the CFO offer to Ankit or the CTO offer to Michelle, in copy or
   in schema. "We"/"Codenest" is the default voice for methodology and delivery;
   attribute individual track records by name ("Ankit led…", "Michelle owned…").
   Prior employment stays framed as pedigree, never as Codenest client work.
5. **CTA honesty.** The primary CTA is **"Request a Strategy Call"** everywhere, until
   a real scheduling tool is embedded — only then may it become "Book…"/"Schedule…".
   The form submit says "Request My Call" with the microcopy "We'll reply within
   24 hours with times."
6. **No emojis.** Anywhere. (Project rule, `.claude/CLAUDE.md`.)
7. **British English.** Rigour, organised, optimise.
8. **No competitor names.** Comparisons are to *categories* (full-time hire, dev shop,
   solo freelancer) and stay factual — cost, capacity, incentives — never sneering.

**Copy patterns that work:** short declaratives; outcome-first bullets ("Investor-ready
in 8-12 weeks"); pain-fact framing ("Founders who needed senior guidance but couldn't
justify a full-time CTO or CFO"); concrete artefacts (data room, 3-statement model,
CI/CD pipeline) over abstractions ("digital transformation", "synergy").

## 3. Colour

Charcoal is the authority; gold is the signature. Gold is an *accent*, not a paint
bucket — when in doubt, less gold.

### Core palette (from `tailwind.config.js`)

| Token | Hex | Use |
|---|---|---|
| `primary-900…600` | `#2C3E50` family | Brand charcoal: headings on light, dark bands, icon chips, CTA text-on-gold |
| `accent-400` | `#D4AF37` | Rich Gold: primary CTA fill, accents on dark, borders, decorative rules |
| `accent-500` | `#B8860B` | Dark Goldenrod: hover states, accents on dark grounds |
| `accent-600+` | darker golds | The only golds permitted as text on white (§10) |
| `slate-*` (Tailwind) | — | Body text and neutral surfaces (`slate-900` headings, `slate-600` body, `slate-50` alt grounds) |
| `white` / `accent-50` | — | Page grounds; gold-tinted ground reserved for service-page heroes |

**Rules:**

- **Dark sections are `slate-900`** (stats, comparison, footer). `primary-600` is
  reserved for the single mid-page CTA band. Do not introduce new dark-ground colours.
- **Never gold text on white below `accent-600`** — `accent-400`/`accent-500` text on
  light grounds fails WCAG AA (2.1:1 / 3.3:1). Eyebrow labels on white use
  `accent-700`-range gold or `font-semibold` ≥16px `accent-600` (§10).
- **No new hardcoded hexes.** Reference theme tokens; the raw `#D4AF37`/`#B8860B`
  values in `globals.css` gradients are legacy debt to be tokenised, not a pattern to
  copy.
- Semantic colours (success/warn/error) are status-only, never decorative.

## 4. Typography

Two faces, two jobs. Loaded via `next/font` in `app/layout.js` — never CDN-link fonts.

| Face | Role | Notes |
|---|---|---|
| **Playfair Display** | Display: `h1` and section `h2` only | The editorial voice. `font-serif`. Pick one weight treatment per level and keep it (hero currently 400 + italic span; page h1s 700) |
| **Inter** | Everything else: body, h3-h6, nav, buttons, labels, forms | `font-sans`. 400/500/600 |

**Rules:**

- Serif is for *page-level* and *section-level* headlines only. Card titles, list
  headings, nav items, and buttons are Inter. (Known drift to fix on sight:
  `app/blog/page.js` h1 missing `font-serif`; `ServiceCard.js` title serif'd —
  both violate this rule.)
- Cap card titles at `text-2xl` so they never outweigh section headers.
- Eyebrow labels: `text-sm uppercase tracking-[0.2em]` — the signature structural
  device that opens every section. One per section, sentence-case content
  ("Fractional CTO & CFO for UK Startups"), gold per §3 contrast rules.
- The logo wordmark is currently Georgia-in-SVG (legacy); the target is outlined
  Playfair paths. Do not set new UI text in Georgia.

## 5. Layout & surfaces

- **Grounds alternate** white / `slate-50` / dark (`slate-900`), with `accent-50`
  gradients reserved for service-page heroes.
- **Section rhythm:** eyebrow → serif heading → one-line sub → content. Break the
  centered-card-grid template deliberately at least twice per page (the two-track
  CTO/CFO section warrants distinct treatment — it is the core message).
- **Radii:** `rounded-lg` buttons, `rounded-xl`/`rounded-2xl` cards. Pick per component
  class, not per call site.
- **Photography:** hero and case studies only; unique image per slot (never reuse one
  photo across cards); minimum 1600px wide for hero/50vw slots (retina). Prefer real
  photos (founder, actual work) over stock; the icon system covers service cards.
- **Founder photo** is a trust asset: /about and near the homepage conversion moment.
  Never a letter-avatar placeholder in production.
- **Motion:** no infinite attention animations (`cta-pulse` is retired). Transitions
  ≤300ms, hover-only. Honour `prefers-reduced-motion` (pending global rule — add it
  with any animation work).
- **Mobile:** verify at 375px. No horizontal scroll. The sticky mobile CTA must hide
  when the contact section is in view. In comparison grids, the Codenest card renders
  first on mobile (`order-first lg:order-none`).
- **Hero sizing steps up, never down.** Desktop hero values do not ride down to mobile:
  section top padding is `pt-28 md:pt-40|44` (`pt-24 md:pt-32` on interior pages), and
  the homepage h1 is `text-4xl sm:text-5xl md:text-6xl`. Measured 5 Aug 2026: carrying
  the desktop values down made the homepage hero 1798px tall at 375px, 2.2 screens, with
  the primary CTA below the fold. After: 1411px, CTA at 746px. Re-measure hero height
  and CTA offset at 375px after any hero change rather than eyeballing it.
- **Wide content scrolls inside its own container.** Tables and code blocks get an
  `overflow-x-auto` wrapper; the page body never scrolls horizontally.

## 6. Components (the section grammar)

Assemble pages from these; don't invent parallel patterns:

- **Eyebrow** — the small-caps section opener (§4).
- **Two-Track cards** — the CTO/CFO pair. Titles are the service names
  ("Fractional CTO" / "Fractional CFO"), gold accent = CFO, charcoal = CTO,
  four outcome bullets, link "Explore Fractional {CTO|CFO} Services".
- **ServiceCard** — title, benefit line, three outcomes. Used **only for capabilities
  delivered inside a seat**, and renders as a static tile: no hover-lift, no arrow, no
  link. Never re-add the fallback href it used to carry — a card that promises "AI &
  Data Engineering" and delivers a generic Fractional CTO page is worse than one that
  never claimed to be a link. The component still renders an anchor if given an
  explicit `href`, reserved for the day a capability earns a page of its own; nothing
  passes one today. The two seats are **not** ServiceCards — they are the Two-Track
  cards, and listing "Fractional CTO" as an item inside the Fractional CTO track put
  the seat on one page three times. (4 Aug 2026.)
- **Outcome badges** — "Series A closed", "MVP in 10 weeks" — the approved proof
  device (never star ratings).
- **Comparison grid** — categories only, factual rows, "Best for:" footers, Codenest
  column framed positively; always followed by the primary CTA.
- **PrimaryButton** — gold fill (`bg-accent-400 → hover accent-500`), `text-primary-900`,
  `rounded-lg`; label "Request a Strategy Call". **SecondaryButton** — outline slate,
  gold on hover. The contact form submit uses PrimaryButton styling.
- **Trust chips** — "Typically respond within 24hrs" / "100% confidential" /
  "Free 30-minute consultation" — keep adjacent to every conversion moment.
- **FAQ** — one FAQ block per page, questions phrased as founders search
  ("What's the difference between FP&A and accounting?"); emits exactly one FAQPage
  schema built from its own visible questions (§8).

## 7. Iconography & imagery

- Inline SVG icons, stroke 2, brand colours. Icon chips: `primary-600` (technical) /
  `accent-400`+`text-primary-900` (financial). No emoji (§2.6). No icon fonts.
- Alt text: logos are always `Codenest - Fractional CTO & CFO for UK startups`;
  content images describe the content, no keyword stuffing.

## 8. Metadata & SEO conventions

- **Title template** is `%s | Codenest` (`app/layout.js`). Page `title` values must
  NOT include "| Codenest" themselves (that caused "…| Codenest | Codenest"). The
  homepage default: `Fractional CTO & Fractional CFO for UK Startups | Codenest`.
- **H1 contains the page's target term** ("Fractional CFO Services"), one h1 per page,
  keyword-bearing h2s beneath.
- **Schema:** ProfessionalService lives in the root layout ONLY. FAQPage/Article
  schema belongs to the page that visibly renders the content — never sitewide, never
  two FAQPage blocks on one page. Finance posts are `BlogPosting` (not `TechArticle`).
  **One offer catalogue, in the root layout** — the two retained seats plus the two
  fixed-fee project shapes named in "How We Work". A page that needs to name the
  company writes `provider: { '@id': ORGANIZATION_ID }`; it never restates an
  Organization inline. (5 Aug 2026: the homepage carried a second
  ProfessionalService and a three-item catalogue that had drifted from the
  layout's four; it was deleted rather than kept in sync.)
- **Canonicals & sitemap URLs carry the trailing slash** (config sets
  `trailingSlash: true`).
- **OG image:** 1200×630 real card (logo + offer line), declared dimensions matching
  the file. Every indexable page ships one.
- **Blog:** meta description = frontmatter `description`; post CTA is tag-aware
  (finance tags → Fractional CFO CTA, technical tags → Fractional CTO CTA);
  evergreen titles carry no year unless the content is genuinely refreshed annually.
- **Pricing:** **Codenest publishes no prices of its own** (owner, 4 Aug 2026). The
  £3k/£2.5k-per-month anchors are retired from pages, metadata, guides and posts.
  Engagements are described as "scoped to your stage"; the quote comes on the call.
  The relative claim "60-80% less than a full-time CTO/CFO" stays. *Market-rate*
  editorial — the £2,000-£12,000 range, full-time salary comparisons, the two
  cost-guide posts — is content, not our price list, and stays. Do not reintroduce a
  Codenest figure without also settling the VAT basis (§13.21).

## 9. Logo

- `companylogo.svg` on light grounds; `companylogo-light.svg` on dark. Minimum height
  40px (`h-10`)–48px (`h-12`) as used in footer/nav.
- Never distort, recolour, add effects, or set the wordmark in another face.
- Alt text per §7.

## 10. Accessibility & quality bar

WCAG AA (4.5:1) on all text. The specific traps in this palette:

- `accent-400`/`accent-500` text fails on white — dark-gold only (§3), or gold on
  dark grounds where it passes.
- `text-slate-400` fails on white at small sizes — `text-slate-500` minimum,
  `slate-600` for `text-xs`.
- Every page wraps content in `<main id="main-content">`; the skip link targets it
  (pending fix — apply with any nav/layout work).
- Form groups use `fieldset`/`legend`; radio groups share a `name`; focus-visible
  styling on all interactive elements.
- Test at 375px and 1280px before shipping. `npm run build` must pass; Lighthouse > 90
  (project Definition of Done).

## 11. Implementation notes

- Static export (`output: 'export'`) for GitHub Pages — no server features,
  `images.unoptimized: true`, `.nojekyll` required.
- The production contact form depends on `NEXT_PUBLIC_EMAILJS_*` values being present
  at build time (currently via the committed `.env`). Do not untrack `.env` without
  moving the values into the deploy workflow — the form fails silently otherwise.
- `hello@codenest.uk` is the fallback contact; it must be visible wherever the form
  can fail.

## 12. Content strategy guardrails

- The content engine serves **both** tracks. For every CTO-side guide/post, the
  CFO-side equivalent exists or is on the backlog (cost guide, when-to-hire,
  vs-accountant). New finance content links the Fractional CFO page and the runway
  calculator; new technical content links the Fractional CTO page.
- Guides and tools are never orphans: every new page gets a footer/Resources link and
  at least one contextual link from a related page at launch.

## 13. Standing rules (the law, with dates)

1. **Services are named "Fractional CTO" and "Fractional CFO" — everywhere.**
   Aliases retired. (Site review, 4 Aug 2026.)
2. **The hero names the offer.** Badge/subhead must say Fractional CTO & CFO; the
   brand H1 may stay evocative. (4 Aug 2026.)
3. **CTA label is "Request a Strategy Call"** until a real scheduler ships.
   (4 Aug 2026.)
4. **Truth-first proof** — bounded stats, no fabricated testimonials, no star-rating
   UI, enterprise names framed as pedigree not clientele. (4 Aug 2026.)
5. **Tagline is "Big 4 rigour meets founder empathy"** + flourish "Executive
   firepower. Startup agility." — all other slogans retired. (4 Aug 2026.)
6. **"cod3nest" never appears in user-facing surfaces.** (4 Aug 2026.)
7. **No emojis.** (Project CLAUDE.md, standing.)
8. **No gold text on white below AA contrast.** (4 Aug 2026.)
9. **One FAQPage schema per page, owned by the page.** (4 Aug 2026.)
10. **ICP phrasing is "pre-seed to Series A"** — one variant, sitewide. (4 Aug 2026.)
11. **Opayo engagement dates: August 2019 – June 2026** — a Codenest-era engagement.
    Elavon (US Bancorp) employment 2011-2015 is separate early-career history; never
    date Opayo work into that window. (Owner, 4 Aug 2026.)
12. **All three testimonials are verified genuine** (owner, 4 Aug 2026) — real
    clients. Never delete or reword them as "placeholders". All three are
    anonymised: a named attribution is published only against written permission
    from that client, and the previously-named HR-tech quote was anonymised on the
    owner's instruction (4 Aug 2026) because no such permission was on record.
13. **Stat cells carry a named engagement or an offer term** — Rungway users, Opayo
    duration, the testimonial-backed Series A, 8-12 wks MVP. No bare counts without
    a citable denominator ("15+ startups" retired). (4 Aug 2026.)
14. **Codenest is two people.** Ankit Rana is the Fractional CTO; Michelle Rana FCCA
    is the Fractional CFO. Any surface that names one must be checked for whether it
    should name both — especially `/about`, Person schema, and founder bylines.
    (Owner, 4 Aug 2026.)
15. **Rungway and Dishoom are founder track record, not Codenest clients.** Rungway
    predates Codenest; Dishoom was Michelle's employer (Head of Strategic Finance,
    Sep 2017 – Jan 2026). Neither is a Codenest client engagement — never caption
    either "our client" or attribute it to Codenest as a firm. The homepage logo strip
    they sit in is captioned "Founder track record includes" for exactly this reason;
    it is not a client wall, and nothing may relabel it as one. Attribute Dishoom's
    numbers to Michelle's *role* ("led strategic finance at Dishoom through
    £35m → £165m"), never to her personally growing the company. (Owner, 4 Aug 2026.)
16. **Michelle covers both operational finance and fundraising.** Her CV documents the
    operational side in detail — multi-site P&L, budgeting and rolling forecasts,
    controls and governance, margin and procurement, Board reporting — and the owner
    confirmed fundraising and investor due-diligence experience on top (4 Aug 2026).
    Claim the capability; do not attach invented specifics (round sizes, named
    investors, amounts raised) until real figures are supplied.
17. **Two engagements we decline, stated on the homepage.** Technology as the core
    moat (novel algorithms, custom hardware) and anything needing 40+ hours a week
    both point at a full-time hire, and the site says so in "When we are the wrong
    call". Owner-approved 4 Aug 2026. The 15+ engineers case and staff augmentation
    were considered and deliberately NOT declined — do not add them.
18. **No "X meets Y" or "X, not Y" constructions** outside the tagline itself. Both
    read as generated marketing copy. The tagline keeps its "meets" by owner decision
    (4 Aug 2026); everything else was rewritten. Em-dashes in body copy went from 130
    to 57 for the same reason — prefer a colon, a comma or a full stop.
19. **The homepage does not carry a staged process timeline.** A Discover/Build/Scale
    block with tidy week ranges was removed 4 Aug 2026: the FAQ already states the
    real shape (3-6 months at 2-3 days a week, 8-12 week fixed-scope MVPs) and states
    it more precisely.
20. **Never publish personal contact details.** No personal mobile numbers or personal
    email addresses for either principal, from CVs or anywhere else — the contact form
    and the business address are the only channels. (Owner, 4 Aug 2026.)
21. **Privacy information lives where data is collected.** Every form that takes
    personal data carries a one-line notice and a link to `/privacy`, not just the
    footer (UK GDPR Art. 13). `/privacy` lists each collection point and every
    processor by name — update it in the same change that adds a field, a form, or a
    third-party call. (4 Aug 2026.)
22. **No gold-flooded sections.** Full-bleed `accent-*` grounds are banned: they force
    dark-on-gold body copy below AA and break the charcoal/gold hierarchy. CTA bands
    are `primary-600 → primary-700`; the track shows in the eyebrow and the button.
    (4 Aug 2026 — replaced the Fractional CFO page's gold band at 3.42:1.)
23. **Gold text on light grounds is `accent-700` or darker — no exceptions.**
    `accent-600` at 14px on white measures 4.39:1 and fails AA; it had drifted onto
    four pages. Verified sitewide by walking every rendered text node against its
    effective background — re-run that check after any colour change rather than
    eyeballing it. (4 Aug 2026.)
24. **No Codenest prices on the site.** Own-price anchors are retired sitewide (owner,
    4 Aug 2026) — pages, metadata, OG descriptions, guides and blog posts. Market-rate
    editorial stays. If a price is ever reinstated it must state its VAT basis, because
    Codenest is VAT-registered (275 3255 93) and the E-Commerce Regs require a quoted
    price to say whether tax is included. (§8.)
25. **Statutory disclosures live in the footer of every page:** registered name
    Codenest Ltd, company number 10909723, England and Wales, registered office
    Clearways Accountants, Clearways, Colley Way, Reigate RH2 9JH, and the VAT number.
    Never remove them. Note the registered office is **Surrey, not London** — reconcile
    any "London-based" claim and the `addressLocality` in `app/layout.js` against it.
    (4 Aug 2026.) **Reconciled 5 Aug 2026:** the schema `address` is now the registered
    office, and the `geo` block is gone rather than re-guessed — it held the generic
    51.5074/-0.1278 London centroid for an address the business does not occupy. The
    footer's "London-based" line was dropped. Put a locality claim back only alongside
    an address that supports it. **Closed 5 Aug 2026:** "London" is out of both service
    page titles and OG titles, and out of the `fractional CTO/CFO London` keywords in
    `app/layout.js` and the referral page. The titles now say "for UK Startups", which
    matches `areaServed`. This gave up a title-tag signal for "fractional CFO London",
    a high-intent query — the owner accepted that cost rather than keep a geographic
    claim the site cannot support. **What stays:** London in *client* and *market*
    context is true and permitted — Rungway as a London-based startup, the anonymised
    London testimonials (§2.3), and London salary benchmarks in the guides. Only claims
    about where Codenest itself sits are barred. If a London presence is ever
    established, reinstate the targeting and the address together, never separately.
26. **The Services dropdown is the two seats, nothing else.** "All Services" was removed
    from it (4 Aug 2026): every route out of `/services` leads back to one of those two
    pages, so it was a third nav slot reaching nothing new — and a third page competing
    for the same queries as its own children. `/services` stays linked from the homepage
    and the footer. Capabilities are never listed as
    navigation destinations — that applies to the footer too. (4 Aug 2026.)
    **Updated 5 Aug 2026:** `/services` is no longer a side-by-side overview. It restated
    the homepage's two-track section almost verbatim and competed with it, so it was
    rewritten as the decision page — *which seat do I need?* — carrying the signal lists,
    the two approved declines, and the capability grid. The track cards there give what
    each seat owns and who leads it; they never repeat the homepage's bullet lists.
    The nav also gained a **Resources** dropdown (Guides, Blog, Runway Calculator),
    replacing the standalone Blog slot: five guides and the calculator were reachable
    only from the footer. Slot count is unchanged at four plus the CTA.
27. **Either seat can be bought alone.** A client can engage the Fractional CTO, the
    Fractional CFO, or both. Copy may say the two work better together; it may never
    say or imply that both are required, and no CTA, FAQ or schema may present the
    pair as the only unit of sale. "Most startups need both" is an observation about
    startups, not a condition of engagement — if a sentence could read as the latter,
    rewrite it. (Owner, 4 Aug 2026.)
