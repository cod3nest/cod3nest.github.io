# Codenest — Fractional CTO & Fractional CFO for UK Startups

Source for [codenest.uk](https://codenest.uk), the site for a UK consultancy offering two
executive seats to pre-seed to Series A founders — **Fractional CTO** and **Fractional
CFO** — each engageable on its own.

**Working on this repo? Read [`AGENTS.md`](AGENTS.md) first.** It carries the rules that
are not obvious from the code: where documentation goes, the brand law, and the things
that fail silently. `CLAUDE.md` is a symlink to it, so every tool reads the same file.

## The two tracks

| Fractional CTO | Fractional CFO |
|---|---|
| Architecture and engineering leadership | FP&A and financial modelling |
| 0→1 product builds | Fundraising and investor reporting |
| Infrastructure, IaC and GitOps | Runway, unit economics and controls |
| Technical due diligence | Board-level reporting |

Each seat is named to its own principal: Ankit Rana is the Fractional CTO, Michelle Rana
FCCA the Fractional CFO. See [`docs/BRANDING.md`](docs/BRANDING.md) before writing any
copy.

## Stack

- Next.js 15 (App Router), React 19, Tailwind CSS
- Static export (`output: 'export'`) to GitHub Pages
- Markdown blog via `react-markdown` + `remark-gfm`
- EmailJS for the contact, referral and calculator forms

## Development

Requires Node.js 20 (the version CI builds with).

```bash
npm install
npm run dev              # http://localhost:3000
npm run build            # static export into out/
npm run check:freshness  # content freshness gate on its own
```

There is no test suite and no lint step. `npm run build` is the only automated gate —
see the Definition of Done in [`AGENTS.md`](AGENTS.md) for what it does not cover.

### Environment variables

`.env` is **committed deliberately** and holds the EmailJS configuration:

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

All three are `NEXT_PUBLIC_`, so they are compiled into the client bundle and served to
every visitor regardless — committing them exposes nothing the published site does not
already publish.

`.gitignore` also lists `.env`, which has no effect on a file already tracked. **Do not
"fix" that by running `git rm --cached .env`:** the build still succeeds, and every form
on the site silently stops sending. If the keys should move, move them into the deploy
workflow's environment in the same change.

## Deployment

Automatic. `.github/workflows/deploy.yml` builds and uploads `out/` as a Pages artifact
on **every push to `master`** — there is no manual step and no `gh-pages` branch. Branch
and open a PR; do not commit to `master`.

The workflow checks out with `fetch-depth: 0` because `app/sitemap.js` reads per-file
commit dates for `<lastmod>`; a shallow clone would stamp every URL with the same date.

The custom domain lives in `public/CNAME`, so it is copied into `out/` and travels with
the artifact. It previously sat at the repository root, where the workflow never saw it —
the binding held only because it was also set in the repository's Pages settings, in one
place, undocumented and unversioned.

Never copy `out/` back over the repository root. Build output at the root is not served —
the workflow only ever publishes `out/` — so it silently rots. The root previously held a
six-URL `sitemap.xml` against the real thirty-six, and a duplicate `manifest.json` with
the wrong description.

## Layout

Directories only. An earlier version of this section listed individual components and was
years out of date within months; directories change far less than files do.

```
app/         Routes, layouts and components (App Router)
content/     Blog posts as markdown with frontmatter
docs/        All documentation: brand law, reviews, agent instructions
lib/         Shared helpers (blog loading, date formatting)
public/      Static assets served verbatim
scripts/     Build-time generators and the content freshness gate
```

## Contact

[codenest.uk](https://codenest.uk) or hello@codenest.uk.

---

© 2026 Codenest. All rights reserved.
