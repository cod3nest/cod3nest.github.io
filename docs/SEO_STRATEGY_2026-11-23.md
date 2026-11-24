# Codenest SEO Strategy and Audit

**23 November 2026 · codenest.uk · branch `claude/seo-audit-strategy-de4d85`**

This covers the audit, the baseline, the keyword and competitor research, the target architecture,
what was changed on this branch, and the 90-day plan. It builds on `WEBSITE_REVIEW_2026-11-23.md`
§9 and `COMPETITOR_COMPARISON_2026-11-23.md` and does not repeat them. Where this document and
`BRANDING.md` disagree, `BRANDING.md` wins; the places where SEO evidence argues for changing a
brand rule are listed under "Decisions for the owner", not acted on.

---

## Sources and their limits

| Source | Access | What it gave |
|---|---|---|
| Google Search Console (domain property) | **Yes**, read-only through the owner's browser | Queries, pages, positions, indexing, sitemaps, links. All numbers below are from GSC unless marked otherwise. |
| Google Analytics 4 | **No.** No GA4 tag | Nothing. |
| Cloudflare Web Analytics | **Yes.** Found already running (auto-injected, "excluding EU visitors"), though `/privacy` said the site ran no analytics | Visits, page views, real-user LCP. No conversion events. |
| Google Ads Keyword Planner | **No.** No Ads account on the owner's login | Nothing. Creating one needs the owner. |
| Ahrefs free keyword generator (UK) | Yes, public | Volume **buckets** only (<100, >100, >1,000 a month). Treat them as ranges, not numbers. |
| Google Search (google.co.uk, `pws=0`) | Yes | Who ranks for the head terms, 23 Nov 2026. One snapshot. |
| PageSpeed Insights | Yes, web UI (the shared API key was over quota) | Lighthouse lab data. No field (CrUX) data: too little traffic. |
| Rich Results Test | Not run | JSON-LD parses on every page (local audit), and GSC reports 13 valid breadcrumb items with no errors. |
| Bing Webmaster Tools | **Set up 23 Nov 2026** (imported from GSC, sitemap submitted) | No data yet. |
| Ahrefs / Semrush paid, Screaming Frog | No | Crawl replaced by an audit script over the static export in `out/` (every page, every link). Backlinks from GSC's Links report only. |

Nothing below is estimated where a source was missing; gaps are stated.

---

## 1. Baseline (GSC, to 21 Nov 2026)

| Metric | Last 16 months | Last 3 months |
|---|---|---|
| Clicks | 72 | 24 |
| Impressions | 9,140 | 3,770 |
| CTR | 0.8% | 0.6% |
| Average position | 20.1 | 18.5 |
| Clicks on disclosed queries not containing "codenest" | 1 (4,330 impr., pos. 31) | 0 (2,400 impr., pos. 23.3) |
| Indexed pages | 23 | |
| Not indexed | 21 (13 crawled-not-indexed, 6 redirects, 2 not found) | |
| External links | 10, from 8 sites: crunchbase.com, fractionalcfocost.co.uk, aybarion.com, cfo-index.com, github.com, linkedin.com, mapquest.com, rocketreach.co | |
| Core Web Vitals (field) | No CrUX data: below the traffic threshold. Cloudflare real-user LCP p75 1.65 s (30 days) | |
| Cloudflare Web Analytics, last 30 days | 110 visits, 120 page views (non-EU visitors only) | |

**Brand versus non-brand.** The query "codenest" brought 18 of the 72 clicks (165 impressions,
position 3.9). The homepage took 48 clicks in all. Filtering out "codenest" leaves **one click in
16 months and none in the last three**. GSC excludes anonymised (rare) queries from filtered
totals, so the remaining clicks sit on queries Google does not disclose; most are likely brand
variants landing on the homepage, but that cannot be shown. Non-brand search has, in effect,
produced nothing yet.

**Top queries by impressions** (16 months):

| Query | Impr. | Pos. | Note |
|---|---|---|---|
| fractional cto uk | 675 | 31.1 | page 4 |
| fractional cto services | 487 | 18.3 | page 2 |
| fractional cto | 467 | 42.9 | |
| fractional cto london | 296 | 23.6 | London targeting given up by owner decision (BRANDING §13.25) |
| startup equity modelling | 110 | 51.7 | no page targets it |
| startup cto advisory london | 97 | 26.3 | |
| what milestones should i set for a fractional cfo engagement? | 67 | 5.4 | long, conversational queries ranking top 10 |
| hire a fractional cto uk | 64 | 34.6 | |
| fractional cfo london | 59 | 55.4 | |
| fractional cfo for startups what services are included | 43 | 6.9 | |
| fractional cto cost uk | 37 | 21.2 | the cost post is not indexed |

**Theme totals across all 339 queries:** queries containing "cto" 3,007 impressions; "cfo" 515;
financial modelling 447; runway/cash 129; "cto as a service"/virtual/outsourced/part-time CTO 196;
**finance director 1; interim 0; MVP 0; due diligence 5.**

**Top pages:**

| Page | Clicks | Impr. | Pos. |
|---|---|---|---|
| / | 48 | 1,409 | 6.7 |
| /guides/fractional-cto-guide/ | 2 | 2,111 | 23.1 |
| /services/fractional-cto/ | 2 | 1,714 | 35.1 |
| /blog/financial-modeling-seed-stage-startups/ | 6 | 1,404 | 26.2 |
| /guides/fractional-cfo-guide/ | 0 | 660 | 10.5 |
| /blog/terraform-aws-infrastructure-as-code/ | 2 | 355 | 12.6 |
| /blog/extending-startup-runway-practical-guide/ | 1 | 341 | 17.0 |
| /blog/kubernetes-startups-overkill-essential/ | 0 | 311 | 9.2 |
| /services/fractional-cfo/ | 3 | 260 | 33.5 |

**Lab performance** (PageSpeed, mobile, 23 Nov; Accessibility, Best Practices and SEO 100 on all three):

| Page | Performance | LCP | TBT | CLS |
|---|---|---|---|---|
| / | 98 | 2.1 s | 30 ms | 0 |
| /services/fractional-cto/ | 100 | 0.9 s | 0 ms | 0 |
| /services/fractional-cfo/ | 100 | 0.9 s | 10 ms | 0 |

Speed is not a constraint on this site. The other pages share the same template and bundle, and
were not run individually.

---

## 2. Audit findings

Ranked by what each costs in qualified enquiries.

### 2.1 Authority is the binding constraint

Ten external links from eight sites, mostly profile and data aggregators (Crunchbase, LinkedIn, MapQuest, RocketReach). Every competitor on page one for the head terms is an
established firm, a recruiter or a directory. Content quality and technical hygiene here are
already above most of them; without links, the service pages will stay on pages 3-5 regardless
of on-page work. Section 9 is therefore the most important part of the plan.

### 2.2 The guides outrank the service pages for the commercial head terms (cannibalisation)

Last three months, queries containing the phrase:

| Query contains | Guide | Service page |
|---|---|---|
| "fractional cto" | /guides/fractional-cto-guide/: 1,380 impr., pos. 23.0 | /services/fractional-cto/: 282 impr., pos. 49.9 |
| "fractional cfo" | /guides/fractional-cfo-guide/: 269 impr., pos. 12.2 | /services/fractional-cfo/: 59 impr., pos. 36.4 |

Both guides were titled "The Complete Guide to Fractional C*O **Services UK**", which put the
commercial phrase in the guide's title. Google picked the guide, and a reader landing there for
"fractional cto services" gets a 15-minute read rather than the offer. **Fixed on this branch**
(section 12): each guide now owns "what is a fractional C*O", and the service page owns
"services", "hire" and "for startups".

### 2.3 Thirteen posts are "crawled, currently not indexed"

`seis-eis-tax-benefits-startup-investors`, `when-to-hire-fractional-cto`,
`how-cfos-use-ai-startup-finance`, `fractional-cfo-vs-accountant-vs-controller`,
**`how-much-does-fractional-cto-cost-uk`**, `kubernetes-startups-overkill-essential`,
`non-technical-founder-hiring-developers`, `gitops-startup-deployment-github-actions`,
`startup-unit-economics-explained`, `mvp-vs-mlp-what-to-build-first` (the last three also as
slashless duplicates, which are only redirect history).

Google crawled these and chose not to keep them. On a site with ten backlinks the usual causes
are low internal link weight and low site authority, not page quality. The internal side was
measurable: the CTO cost post and the CTO when-to-hire post had **one** internal link each (the
blog index). **Improved on this branch:** both service pages and both guides (41 internal links
each) now link their seat's cost and when-to-hire posts, and the CTO page links the technical due
diligence checklist.

### 2.4 The navigation dropdowns were invisible to crawlers

`Navigation.js` mounted the Services and Resources panels only when clicked, and the mobile
menu only when opened. Google renders JavaScript but does not click, so the static HTML carried
no nav link to `/guides/`, the two tools, or (from the nav) either service page. `/guides/` had
**zero** crawlable internal links. **Fixed on this branch:** the panels are always rendered and
hidden with the `hidden` attribute; `/guides/` now has 41.

### 2.5 Measurement existed but was undeclared, and enquiries carry no source

Cloudflare Web Analytics was already switched on for codenest.uk (auto-injected beacon, "enable,
excluding visitor data in the EU"), while `/privacy` said the site ran no analytics. UK visitors are
not EU visitors, so they were being measured. **Fixed on this branch:** `/privacy` now names
Cloudflare (which also proxies every request and was not listed) and describes the analytics.
Still missing: conversion tracking. EmailJS submissions carry no source, so there is no way to say
which page, query or channel produced an enquiry. See section 13.

### 2.6 Smaller technical findings

| Finding | Status |
|---|---|
| GSC last read the sitemap on **20 Jan 2026** and discovered 28 URLs; the live sitemap has 41. | Needs the owner: resubmit in GSC (section 14). |
| Cloudflare proxies the site (`server: cloudflare`, `cf-ray`). Email Obfuscation rewrites addresses into `/cdn-cgi/l/email-protection`, which GSC reports as a 404. | Harmless. Optional: turn off Email Obfuscation in Cloudflare Scrape Shield. |
| `/blog/terraform-aws-infrastructure-as-code/modules/database` 404 | Historical (a relative link in an old version of the post, last crawled May 2026). Nothing links to it now. No action. |
| www, http and slashless variants | All 301 to `https://codenest.uk/...`. The six "page with redirect" entries are these. Correct. |
| Meta descriptions over 160 characters on `/`, `/services/`, `/case-studies/`, `/contact/` | **Fixed.** Three minor ones remain (`/guides/` 161, `/guides/fractional-cfo-vs-outsourced-finance/` 176, `/tools/technical-due-diligence-check/` 172). |
| `/case-studies/` description listed Rungway among "client engagements" | **Fixed** while trimming (BRANDING §13.15: Rungway is founder track record). |
| Titles, canonicals, one h1, trailing slashes, OG images, JSON-LD parse, breadcrumbs | Pass on every page (audit of `out/`). |
| FAQPage schema | Valid, but Google shows FAQ rich results only for authoritative government and health sites since 2023. Keep it for meaning; do not expect SERP features. |

---

## 3. Keyword research

UK volume buckets from the Ahrefs free tool (monthly). "Site today" is GSC impressions over 16
months for that exact query.

### Fractional CFO / Finance Director

| Keyword | UK volume | Intent | Site today | Verdict |
|---|---|---|---|---|
| fractional cfo | **>1,000** | Mixed: definition and providers | 0-ish (page served: guide) | **Primary for the CFO cluster.** Largest demand on the whole list. |
| fractional cfo services | >100 | Commercial | 20 impr., pos. 13.8 | Service page primary |
| what is a fractional cfo | >100 | Informational | - | CFO guide primary |
| outsourced cfo / outsourced cfo services | >100 each | Commercial | - | Existing guide `fractional-cfo-vs-outsourced-finance` should own it |
| startup cfo | >100 | Mixed | - | Service page secondary |
| interim cfo | >100 | Commercial, but full-time cover | - | FAQ only: Codenest works fractionally |
| fractional finance director | >100 | Commercial | 1 | **New guide** (section 8), FD as descriptor on the service page |
| part time finance director | >100 | Commercial (plus jobs) | - | Same guide |
| interim finance director | >100 | Commercial, full-time cover, recruiter-dominated | - | Same guide, FAQ |
| fractional cfo london | >100 | Local commercial | 59, pos. 55 | Owner gave up London targeting (§13.25). Not pursued. |
| fractional cfo uk | <100 | Commercial | - | Service page title already carries "UK" |
| fractional cfo cost | <100 | Commercial investigation | - | Cost post |

**The finding that matters most:** UK search demand for the CFO seat is around ten times the CTO
seat's at the head term (">1,000" against ">100"), yet the site earns six times more CTO
impressions than CFO impressions. The CFO side is where the largest gap between demand and
visibility sits, and it has no case study.

### Fractional CTO

| Keyword | UK volume | Intent | Site today | Verdict |
|---|---|---|---|---|
| fractional cto | >100 | Mixed | 467, pos. 42.9 | Split: guide (definition) and service page (provider) |
| fractional cto services | >100 | Commercial | 487, pos. 18.3 | **Service page primary.** Already page 2. |
| fractional cto uk | >100 | Commercial | 675, pos. 31.1 | Service page |
| hire fractional cto | >100 | Commercial | 18-64 across variants | Service page |
| what is a fractional cto | >100 | Informational | - | CTO guide primary |
| fractional cto for startups | <100 | Commercial | 12, pos. 13.7 | Service page secondary |
| fractional cto cost | <100 | Investigation | 37 ("cost uk"), pos. 21 | Cost post (not indexed yet) |
| fractional cto for non-technical founders | <100 | Commercial | 57 across two spellings, pos. ~26 | `/cofounder/` and a section on the service page |
| cto as a service | <100 (">100" for "agency" and "for business" variants) | Commercial | ~37 (London variant) | FAQ already on the CTO page. No page. |
| interim cto | <100 | Commercial | 0 | FAQ already on the CTO page |
| technical due diligence | >100 | **Mixed:** property, construction, oil and gas dominate | 5 | Target "startup technical due diligence" via the checklist post and the readiness tool, not the head term |
| startup equity modelling | - | Informational | 110, pos. 51.7 | Content gap (section 8) |

Terms checked and rejected for a page of their own: "virtual CTO", "CTO consultancy", "AI strategy
consulting" (no UK demand signal in the tools available, and generic agencies dominate), "MVP
development" (agency SERP; the MVP is a fixed-fee project inside the CTO seat, and a page
would compete with agencies on their ground).

---

## 4. Competitors in search

Google.co.uk, 23 Nov 2026, non-personalised. Names here are research only and never go into site
copy (BRANDING §2.8).

| Query | Page one is |
|---|---|
| fractional cfo | CFO Centre (London page), FD Capital, Johnston Carmichael (article), Nordens, Wise (article), Headstar (recruiter), Accounts & Legal, Fractional Finance, Practicus (recruiter) |
| fractional cfo for startups uk | Standard Ledger, Flow Partners, FD Capital (startup page), **UKBAA blog**, WrightCFO, ThriveGrowth, **AKM Advisory "best fractional CFO services" list**, Fractional Finance, Finance Joy |
| fractional finance director | **fractionalfinancedirectors.co.uk (directory)**, Indeed, Secantor, Love Your Accountants, Headstar, ACE Finance Director, Your Finance Team, Loyals |
| fractional cto uk | Boardman, Indeed, **Metamindz "best fractional CTO services UK, 8 compared"**, Leadership Services, **fractional-csuite.com (comparison)**, The Possibility Partnership, **G-Cloud Digital Marketplace listing**, Macildowie (recruiter) |
| fractional cto for startups | fcto.uk, Reddit r/startups, **GoFractional "best fractional CTO companies"**, Twine, Rocking Tech, Consult With Adam, Add Jam, Arc.dev |

**What they do that works:**

- **Dedicated city and sector pages** (CFO Centre, Flow Partners, FD Capital). Codenest cannot copy
  this honestly: no London base (§13.25), and two principals cannot staff city pages.
- **FD and CFO used together** in titles ("Fractional CFO Services UK | Part-Time Finance
  Director", "Fractional Finance Director & CFO Services"). This is how UK buyers search.
- **Listicles and directories take a third of page one.** Being *in* them is cheaper than outranking
  them, and each inclusion is a link.
- Recruiters (Headstar, Practicus, Macildowie, Indeed) rank on job intent; ignore "jobs" queries.

**Where Codenest can win:**

- **Pre-seed and seed founders.** Most CFO competitors sell to SMEs and established businesses;
  few speak to a founder before their first raise. The financial modelling post already earns
  1,404 impressions with no backlinks.
- **Both seats from one firm.** No competitor on any page-one result offers both.
- **Tools.** The runway calculator and the diligence readiness check are linkable assets none of
  the ranking pages has.
- **Long conversational queries.** GSC shows the CFO guide in the top 10 for questions such as
  "what milestones should I set for a fractional CFO engagement" (pos. 5.4). These read like
  AI-assistant-generated searches; answering them precisely is a cheap win.

---

## 5. Recommended architecture

Keep the current structure. With two principals and no CFO case study, more service pages would
be thin pages competing with each other.

```
/                                   both seats; brand and "fractional CTO and CFO"
/services/                          which seat do I need (decision page)
/services/fractional-cto/           CTO commercial page
/services/fractional-cfo/           CFO commercial page (FD as descriptor)
/case-studies/                      CTO-only until a CFO study exists (§13.15)
/guides/                            hub
  /guides/fractional-cto-guide/     "what is a fractional CTO"
  /guides/fractional-cfo-guide/     "what is a fractional CFO"
  /guides/fractional-cfo-vs-part-time-fd/   NEW: FD terminology guide (section 8)
  existing comparison guides
/blog/                              supporting articles, each linking up to its seat
/tools/                             runway calculator, diligence readiness check
/about/, /contact/
```

**Do not create yet:** separate pages for technical due diligence, MVP delivery, AI engineering,
city pages, or sector pages. Each becomes justified only when it has a case study and enough
unique content to stand alone (roughly 800 words that would not fit on the seat page). Technical
due diligence is the first candidate once one DD engagement can be written up.

**Consolidated 23 Nov 2026 (owner approved):** `/blog/fractional-cto-vs-full-time-cto-uk-startups/`
and `/guides/fractional-cto-vs-full-time/` covered the same comparison. The post's unique sections
(costs founders miss, the fractional-to-full-time path and its diagram, how to evaluate a fractional
CTO, making it work) moved into the guide; an unsourced "40% of executive hires fail" figure was
dropped. The post is deleted and a Cloudflare Single Redirect ("Merged CTO vs full-time post to
guide", wildcard on the old path) 301s it to the guide; verified with curl for both slash forms.
Cloudflare in front of GitHub Pages is what makes a real 301 possible; the repo alone cannot.

---

## 6. Keyword-to-page map

| Page | Primary keyword | Secondary keywords | Intent | Objective |
|---|---|---|---|---|
| / | fractional CTO and CFO | fractional CTO UK, fractional CFO UK, Codenest | Navigational, commercial | Route to the right seat |
| /services/fractional-cto/ | fractional CTO services | fractional CTO UK, hire a fractional CTO, fractional CTO for startups, CTO as a service, interim CTO (FAQ) | Commercial | Book Ankit's call |
| /services/fractional-cfo/ | fractional CFO services | fractional CFO UK, startup CFO, fractional finance director, part-time finance director, interim FD (FAQ) | Commercial | Book Michelle's call |
| /services/ | fractional CTO or CFO | which executive does my startup need | Commercial investigation | Self-select a seat |
| /guides/fractional-cto-guide/ | what is a fractional CTO | fractional CTO meaning, fractional CTO responsibilities | Informational | Hand off to the CTO page |
| /guides/fractional-cfo-guide/ | what is a fractional CFO | fractional CFO meaning, what does a fractional CFO do | Informational | Hand off to the CFO page |
| /blog/how-much-does-fractional-cto-cost-uk/ | fractional CTO cost UK | fractional CTO day rate, hourly rate | Investigation | CTO page |
| /blog/how-much-does-fractional-cfo-cost-uk/ | fractional CFO cost UK | fractional CFO day rate, how much does a fractional CFO cost in London | Investigation | CFO page |
| /blog/when-to-hire-fractional-cto/ | when to hire a fractional CTO | signs you need a CTO | Investigation | CTO page |
| /blog/when-to-hire-fractional-cfo/ | when to hire a fractional CFO | signs you need a CFO | Investigation | CFO page |
| /guides/fractional-cto-vs-full-time/ | fractional vs full-time CTO | part-time vs permanent CTO | Investigation | CTO page (absorbs the duplicate blog post) |
| /guides/fractional-cfo-vs-full-time/ | fractional vs full-time CFO | part-time vs permanent CFO | Investigation | CFO page |
| /guides/fractional-cfo-vs-outsourced-finance/ | outsourced CFO services | outsourced finance function, outsourced CFO vs fractional CFO | Investigation | CFO page |
| /guides/fractional-cto-vs-agency/ | fractional CTO vs agency | development agency vs CTO | Investigation | CTO page |
| /guides/technical-cofounder-alternatives/, /cofounder/ | technical cofounder alternative | fractional CTO for non-technical founders | Investigation | CTO page |
| /blog/startup-technical-due-diligence-checklist/ + /tools/technical-due-diligence-check/ | startup technical due diligence | technical due diligence checklist | Informational, tool | CTO page |
| /blog/financial-modeling-seed-stage-startups/ | financial model for seed-stage startups | SaaS seed financial model, financial modelling for startups UK | Informational | CFO page |
| /tools/runway-calculator/ | startup runway calculator | cash runway calculator | Tool | CFO page |
| /blog/extending-startup-runway-practical-guide/ | extend startup runway | cash runway management | Informational | Runway calculator, CFO page |

One primary keyword per page; no two pages share a primary.

---

## 7. On-page plan

**Done on this branch** (section 12): guide titles and h1s, service-page h2s, the FD FAQ, the
service pages' links into their cluster, four meta descriptions.

**Next, in priority order:**

1. **CTO page: a "Technical due diligence" section** (h2), linking the checklist and the tool. The
   2026-11-23 review recommended it; it is a named offer in the layout's catalogue and has no
   heading of its own.
2. **CTO page: a short "For non-technical founders" block** linking `/cofounder/` and the hiring
   post. 57 impressions at position ~26 with no page aimed at them.
3. **CFO page: "startup CFO"** in body copy where it reads naturally (">100" demand).
4. **Refresh `/guides/fractional-cfo-vs-outsourced-finance/` to target "outsourced CFO"** in its
   title and h1; it is the page Google would pick for that query anyway.
5. **Answer the conversational CFO queries explicitly** in the CFO guide's FAQ: engagement
   milestones, what services are included, how long founders typically keep a fractional CFO.
   All three rank 5-7 today with no click.
6. Trim the remaining three long descriptions.
7. **Image alt text:** every image has one. The CFO hero photo's alt used a retired alias pattern
   (§2.1); **fixed on this branch** to name the Fractional CFO.

**Owner decisions, 23 Nov 2026:**

- **"Finance Director" in the CFO page's title: done.** The `<title>` and OG title are now
  "Fractional CFO & Finance Director for UK Startups"; BRANDING §13.1 records it as the one title
  exception. The h1 stays "Fractional CFO Services". The original reasoning follows.
- *Reasoning:* §2.1 and §13.1 keep the service name as
  "Fractional CFO" everywhere, with descriptors in body copy only. The evidence for adding it:
  fractional, part-time and interim FD each show ">100" UK searches a month, page-one
  competitors pair the two terms in their titles, and the site has one FD impression in 16 months.
  A title of **"Fractional CFO & Finance Director for UK Startups"** is exactly 49 characters (the
  title budget). The h1 can stay "Fractional CFO Services". This branch puts FD in the hero copy
  and a FAQ only.
- **London.** GSC shows 617 impressions for London queries across both seats. §13.25 gave them up
  rather than make an unsupported location claim. That decision stands unless a London presence
  is established; it is recorded here so the cost is visible.

---

## 8. Content strategy

Rules: every piece answers a question a founder actually searches, carries evidence only a
practitioner has (a template, a worked example, a decision with its cost), and links up to its
seat page. No piece goes up without the principal whose seat it supports reviewing it: a
CFO-side post that Michelle has not checked fails BRANDING §2.2's truth-first rule. Every post
carries a diagram (BRANDING §7, `docs/agents/blog-authoring.md`).

### CFO cluster (pillar: `/services/fractional-cfo/` + `/guides/fractional-cfo-guide/`)

| Content | Target keyword | Intent | Type | Priority |
|---|---|---|---|---|
| Fractional CFO, part-time FD or interim FD: which does a UK startup need? | fractional finance director, part time finance director | Investigation | Guide (new) | **P1** |
| Outsourced CFO services: what you get and what you don't | outsourced cfo services | Investigation | Refresh existing guide | **P1** |
| A 13-week cash flow forecast for startups (with template) | cash flow forecast template startup | Informational, linkable | Post + downloadable | **P1** |
| Cap tables and equity modelling before your seed round | startup equity modelling | Informational | Post | P2 (110 impr. already, no page) |
| What a fractional CFO does in the first 90 days | fractional cfo engagement milestones | Investigation | Expand FAQ / post | P2 |
| Board reporting pack for a seed-stage startup | startup board pack template | Informational, linkable | Post + template | P2 |
| CFO case study (the first one) | - | Proof | Case study | **P1, owner input** |

### CTO cluster (pillar: `/services/fractional-cto/` + `/guides/fractional-cto-guide/`)

| Content | Target keyword | Intent | Type | Priority |
|---|---|---|---|---|
| Technical due diligence section on the CTO page | startup technical due diligence | Commercial | Page section | **P1** |
| Fractional CTO for non-technical founders | fractional cto for non-technical founders | Commercial | Page section or post | **P1** |
| Merge the two fractional-vs-full-time CTO pieces | fractional cto vs full time cto | Investigation | Consolidation | P2, owner approval |
| What a company brain is, and when a startup needs one | (AI, low volume; brand differentiator) | Informational | Post drawn from Regeno | P2 |
| Interim CTO vs fractional CTO | interim cto | Investigation | Post | P3 (low volume; FAQ covers it) |

**Cadence:** two substantial pieces a month, one per seat. Fewer, better pieces: 13 of 20 posts
are not indexed, so adding more unlinked posts will not help until authority and internal
linking catch up.

---

## 9. Authority and links

Ten links from eight sites, two of them topical (cfo-index.com, fractionalcfocost.co.uk). Priorities, specific to this market:

| Opportunity | Why | Effort | Owner action |
|---|---|---|---|
| **"Best fractional CTO/CFO in the UK" lists**: Metamindz, GoFractional, AKM Advisory, fractional-csuite.com | They hold page-one slots for the head terms and are updated yearly | Low: one email each with a short factual pitch | Ankit (CTO lists), Michelle (CFO lists) |
| **fractionalfinancedirectors.co.uk** directory | Ranks #1 for "fractional finance director" | Low | Michelle |
| **cfo-index.com, fractionalcfocost.co.uk** | Already link; make sure the listing names the Fractional CFO and links the service page, not just the homepage | Low | Michelle |
| **UKBAA** (UK Business Angels Association) | Its blog ranks on page one for "fractional CFO for startups UK"; angel investors are the CFO seat's referral channel | Medium: pitch a contributed article on preparing a seed data room | Michelle |
| **ACCA**: Accounting and Business magazine, member networks | FCCA is a credential competitors mostly lack; ACCA links are high-authority | Medium | Michelle |
| **Client "technology partner" links**: Regeno, Frekkel | Earned, relevant, and corroborate the case studies | Low: ask | Ankit |
| **The two tools** (runway calculator, diligence readiness check) | Linkable assets: pitch to accelerator and university incubator resource pages (UK accelerators, the University of Leicester enterprise network) | Medium | Either |
| **Podcasts**: UK startup and founder podcasts | Each appearance usually links the guest's site | Medium | Either |
| **G-Cloud Digital Marketplace** | A G-Cloud "fractional CTO" listing ranks on page one for "fractional cto uk"; the Ministry of Justice and HSBC engagements make a public-sector listing credible | High: framework application in the next G-Cloud window | Ankit, decide whether public sector is wanted |
| **Clutch / GoodFirms profile** | Directory links and reviews for the CTO seat | Low | Ankit |

**Update, 23 Nov 2026:** each route above was then checked; see `docs/OUTREACH_PACK_2026-11-23.md`.
GoFractional, AKM Advisory and fractionalfinancedirectors.co.uk turned out to be self-ranked or a
competitor's own network, so they are dropped. fractional-csuite.com and The Entrepreneurs Network
are the best new targets. CFO Index already lists Codenest with a followed link to the CFO page.

Avoid: paid link schemes, mass directories, guest-post farms, and anything that would put a
competitor's or client's name in our copy without permission (BRANDING §2.8, §13.12).

---

## 10. Conversion

The site's conversion paths are already strong (per-seat booking links, a seat-preselected form,
named principals, a first-90-days plan on each seat page). The SEO-specific gaps:

1. **Informational pages must hand off to the seat.** Done here for both guides (early contextual
   link, closing CTA that names the service). Check every new post has the tag-aware CTA.
2. **No CFO proof page.** A CFO buyer who wants evidence is sent to `/about/` because
   `/case-studies/` is CTO-only. The first CFO case study is the single largest conversion
   improvement available on the CFO journey.
3. **Track source.** Nothing records which page an enquiry came from (section 13).
4. **CTO journey:** guide or cost post → `/services/fractional-cto/` → case studies → Ankit's
   calendar. **CFO journey:** guide, cost post or runway calculator → `/services/fractional-cfo/`
   → `/about/` (Michelle) → Michelle's calendar. The runway calculator result screen should offer
   the CFO call at the moment it shows a short runway; check it does.

---

## 11. Technical SEO status

| Area | Status |
|---|---|
| XML sitemap | 41 URLs, git-dated `lastmod`, trailing slashes. GSC copy is stale (resubmit). |
| robots.txt | Allows all; declares the sitemap. Correct. |
| Canonicals | Self-referencing on every page, with trailing slash. Correct. |
| Redirects | www, http and slashless all 301 to the canonical form. Correct. |
| HTTPS | Everywhere. |
| Duplicates | One content duplicate (CTO fractional vs full-time, blog and guide). Pending decision. |
| Structured data | ProfessionalService + WebSite sitewide, Service + FAQPage on seat pages, BlogPosting, Article, BreadcrumbList, ItemList, Person. All parse. |
| Crawlability | Nav dropdown links now in static HTML (fixed). |
| JavaScript rendering | Static export; all content is in the HTML. |
| Mobile | No horizontal overflow at 375px (checked on `/` and `/services/fractional-cfo/`). |
| Performance | Lab 100 across the board. No field data yet. |
| Images | `next/image` with sizes; every image has alt text. |
| Bing / IndexNow | Bing Webmaster Tools set up and sitemap submitted; Cloudflare **Crawler Hints** on (sends IndexNow pings), 23 Nov 2026. |

---

## 12. Changes made on this branch

| File | Change | Why |
|---|---|---|
| `app/components/Navigation.js` | Services/Resources panels and the mobile menu are always rendered, hidden with `hidden` when closed | Their links were absent from the static HTML. `/guides/`: 0 → 41 crawlable internal links. Keyboard behaviour (arrow keys, Escape returning focus) and tab order checked unchanged. |
| `app/guides/fractional-cto-guide/page.js` | Title, OG title, headline and h1 → "What Is a Fractional CTO? A Guide for UK Founders"; early contextual link to the service page; closing button "See Our Fractional CTO Services" | Stop the guide competing with the service page for commercial terms (§2.2 above). Risk: the guide may lose some of its page-3 positions for "fractional cto services". It has 0 clicks from them in three months, so the cost is near zero and the change reverts in one commit. |
| `app/guides/fractional-cfo-guide/page.js` | Same retitle for the CFO guide | Same reason |
| Both guides | Contextual links from the "when to hire" and "cost" sections to the matching blog posts | The guides carry 41 internal links each; passing that to the unindexed posts is the strongest internal signal available |
| `app/guides/page.js`, both service pages | Link text updated to the new guide titles | Consistency |
| `app/services/fractional-cfo/page.js` | h2s "What a Fractional CFO Does for Your Startup" and "Fractional CFO Questions"; hero names the seat as what UK businesses call a fractional finance director; new FAQ on fractional CFO vs part-time FD vs interim FD vs outsourced finance; links to the CFO cost and when-to-hire posts; hero image alt names the Fractional CFO | FD demand coverage within BRANDING §2.1; keyword-bearing headings; internal links to unindexed posts |
| `app/services/fractional-cto/page.js` | h2s "What a Fractional CTO Does for Your Startup" and "Fractional CTO Questions"; links to the DD checklist, cost and when-to-hire posts | Same |
| `app/layout.js`, `app/services/page.js`, `app/case-studies/page.js`, `app/contact/page.js` | Meta descriptions cut to 126-156 characters | They were 186-205 and truncated in results. The case-studies one also stopped implying Rungway was a client. |

**Second round, same day (owner: "do all"):**

| Where | Change |
|---|---|
| `app/services/fractional-cfo/page.js`, `docs/BRANDING.md` §13.1 | Title "Fractional CFO & Finance Director for UK Startups"; rule exception recorded |
| `app/guides/fractional-cto-vs-full-time/page.js` | Absorbed the blog post's unique sections and diagram; `dateModified` 2026-11-23 |
| `content/blog/fractional-cto-vs-full-time-cto-uk-startups.md`, its OG card | Deleted; the CTO guide's link now points at the comparison guide |
| `app/privacy/page.js` | Names Cloudflare as a processor and describes Cloudflare Web Analytics |
| Cloudflare (dashboard) | 301 redirect rule for the merged post; Crawler Hints on |
| Google Search Console | Sitemap resubmitted (read same day, 41 URLs); indexing requested for `/blog/how-much-does-fractional-cto-cost-uk/` and `/blog/when-to-hire-fractional-cto/` |
| Bing Webmaster Tools | Account created with the owner's Google sign-in; codenest.uk imported from GSC (homelabflix.co.uk deliberately left out); sitemap submitted |

The merge with `master` kept master's own Finance Director FAQ and hero copy (PR #102) over this
branch's version of the same.

Validated: `npm run build` passes (freshness gate included); the audit of `out/` shows one h1 per
page, unique self-canonicals, titles within budget, parseable JSON-LD; dropdown and mobile menu
checked in the browser at 1280px and 375px with no console errors.

---

## 13. Measurement

**Analytics: Cloudflare Web Analytics, already on.** Cookieless, so no consent banner under PECR;
`/privacy` now declares it. It currently excludes EU visitors; switching to full "Enable" would add
them, but the market is the UK, so it was left as found. GA4 remains the option if conversion
events or Google Ads integration are wanted, at the cost of a consent banner.

**Lead source:** add the landing page and referrer as hidden fields to the EmailJS payload, so
each enquiry arrives saying where it started. This is new personal-data collection: update
`/privacy` in the same change.

**KPIs and baseline:**

| KPI | Baseline (Nov 2026) | 90-day target | Source |
|---|---|---|---|
| Non-brand clicks (disclosed queries) | 0 in the last 3 months | 20 a month | GSC, query filter excluding "codenest" |
| Impressions / month | ~1,260 (3,770 over the last 3 months) | 2,500 | GSC |
| Indexed pages | 23 of 41 | 35 | GSC Indexing |
| Avg. position, "fractional cto services" | 18.3 (16 months) | ≤ 12 (last 3 months) | GSC |
| Avg. position, queries containing "fractional cfo", service page | 36.4 (last 3 months) | ≤ 20 (last 3 months) | GSC, page breakdown |
| Service page served for its head term | No (guides served) | Yes, both seats | GSC Pages tab per query |
| Linking sites | 8 | 15 | GSC Links |
| Organic enquiries / month | Unknown (not tracked) | Tracked | Lead source fields |
| Core Web Vitals | No field data | Pass when CrUX appears | GSC Experience |

These targets are judgement, not forecasts; link acquisition drives most of them.

**Cadence:** weekly, a five-minute GSC check (indexing errors, new queries in the top 20).
Monthly, the KPI table above, kept in this file's successor. Quarterly, re-run this audit.

---

## 14. Outstanding actions and dependencies

**Done 23 Nov 2026:** sitemap resubmitted; indexing requested for the two CTO posts; Bing set up;
Crawler Hints on; CTO duplicate consolidated and redirected; FD in the CFO title; analytics
declared in `/privacy`.

**Still open:**

1. **After this branch deploys:** request indexing in GSC for both retitled guides,
   `/services/fractional-cfo/` (new title) and `/guides/fractional-cto-vs-full-time/` (merged).
2. **CFO case study (Noodle+Kin).** Needs the facts from Michelle: the brief, what she built or
   changed, and any outcome the client will let us publish. No figure goes up without them
   (BRANDING §2.2, §13.29).
3. **Lead source on enquiries** (section 13): hidden landing-page and referrer fields in EmailJS,
   with the `/privacy` update in the same change.
4. The link outreach in section 9 needs the principals' own voices.

**Optional:** a Google Ads account would unlock Keyword Planner volumes, replacing the buckets in
section 3.

---

## 15. 90-day roadmap

| Weeks | Work | Measurable outcome |
|---|---|---|
| 1-2 | Merge this branch; request indexing for the changed pages; add lead-source fields. (Sitemap, Bing, Crawler Hints, analytics disclosure: done 23 Nov.) | Changed pages recrawled; enquiries carry a source |
| 2-4 | On-page items 1-5 in section 7 (DD section, non-technical founder block, startup CFO, outsourced CFO guide, conversational FAQ answers). Owner decision on the FD title. | All P1 on-page items shipped |
| 3-6 | Link outreach wave 1: the four listicles, the FD directory, existing directory listings, client partner links, Clutch. | +5 referring domains |
| 4-8 | FD terminology guide; 13-week cash flow forecast with template. | Two P1 pieces live and linked from the CFO page |
| 6-10 | Outreach wave 2: UKBAA, ACCA, accelerators for the two tools, one podcast each. Noodle+Kin CFO case study. | +4 referring domains; CFO proof page |
| 10-12 | Re-run this audit; compare against the KPI table; reprioritise. | Indexed ≥ 35; service pages served for their head terms |
