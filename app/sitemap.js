import { getAllBlogPosts } from '../lib/blog'

// Required for static export (GitHub Pages)
export const dynamic = 'force-static'

export default function sitemap() {
  const blogPosts = getAllBlogPosts()

  // Static pages - only real URLs (no hash fragments, Google ignores them)
  const staticPages = [
    {
      url: 'https://codenest.uk',
      lastModified: new Date('2025-01-10'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://codenest.uk/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  // Dynamic blog posts
  const blogPages = blogPosts.map((post) => ({
    url: `https://codenest.uk/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...staticPages, ...blogPages]
}
