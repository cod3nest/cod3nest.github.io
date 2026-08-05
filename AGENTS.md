# Codenest Consultancy Website

Next.js site for GitHub Pages deployment.

**This file is the single source of instruction for every AI tool and every human.**
It is `AGENTS.md` because that is the cross-tool standard — Codex, Cursor, Copilot,
Windsurf, Aider, Zed and others read it natively. `CLAUDE.md` is a symlink to this
file, because Claude Code does not read `AGENTS.md` yet; a symlink rather than a copy
so the two can never drift. Adding another tool means another symlink, not another set
of rules.

Keep this file short. Detail belongs in `docs/`, referenced from here and read on
demand — every word here is loaded into every session, by every tool.

## Where things go

**All documentation goes in `docs/`.** Anything you write — a review, a plan, a
runbook, an investigation, a design note, a handover — is created there. Not at the
repo root, not beside the code it describes, not in a tool's own directory. The three
root entry points below are the only exceptions; a new `.md` file is never one of them,
so it goes in `docs/`.

| Path | Holds |
|---|---|
| `AGENTS.md`, `CLAUDE.md`, `README.md` | The only documentation at the repo root. Entry points, found without looking. |
| `docs/BRANDING.md` | Brand law. Has a section index — read the sections your change touches, not all of it. |
| `docs/agents/` | Instructions too long for this file, read on demand. |
| `docs/` | Everything else written for humans: reviews, plans, notes. |
| `.claude/` | Claude Code runtime config (`launch.json`, `settings.local.json`). Never instructions — they would be invisible to every other tool. |

## Commands

```bash
npm run dev              # local dev server
npm run build            # prebuild (freshness gate + OG cards), then static export to out/
npm run check:freshness  # the gate on its own
```

There is no test suite and no lint step, here or in CI. `npm run build` is the only
automated gate, which is why the Definition of Done below is manual.

**Branch and open a PR. Never commit to `master` — pushing to it deploys the live
site** (`.github/workflows/deploy.yml`).

## Quick Reference

- **Stack**: Next.js (App Router), Tailwind CSS, GitHub Pages
- **Deploy**: `output: 'export'` in next.config.js, `.nojekyll` file
- **Audience**: Startup founders (0→1 journey)
- **Tone**: Professional, technical, no emojis. British English.
- **Two principals, two seats**: Ankit Rana is the Fractional CTO; Michelle Rana FCCA
  is the Fractional CFO. Never attribute one's track record to the other, in copy or
  in schema (BRANDING §13.14). This is the site's core differentiator and the easiest
  factual error to make.
- **Brand**: `docs/BRANDING.md` is the canonical brand law — service naming,
  taglines, voice, colour/contrast rules, CTA label, claims policy. Read its section
  index, then the sections you need, BEFORE any copy, design, metadata, or component
  change. Services are always named "Fractional CTO" and "Fractional CFO".
- **Blog**: every post carries at least one visual, and it should be a diagram, not a
  photograph (BRANDING §7). Read `docs/agents/blog-authoring.md` BEFORE writing or
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
