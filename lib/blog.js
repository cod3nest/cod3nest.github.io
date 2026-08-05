import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const blogDirectory = path.join(process.cwd(), 'content/blog')

// A post is a lowercase-kebab .md file, because its filename becomes the URL slug.
// A bare `.md` filter publishes anything else dropped in here — a README, a notes
// file — as a live post with no title and no date, onto the index, the sitemap and
// the RSS feed, without erroring.
export const isPostFile = (fileName) => /^[a-z0-9-]+\.md$/.test(fileName)

export function getAllBlogSlugs() {
  const fileNames = fs.readdirSync(blogDirectory)
  return fileNames
    .filter(isPostFile)
    .map(fileName => fileName.replace(/\.md$/, ''))
}

export function getBlogPost(slug) {
  const fullPath = path.join(blogDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Parse frontmatter
  const { data, content } = matter(fileContents)

  // The page template renders its own <h1> from the title; drop a leading
  // markdown H1 so posts don't ship two identical h1 elements.
  const body = content.replace(/^\s*#\s+.+\n/, '')

  return {
    slug,
    content: body,
    ...data
  }
}

// Three date fields, three different jobs. They are not interchangeable, and
// conflating them is how the index ended up ordering itself alphabetically.
//
//   date         When the post was FIRST published. Write it once. Never move it
//                — not for a typo, not for a rewrite. It is `datePublished`.
//   updated      When the content was last substantively changed. Optional. It is
//                `dateModified`, and it is what a rewrite moves.
//   lastVerified When a human last checked the post's expiring facts against
//                source (see scripts/check-content-freshness.js). It is neither
//                of the above and never reaches the page: re-checking a tax rate
//                is not a content change.
//
// `date` used to absorb all three. Six posts had it overwritten on rewrite —
// gitops, infrastructure-as-code, kubernetes and terraform all went 2025-11-07 →
// 2026-08-05 — which left ten of twenty posts sharing two dates, told Google a
// 2025 post was published today, and made the sort below a tie for half the
// index. (Site review, 5 Aug 2026.)
export function publishedAt(post) {
  return post.date
}

export function modifiedAt(post) {
  return post.updated || post.date
}

export function getAllBlogPosts() {
  const slugs = getAllBlogSlugs()
  const posts = slugs.map(slug => getBlogPost(slug))

  // Newest activity first, so a substantive rewrite resurfaces. Ties break on
  // slug rather than falling through to readdir order — which is what actually
  // decided the top of the index while ten posts shared two dates.
  return posts.sort((a, b) => {
    const delta = new Date(modifiedAt(b)) - new Date(modifiedAt(a))
    return delta !== 0 ? delta : a.slug.localeCompare(b.slug)
  })
}
