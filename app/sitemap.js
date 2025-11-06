import { getAllBlogPosts } from '../lib/blog'

// Required for static export (GitHub Pages)
export const dynamic = 'force-static'

export default function sitemap() {
  const blogPosts = getAllBlogPosts()

  // Static pages
  const staticPages = [
    {
      url: 'https://codenest.uk',
      lastModified: new Date('2024-11-06'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://codenest.uk/#case-studies',
      lastModified: new Date('2024-11-05'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://codenest.uk/#services',
      lastModified: new Date('2024-11-05'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://codenest.uk/#approach',
      lastModified: new Date('2024-11-05'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://codenest.uk/#about',
      lastModified: new Date('2024-11-05'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://codenest.uk/#contact',
      lastModified: new Date('2024-11-05'),
      changeFrequency: 'monthly',
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
