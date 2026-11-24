# Plan: the ten posts Google crawled but did not index

24 November 2026. Merging or deleting a post needs the owner's yes, post by post.

## Decided 24 Nov 2026 (owner asked for the best approach on both)

- **`when-to-hire-fractional-cto`: merged** into `/guides/fractional-cto-guide/#when-to-hire`.
  All seven signals, the "when it isn't right" section and the `cto-triggers` diagram moved;
  the diagram now plots all seven. The post's unsourced cost table and "60-80% less" claim
  were dropped. The post and its OG card are deleted, the service page link is repointed,
  and a Cloudflare 301 is needed (see "How a merge is done here").
- **Infrastructure cluster: kept, not merged.** The premise below, that these posts are
  "written for engineers", was wrong. All four were rewritten for founders on 5 Aug 2026,
  are tagged `Non-Technical Founders`, and each answers a separate decision with its own
  diagram. Merging would have destroyed good content to fix a link-weight problem. Instead
  the two unindexed ones gained contextual links. Before this, GitOps had none at all
  beyond the blog index. The new links come from:
  - the Series A guide
  - the CTO service page
  - the due diligence checklist post
  - each other
- **Re-check on or after 5 January 2027** as below. Consider `noindex` only if they are
  still unindexed after that.

## The problem

GSC reports 13 URLs as "Crawled, currently not indexed" (`docs/SEO_STRATEGY_2026-11-23.md` §2.3).
Three are slashless redirect history, so the real problem is ten posts. Google read them and
chose not to keep them.

On a site with about ten backlinks, the usual cause is low authority and few internal links,
not bad writing. The 23 Nov branch already added internal links to the cost and when-to-hire
posts. **Wait for the effect of those links before cutting anything.** Re-check GSC on or after
**5 January 2027**, six weeks after that merge.

Two weaker signals are within our control:

- **Overlap.** Some posts answer the same question as a guide that is indexed, so Google keeps
  one of the two and drops the other.
- **Off-audience.** The infrastructure posts are written for engineers. The buyer is a founder.

## Post by post

| Post | Words | Overlaps with | Recommendation |
|---|---|---|---|
| `how-much-does-fractional-cto-cost-uk` | 993 | CTO guide, cost section | **Keep and deepen.** It is the only CTO cost page and has impressions (37, position 21) for "fractional cto cost uk". It needs to be the fuller answer: day-rate drivers, what changes the price and what a founder gets at each level, without publishing Codenest prices (§13.24). Then trim the guide's cost section to a summary that links here. |
| `when-to-hire-fractional-cto` | 859 | CTO guide, "when you need one" | **Merge into the CTO guide**, then 301 it to `/guides/fractional-cto-guide/`. It is the shortest post on the site, and the guide already covers the question. |
| `fractional-cfo-vs-accountant-vs-controller` | 1,656 | CFO guide ("how they differ from accountants") | **Keep, retitle** to the comparison searchers type ("accountant vs fractional CFO"), and make the guide link here rather than repeat it. |
| `seis-eis-tax-benefits-startup-investors` | 1,549 | none | **Keep, refresh.** Distinct UK topic with lasting demand. Verify every figure against HMRC, set `lastVerified`, and link it from the CFO service page's fundraising section. |
| `startup-unit-economics-explained` | 1,277 | none | **Keep.** Link from the runway calculator and the financial modelling post. |
| `how-cfos-use-ai-startup-finance` | 2,548 | none | **Keep, tighten.** The longest post; check it still answers one question rather than surveying tools. |
| `non-technical-founder-hiring-developers` | 1,233 | CTO guide FAQ added 24 Nov (non-technical founders) | **Keep.** Link it from that new FAQ answer; it is the deep dive the FAQ points to. |
| `mvp-vs-mlp-what-to-build-first` | 1,312 | none | **Keep.** Link from the CTO service page's MVP section. |
| `kubernetes-startups-overkill-essential` | 1,317 | the other three infra posts | **Consolidate** (see below). |
| `gitops-startup-deployment-github-actions` | 1,438 | the other three infra posts | **Consolidate** (see below). |

### The infrastructure cluster

*Superseded by the decision above: kept and linked, not merged.*

`kubernetes-startups-overkill-essential`, `gitops-startup-deployment-github-actions`,
`infrastructure-as-code-for-startups` and `terraform-aws-infrastructure-as-code` total about
5,850 words. (The original claim here, that they are written for engineers, was wrong.) The two indexed ones (IaC, Terraform) bring little
founder traffic either.

Options:

1. **Merge into one founder-level guide** (recommended): "Startup infrastructure: what you need
   at seed, and what can wait". It keeps the reasoning and drops the step-by-step code. 301 all
   four URLs to it. This fits the audience and the due diligence story, because investors ask
   whether the infrastructure can be rebuilt from code.
2. **Keep as-is and `noindex` the two unindexed ones.** Cheap, but it leaves two engineer-facing
   posts on a founder site.
3. **Leave alone.** The engineering depth supports the Fractional CTO's credibility, even unindexed.

## How a merge is done here

Follow the precedent in `docs/SEO_STRATEGY_2026-11-23.md` (the merged CTO vs full-time post):

- Move the content into the target page.
- Delete the post file.
- Add a Cloudflare Single Redirect (301) from the old URL to the target, trailing slash
  included.
- Check the sitemap no longer lists the old URL.

GitHub Pages cannot redirect on its own, so the Cloudflare rule is the step that cannot be
skipped.

## Order

1. **Done 24 Nov 2026.** The zero-risk links. Link the non-technical founder post from the new FAQ, and SEIS/EIS
   from the CFO service page.
2. 5 January 2027: re-check GSC. Act only on posts still unindexed.
3. With owner approval: deepen the CTO cost post; merge `when-to-hire-fractional-cto`.
4. With owner approval: the infrastructure decision (option 1, 2 or 3).

## Decisions needed from the owner

None open. Both were decided on 24 Nov 2026 (above).
