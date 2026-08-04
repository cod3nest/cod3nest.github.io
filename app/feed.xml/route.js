import { getAllBlogPosts } from '../../lib/blog'
import { BASE_URL } from '../../lib/schema'

// Required for static export (GitHub Pages) — same reason as app/sitemap.js.
export const dynamic = 'force-static'

function escapeXml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export function GET() {
  const posts = getAllBlogPosts()
  const lastBuild = posts.length ? new Date(posts[0].date) : new Date(0)

  const items = posts
    .map((post) => {
      const url = `${BASE_URL}/blog/${post.slug}/`
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(post.description || '')}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <dc:creator>${escapeXml(post.author || 'Codenest')}</dc:creator>
${(post.tags || []).map((tag) => `      <category>${escapeXml(tag)}</category>`).join('\n')}
    </item>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Codenest Blog</title>
    <link>${BASE_URL}/blog/</link>
    <description>Practical guidance for UK startup founders on technical leadership, startup finance, fundraising, and scaling from 0 to 1.</description>
    <language>en-GB</language>
    <lastBuildDate>${lastBuild.toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  })
}
