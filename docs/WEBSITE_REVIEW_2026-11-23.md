# Codenest Strategic Website Review: Fractional CTO and Fractional CFO

**23 November 2026 · live site codenest.uk = `master` @ d71eaf2 (deployed 5 Aug 2026)**

This is the fourth review of the site, and it differs from the first three. They were defect
audits: contrast, schema, broken forms, unbounded claims. Most of those are now fixed and are not
repeated here (see `WEBSITE_REVIEW_2026-08-05.md` for status). This one looks at **positioning,
proof, and whether each of the two buying journeys converts**.

**Method and limits.** Copy was taken from the rendered HTML of 14 live pages, and claims were
checked against `docs/BRANDING.md` and the repo source. The layout was **not re-checked visually
at 375px** in this pass. The last visual check was on 5 Aug, and the only change since then is the
logo. Statements marked *Evidence* can be checked on the page. Those marked *Opinion* are
judgement. No competitor sites were fetched, so section 10 describes market patterns and names no
firms.

---

## Verdict in one paragraph

The site is now honest, well built, and clear about *what* it sells: Fractional CTO and Fractional
CFO, each available on its own. What it has not solved is **who each seat is for, and what proves
it**.

- **CTO seat.** The proof is specific and real, but almost all of it is long-running enterprise
  delivery (Opayo for seven years, AstraZeneca, government, banks). It is not fractional-CTO work
  with pre-seed to Series A founders. Rungway predates the firm, and Regeno is still running with
  no outcomes yet.
- **CFO seat.** It has no Codenest client engagement, no case study, and an undated start. Its
  principal's record (a £35m→£165m multi-site hospitality scale-up) is a strong **Finance
  Director profile for SMEs and scale-ups**, but the site aims it at pre-seed founders.
- **The combined offer.** "One roadmap and one model, built together" is the most distinctive idea
  on the site, and nothing on it shows that this has ever happened.

The fix is mostly about who the CFO seat targets and what evidence the site shows, not about
redesign.

---

## 1. Business positioning and brand clarity

**First 5 seconds.** *Evidence:* the eyebrow reads "Fractional CTO & CFO for UK Startups". The h1
is "Executive Firepower. Startup Agility.", and the subhead names "a part-time CTO, a part-time CFO,
or both". A visitor learns *what* it is within 5 seconds, but only from the small eyebrow and the
third line. The h1 itself carries no information. *Opinion:* the flourish could belong to any
consultancy, so the most valuable line on the page is spent on a slogan. BRANDING §13.2 allows
this ("the brand H1 may stay evocative"). The Definition of Done in `AGENTS.md` does not ("one h1
carrying the page's target term"). The two rules conflict, and the owner should resolve that in
favour of the DoD.

**Two services, one brand: coherent or confusing?** *Opinion:* the site handles it well. The
"Two Executive Seats" block, the `/services` chooser ("Signs you need the CTO / the CFO / both /
neither") and "take either seat on its own" are the clearest structural decisions on the site. The
risk is not confusion but **asymmetry**: the brand *says* two seats and *proves* one (section 8).

**Premium and credible?** *Evidence for:* restrained design, two named principals, statutory
disclosures, refusal criteria ("When we are the wrong call"), no star widgets. *Evidence
against:*

- **"Big 4 rigour meets founder empathy"** (tagline, in the footer of every page). Neither
  principal trained or was employed at a Big 4 firm. The only Big 4 link is the Deloitte Digital
  engagement (Jul 2018–Aug 2019, per BRANDING §13). A diligent founder checking LinkedIn will find
  this. *Opinion:* this is the single claim most likely to lose a sceptical buyer, because it can be
  checked in one click and it fails the check. It is standing rule §13.5, so it is the owner's
  decision. My recommendation is to replace it (section 7).
- **Price-led benefits.** "Save 60-80% vs full-time executives" is the *first* hero bullet and the
  *first* CTO benefit tile. Leading with the discount positions the seat as a cheap substitute
  rather than as senior judgement.
- **The co-founder offer.** (A related defect was fixed on 23 Nov: the offer's "What I bring" list also gave Ankit "financial
  modelling" and "Series A due diligence and fundraising support", which broke §13.14. Those lines
  are now technical only.) Co-founder partnerships appear on the homepage, in the footer, in the
  contact form (as an equal fourth option), in "Beyond Advisory" on `/about`, and on `/cofounder`
  (written in the first person, "I'm selectively open to co-founding"). *Opinion:* a retainer buyer
  reads "this CTO is looking for something better to do". It weakens the commitment signal that a
  fractional seat depends on.

**Differentiated?** The real differentiators are (a) two named, senior, non-overlapping
principals, (b) technical and financial plans built together, (c) agentic AI delivery that is
actually built, not just advised on, and (d) published refusal criteria. Of these, (c) and (d) are
well executed, (a) is half executed, and (b) is asserted but not shown.

**Recommended positioning.** Keep one brand with two distinct seats, and market them as
complementary. Do not split into two brands: the joint plan is the moat, and two brands would
throw it away. But make three changes:

1. **Let each seat have its own buyer.** *(Owner decision, 23 Nov 2026: declined. The CTO seat targets pre-seed to seed, and the CFO seat pre-seed to seed and through Series A. Established SMEs are out of scope. The SME and "Finance Director" recommendations below stand as analysis, not as the plan.)* The CTO seat stays with founders, pre-seed to Series A.
   The CFO seat targets **founder-led and owner-managed businesses from roughly seed stage to
   £[owner to supply]m revenue, including established SMEs**, because that is where Michelle's
   record is strongest. This amends BRANDING §1 and §13.10 (one ICP phrase sitewide), which needs an
   owner decision.
2. **Name the "both" offer as a product,** for example a fixed-scope "Raise-ready review":
   architecture and model audited together, and one diligence pack. A product makes the combined
   claim testable and gives it something to sell.
3. **Lead with judgement, not discount.** Move "60-80%" out of the hero and into FAQs and guides,
   where cost-comparison searchers look for it.

## 2. Target audience and customer segmentation

| | CTO seat | CFO seat |
|---|---|---|
| **Stated ICP** (§1) | UK founders, pre-seed to Series A, fintech, healthtech, B2B SaaS | Same |
| **Where the proof sits** | Enterprise and regulated delivery (MoJ, banks, pharma, payments); one pre-firm startup (Rungway); one current agritech AI client (Regeno) | One multi-site hospitality scale-up (Dishoom £35m→£165m), and retail before that |
| **Best-fit buyer, judged from the proof** | Non-technical founder pre-seed to Series A; or a scale-up with a regulated or payments platform that needs a senior technical owner; or a company with AI pilots and no production platform | Founder or owner-managed business with real revenue (multi-site, consumer, hospitality, retail, services) that needs forecasting, controls, margin work and Board reporting; then seed to Series A raises |
| **Does the site speak to their problems?** | Yes: the `/services` "Signs you need" list and the non-technical-founder FAQ are strong | Partly: the pains are written well ("month-end takes two weeks"), but all of them are framed for a startup raising money |
| **Too broad or too narrow?** | Broad: CTO seat, MVP agency, DevOps, agentic AI and co-founder, all at once | Too narrow in audience, and it misses the SME/FD market entirely |

**Evidence:** "Finance Director", "interim", "SME", "CFO as a service" and "CTO as a service"
appear **zero times** on the 14 pages checked. "Scale-up" appears once, on `/about`. A UK
business owner with £10m of revenue searches "part-time finance director", and the site is
invisible to that search.

**Recommended segmentation (each with its own proof and FAQ block):**

- *CTO:* (1) non-technical founders, pre-seed to seed; (2) Series A teams facing technical
  diligence or a scaling wall; (3) businesses with AI pilots that need a production platform.
  The third is the newest and most distinctive segment, and the only one with a current client.
- *CFO:* (1) founders preparing a seed to Series A raise; (2) owner-managed SMEs and scale-ups
  that need an FD two days a week; (3) multi-site or consumer businesses expanding (Michelle's
  home ground). The "We are not raising. Is a Fractional CFO still worth it?" FAQ is already
  written for segment 2. Promote it from FAQ to positioning.

## 3. The CTO offer

**Strong:** the principal band names Ankit, dates his career and links LinkedIn. The Agentic AI
section ("company brain", "AI factory", "evaluation and learning", "cost and latency discipline")
is the most differentiated copy on the site, and it is backed by a real client. "The person
advising on the architecture is the person writing it" is a good line.

**Weak or unclear:**

- **What you are buying is undefined.** There is a 12-item "What We Do" list but no engagement
  shape: no tiers, no "what the first month looks like" (the CFO page has one), and no deliverables
  per month. The weekly commitment varies by page: the homepage says "2-3 days per week", the CTO
  page says "8-20 hours per week" and the CFO page says "8-16 hours". 2-3 days is 15-24 hours. Pick
  one model.
- **Seat or agency?** The page sells leadership, while `/services` sells "0-to-1 Product Builds",
  an "8-12 week delivery" and "DevOps & Platform Engineering". "8-12 weeks" also appears in the
  hero for "Investor-ready", so the same number means two different things. *Opinion:* delivery
  capacity is a legitimate upsell, but present it as *what the seat can bring*, not as a parallel
  service line. Otherwise the firm competes with the agencies its own guide ("Fractional CTO vs
  agency") argues against.
- **The case studies are contractor-shaped.** *Evidence:* "Working inside the Opayo platform team
  from August 2019 to June 2026, Ankit led an AWS EKS migration…" and, for AstraZeneca, "Ankit
  built a web application". These are true and impressive, but a founder reads them as a senior
  engineer embedded for years, not as a CTO who owned a roadmap, a team and a board conversation.
  Every case study should state *the decision Ankit owned* and *who he reported to*.
- **Missing capabilities a buyer looks for:** a named offer for **technical due diligence** in
  both directions (prepare for it, or run it on a target or an outsourced build); a **security
  and resilience** baseline (only "regulated delivery" in passing); "**interim CTO**" cover between
  hires; and **vendor and outsourced-build oversight**, which is one item in a list here but is
  the most common non-technical founder pain.
- **Clichés:** "Ready to Level Up Your Technical Leadership?", "Ship Faster, Break Less", and
  "Engineering rigour and technical leadership for ambitious startups".

**Recommended CTO structure (four offers, one page):**

| Offer | Buyer | Shape |
|---|---|---|
| Fractional CTO | Pre-seed to Series A | Retainer, [n] days/week, monthly deliverables listed |
| Technical diligence | Founder before a raise, or an investor or acquirer | Fixed fee, [n] weeks, written report |
| Agentic AI platform | Company with pilots but no platform | Scoped build, then a step-down retainer |
| Interim CTO | Gap between permanent hires | Time-boxed, with a hiring handover |

MVP builds become "delivery the seat can bring", not a headline service.

## 4. The CFO and FD offer

**Strong:** the principal band is specific and numerate (±3% forecasts, close cut from 14 to 8
days, £6m procurement savings, a 20+ person function). The FAQs answer the real objections: "Do we
still need a bookkeeper?", "We are not raising", "What does the first month look like?". The
benefit tiles now carry attributed proof lines.

**Weak or unclear:**

- **No Codenest-era CFO evidence at all.** *Evidence:* `/case-studies` is titled "Fractional CTO
  Case Studies", and all four studies are CTO work. A CFO buyer who clicks "View Case Studies" or
  "Case Studies" in the nav lands on a page that is not for them. Michelle's timeline ends at
  "Dishoom 2017-2026" with no Codenest row. This was open finding H4 on 5 Aug and is still open.
- **Attribution, now answered by the owner (23 Nov 2026).** The CFO page cites "Series A closed on
  our models and data room (client, name withheld)". The hero says "Every client diligence passed to
  date — technical *and financial*", and `/services` says "We've helped startups raise from pre-seed
  to Series A". **Owner answer:** Michelle built the model, the data room and the diligence Q&A in
  2025. She joined Codenest in January 2026. So the credit goes to the right principal and §13.14
  is not breached. But the work predates her time at Codenest, so calling it "our models" and the
  company a "client" breaks §2 rule 3 in the same way the Rungway quote does: work from before
  the firm must be shown as pedigree. **Fix:** relabel it "Founder track record: Michelle Rana FCCA,
  2025", and attribute the testimonial's seat to her. It is also the best CFO proof the site has.
  Write it up as the CFO track-record case study, the counterpart to Rungway (section 8).
- **Every proof point comes from one employer.** Dishoom is a strong reference, but it is the only
  one. Earlier roles (Ryder, SSP, Oasis & Warehouse) appear only on `/about`.
- **Missing capabilities a buyer looks for:** **cash-flow forecasting** as a named 13-week
  deliverable; **margin and pricing** (it is Michelle's evidence, but it sits eighth in a list of
  11); **financial controls and governance**; **KPI dashboards and management accounts packs**;
  **R&D tax credits and SEIS/EIS** coordination (there is a blog post, but not a service line); and
  **interim FD** cover. There are also gaps against what Michelle has demonstrably done:
  **multi-site expansion and CapEx appraisal**, and **finance team build and systems
  implementation**.
- **"FP&A" is jargon to the target buyer.** "What's the difference between FP&A and accounting?"
  is the first FAQ, which shows that the term needs explaining.

**Recommended CFO structure:**

| Offer | Buyer | Shape |
|---|---|---|
| Fractional CFO / part-time FD | Seed to Series A, and owner-managed SMEs | Retainer: monthly pack, rolling forecast, Board reporting |
| Raise readiness | 6-9 months before a raise | Fixed fee: 3-statement model, data room, diligence Q&A |
| Cash and margin review | Business under cash or margin pressure | Fixed fee, [n] weeks, 13-week cash forecast and margin plan |
| Interim FD | Gap between hires, or a finance team rebuild | Time-boxed, with a hiring handover |

Use "Fractional CFO" as the service name (per §13.1) and "Finance Director" as a stated synonym in
the copy and FAQs, so that SME searches find the page. This is a narrow amendment to §13.1, which
currently retires aliases.

## 5. UX and navigation

**What works:** nav is Services (with both seats and hints) · Case Studies · About · Resources ·
CTA. The mobile menu mirrors it. There are skip links and landmarks. `/services` works as a
genuine chooser, not just a card grid. Each service page links its own guides and tools.

**Friction points (evidence):**

1. **Both seats share one case-studies destination**, and it is CTO-only (section 4).
2. **The form forgets which page the visitor came from.** The service pages send the CTA to
   `/contact/`, and `ContactForm.js` initialises `engagement: ''` with no query or referrer
   preselection. A CFO visitor has to re-state which seat they want after a page that was entirely
   about the CFO seat.
3. **The homepage puts the CFO card before the CTO card,** while the hero stats, testimonials and
   case studies all lead with the CTO. *Opinion:* pick one order and keep it. CTO first matches
   where the proof is today.
4. **The homepage is still long:** 9 sections, 4 FAQs, 3 testimonials and 4 case studies. The case
   studies section repeats the stats section (the Rungway 5 → 1,000+ figure appears **five
   times** on the homepage: hero, stats, case card, testimonial badge, testimonial quote).
   `hello@codenest.uk` exists only in JSON-LD schema; no page shows it.
5. **No direct contact route except the form.** There is no visible email outside the error state,
   and no scheduler. "Request a Strategy Call" still only reaches a form (§13.3 records this as
   deliberate "until a real scheduler ships"). A founder ready to book at 10pm cannot.

**Not checked in this pass:** visual hierarchy at 375px after the logo change, and keyboard
behaviour of the dropdowns.

**Recommended sitemap:**

```
/                         Two-seat introduction, joint proof, single CTA
/fractional-cto/          (keep /services/fractional-cto/ — URL change not worth the redirect cost on Pages)
  ├─ case studies (CTO)   /case-studies/?seat=cto  or a filtered section on the service page
  └─ technical diligence, agentic AI, interim CTO  (sections or sub-pages)
/fractional-cfo/          (keep /services/fractional-cfo/)
  ├─ case studies (CFO)
  └─ raise readiness, cash & margin review, interim FD
/services/                Chooser (keep — it is good)
/case-studies/            Split into two labelled sections: CTO | CFO | Joint
/about/                   Two principals, each with a dated Codenest row
/guides/ /blog/ /tools/   Resources (add one CTO tool to match the runway calculator)
/contact/?seat=cto|cfo    Preselected form
/cofounder/               Unlinked from nav, footer, homepage and form; reachable only directly
```

GitHub Pages cannot issue 301 redirects, so **do not move the service URLs**. Restructure inside
them.

## 6. Conversion and lead generation

**Why a prospect leaves without contacting you:**

1. *CFO buyer:* no CFO case study, and no evidence that Michelle has done this as a fractional CFO
   for anyone (section 4).
2. *Any buyer:* no price signal on the service pages. This is a recorded owner decision
   (BRANDING §8 Pricing: "Codenest publishes no prices of its own", 4 Aug 2026), and the anchors
   came out in commit 04f72c3. The guides still publish market ranges (£2,000-£12,000/month).
   *Opinion:* buyers at this price point screen on price before they book a call, so the decision
   is worth revisiting. Publishing "from £[x]/month" per seat would reverse that rule.
3. *Ready buyer:* no scheduler, so the form becomes an email exchange about times.
4. *Sceptical buyer:* "Big 4 rigour" fails a LinkedIn check, and "Every client diligence passed to
   date" has no denominator.
5. *CTO buyer comparing firms:* the case studies read as contracting, not CTO seat work.

**Per-seat lead journeys:**

| | CTO | CFO |
|---|---|---|
| Entry | Search: "fractional CTO UK", "technical due diligence", "non-technical founder CTO"; guides | Search: "fractional CFO", "part-time finance director", "startup financial model"; runway calculator |
| Proof on page | 2 CTO case studies with the owned decision stated; Regeno once outcomes exist | 1 CFO case study (owner to supply); Michelle's band; a Dishoom outcome stated as a role |
| Low-commitment step | **A new tool**: "Technical due diligence readiness check" (the checklist post already exists; make it interactive and capture email) | Runway calculator (exists, already captures email) |
| Primary CTA | Request a Strategy Call → `/contact/?seat=cto` | Request a Strategy Call → `/contact/?seat=cfo` |
| Reply | Ankit replies within 24h with times (name the person) | Michelle replies within 24h with times |

Naming who replies costs nothing and turns a firm into a person, which is the purchase being made.

## 7. Copywriting and messaging

Proposed copy follows BRANDING §2: British English, no emojis, "Request a Strategy Call" kept, no
invented figures (`[owner to supply]` where a number is needed).

| Current | Problem | Recommended replacement | Reason |
|---|---|---|---|
| h1 "Executive Firepower. Startup Agility." | Generic; carries neither service nor buyer; no search value | **"A Fractional CTO and a Fractional CFO, for founders who need both plans to hold."** (Keep the flourish as the eyebrow if wanted.) | The h1 should state the offer; it meets the DoD |
| Tagline "Big 4 rigour meets founder empathy" | Neither principal is ex-Big 4; fails a one-click check | **"Senior operators. Plans that survive diligence."** | Claims something both principals can prove (owner decision: §13.5) |
| Hero bullet "Save 60-80% vs full-time executives" | Leads with discount; makes the seat a commodity | **"Senior leadership two days a week, without a full-time salary or equity."** | Same benefit, framed as access rather than cheapness |
| Hero bullet "Every client diligence passed to date" | No denominator; says nothing about who did the work | **"[n] technical and financial diligence processes supported, none failed."** (only if the owner can state n) — otherwise remove | §2 claims policy: bounded or gone |
| Hero bullet "Investor-ready in 8-12 weeks" | Same number as the MVP timeline; not attributed to either seat | **"Raise-ready in [owner to supply] weeks: model, data room and architecture review."** | Separates it from the MVP figure and makes it a product |
| CTO page "Engineering rigour and technical leadership for ambitious startups." | Could belong to any firm | **"Someone senior who owns the technical decisions — architecture, hiring, AI, diligence — and is still there when they reach production."** | Uses the page's own best idea (the consultant-vs-CTO FAQ) |
| CTO tile "Save 60-80% vs Full-Time" | Duplicates the hero; price first | **"Decisions you can defend. Every architecture choice comes with what it costs and what it rules out, in words a non-technical founder can check."** | Outcome, and it targets the main CTO buyer |
| CTO CTA "Ready to Level Up Your Technical Leadership?" | Cliché | **"Not sure whether you need a CTO yet? That is what the first call is for."** | Honest, and lowers the barrier |
| CFO subhead "The financial discipline of a high-growth company — without the overhead." | Vague | **"A forecast you can act on, a Board pack that lands on time, and a model that holds up when an investor tests it."** | Three concrete deliverables, all evidenced in Michelle's band |
| CFO first FAQ "What's the difference between FP&A and accounting?" | Leads with jargon | **"What does a Fractional CFO do that my accountant doesn't?"** (same answer) | Matches the buyer's own question and search phrase |
| `/services` "We've helped startups raise from pre-seed to Series A." | Unbounded and unattributed (same class as 5 Aug M1) | **"Raise readiness: the model, the data room, and the questions investors will ask of both."** | Describes the offer instead of claiming a record |
| `/case-studies` h1 "Fractional CTO Case Studies" | Excludes the CFO buyer from the nav's only proof page | **"Case Studies: Fractional CTO and Fractional CFO"**, with labelled sections | Both journeys land somewhere |
| Opayo study "Working inside the Opayo platform team…" | Reads as embedded contractor | **"Ankit owned the platform roadmap for [scope, owner to confirm] and reported to [role]: the EKS migration, the move to microservices and the release pipeline were his decisions."** (only if true) | States the seat, not the tasks |
| About "Why We Started Codenest" ("We kept seeing the same patterns") | "We" since 2017, while Michelle's timeline shows Dishoom until 2026 | **"Codenest started in 2017 as Ankit's technical practice. Michelle joined in January 2026 to lead the financial seat."** | True history reads as stronger than a fiction a buyer can spot |
| Footer "Serving select founders across the UK and Europe." | "Select" is an exclusivity pose without evidence | **"Working remotely with founders across the UK and Europe."** | Plain and true (§13.25) |
| Testimonial heading "Real feedback from startup leaders we've worked with" | The HR-tech quote describes Rungway, which was pre-Codenest employment (§2 rule 3 frames that as pedigree) | **"What founders say"**, plus a small "Founder track record" label on the HR-tech card | Consistent with how the case study is labelled |

## 8. Credibility and trust

**Proof inventory (evidence):**

| Asset | CTO | CFO | Joint |
|---|---|---|---|
| Codenest case studies | 3 (Regeno in progress, Opayo, AstraZeneca) | 0 | 0 |
| Pre-firm track record | 1 (Rungway) | Dishoom (principal band only) | — |
| Testimonials | 2 (HR-tech, B2B SaaS MVP) | 1 (fintech Series A: Michelle, 2025, pre-Codenest) | 0 |
| Client logos | 5 (Regeno, Opayo, AstraZeneca, HSBC, Deloitte Digital) + Rungway | Dishoom (track record) | — |
| Tools | 0 | 1 (runway calculator) | — |
| Guides | 4 | 3 | — |
| Photographs of principals | Letter avatar | Letter avatar | — |

**What is missing, in order of what it would change:**

1. **The 2025 Series A raise written up** as Michelle's track-record study (owner confirmed 23 Nov). After that, **one CFO engagement through Codenest**, even anonymised ("a London multi-site restaurant group",
   with what was owned and what changed). This is the largest single gap on the site.
2. **One joint engagement**, if one exists. It would prove the differentiator. If none exists, say
   "available together" rather than implying it is the normal way of working.
3. **Photographs.** Letter avatars on a site selling two named people. Open since 4 Aug.
4. **Michelle's Codenest row.** The start date is now known: January 2026 (owner, 23 Nov). The `/about` row still needs adding.
5. **The relationship between the principals.** Both are named Rana. A buyer will wonder, and an
   unexplained shared surname reads as concealment. *Opinion:* one neutral line on `/about`,
   worded as the owners wish, removes the question. This is entirely the owners' call.
6. **Verifiable credentials:** an FCCA register link, and the AWS certification badge or
   verification link.

**Do not add:** more logos, star ratings, "trusted by" walls, or awards without a source. The
site's restraint is a trust asset.

## 9. SEO and discoverability

**Solid (5 Aug, unchanged):** per-page titles ("Fractional CFO Services for UK Startups"), a single
h1 on service pages, canonicals with trailing slashes, FAQPage schema per page, an OG card per
post, and 20 blog posts split evenly between finance and technical topics (10/10 by tag).

**Gaps:**

| Intent | Coverage today | Action |
|---|---|---|
| fractional CTO / CFO | Service pages, guides, cost posts | Keep |
| **part-time / interim finance director** | **None** | "Finance Director" as a synonym on the CFO page (h2 and FAQ); a guide "Fractional CFO vs part-time FD vs interim FD" |
| **interim CTO** | **None** | FAQ and section on the CTO page |
| CTO / CFO as a service | None | One FAQ each; low volume, so do not build pages for it |
| technical due diligence | One checklist post | A service section, and the interactive check from section 6 |
| SME financial strategy | None | Content cluster for the new CFO segment: cash forecasting, margin, multi-site expansion |
| UK / London | "UK" in titles; Codenest claims no London base (§13.25) | Keep "UK"; do not build fake location pages |
| Homepage h1 | No target term | Section 7 rewrite |

Internal linking is good (the service pages link to their guides). Gap: blog posts in the new CFO
segment should link to the CFO page, as the tag-aware CTA system already does.

## 10. Competitive positioning (market patterns; no firms fetched or named)

**Overused patterns in the category, and where the site sits:**

| Pattern | Site today |
|---|---|
| "Save X% vs full-time" as the lead benefit | Uses it, in the hero and on the CTO page; demote it |
| Network firms with a bench of anonymous "senior CFOs" | Does the opposite with named principals; an advantage, so keep it |
| Logo walls of the founders' former employers | Mostly avoided (labelled "track record"); Deloitte and HSBC are on the client strip, which is correct by §13 |
| "Strategic partner", "trusted advisor" language | Mostly cleaned out |
| AI claims without builds | Avoided: Regeno is a real build. This is differentiating |

**What larger fractional firms usually do better:** published price bands, named case studies
per seat, a scheduler, and a defined engagement shape (days per month, deliverables). Codenest
can match all four without becoming one of them.

**Is CTO and CFO together a real advantage?** *Opinion:* yes, but only at three moments: before a
raise (diligence on both), during a build-versus-buy or hiring decision (cost and architecture
together), and at the 0-to-1 stage. Outside those moments buyers want one seat. The site's "take
either seat" stance is therefore correct, and the joint offer should be sold as a **time-boxed
product at those moments**, not as the default.

## 11. Recommended architecture

| Page | Purpose | Key message | Primary CTA |
|---|---|---|---|
| Home | Introduce both seats; route the visitor to one | Two senior operators; take one seat or both | Request a Strategy Call (no seat preselected) |
| Fractional CTO | Convert the technical buyer | Owns technical decisions through to production, AI included | Request a Strategy Call → `?seat=cto` |
| Fractional CFO | Convert the finance buyer, including SME FD searches | A forecast you can act on and numbers that hold up | Request a Strategy Call → `?seat=cfo` |
| Services (chooser) | Decide which seat | Signs you need each, both, or neither | To the chosen seat |
| Case studies | Proof per seat, labelled | What was owned, and what changed | Seat-specific CTA under each section |
| About | Trust in the two people | Dated history, photographs, credentials, how they work together | Request a Strategy Call |
| Resources | Capture early-stage research traffic | Guides, blog, two tools (one per seat) | Tool email capture → seat CTA |
| Contact | Book | Who replies, when, and what happens on the call | Request My Call |

## 12. Homepage redesign

Seven sections, down from nine. Bracketed values are for the owner to supply. No figure here is
invented.

| # | Section | Objective | Headline | Supporting copy | Content / visual | CTA |
|---|---|---|---|---|---|---|
| 1 | Hero | Say what it is and who it is for | "A Fractional CTO and a Fractional CFO, for founders who need both plans to hold." | "Take either seat on its own, or both. Ankit Rana leads the technical seat; Michelle Rana FCCA leads the financial one." | Two principal photographs, side by side, each with name and seat | Request a Strategy Call · secondary: "Which seat do I need?" → `/services/` |
| 2 | Two seats | Route the visitor | "Two seats. Take the one you need." | One line per seat: who it is for, what it owns, one proof point (Rungway 5→1,000+; Dishoom £35m→£165m as a role) | The existing two-track cards, CTO first | "Explore Fractional CTO" / "Explore Fractional CFO" |
| 3 | When both | Sell the joint offer at the right moment | "Before a raise, the model and the architecture get tested together." | "Raise readiness: one review of your financial model, your architecture and your data room, done by both seats in [n] weeks." | A simple diagram: model ↔ hiring plan ↔ architecture, with one shared diligence pack | "Ask about raise readiness" → contact `?seat=both` |
| 4 | Proof | Show the evidence | "Work we can point to" | 2 CTO studies + 1 CFO study (when supplied), each labelled client or track record | Three cards with no repeated stats | "All case studies" |
| 5 | How we work | Reduce risk | "How an engagement runs" | Days per week, first-month deliverables, notice terms, "you own the output", "from £[x]/month" per seat | Keep "When we are the wrong call"; it is the best trust device on the page | — |
| 6 | Founders say | Social proof | "What founders say" | The three genuine quotes, each labelled with its seat | No avatar initials; outcome badge only | — |
| 7 | Contact | Convert | "Thirty minutes. We will tell you if you don't need us." | "Ankit or Michelle replies within 24 hours, depending on the seat." | Form with seat preselected from the route | Request My Call |

Cut from the homepage: the stats band (repeated by the proof section) and the co-founder line.
Move the FAQs to the service pages, where they already exist in full.

## 13. Prioritised action plan

| Priority | Issue | Recommended action | Expected impact | Effort |
|---|---|---|---|---|
| **P0** | Series A work (Michelle, 2025, before she joined) is presented as a Codenest client engagement ("our models", "client") | Relabel it "Founder track record: Michelle Rana FCCA, 2025" on the CFO page, homepage stat and testimonial; bound or remove "Every client diligence passed" and "We've helped startups raise" | Same honesty standard as Rungway; removes a framing a diligent buyer would catch | Low |
| **P0** | CFO seat has zero Codenest proof; the case-studies page is CTO-only | Write up the 2025 Series A raise as a CFO track-record study now (anonymised); add a Codenest-era one when it exists; split `/case-studies` into labelled CTO, CFO and Joint sections | The CFO journey has something to convert on | Medium (owner input) |
| **P0** | "Big 4 rigour" fails a one-click check | Replace the tagline (amends §13.5) | Removes a credibility trap that appears on every page | Low |
| **P0** | Michelle's Codenest row absent (start: January 2026, owner); "we" history since 2017 | Add a "2026-present, Codenest: Fractional CFO" row, and put the 2025 Series A on her track; rewrite "Why We Started Codenest" truthfully | Consistent story under scrutiny | Low (owner input) |
| **P1** | CFO seat aimed only at pre-seed founders; FD/SME search invisible | Add the SME/scale-up segment and "Finance Director" synonym (amends §1, §13.1, §13.10) | Opens the segment where Michelle's record is strongest | Medium |
| **P1** | Form forgets the seat | Read `?seat=` in `ContactForm.js`; service-page CTAs pass it; name who replies | Less friction, and leads arrive already sorted | Low |
| **P1** | No price signal on service pages (a deliberate owner rule, 4 Aug) | Revisit the rule; if reversed, publish "from £[x]/month" per seat | Pre-qualifies leads, fewer wasted calls | Low (owner decision) |
| **P1** | Engagement shape inconsistent (2-3 days vs 8-20h vs 8-16h); "8-12 weeks" means two things | One commitment model; a "first month" section on the CTO page too | Buyers understand what they are buying | Low |
| **P1** | Homepage h1 carries no target term | Section 7 rewrite; reconcile §13.2 with the DoD | Clarity and SEO | Low |
| **P1** | CTO case studies read as contracting | State the owned decision and reporting line in each | CTO proof matches the seat being sold | Low (owner input) |
| **P1** | Co-founder offer undercuts the retainer | Remove it from the homepage, form, footer and `/about`; leave `/cofounder` unlinked | Stronger commitment signal | Low |
| **P1** | Letter avatars | Principal photographs ≥1600px | Trust in the two people being bought | Low (owner input) |
| **P2** | "60-80%" leads the hero and the CTO tiles | Demote it to FAQs and guides | Premium positioning | Low |
| **P2** | No interim CTO/FD, technical diligence or cash-review offers | Add the fixed-scope offers from sections 3 and 4 | Lower-risk first purchase | Medium |
| **P2** | Homepage repetition (5→1,000+ five times; 9 sections) | Seven-section structure (section 12) | Faster scan | Medium |
| **P2** | No CTO lead tool | Interactive technical-diligence readiness check with email capture | CTO equivalent of the runway calculator | Medium |
| **P2** | Shared surname unexplained | One line on `/about`, worded by the owners | Removes a question buyers will ask | Low |
| **P3** | No scheduler | Add one; then §13.3 can move to "Book a Strategy Call" | Converts the ready-to-book buyer | Low-medium |
| **P3** | Joint offer is a claim, not a product | Package "Raise readiness" with a price and duration | Makes the differentiator sellable | Medium |
| **P3** | SME finance content gap | Cluster: 13-week cash forecast, margin, multi-site expansion, FD vs CFO | Organic reach for the new segment | High (ongoing) |

## 14. Final independent assessment

1. **Clear value proposition?** *What* it sells, yes. *Why these two people, for whom*: clear for
   the CTO seat, not yet for the CFO seat.
2. **One brand for both seats?** Yes. The joint plan is the only advantage a solo fractional
   CTO or solo fractional CFO cannot copy. Keep both seats independently buyable, and sell the
   joint offer at specific moments.
3. **Premium and credible?** The design and restraint, yes. The tagline, the discount-led hero
   and the co-founder offer pull the other way.
4. **Would I engage?** *CTO:* yes. A real AI build, named regulated work and a person I can look
   up. I would ask what he *owned* at Opayo. *CFO:* not yet from the site alone. The principal is
   credible, and the 2025 Series A raise is real proof, but the site presents it as Codenest client work
   when it came before she joined the firm. I would want that labelled honestly, and I would want one engagement through the firm.
5. **Qualified leads?** The CTO page will produce some, from non-technical founders and AI-curious
   teams. The CFO page under-performs its principal: it addresses the narrowest part of her market
   and offers no proof from the firm.
6. **Five biggest weaknesses:** (1) no Codenest-era CFO proof; (2) the Series A and diligence claims
   presented as Codenest client work, though they came before the firm; (3) a tagline that fails a credential check; (4) CTO proof
   framed as contracting rather than seat ownership; (5) a CFO audience pinned to pre-seed, leaving
   the FD/SME market unaddressed.
7. **Five most important changes:** (1) relabel the Series A raise as Michelle's 2025 track record; (2) publish
   one CFO case study and split the case-studies page by seat; (3) replace "Big 4 rigour"; (4) open
   the CFO seat to SMEs and scale-ups with "Finance Director" language; (5) carry the seat through to
   the form, and publish a "from" price per seat.
8. **What I would change first:** the Series A labelling and the CFO proof, before any redesign.
   Redesign would make the gap more visible, not smaller. Everything in the homepage blueprint
   (section 12) assumes there is one CFO engagement to show. Without one, the best-designed CFO
   journey still ends in "trust us", and this site has rightly refused to make that ask everywhere
   else.

---

### Owner inputs needed (nothing above can ship credibly without these)

1. ~~Who built the "Series A closed" model and data room, and when.~~ **Answered 23 Nov:** Michelle, 2025, all three (model, data room, diligence Q&A), before she joined the firm.
2. ~~Michelle's Codenest start date.~~ **Answered 23 Nov:** January 2026.
3. One CFO engagement that can be written up, anonymised if necessary.
4. A decision on the tagline (§13.5), the CFO ICP (§1, §13.10) and the "Finance Director" synonym
   (§13.1).
5. Whether to keep the 4 Aug "no published prices" rule.
6. Principal photographs.
7. For Opayo and AstraZeneca: what Ankit owned, and who he reported to.

### Changes made on 23 Nov 2026 (branch `claude/series-a-track-record`)

The Series A raise is labelled as Michelle's 2025 founder track record in all six places it
appears: the homepage hero bullet (which replaces "Every client diligence passed to date"), the
homepage stat cell, the testimonial, the CFO benefit tile, `/services` (which replaces "We've
helped startups raise"), and a new 2025 row on `/about`. `/about` also gains Michelle's
"2026-present, Codenest: Fractional CFO" row, and "Why We Started Codenest" becomes "How Codenest
Started" with the true dates. The financial items on `/cofounder` that credited Ankit with CFO work
are removed. BRANDING §2, §13.13 and §13.15 record the rule.

The "Big 4 rigour meets founder empathy" tagline is replaced by "Senior operators. Plans that
survive diligence." (owner, 23 Nov 2026) in the homepage hero, footer, sitewide metadata and the
default OG card. BRANDING §1 and §13.5 are amended, and any "Big 4" claim is now a retired line.

The ICP is now split by seat (owner, 23 Nov 2026): **Fractional CTO pre-seed to seed; Fractional
CFO pre-seed to seed and through Series A.** Firm-voice surfaces were updated: sitewide and contact
metadata, the homepage hero and "how we work" line, the footer, `/services`, `/refer`, the CTO
service page (meta, FAQ, "Ideal for") and its guide's closing line, and the OG card. The CFO page
keeps "pre-seed to Series A". Market commentary in guides and blog posts was left as written.
BRANDING §1 and §13.10 record the split.
