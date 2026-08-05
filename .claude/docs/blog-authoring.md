# Writing and editing blog posts

Read this before writing or editing anything in `content/blog/`. Brand law is
`BRANDING.md` (repo root): §2 voice, §7 imagery, §8 blog metadata, §12 content
strategy.

## Every post carries at least one visual

A prose-only post ships incomplete. Default to a **diagram**, not a photograph:
BRANDING §7 reserves photography for the hero and case studies, and there is no real
photograph of a blog post. Never buy an abstract-technology stock image for one.

The diagram must carry **that post's own argument** — the mechanism the prose is
explaining. If it only restates a table already on the page, cut it and write a better
one. Place it in the section it explains, not at the end as decoration.

### Adding one

Write the marker on its own line, **with a blank line either side**:

```
[diagram:cac-payback]
```

Names are `[a-z0-9-]+` and must exist in `app/components/diagrams/registry.js`. An
unknown name **fails the build** — there is no silent fallback.

A new diagram is *data*, not markup. Add a registry entry using one of the six shapes
in `app/components/diagrams/shapes.js` — `Flow`, `Cycle`, `Stack`, `Split`, `Timeline`,
`Curve`. Never hand-draw an SVG: the shapes hold the brand rules (stroke 2, brand
colours, one type scale) and emit the `role`/`title`/`desc` an SVG needs to be
announced as anything at all.

**Colour is meaning, not variety.** `trackName` is `technical` (charcoal) or
`financial` (gold) and matches the post's track. Inside a `Split`, only the
recommended column takes `emphasis: true`; the rest stay neutral. Colouring columns
decoratively once put gold — the financial accent — on "AWS CDK" in a technical post,
which asserts something untrue.

## Frontmatter

| Field | Meaning |
|---|---|
| `date` | First published. **Write once** — bumping it destroys the publication date. |
| `updated` | Optional. Drives `dateModified` and the visible "Updated" line. |
| `lastVerified` | When a human checked the facts against source. Never rendered. |
| `verifyEvery` | Months before re-checking (default 12). Never rendered. |
| `tags` | Route the post's CTA **and** its OG card colour to the CTO or CFO track. |

OG cards are generated per post from the slug in `prebuild` — a new post gets one
automatically; a retitled post needs a rebuild so its card is not stale.

## Fails silently — nothing errors, it just renders wrong

- **Raw HTML or SVG in a `.md` file is stripped.** There is no `rehype-raw` in the
  pipeline, so `<img>`, `<svg>` and `<div>` vanish without a warning. This is why
  diagrams are markers, not markup.
- **A marker without blank lines around it renders as the literal text
  `[diagram:foo]`.** It has to be its own paragraph.
- **Overwriting `date`** silently loses the publication date; only git history has it.
- **A stale `lastVerified` fails the build** through the `prebuild` freshness gate.

## Before you finish

- `npm run build` — runs the freshness gate and regenerates every OG card.
- British English throughout (modelling, organise, optimise) — but **never reword a
  client testimonial**, spelling included (BRANDING §13.12).
- Claims need attribution or they come out (BRANDING §2).
