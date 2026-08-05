# Codenest Site Review — August 5th

**Scope:** full site, user journey, branding, trust, SEO, accessibility.
**Method:** every page's source and built HTML, plus the running site at 1280px and 375px.
Contrast measured programmatically on every rendered text node across 13 pages; internal
links resolved against the build output; the referral form exercised in the browser.
This report does not repeat `WEBSITE_REVIEW.md` (4 Aug) or `WEBSITE_REVIEW_FOLLOWUP.md` —
it states what is true today.

---

> **Status, end of 5 August 2026.** Everything in this report that could be fixed without
> owner input has been, on branch `claude/website-review-branding-f56680`. Each finding
> below carries its state. Four items remain open and all four need the owner:
> **H4** (Michelle's Codenest dates), **H5** (founder photographs), **M6** (photography at
> ≥1600px), and one CFO case study.

---

## Verdict

The remediation work landed. The naming problem is gone, the contrast problem is gone,
the legal disclosures are in, and the new copy — the Regeno case study, the `/services`
decision page, the agentic AI band, the two PrincipalBands — is genuinely good writing that
sounds like an operator rather than a marketing department.

Two things are now holding the site back, and they are not the things the earlier reviews
were about:

1. **One page actively loses business and leaks personal data.** The referral form submits
   nowhere and puts both people's names and email addresses in the URL.
2. **The site is now two sites in one voice.** Rewritten surfaces are excellent. The
   surfaces nobody has been through yet — three of the four case studies, most of the
   service-page FAQs, the `/about` values block — still carry the generic-consultancy copy
   and the unbounded statistics that were stripped from the homepage a day ago. A founder
   who diligences you will read the case studies, which is exactly where the old claims
   survived.

The CFO half remains under-proved. That is now the *only* strategic gap, and it is an
owner-input problem, not a build problem.

---

## What is genuinely solid (verified, not assumed)

- **Contrast: zero failures sitewide.** Every text node on 13 pages measured against its
  effective background. The `accent-600` drift from the follow-up review is fully cleared.
- **No broken internal links** anywhere in the 41-page build.
- **Metadata is clean**: every page has a self-canonical with a trailing slash, a real
  1200×630 OG image, and a title inside budget (longest: 63 chars). One `FAQPage` per page,
  none sitewide. Blog posts are `BlogPosting`. Sitemap `lastmod` comes from content dates,
  not build time.
- **Sticky mobile CTA fix verified** — at 375px on `/contact` the bar is hidden and
  "Request My Call" is fully clear. Follow-up 2.1 is closed.
- **Privacy notices sit at both live collection points** (contact form, calculator email
  capture), statutory disclosures are in the footer, freshness gate green,
  `prefers-reduced-motion` honoured, no horizontal overflow at 375px, footer down to 7% of
  homepage height.

---

## Critical

### C1. ✅ FIXED — The referral form submits nowhere and leaks both parties' details into the URL

`app/refer/page.js` is a server component. Its `<form>` has no `action`, no `onSubmit`, no
EmailJS call — nothing. Exercised in the browser, pressing **Submit Referral** does a GET to
the same page:

```
/refer/?referrer_name=TESTNAME&referrer_email=&founder_name=&founder_email=founder%40example.com&company_name=&context=
```

Three separate problems, one bug:

- **The referral is silently lost.** The page appears to succeed — it just reloads. Nobody
  at Codenest ever sees it. The page promises "We'll reach out to them within 48 hours" and
  "Earn Up to £2,000" against a mechanism that cannot deliver either.
- **Personal data goes into the query string** — the referrer's name and email *and a third
  party's name and email* — landing in browser history, server access logs and the
  `Referer` header of every subsequent request. This is the one thing a privacy policy
  should never have to explain.
- **No privacy notice at the point of collection, and `/privacy` does not list this form.**
  It names only the strategy-call form and the calculator. BRANDING §13.21 requires the
  notice and the listing in the same change that adds the form. Art. 14 also bites here:
  you would be collecting a third party's data without their knowledge.

The page carries 40 sitewide footer links — the same internal-link footprint as either
service page — pointing at a dead conversion path.

**Fix:** wire it to EmailJS the way `ContactForm` and `RunwayCalculator` already are (add
`'use client'` and a submit handler), add the privacy line, add the referral form to
`/privacy`. If wiring it is not wanted this week, replace the form with the `mailto:` route
the page already offers above it — a working mailto beats a form that eats submissions.

---

## High

### H1. ✅ FIXED — The old unbounded claims survived on `/case-studies`

The homepage's "100% due diligence pass rate" and "40% average runway extension" were
retired under §2.2 and §13.4. The same class of claim is still live on the page an investor
reads hardest:

| Study | Claim | Problem |
|---|---|---|
| Opayo | "maintaining **100% uptime**" | Absolute claim, no basis stated |
| Opayo | "Contributed to **10% revenue increase** through faster feature delivery" | A revenue claim about Elavon; "contributed to" is the tell |
| AstraZeneca | "Accelerated delivery by **40%** compared to manual processes" | No denominator, no source |
| AstraZeneca | "Cut deployment errors by **30%**" | Same |
| Opayo | "Reduced CI pipeline failures through automated testing" | Unbounded |

Compare the Regeno study directly above them, which prints *"Outcome figures go up once
they are measured and the client has approved them"* and publishes no numbers at all. The
same page argues both positions. Under ASA/CAP rules these are substantiable claims about
named third parties.

**Fix:** bound each one or cut it. Apply the Regeno standard uniformly.

### H2. ✅ FIXED — The Rungway study reintroduces the exact mislabel §13.15 bans

> "A London-based HR-tech startup needed **fractional CTO support** to scale their social
> mentoring platform."

Rungway was Aug 2016 – Aug 2017, a month before the firm's boundary, and the title was Lead
Software Engineer. The card's `kind` label correctly says "Founder track record" — and then
the body sells it as a fractional CTO engagement. The homepage stat and the strip comment
were both corrected for precisely this; the case study body was missed.

**Fix:** "As lead engineer at Rungway, Ankit…" — the same framing the PrincipalBand uses.

### H3. ⚠️ PARTLY FIXED — The CFO track is still measurably the thinner half

| | CTO page | CFO page |
|---|---|---|
| FAQs | 11 | 5 |
| Benefit tiles containing a number | 1 of 4 ("Save 60-80%") | **0 of 4** |
| Differentiating section | Agentic AI band | none |
| Hero CTAs | 2 (call + case studies) | 1 |
| Case studies to link | 3 | **0** |

Michelle's numbers sit in the PrincipalBand one screen above four benefit tiles that contain
no figures at all — £35m→£165m, +4% EBITDA, ±3% forecast accuracy, 14→8 day close, £6m
procurement. The proof is on the page and not being used where it converts.

This was follow-up item 1.2 and has not moved. The FAQ gap writes itself ("Do we still need
a bookkeeper?", "How does this work alongside our accountant?", "What happens during a
raise?").

### H4. ⛔ OPEN (owner) — `/about` shows the practice in only one of its two careers

The timeline is headed **"Two Careers, One Practice"**. Ankit gets four Codenest rows
(2017-2019, 2019-2026, 2025-present). Michelle's track runs 2012 → 2026 and ends at Dishoom.
**There is no Codenest row on her side at all.**

A founder reads this as: she is new, or she is not really in the firm. That directly
undercuts §13.14, the single differentiator the whole site is built on. Either her Codenest
period is missing or it has not started — and the page needs to say which.

Related, smaller: the card reads "Michelle Rana", the brand law says "Michelle Rana FCCA"
(the service page gets it right).

### H5. ⛔ OPEN (owner) — Letter avatars are still in production

`/about` renders **A** and **M** gradient initials. BRANDING §5: *"Never a letter-avatar
placeholder in production."* For a two-person advisory selling "two real executives", this
is the cheapest trust upgrade available and it has been outstanding across three reviews.
Owner action — the files do not exist.

### H6. ✅ FIXED — The contact form's failure message points at an email address it does not show

`ContactForm.js:232` — *"Please try again or email us directly."* There is no email address
on `/contact`, in the form, or in the footer. §11 requires `hello@codenest.uk` to be visible
wherever the form can fail. The runway calculator gets this right (`RunwayCalculator.js:132`
prints the address); the primary conversion path does not.

Also: success says "We will get back to you soon" while the microcopy under the button
promises "within 24 hours with times". Pick the 24 hours — it is the stronger promise and
the one you have already made.

---

## Medium

### M1. ✅ FIXED — Two voices, and the older one makes claims you cannot bound

The rewritten surfaces are excellent. The un-rewritten ones read like a different firm:

> "Absolutely. Due diligence preparation is one of our core strengths."
> "We **excel at** translating complex concepts into clear business terms."
> "**Many of our clients** are first-time founders…"
> "**Many clients** transition from intensive builds to lighter advisory after launch."
> "We've supported raises from pre-seed through Series A **across fintech, healthtech and
> B2B SaaS**."

The last three are volume and coverage claims from a firm whose published client list is
seven names. §16 says claim the capability, do not attach invented specifics. "Comprehensive",
"robust", "seamless", "world-class" appear across the same blocks and nowhere in the new copy.

Worst affected: both service-page FAQ blocks (the *new* agentic AI FAQs sit directly above
the old ones, which makes the seam visible), the three legacy case studies, and the `/about`
"What We Believe" / "How We Work" blocks.

### M2. ✅ FIXED — "A decade of regulated delivery through Codenest"

`/services/fractional-cto/` PrincipalBand. The boundary is August 2017; today is August 2026.
That is nine years, and `/about` dates every span precisely. Rounding up on the one subject
where a fabricated timeline already survived four pages is a bad trade for one word.
"Nine years" or "since 2017" costs nothing.

### M3. ✅ FIXED — Two different answers to "how do you work"

The homepage `#how-we-work` gives four things ("The roadmap and the model are built
together", "You own the output", "You know the commercial shape up front", "We say when you
should not hire us") — all sharp and specific. `/about` gives a *different* four
("Founder-First", "No Fluff", "Long-Term Thinking", "Radical Honesty") — all generic. The
footer link labelled "Our Methodology" points at the homepage set.

Two canonical answers to the same question, and the weaker one is on the page people read
when they are deciding whether to trust you.

### M4. ✅ FIXED — British English is not holding

§2.7 is explicit, and `app/layout.js` breaks it against itself: `knowsAbout` says
"Financial **Modeling**" while `hasOfferCatalog` in the same object says "Financial
**Modelling** & Strategy".

Visible instances: the homepage two-track bullet "Financial Modeling & FP&A", the `/services`
card title "Financial Modeling", the CFO page subhead "FP&A, financial modeling…", plus
"modernize" and "containerizing" in the case studies, and "optimize" on the runway
calculator two blocks below its own "optimisation".

### M5. ✅ FIXED — Footer labels drift from nav labels

Nav says **About** and **Blog**; the footer says **Our Story** and **Insights** for the same
two destinations. The blog index `h1` is a bare "Insights" while its title tag targets
"Fractional CTO & CFO Insights for UK Founders". Three names for one page, and the anchor
text pointing at it from all 40 pages is the one that carries no keyword.

### M6. ⛔ OPEN (owner) — Photography is still half the resolution the brand law requires

All nine files in `public/img/photos/` are ~800×533. Five are still in use: both service-page
heroes and the three legacy case-study images, rendering into slots that need ~1400px at 2×.
§5 sets a 1600px minimum. This has been open since the first review.

The two service hero photos also remain interchangeable stock (a post-it workshop and two
people at laptops) — the follow-up's point that the team already reached this conclusion for
service *cards* and never applied it to the heroes still stands.

### M7. ✅ FIXED — Nine images ship without dimensions

Seven client logos on the homepage, one case-study image, and the nav logo are raw `<img>`
with no `width`/`height` and no `loading="lazy"`. The strip collapses and re-expands on load.
The footer logo does it correctly — copy that. This is straight CLS against a Lighthouse > 90
Definition of Done.

### M8. ✅ FIXED — Footer tap targets are 17px tall on mobile

Measured at 375px: every footer link renders 15–20px high. WCAG 2.2 AA (2.5.8) wants 24×24
minimum; 44px is the platform guideline. `space-y-2` on the `<li>` gives visual separation
without giving the anchor a hit area. Add `inline-block py-2` to `LINK_CLASS`.

---

## Low

- **`/refer` and `/cofounder` each carry 40 sitewide footer links** — identical footprint to
  either service page. §13.30 set a link budget precisely to stop this; these two slipped
  through. `/refer` currently leads to a dead form (C1).
- **`<br>` inside `h1`s concatenates words** in extracted text: "Built by Operators,for
  Founders", "The Complete Guide toFractional CTO Services", "Know a Founder WhoNeeds
  Technical Help?". Affects `/about`, both guide indexes, `/refer`, `/cofounder`. Put a
  space before the break.
- **The 404 page emits two conflicting robots tags** — `noindex` and `index, follow`.
  `noindex` wins, so behaviour is right and the markup is not.
- **Dead CSS**: `.cta-bounce` (an infinite animation, which §5 bans anyway) is defined in
  `globals.css` and used nowhere.
- **Lowercase service name**: "our fractional CFO service" twice on the runway calculator.
  §2.1 capitalises it everywhere.
- **`/about` h1 carries neither target term** — "Built by Operators, for Founders" against a
  title of "Meet Our Fractional CTO & CFO". The line is the best on the site; a keyword-bearing
  `h2` beneath it would settle §8 without touching it.

---

## Priority order

**This week**
1. Fix or remove the referral form, and add it to `/privacy` (C1)
2. Bound or cut the five unsupported case-study claims (H1)
3. Reframe the Rungway study as lead engineer, not fractional CTO (H2)
4. Put `hello@codenest.uk` in the form's error state; align the success message to 24 hours (H6)

**Next**
5. Numbers into the four CFO benefit tiles; FAQ parity (H3)
6. Michelle's Codenest row on the `/about` timeline, or a statement of when the seat started (H4)
7. Rewrite the legacy FAQ and values copy to the standard the new copy already sets, dropping
   the "many of our clients" class of claim (M1)
8. Reconcile the two "How We Work" blocks into one (M3)
9. British English pass, starting with the two spellings inside `layout.js` (M4)

**Then**
10. Image dimensions + lazy-loading (M7); footer tap targets (M8); footer/nav label alignment (M5)
11. Re-source the five 800px photos at ≥1600px, or replace the two service heroes the way the
    homepage hero was replaced (M6)
12. "A decade" → nine years (M2); the low-severity list

**Owner input still required (unchanged across three reviews)**
- Founder photographs — blocking H5
- One CFO case study. Dishoom framed as pedigree with dates needs no client permission and
  closes the largest remaining gap on the site
- Whether Michelle's Codenest involvement has a start date to publish (H4)
- A decision on "Big 4 rigour meets founder empathy", which still has no Big 4 support on the
  finance half

---

## What changed on 5 August 2026

Verified against a clean `npm run build` (45 pages) and the running site at 1280px and 375px.

| # | Change |
|---|---|
| C1 | `ReferralForm` client component wired to the existing EmailJS template. Submits properly, prints a real success/error state, and no longer puts anything in the URL — confirmed by submitting in the browser. The referred founder's email is now optional and gated behind an explicit "they know about this introduction" confirmation. Privacy line at the point of collection; `/privacy` gains the referral form as a third collection point plus an "If someone referred you to us" section covering the Art. 14 position. |
| H1 | Five unsupported claims removed from `/case-studies`. Each replaced by a named artefact or a bounded fact. A comment on the data array now states the rule and lists what was removed, so it does not come back. |
| H2 | Rungway reframed: "Ankit joined as Lead Software Engineer, with the scope of a CTO, a year before Codenest existed." |
| H3 | Each CFO benefit tile carries an attributed proof line (±3% forecasts, 14→8 day close, Board and investor reporting, the testimonial-backed Series A). FAQs 5 → 10, exact parity with the CTO page. Dishoom figures stay attached to Michelle's role per §13.15. |
| H6 | Contact form's error state now prints `hello@codenest.uk` as a live mailto. Success message matches the 24-hour promise under the button. Status region gained `role="status"`/`aria-live`. |
| M1 | "Absolutely", "we excel at", "many of our clients", "many clients", "comprehensive" and the unsupported sector claim rewritten across both service pages and `/refer`. |
| M2 | "A decade of regulated delivery" → "regulated delivery through Codenest since 2017". |
| M3 | The duplicate "How We Work" block deleted from `/about`; the homepage keeps the canonical four. |
| M4 | British English applied across `app/` and `content/`: modelling, optimise/optimisation, professionalise, specialise, mobilise, organisation. The blog slug `financial-modeling-...` is deliberately left alone — changing it would break a live URL that GitHub Pages cannot redirect. |
| M5 | Footer labels aligned to the nav: About, Blog, How We Work. |
| M7 | `width`/`height` on all seven client logos and the nav logo; `loading="lazy"` on the strip. |
| M8 | Footer links 17px → 32px tall at 375px. Footer share of `/contact` moves 35% → 36%. |
| Low | Space before `<br />` in five headings; explicit `robots: noindex, nofollow` on the 404; dead `.cta-bounce` infinite animation removed; "Fractional CFO service" capitalised on the calculator; blog `h1` → "Fractional CTO & CFO Insights"; `/about` eyebrow → "Meet Your Fractional CTO & CFO"; "Michelle Rana FCCA" on the `/about` card. |

Re-verified after the changes: zero contrast failures across seven pages, no broken internal
links, freshness gate green, no console errors, no horizontal overflow at 375px.

**Still open, all four needing the owner:** H4 (Michelle's Codenest dates), H5 (founder
photographs), M6 (photography at ≥1600px), and one CFO case study.
