/**
 * Content freshness check.
 *
 * Some posts rest on facts that expire: UK tax rates, statutory thresholds,
 * market rate bands, third-party product terms. Nothing breaks when they go
 * stale. The build passes, the page renders, and the numbers are quietly wrong
 * on a site whose whole positioning is that its claims survive scrutiny.
 *
 * A post opts in by declaring how long its facts stay trustworthy:
 *
 *   lastVerified: '2026-08-05'   # when a human last checked the facts
 *   verifyEvery: 6              # months before it needs checking again
 *
 * `lastVerified` means someone actually confirmed the numbers against source.
 * It is not the publish date and it is not the date the file was last edited:
 * fixing a typo does not re-verify a tax rate. Only move it when you have
 * genuinely re-checked.
 *
 * Runs as a prebuild hook, so it reports before the Next.js output rather than
 * scrolling past underneath it. Warns by default; pass --strict to fail the
 * build instead (intended for CI).
 */

const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const BLOG_DIR = path.join(process.cwd(), 'content/blog')
const DEFAULT_VERIFY_EVERY_MONTHS = 12
const STRICT = process.argv.includes('--strict')

// Warn ahead of the deadline so a review can be scheduled rather than discovered.
const DUE_SOON_DAYS = 30

const RED = '\x1b[31m'
const YELLOW = '\x1b[33m'
const DIM = '\x1b[2m'
const BOLD = '\x1b[1m'
const RESET = '\x1b[0m'

function monthsAfter(date, months) {
  const due = new Date(date)
  due.setMonth(due.getMonth() + months)
  return due
}

function daysBetween(from, to) {
  return Math.round((to - from) / (1000 * 60 * 60 * 24))
}

function readPosts() {
  if (!fs.existsSync(BLOG_DIR)) return []

  return fs
    .readdirSync(BLOG_DIR)
    // Posts are lowercase-kebab (the filename is the slug); any other .md dropped in
    // here is not content and must not be gated. Kept in step with `isPostFile` in
    // lib/blog.js.
    .filter((file) => /^[a-z0-9-]+\.md$/.test(file))
    .map((file) => {
      const { data } = matter(fs.readFileSync(path.join(BLOG_DIR, file), 'utf8'))
      return { slug: file.replace(/\.md$/, ''), frontmatter: data }
    })
}

function assess(post, now) {
  const { lastVerified, verifyEvery } = post.frontmatter
  if (!lastVerified) return null

  const verifiedAt = new Date(lastVerified)
  if (Number.isNaN(verifiedAt.getTime())) {
    return { ...post, state: 'invalid', detail: `lastVerified is not a date: ${lastVerified}` }
  }

  const months = Number(verifyEvery) || DEFAULT_VERIFY_EVERY_MONTHS
  const dueAt = monthsAfter(verifiedAt, months)
  const daysRemaining = daysBetween(now, dueAt)

  if (daysRemaining < 0) {
    return { ...post, state: 'overdue', days: Math.abs(daysRemaining), dueAt, months }
  }
  if (daysRemaining <= DUE_SOON_DAYS) {
    return { ...post, state: 'due-soon', days: daysRemaining, dueAt, months }
  }
  return { ...post, state: 'fresh', days: daysRemaining, dueAt, months }
}

function formatDate(date) {
  return date.toISOString().slice(0, 10)
}

function main() {
  const now = new Date()
  const tracked = readPosts()
    .map((post) => assess(post, now))
    .filter(Boolean)

  if (tracked.length === 0) {
    console.log(`${DIM}Content freshness: no posts declare lastVerified.${RESET}`)
    return
  }

  const invalid = tracked.filter((p) => p.state === 'invalid')
  const overdue = tracked.filter((p) => p.state === 'overdue')
  const dueSoon = tracked.filter((p) => p.state === 'due-soon')
  const fresh = tracked.filter((p) => p.state === 'fresh')

  for (const post of invalid) {
    console.log(`${RED}${BOLD}  INVALID${RESET} ${post.slug} — ${post.detail}`)
  }

  if (overdue.length > 0) {
    console.log('')
    console.log(`${RED}${BOLD}  Content freshness: ${overdue.length} post(s) overdue for fact-checking${RESET}`)
    for (const post of overdue) {
      console.log(
        `${RED}    ${post.slug}${RESET}\n` +
          `${DIM}      last verified ${formatDate(new Date(post.frontmatter.lastVerified))}, ` +
          `due ${formatDate(post.dueAt)} (${post.months}-month cycle), ${post.days} days overdue${RESET}`
      )
    }
    console.log(
      `${DIM}    Re-check the facts against source, then move lastVerified. ` +
        `Do not bump the date without checking.${RESET}`
    )
    console.log('')
  }

  for (const post of dueSoon) {
    console.log(
      `${YELLOW}  DUE SOON${RESET} ${post.slug} ${DIM}— fact-check due ${formatDate(post.dueAt)} (${post.days} days)${RESET}`
    )
  }

  // Always state the denominator. "1 overdue" on its own hides whether the
  // other volatile posts are tracked at all or just never opted in.
  console.log(
    `${DIM}Content freshness: ${tracked.length} tracked post(s) — ` +
      `${fresh.length} fresh, ${dueSoon.length} due soon, ${overdue.length} overdue.${RESET}`
  )

  if (STRICT && (overdue.length > 0 || invalid.length > 0)) {
    console.error(`${RED}Failing build: --strict and ${overdue.length + invalid.length} post(s) need attention.${RESET}`)
    process.exit(1)
  }
}

main()
