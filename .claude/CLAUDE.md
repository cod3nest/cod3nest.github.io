# Codenest Consultancy Website

Next.js site for GitHub Pages deployment.

## Quick Reference

- **Stack**: Next.js (App Router), Tailwind CSS, GitHub Pages
- **Deploy**: `output: 'export'` in next.config.js, `.nojekyll` file
- **Audience**: Startup founders (0→1 journey)
- **Tone**: Professional, technical, no emojis
- **Brand**: `BRANDING.md` (repo root) is the canonical brand law — service naming,
  taglines, voice, colour/contrast rules, CTA label, claims policy. Read its section
  index, then the sections you need, BEFORE any copy, design, metadata, or component
  change. Services are always named "Fractional CTO" and "Fractional CFO".
- **Blog**: every post carries at least one visual, and it should be a diagram, not a
  photograph (BRANDING §7). Read `.claude/docs/blog-authoring.md` BEFORE writing or
  editing a post — it holds the diagram mechanism, the frontmatter date contract, and
  the traps that fail silently.

## Fails Silently

Nothing below errors — it ships looking wrong:

- Raw HTML/SVG in `content/blog/*.md` is **stripped** (no `rehype-raw`).
- Page `title` must NOT contain "| Codenest" — the template appends it.
- Canonicals and sitemap URLs carry a trailing slash (`trailingSlash: true`).
- A stale `lastVerified` in a post **fails the build** via `prebuild`.

## Definition of Done

- [ ] `npm run build` passes (runs the freshness gate, regenerates OG cards)
- [ ] No horizontal overflow at 375px
- [ ] Text contrast ≥ 4.5:1 (3:1 for large text and graphics)
- [ ] One h1 carrying the page's target term; meta + OG tags present
