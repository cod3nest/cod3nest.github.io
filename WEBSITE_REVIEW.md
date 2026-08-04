# Codenest Website Review

**Date:** 4 August 2026
**Scope:** Messaging clarity for the dual CTO + CFO offer, branding, design, page structure, SEO, and conversion.
**Method:** Six parallel specialist reviews over the full source (`app/`, `content/`, config), plus live browser inspection (desktop + mobile) and an adversarial fact-check pass. 69 raw findings; 54 verified against source, 3 corrected during verification, 12 subjective judgments. Every file/line reference below was checked against the code.

---

## Executive summary

**The core problem: the site sells fractional CTO *and* CFO services, but the CFO half is systematically un-named.** A founder skimming for five seconds concludes this is a boutique tech consultancy with some finance work on the side. The clarity you asked for exists — but only in metadata where no visitor sees it (`manifest.json` literally says "Fractional CTO and CFO leadership for UK startups").

The five patterns that cause it:

1. **The hero never says "CTO" or "CFO".** Badge: "Boutique Advisory for Select Founders". H1: "Executive Firepower. Startup Agility." Subhead: "technical and financial leadership" — a category description, not the offer's name. First visible "CTO and CFO" is at section 5 of 15 (app/page.js:374).
2. **The CFO service page never visibly says "CFO".** Its title tag targets "Fractional CFO Services London" but the H1 is "FP&A & Business Strategy" — every one of the page's "CFO" occurrences is in metadata/schema, none in rendered copy. The CTO page gets it right ("Fractional CTO Services"). This is a bait-and-switch for anyone arriving from search, and "FP&A" is jargon many first-time founders don't parse.
3. **The CFO offer rotates through four aliases** — "Strategic Advisory", "Financial & Business Strategy", "Financial Strategy", "Strategic & Financial Leadership" — while the CTO track is consistently "Fractional CTO". Founders search and think in the term "fractional CFO"; the site sells it under pseudonyms.
4. **The nav links to neither service page.** "Services" is a homepage anchor. Neither "Fractional CTO" nor "Fractional CFO" appears anywhere in primary navigation, and the footer hides them behind "Technical Leadership"/"Financial Strategy".
5. **The entire content engine is CTO-side.** All 4 guides are CTO topics; there is no CFO guide, no "fractional CFO cost UK" page; all 16 blog posts — including the 6-7 finance ones — end with a hardcoded *"Want help with your infrastructure?"* GitOps pitch; every post is marked up as `TechArticle` / section "Technology"; and the nav logo alt text describes the company as "Codenest - Fractional CTO Services".

Beyond the CFO problem, the two other high-stakes themes are **trust integrity** (placeholder-looking testimonials with hard-coded 5-star ratings, enterprise logos framed as client wins in tension with the About timeline, unsubstantiated "100%"/"40%"/"200x" stats, and a "we/our team" voice that collapses to a solo founder on /about) and **structural leakage** (orphaned guides/calculator, no /contact page, a 27,900px-tall mobile homepage, dead-end service cards).

None of this needs a redesign. The visual foundation (charcoal + gold, Playfair/Inter) is competent; the fixes are copy, IA, and consistency work.

---

## 1. Messaging & positioning (the request's core)

### High severity

**M1. Hero fails the 5-second test** — `app/page.js:221-230`
Badge, H1, subhead, bullets, and both CTAs contain neither "CTO" nor "CFO".
*Fix:* Keep the brand H1 if you like it, but name the offer in the badge and subhead:
- Badge: `FRACTIONAL CTO & CFO FOR UK STARTUPS`
- Subhead: "Codenest is your part-time CTO and CFO in one engagement — architecture, engineering leadership, financial models, and fundraising for pre-seed to Series A founders."
Or make the H1 literal: "Your Fractional CTO and CFO." / *"One integrated partner."*

**M2. CFO page H1 is "FP&A & Business Strategy"** — `app/services/fractional-cfo/page.js:146-150`
*Fix:* Mirror the CTO page. H1: "Fractional CFO Services". Badge: "Financial Leadership". Move FP&A into the subhead: "FP&A, financial modeling, and investor-ready reporting from a part-time CFO." Also rename the H2 "Why FP&A Matters" → "Why Hire a Fractional CFO?" (the CTO page's equivalent is "Why Choose a Fractional CTO?"). Keep the FP&A-vs-accounting FAQ — it's genuinely good.

**M3. Four rotating aliases for the CFO track** — `app/page.js:20, 388, 419, 633; Footer.js:27`
The two-tracks section even lists "Fractional CTO Advisory" as a bullet with no "Fractional CFO Advisory" counterpart, and the link text is "Explore Strategic Advisory".
*Fix:* Standardize on **"Fractional CFO"** as the primary label everywhere, descriptor as subtitle. Link text: "Explore Fractional CFO Services". Footer: "Fractional CFO". Delete "Strategic Advisory" as a service label.

**M4. Proof claims are unsupported or generalized from one case** — `app/page.js:255-256, 346-360; app/layout.js:22`
"100% due diligence pass rate" (also baked into the sitewide meta description) has no denominator; "40% average runway extension" has no supporting financial case study anywhere; "200x" generalizes the single Rungway engagement; all three case studies are technical — the CFO track's only proof is an anonymous "Marcus Chen, London Fintech" testimonial.
*Fix:* Make each stat bounded and attributable: "Rungway: 5 → 1,000+ concurrent users"; "Every client diligence passed to date (N raises)"; delete the 40% figure unless it's real and sourceable. Add one financial case study (anonymized is fine if specific: stage, raise size, timeline). Remove "100%..." from the meta description. Absolute claims carry ASA substantiation obligations in the UK.

### Medium severity

**M5. "We" vs "I" voice whiplash, and the comparison table shoots at your own position** — `app/page.js:73, 1008, 1034, 871-898; app/about/page.js`
The homepage speaks as "our team", then the co-founder section slips into "I take on at most one co-founder role per year", and /about reveals a single operator (Ankit Rana). Meanwhile the comparison table dismisses "Solo Freelancer" for "Bus factor risk" and "Single domain expertise" — jabs that describe the founder too. A diligent founder spots this in one visit, and it corrodes the "Radical Honesty" value the site claims.
*Fix:* Own founder-led positioning — it's a strength against dev shops, and "Built by an Operator, for Founders" (/about) is the best line on the site. Surface "Led by Ankit Rana — ex-Deloitte Digital, Elavon" near the hero or logo strip. In the comparison table, drop "Bus factor risk"/"Single domain expertise" and replace the Codenest differentiators with what's defensibly unique: "One partner across tech and finance", "Exec-level operator, not a contractor".

**M6. Tagline proliferation** — five competing lines: "Executive Firepower. Startup Agility." / "Big 4 rigour meets founder empathy" / "Big 4 rigour meets startup agility" (OG + footer variant) / "Boutique Advisory for Select Founders" vs "…ambitious founders" / "Where Startups Scale" (manifest only).
*Fix:* One master line + one offer line, everywhere. Recommended: keep "Big 4 rigour meets founder empathy" (most distinctive) as the tagline, "Fractional CTO & CFO for UK startups, pre-seed to Series A" as the offer line. Retire the rest; normalize "select" vs "ambitious" to one.

**M7. Enterprise-heavy social proof muddies the startup ICP** — `app/page.js:295, 659`
"Trusted by category leaders" over AstraZeneca/Opayo logos + "From high-growth startups to FTSE 100 enterprises" signals expensive enterprise consultancy to a pre-seed audience.
*Fix:* Reframe as pedigree, not clientele: "Enterprise-grade experience — AstraZeneca, Elavon, and 15+ UK startups." Keep Rungway (actual startup client) first.

### Low severity

**M8. ICP drift:** "pre-seed to Series A" (homepage) vs "seed to Series A" (layout meta) vs "pre-seed through Series B" (CFO FAQ). Standardize on pre-seed → Series A.
**M9. Pricing exists only in meta descriptions** ("from £3k/month" CTO, "from £2.5k/month" CFO) — a SERP promise the page never honors, while the blog publishes full tiers (£2,000-£4,000/month "Light Touch"). Put the anchor on the service pages or remove it from metadata.

---

## 2. Branding & trust

### High severity

**B1. Fabricated-looking testimonials with hard-coded 5-star ratings** — `app/components/Testimonials.js:11-41`
Julie Chakraverty (Rungway) is real and verifiable. "Marcus Chen, Founder & CEO, London Fintech" and "Sarah Mitchell, Founder & CEO, B2B SaaS Platform" read as placeholders (generic names, non-companies), and every card renders an unconditional 5-star widget tied to no review platform. Under the UK DMCC Act 2024 / ASA rules, unverifiable reviews and star ratings are legal exposure — and one placeholder testimonial poisons the real one.
*Fix:* Delete the StarRating component. If Chen/Mitchell are real, name their companies; if they must stay anonymous, label it as discretion: "Founder & CEO, London fintech (name withheld under NDA)". The outcome badges ("Series A closed", "MVP in 10 weeks") are stronger evidence than stars.

**B2. Enterprise logos framed as client wins vs. the About timeline** — `app/page.js:295-326` vs `app/about/page.js` timeline
The strip says "Trusted by category leaders" with AstraZeneca and Opayo trademarks, and case studies use "we/our team" voice — but the About page frames Elavon as 2011-2015 *employment* (pre-Codenest, founded 2017). The Opayo brand itself only existed from ~2020, so the case study and the timeline can't both be read straightforwardly. A diligence-minded founder or investor will notice; there's also trademark/endorsement risk in using enterprise logos without permission.
*Fix:* Recaption honestly ("Founder track record includes…"), rewrite case-study voice to match reality ("As interim CTO at Rungway, our founder…"), reconcile the Opayo dates, and either get written permission for logo use or switch to text-only mentions.

**B3. Four competing taglines and none names the offer** — covered as M6; the strongest dual-service line on the property ("Fractional CTO and CFO leadership for UK startups") is in `manifest.json` where no visitor ever sees it.

### Medium severity

**B4. "Codenest" vs "cod3nest"** — the GitHub org is leetspeak `cod3nest`, and it's user-facing: published in the Organization schema `sameAs`, humans.txt, and Giscus comments config. Technical founders will check the GitHub; "cod3nest" reads like a typosquat under "Big 4 rigour".
*Fix:* Rename the org (GitHub auto-redirects) or at minimum remove it from schema/humans.txt.

**B5. Founder invisible; stock photos where trust assets should be** — /about uses a letter-"A" gradient avatar; the hero is a recognizable Unsplash coworking photo *reused again* as the "Fundraising Support" card image; `infrastructure.jpg` illustrates both "Financial Modeling" and "DevOps". For a business selling personal expertise, a named, photographed founder is the cheapest trust upgrade available.
*Fix:* Professional founder portrait on /about + a smaller version near the homepage testimonials. Stop reusing photos across cards.

**B6. Navy+gold+Playfair is the stock "premium consulting" kit, with internal inconsistencies** — the logo wordmark is Georgia (live SVG text, renders differently per OS), `theme_color` disagrees between layout (#2C3E50) and manifest (#D4AF37), and shimmer/pulse gold animations lean sales-page rather than Big-4 restraint.
*Fix:* Keep the palette but convert the logo text to outlined paths in Playfair, align theme colors, and cut the animations (see D4).

### Low severity

**B7. Scarcity vs discount tension** — "Boutique advisory for select founders" sits one click from a footer "Referral Program: Earn Up to £2,000", and the first hero bullet is a discount claim ("Save 60-80%"). Exclusive boutiques don't lead with percentage savings or pay public bounties. Reframe the bullet as capital efficiency, aim /refer at VCs/accelerators, drop it from the main footer. (Verification note: the "one co-founder per year" copy differs slightly between homepage "role" and /cofounder "opportunity" — trivial, but worth aligning while you're in there.)
**B8. Logo alt text inconsistency** — nav: "Codenest - Fractional CTO Services" (omits CFO!); footer: "Codenest - Boutique Startup Advisory". Standardize: "Codenest — Fractional CTO & CFO for UK startups".

---

## 3. Design & UI

### High severity

**D1. Gold and light-grey text fail WCAG AA on white sitewide** — `tailwind.config.js:33-35`, ~20 uses in page.js
accent-400 (#D4AF37) on white ≈ 2.1:1, accent-500 (#B8860B) ≈ 3.3:1 — every gold section eyebrow, "Explore…" link, and category tag fails the 4.5:1 requirement; `text-slate-400` small labels ≈ 2.6:1. For a firm selling due-diligence rigour, failing a basic accessibility audit is a credibility risk.
*Fix:* Reserve gold text for dark backgrounds; on white use a darker gold (≈ #7c5c07) for eyebrows and `text-slate-500`+ for labels.

**D2. 800px stock photos, reused and upscaled soft on retina** — all 9 photos are ~800×533; the hero renders into a container needing ~1600px on 2x displays, so the first thing a founder sees is a soft upscale in a gold "premium frame". Grayscale-until-hover means mobile users only ever see grey photos.
*Fix:* Re-export at 1600w, one unique image per card — or better, drop photos from the 7 service cards entirely and use the icon system; keep photography for hero + case studies only.

### Medium severity

**D3. The primary CTA has five visual variants** — gold rounded-lg with pulse (homepage/nav), gold rounded-xl (service pages), rounded-full pill (sticky), slate-900 (co-founder), primary-600 blue (form submit — the final conversion step doesn't match any button that led to it).
*Fix:* One `Button` component, two variants; the form submit becomes the same gold primary.

**D4. Three simultaneously pulsing CTAs, no `prefers-reduced-motion`** — after 600px of scroll, two-three gold buttons pulse at once; infinite animation + forced smooth-scroll with no reduced-motion guard is both an accessibility gap and tonally growth-hacky.
*Fix:* Remove `cta-pulse` (the gold fill already carries hierarchy); add the standard reduced-motion media query.

**D5. Two parallel grey systems** — a custom `primary` charcoal ramp coexists with default `slate` utilities; dark sections alternate `bg-slate-900` vs `bg-primary-600`; globals.css hardcodes gold hexes in 6+ rules. Pick one neutral and tokenize the gold.

**D6. Typography rules are inconsistent** — homepage h1 is serif normal, other pages serif bold, the blog index h1 isn't serif at all (the one page-level heading that breaks brand); some h3 card titles are serif, sibling cards sans; a case-study h3 outweighs section h2s. Codify: serif for h1/h2 only, one weight; sans for h3 down.

**D7. Accessibility mechanics** — the "Skip to main content" link targets `#home`, which only exists on the homepage (broken on every other page; no `<main>` landmark exists anywhere); the contact form's radio options have no `name` attribute (no arrow-key group behavior, no focus indication, hidden-input workaround); no focus-visible treatment on the styled labels.
*Fix:* Add `<main id="main-content">`, retarget the skip link; use a proper `fieldset`/`legend` + named radios with `peer-focus-visible` styling.

### Low severity

**D8. Mobile:** sticky bottom CTA overlaps the contact form's own submit button (never hides once you reach #contact); the mobile menu doesn't close on link tap; the comparison grid renders the "BEST FIT" Codenest card *fourth* on mobile — three columns of red-X negativity before the sell (`order-first lg:order-none` fixes it).
**D9. Dead CSS:** `.reveal-section` (invisible-forever footgun — the IntersectionObserver it needs doesn't exist), `.focus-gold`, five unused animation tokens, and an undefined `company-logo` class used in two files.
**D10. Template rhythm:** eight consecutive sections use the identical centered-eyebrow/serif-h2/card-grid/checkmark pattern (~40 copies of the same check SVG). Break it in 2-3 places — the Two Tracks section (your core CTO/CFO message) deserves distinct treatment.

---

## 4. Page structure & IA

### High severity

**S1. The nav never links to the two money pages** — `Navigation.js:82-87`
Desktop and mobile menus are: Case Studies (#anchor), Services (#anchor), Our Process (#anchor), Our Story, Blog. Clicking "Services" from /blog navigates *away* to the homepage anchor grid. The words founders search — "fractional CTO", "fractional CFO" — appear nowhere in the most-viewed element of the site.
*Fix (minimum):* `Fractional CTO | Fractional CFO | Case Studies | About | Blog | [CTA]`.

**S2. All 4 guides + the runway calculator are complete orphans** — zero internal links from any page, component, or blog post; discoverable only via sitemap.xml. ~1,400 lines of SEO content for the "fractional CTO" cluster passes no link equity; the calculator — a natural CFO lead magnet — isn't linked even from the runway blog post.
*Fix:* Footer "Resources" column; link the CTO guide from the CTO service page; link the calculator from the CFO page + the three finance posts; create `/guides` and `/tools` indexes.

**S3. No /contact page — every CTA on every subpage dead-ends into `/#contact`** — highest-intent visitors (already on a service page) get a full navigation back through 14 sections of homepage. Also blocks per-service form context.
*Fix:* Create /contact with the existing form + trust chips; repoint subpage CTAs; optionally pass `?service=cto|cfo`.

**S4. The homepage is a 15-section, 1,194-line mega-page (~27,900px on mobile) whose order buries the offer** — three consecutive proof sections (logos, stats, testimonials) run *before* the offer is defined at section 5; full case studies, a 10-question FAQ, and the co-founder pitch all live inline.
*Fix:* Restructure to ~7 sections: Hero (naming the offer) → Two Tracks (CTO/CFO cards → service pages) → logos+stats band → one case-study teaser → How We Work → testimonials → CTA/form. Move case studies to /case-studies, comparison content into the existing vs-guides, FAQ split across service pages, co-founder down to its existing one-line mention.

### Medium severity

**S5. Homepage duplicates the service pages, cofounder page, and FAQs nearly verbatim** — including two competing FAQPage schemas for the same queries. Make the homepage a router, not an encyclopedia.
**S6. Footer euphemisms and dead links** — "Technical Leadership"/"Financial Strategy" labels (rename to the service names; exact-match anchor text helps SEO too); "0-to-1 Product Builds" and "AI & Data Engineering" both point at `/#services`, implying pages that don't exist.
**S7. Blog posts render a hardcoded one-off footer** with a broken `/#about` anchor (no such id) and no service links — and blog posts are the site's main organic entry points. Swap in the shared `<Footer />`.
**S8. `/services` and `/guides` 404** — children exist but no index pages. A /services hub is also the natural one-view answer to the two-track clarity requirement.
**S9. 8 of 16 blog posts have no link to any service page** — including the four most CFO-relevant ones; 2 of 4 guides link only to `/#contact`, never to the service page they exist to sell.

### Low severity

**S10. Missing pages a comparable boutique has:** individual/linkable case studies (nav item is an anchor), visible pricing (the £3k figure is already public in your meta description — show it), and the recommended target IA:
`Home | Fractional CTO | Fractional CFO | Case Studies | Resources (Guides, Calculator, Blog) | About | Contact` — /cofounder and /refer demoted to footer.

---

## 5. SEO & content

### High severity

**E1. Homepage targets no commercial keywords** — default title "Codenest – Boutique Technical & Financial Advisory for UK Startups"; h1 and all ~13 h2s contain neither "Fractional CTO" nor "Fractional CFO".
*Fix:* Title: "Fractional CTO & Fractional CFO for UK Startups | Codenest"; rename the services-section h2s to keyword-bearing versions.

**E2. CFO page h1/keyword mismatch** — same as M2; the SEO cost is that the highest-intent CFO landing page has zero on-page keyword relevance for its own title tag's target.

**E3. Zero CFO-side guide content; blog skews ~10 tech / 6 finance** — no "fractional CFO cost UK", no "when to hire a fractional CFO", no "fractional CFO vs accountant" — the exact searches a CFO-service buyer makes, and the CTO equivalents all exist.
*Fix:* Build the mirror cluster: fractional-cfo-guide, CFO cost post, when-to-hire post, vs-accountant post; interlink with the CFO service page and calculator.

**E4. FAQPage schema injected sitewide from the root layout** — a 7-question FAQPage ships on *every* route (including posts and /refer with no visible FAQ), duplicating the homepage's own 10-question FAQPage and each service page's variant — 2 conflicting FAQPage entities per page. Google requires marked-up content to be visible on the page; this risks the rich result being ignored or flagged.
*Fix:* Remove faqSchema (and the sitewide ItemList servicesSchema) from layout.js; each page keeps its own.

### Medium severity

**E5. Canonicals + sitemap contradict `trailingSlash: true`** — every canonical and sitemap URL omits the trailing slash, so they all point at 301 redirects.
**E6. Blog meta descriptions ignore curated frontmatter** — `generateMetadata` takes the first 160 chars of the body, which always starts with the H1, so every SERP snippet repeats the title. Two-line fix: `post.description || fallback`.
**E7. Every post renders two identical h1s** (template h1 + markdown `# title`). Strip the leading H1 at render time.
**E8. All 16 posts are `TechArticle` / articleSection "Technology"** — including the SEIS/EIS tax post. Use `BlogPosting` + tag-derived section.
**E9. Blog index metadata is engineering-only** ("Insights on Startup Engineering & Infrastructure") — erases the CFO offer at the content hub. Also: several duplicated "| Codenest | Codenest" title suffixes (blog index, runway calculator) because page titles include the brand the layout template appends again.
**E10. Stale "2025" titles** on the money pages (CTO cost guide, hiring guide, fractional-cto-guide) in mid-2026 — refresh or drop the year.
**E11. OG image is a 1200×222 logo declared as 1200×630** — *and verification found it's worse:* because service/guide/tool/about pages define their own `openGraph` without images, they ship **no og:image at all**. Link previews on LinkedIn — the primary referral channel for a consultancy — are broken exactly where they matter most. Create a real 1200×630 card and add it to each page's openGraph (or stop overriding the layout's).

### Low severity

**E12. /about is the E-E-A-T anchor but titled "Our Story", no self-canonical** — *verification found it's worse:* via metadata inheritance the built page carries `<link rel="canonical" href="https://codenest.uk/">`, telling Google the founder-bio page is a duplicate of the homepage. Add `alternates.canonical` and retitle ("About Ankit Rana — Fractional CTO & CFO"); add Person JSON-LD.
**E13. Sitemap lastModified uses file mtime** — in CI every deploy stamps every URL with build date. Use git dates or a static map.
**E14. Stale root-level deploy artifacts** — root `CNAME`, `sitemap.xml`, `manifest.json` never deploy (workflow uploads `./out` only). Delete the dead copies; move CNAME into `public/` so the domain binding travels with the artifact.
**E15. 33-item keywords meta array** — ignored by Google since 2009; trim or delete.

---

## 6. Conversion & CTAs

### High severity

**C1. "Schedule a Strategy Call" schedules nothing** — every instance (5+ placements) scrolls to a form whose button says "Send Message" and whose promise is "respond within 24hrs". No Calendly/Cal.com/SavvyCal anywhere. The primary CTA breaks its promise at the single conversion moment.
*Fix:* Embed a real scheduler at the conversion point (form demoted to "prefer to write?"), or rename honestly: "Request a Strategy Call" + button "Request My Call".

**C2. All 16 blog posts end with a hardcoded infrastructure CTA** — a founder finishing "Financial Modeling for Seed-Stage Startups" is pitched GitOps. This severs the site's only CFO content-to-lead pathway. Small fix: drive the CTA from post tags (finance → CFO service, technical → CTO service).

**C3. The runway calculator captures nothing** — no inbound links (orphan), no email capture, no download. A well-built CFO lead magnet generating zero leads. Link it (see S2) and add an optional "Email me my 12-month projection" using the existing EmailJS setup, tagged as CFO intent.

### Medium severity

**C4. Ten CTA label variants for one action** — Strategy Call / Discovery Call / Conversation / Confidential Conversation / "Let's chat" / Free Consultation / "Send Message"… all resolving to the same form. Standardize on one label sitewide ("Book a Free Strategy Call"), keep "Start a Confidential Conversation" only for the co-founder context.
**C5. The form doesn't segment CTO vs CFO** — options are "Fractional CTO/CFO" (bundled), "Project Work", "Advisory", "Co-founder Fit"; the one distinction the business runs on isn't captured. Meanwhile friction is spent on aggressive email validation (debounce lock, disposable-domain blocking, an API path whose key is commented out). Replace options with "Fractional CTO (technology)" / "Fractional CFO (finance)" / "Both / not sure yet" / "Co-founder partnership"; drop the validation lock.
**C6. No pricing anchor on-site while the blog publishes full tiers** — the comparison table anchors the full-time cost (£150-250k) but never Codenest's own. Add "engagements from ~£2-4k/month" to the Codenest column and the pricing FAQ, linking the cost guide.
**C7. Form failure says "email us directly" but no email exists on the page** — the only mailto on the site is on /refer. Put hello@codenest.uk in the error message, the footer, and beside the form. (Related fragility: the form only works in production because `.env` — with the EmailJS keys — is committed despite being listed in `.gitignore`. If anyone "fixes" that, the sole conversion path breaks silently. Move the keys into the deploy workflow's env or a committed non-secret config, deliberately.)

### Low severity

**C8. The comparison section persuades then abandons** — no CTA after the "BEST FIT" reveal, the page's peak-conviction moment. Add the primary button + "Free 30 minutes. We'll tell you if a fractional model isn't right for your stage."
**C9. All 7 homepage service cards are dead ends** — `ServiceCard.js` contains no link element at all. Wrap each card to its service page.
**C10. Proof isn't adjacent to the ask** — all social proof sits in the top third; the contact section 800+ lines later has only generic trust chips. Put one testimonial + client logos beside the form.

---

## Prioritized action plan

### Week 1 — copy & label changes (no design work, highest impact on your stated goal)
1. CFO page H1 → "Fractional CFO Services"; badge → "Financial Leadership"; "Why FP&A Matters" → "Why Hire a Fractional CFO?" (M2/E2)
2. Hero badge → "Fractional CTO & CFO for UK Startups"; subhead names both services (M1)
3. Standardize every "Strategic Advisory"/"Financial Strategy" label to "Fractional CFO" (M3, S6)
4. Nav: add "Fractional CTO" and "Fractional CFO" as real page links (S1)
5. Layout title → "Fractional CTO & Fractional CFO for UK Startups | Codenest" (E1)
6. Blog post CTA → tag-aware CTO/CFO variants (C2); blog index title covers both tracks (E9)
7. Fix both logo alt texts (B8); rename primary CTA to match reality (C1)

### Weeks 2-3 — trust & structure
8. Delete StarRating; fix or remove the two unverifiable testimonials (B1)
9. Recaption the logo strip as pedigree; reconcile the Opayo/About timeline; rewrite case-study voice (B2, M5)
10. Bound the stats (drop "100%" from meta, add denominators) (M4)
11. Create /contact; repoint subpage CTAs (S3). Create /services and /guides hubs (S8)
12. De-orphan guides + calculator: footer Resources column, service-page links, blog links (S2, C3)
13. Fix the FAQPage schema duplication (E4), blog descriptions (E6), double h1s (E7), canonical slashes (E5), OG images (E11), /about canonical (E12)
14. Founder photo + name on /about and homepage (B5)

### Month 2 — content & polish
15. Build the CFO content cluster: fractional-cfo-guide, cost post, when-to-hire post, vs-accountant post (E3)
16. Homepage restructure to ~7 sections; move case studies to /case-studies (S4, S5)
17. Contrast fixes (D1), single Button component (D3), remove pulse animations + add reduced-motion (D4), skip-link/main landmark + form fieldset (D7)
18. Refresh 2025-dated titles (E10); add email capture to the calculator (C3); pricing anchors (C6)

---

*Generated by a 14-agent review (6 specialist reviewers + 8 fact-check batches, 256 tool calls over the full source). Corrections from the adversarial verification pass are folded in above.*
