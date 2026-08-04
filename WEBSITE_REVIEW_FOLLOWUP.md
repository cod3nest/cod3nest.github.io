# Codenest Site Review — Follow-Up

**4 August 2026 · post-merge state (master @ 1823b2f)**

A second review of the live site after the August remediation work landed (PRs #33–#38).
The first report is `WEBSITE_REVIEW.md`; this one does not repeat it. Every finding below
was verified against the current tree or the running site.

---

## The headline

**The site now *says* two services everywhere. It still only *proves* one.**

The naming problem is fixed — "Fractional CTO" and "Fractional CFO" appear in nav, hero,
schema, footer, forms. But the evidence layer behind those names is roughly 85% technical
against a 50/50 revenue split:

| Proof surface | CTO side | CFO side |
|---|---|---|
| Case studies | 3 | **0** |
| Guides | 4 | 1 |
| Testimonials | 2 | 1 |
| Logo strip | 3 (all Ankit's) | **0** |
| Homepage stat cells | 3 | 1 |
| Blog posts | 10 | 9 ✅ |
| Hero proof panel | 1 | 1 ✅ |

A founder who needs a CFO reads the hero, believes the offer, then scrolls into a page that
proves a CTO practice. The hero writes a cheque the rest of the site doesn't cash.

---

## 1. Messaging

### 1.1 Neither service page names its principal — CRITICAL

`/services/fractional-cto/` never says "Ankit". `/services/fractional-cfo/` never says
"Michelle". No name, no photo, no credential, no track record on either page.

The entire differentiator — *two executives, not one generalist* — is asserted on `/about`
and the homepage and then vanishes from the two pages where the buying decision happens.
"Fractional CFO" is a commodity term with hundreds of UK sellers; "an FCCA who took a
business from £35m to £165m" is not. The page currently sells the commodity.

**Fix:** a principal block above the FAQ on each service page — name, role, photo, one
credential line, one number, LinkedIn link. Reuse the `/about` card markup.

### 1.2 The CFO page is measurably the weaker of the two

| | CTO page | CFO page |
|---|---|---|
| FAQs | 8 | 5 |
| Contextual resource links | 3 guides | 1 guide + calculator + 1 post |
| Benefit tiles containing a number | 1 of 4 | **0 of 4** |
| Hero photo subject | post-it workshop | two people at laptops |

The CFO benefit grid — "Investor-Ready Financials", "Extend Your Runway", "Close Rounds
Faster", "Board-Level Reporting" — contains no figure at all, despite Michelle owning the
most quotable numbers on the site: £35m→£165m, +4% EBITDA, ±3% rolling forecast accuracy,
month-end close 14→8 days, £6m procurement improvements, 6→27 sites.

**Fix:** put a number in each CFO benefit tile. Bring the FAQ count to parity — the missing
questions write themselves ("Do we still need a bookkeeper?", "How does this work alongside
our accountant?", "What happens during a raise?").

### 1.3 Homepage FAQ #3 undoes the two-principal message

> "Do you handle both technical and financial leadership? — **Yes.** … We offer integrated
> leadership covering technology architecture, financial planning, and investor relations."

Reads as one entity doing both — exactly the impression `/about` spends a page correcting.
This is the highest-traffic place on the site to say "two people, one engagement" and it
says the opposite. `app/page.js:37`

### 1.4 "Client Outcomes" band mislabels pre-Codenest work

`app/page.js:365` — heading "Client Outcomes", subhead "Measurable impact from our technical
and financial partnerships". Two of the four cells (Rungway, Opayo) are founder track record
that predates Codenest. Standing rule 15 exists specifically to stop Rungway being framed as
a Codenest client engagement; the rule was applied to the logo strip and missed here.

**Fix:** retitle to "Track record" or split the band into "Founder track record" and
"Codenest engagements".

### 1.5 Named testimonial needs explicit sign-off — RISK

`app/components/Testimonials.js:8` attributes a quote to **Julie Chakraverty, Founder & CEO,
Rungway** — a real, identifiable person at a named company.

`git log -S"Julie Chakraverty"` puts it in `e5ca446` ("Update site"), i.e. it predates the
review work, and the 4 Aug owner-verification pass (`3509758`) covered only the two
*anonymised* quotes. So this one has never been explicitly confirmed. It also sits under
"Real feedback from startup leaders **we've** worked with" while Rungway is pre-Codenest.

**Action:** confirm written permission exists, or anonymise it. Do not leave it as-is on the
assumption the earlier verification covered it.

### 1.6 "Big 4 rigour meets founder empathy" — still unsupported on the finance half

Ankit was Deloitte *Digital* (technology arm); Michelle is ACCA via Kaplan with no Big 4
history. The line runs in the hero and the footer. A founder doing 30 seconds of LinkedIn
diligence — the exact behaviour the brand voice claims to expect — finds the gap.

**Options:** (a) retire it; (b) narrow it to the technical track; (c) replace with something
both principals carry, e.g. *"Enterprise discipline, startup pace"* or a factual line —
*"An engineering leader and a chartered accountant. Both have run the real thing."*

---

## 2. Page structure

### 2.1 Sticky mobile CTA covers the form's submit button — CRITICAL, verified

At 375px, on the homepage contact section and on `/contact`:

| Element | Position |
|---|---|
| "Request My Call" submit button | y 700 – 760 |
| "We'll reply within 24 hours" microcopy | y 784 – 804 |
| Sticky bottom bar (opaque, `bg-white/95`) | **y 735 – 812** |

The sticky bar half-covers the real submit button and fully covers the reassurance microcopy —
with a gold CTA that merely scrolls to the same form. Two near-identical gold buttons stack on
top of each other and the wrong one is on top.

`app/components/Navigation.js:31-33` only tests `window.scrollY > 600`. BRANDING §5 already
mandates the fix ("The sticky mobile CTA must hide when the contact section is in view") — it
was written down and never implemented.

**Fix:** `IntersectionObserver` on `#contact` (and the `/contact` form wrapper); hide the bar
while it intersects.

### 2.2 Six of eight service cards are decoys

`/services` renders eight `ServiceCard`s. Six of them — 0-to-1 Product Builds, AI & Data
Engineering, DevOps & Platform Engineering, Financial Modeling, Fundraising Support,
Financial Controls & Governance — resolve to one of the same two service pages
(`ServiceCard.js:6`). Click "AI & Data Engineering", land on "Fractional CTO Services" with
no mention of AI above the fold.

**Fix:** either give the four or five with real search demand their own pages, or render the
extras as a non-clickable capability list under each track.

### 2.3 Guides and tools are invisible in navigation

Nav carries Services / Case Studies / About / Blog. `/guides` and `/tools/runway-calculator`
appear only in the footer. The guides are the higher-intent assets and the calculator is an
email-capture tool with **no navigation path at all**.

**Fix:** add "Resources" to the nav (or fold Guides + Calculator into the Services dropdown
pattern already built).

### 2.4 Missing privacy policy, terms, and company disclosures — LEGAL

There is no `/privacy`, no `/terms`, and no company registration detail anywhere on the site.
Meanwhile the site:

- collects name, email, company and free-text message via EmailJS (`ContactForm.js`)
- captures email on the runway calculator
- transmits the entered email address to **Abstract API**, a third-party validation service
  (`ContactForm.js:83`), before the user has submitted anything

No privacy information is given at the point of collection. Separately, a UK limited company
must disclose its registered name, company number, place of registration and registered
office address on its website (Companies Act 2006 trading disclosures) — the footer has none.

The site's own blog posts tell founders to have GDPR compliance documented for diligence
(`startup-technical-due-diligence-checklist.md:78`, `building-your-first-data-room.md:114`).
An investor-facing advisory that fails its own checklist is a bad look independent of the
legal exposure.

**Fix:** `/privacy` page covering what's collected, EmailJS + Abstract API as processors,
retention and contact route; link it from the footer and from under the form's submit button.
Add company number and registered office to the footer.

### 2.5 `/guides` metadata contradicts its own content

Title says "Fractional CTO & CFO Guides"; the description lists only CTO-side items and the
calculator. The CFO guide is the *first card on the page*. `app/guides/page.js:9`

### 2.6 `/refer` and `/cofounder` are footer-only orphans

`/refer` in particular — a referral programme with no entry point from any commercial page.

---

## 3. Design & brand system

### 3.1 Two WCAG AA failures, both against rules already written down

| Where | Colours | Ratio | Needs |
|---|---|---|---|
| Eyebrow labels, 14px on white — `/services:145`, `/case-studies:83`, `/guides:88`, `/contact:56`, `/case-studies:120` | `accent-600` #9a7209 on #fff | **4.39:1** | 4.5:1 |
| CFO page CTA band body copy — `fractional-cfo/page.js:329` | `primary-800` on `accent-600` end | **3.42:1** | 4.5:1 |
| CFO page CTA band h2 — `:326` | `primary-900` on `accent-600` end | **3.84:1** | 3:1 (large) — passes, marginal |

The homepage uses `accent-700` (6.19:1) correctly. So this is drift on four newer pages, not
a palette problem — BRANDING §3 already forbids gold below `accent-600` and says eyebrows on
white use the `accent-700` range.

**Fix:** global find/replace `text-accent-600` → `text-accent-700` on light grounds; re-ground
the CFO CTA band (see next).

### 3.2 The CFO page's CTA band is a gold flood

`bg-gradient-to-r from-accent-500 to-accent-600` — the only full-bleed gold section on the
site, against BRANDING §3 ("gold is an *accent*, not a paint bucket"; dark sections are
`slate-900`, `primary-600` reserved for the single mid-page CTA band). Its CTO-page twin uses
`primary-600 → primary-700`.

The two service pages currently end in visually unrelated ways, which reads as two different
brands rather than two tracks of one.

**Fix:** ground both in `primary-600`; carry the track distinction on the button and eyebrow,
not the whole band. This also resolves 3.1's contrast failure.

### 3.3 Typography drift — the known items are still there

- `app/blog/page.js` h1 missing `font-serif` (logged in BRANDING §4, unfixed)
- `ServiceCard` titles serif'd (logged in BRANDING §4, unfixed)
- CFO page's final h2 is `font-serif`; the CTO page's equivalent is not
- `/case-studies` h2s are `text-3xl font-bold` with no serif

### 3.4 Every photograph on the site is 800px wide

All nine files in `public/img/photos/` are ~800×533, rendered into `h-[450px]` half-width hero
slots declaring `sizes="(max-width: 1024px) 100vw, 50vw"`. On a 1440px desktop that's a ~700px
CSS box needing ~1400px at 2×. Every image is being upscaled roughly 2× on retina. BRANDING §5
sets a 1600px minimum.

Affects: both service-page heroes, all three case-study images.

### 3.5 Both service hero photos are interchangeable generic stock

`service-diligence.jpg` (CFO page) — two people at laptops with a notebook.
`service-cto.jpg` (CTO page) — a post-it workshop.

Neither communicates CTO or CFO; swap them and nothing changes. The team already reached this
conclusion for service *cards* — `ServiceCard.js:10-12` documents the decision to drop
photography because every available stock image is an engineering scene — but the two hero
slots still carry it, and the CFO hero is precisely the mislabelling that decision guarded
against.

**Fix:** apply the same reasoning. Replace both with the two-half proof treatment the homepage
hero already uses, or with real founder photography.

### 3.6 Founder photos still missing

`/about` still shows letter avatars **A** and **M**. For a two-person advisory whose entire
pitch is "two real executives", this is the single highest-leverage trust asset on the site and
it's a placeholder. BRANDING §5: *"Never a letter-avatar placeholder in production."*

### 3.7 Track colour discipline breaks on the CTO page

The CTO page's "What We Do" checkmarks are `text-accent-600` (gold) and its "Ideal For"
numerals sit in `bg-accent-100` chips — on a page whose hero, badge and benefit tiles are all
navy. The CFO page is consistently gold throughout.

Result: the financial track is fully gold, the technical track is half gold. At the exact point
the colour system exists to distinguish them, it stops.

### 3.8 Minor

- `ServiceCard.js:6` builds hrefs without a trailing slash while `trailingSlash: true` — eight
  redirect hops per `/services` visit. Only offender in the tree; everything else is clean.
- Form success message says "We will get back to you soon"; the microcopy under the button
  promises 24 hours. Pick one.
- Footer runs "Boutique advisory for ambitious founders" and "Boutique technical & financial
  advisory for UK startups". "Boutique Advisory" was retired as a hero badge (BRANDING §1) but
  survives twice in the footer.
- Form placeholders are "John Doe" / "john@company.com" — generic against an otherwise
  specific voice.

---

## Priority order

**Now — trust and conversion**

1. Sticky mobile CTA covering the submit button (2.1)
2. Confirm or anonymise the named Rungway testimonial (1.5)
3. Privacy policy + company disclosures (2.4)
4. Contrast fixes: `accent-600` → `accent-700`, re-ground the CFO CTA band (3.1, 3.2)

**Next — close the CFO credibility gap**

5. Principal block on each service page (1.1)
6. Numbers into the CFO benefit tiles; FAQ parity (1.2)
7. One CFO case study — the Dishoom transformation, framed as pedigree with dates, is the
   obvious candidate and needs no new client permission
8. Rewrite homepage FAQ #3 as the two-principal answer (1.3)
9. Retitle the "Client Outcomes" band (1.4)

**Then — structure and craft**

10. Resolve the six decoy service cards (2.2)
11. Resources into the nav (2.3)
12. Founder photography; re-shoot or drop the two service hero photos (3.5, 3.6)
13. Re-source images at ≥1600px (3.4)
14. Clear the logged typography drift (3.3)
15. Settle the "Big 4 rigour" claim (1.6)

**Owner input still needed**

- Written permission for the Rungway testimonial
- Founder photographs
- A decision on "Big 4 rigour meets founder empathy"
- Codenest's real trading start date (still unresolved from the previous review)
- Company number and registered office for the footer
