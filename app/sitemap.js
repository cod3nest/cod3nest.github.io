import { getAllBlogPosts } from '../lib/blog'
import fs from 'fs'
import path from 'path'

// Required for static export (GitHub Pages)
export const dynamic = 'force-static'

const BASE_URL = 'https://codenest.uk'

// Helper to get file modification date
function getFileModDate(filePath) {
  try {
    const stats = fs.statSync(filePath)
    return stats.mtime
  } catch {
    return new Date()
  }
}

// Helper to scan directory for page.js files (including the directory's own index page)
function scanPages(dir) {
  const pages = []
  const appDir = path.join(process.cwd(), 'app')
  const fullDir = path.join(appDir, dir)

  if (!fs.existsSync(fullDir)) return pages

  const indexPage = path.join(fullDir, 'page.js')
  if (fs.existsSync(indexPage)) {
    pages.push({
      route: `/${dir}`,
      modDate: getFileModDate(indexPage)
    })
  }

  const items = fs.readdirSync(fullDir)

  for (const item of items) {
    const itemPath = path.join(fullDir, item)
    const stat = fs.statSync(itemPath)

    if (stat.isDirectory()) {
      // Skip special Next.js directories
      if (item.startsWith('_') || item.startsWith('[') || item === 'components') continue

      const pageFile = path.join(itemPath, 'page.js')
      if (fs.existsSync(pageFile)) {
        pages.push({
          route: `/${dir}/${item}`,
          modDate: getFileModDate(pageFile)
        })
      }
    }
  }

  return pages
}

// trailingSlash: true is set in next.config.js, so the canonical form of every
// non-root URL ends with a slash; the sitemap must match to avoid listing redirects.
function withSlash(route) {
  return `${BASE_URL}${route}/`
}

export default function sitemap() {
  const now = new Date()
  const blogPosts = getAllBlogPosts()

  // ============================================
  // CORE PAGES (highest priority)
  // ============================================
  const corePages = [
    {
      url: BASE_URL,
      lastModified: getFileModDate(path.join(process.cwd(), 'app/page.js')),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ]

  // ============================================
  // SERVICE PAGES (high priority - money pages)
  // ============================================
  const servicePages = scanPages('services').map(({ route, modDate }) => ({
    url: withSlash(route),
    lastModified: modDate,
    changeFrequency: 'weekly',
    priority: 0.95,
  }))

  // ============================================
  // GUIDE PAGES (high priority - SEO content)
  // ============================================
  const guidePages = scanPages('guides').map(({ route, modDate }) => ({
    url: withSlash(route),
    lastModified: modDate,
    changeFrequency: 'monthly',
    priority: 0.85,
  }))

  // ============================================
  // TOOL PAGES (medium-high priority - interactive)
  // ============================================
  const toolPages = scanPages('tools').map(({ route, modDate }) => ({
    url: withSlash(route),
    lastModified: modDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // ============================================
  // BLOG (index + posts)
  // ============================================
  const blogIndex = {
    url: withSlash('/blog'),
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.9,
  }

  const blogPages = blogPosts.map((post) => ({
    url: withSlash(`/blog/${post.slug}`),
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // ============================================
  // OTHER PAGES (medium priority)
  // ============================================
  const otherPages = [
    {
      url: withSlash('/case-studies'),
      lastModified: getFileModDate(path.join(process.cwd(), 'app/case-studies/page.js')),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: withSlash('/contact'),
      lastModified: getFileModDate(path.join(process.cwd(), 'app/contact/page.js')),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: withSlash('/about'),
      lastModified: getFileModDate(path.join(process.cwd(), 'app/about/page.js')),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: withSlash('/cofounder'),
      lastModified: getFileModDate(path.join(process.cwd(), 'app/cofounder/page.js')),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: withSlash('/refer'),
      lastModified: getFileModDate(path.join(process.cwd(), 'app/refer/page.js')),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]

  return [
    ...corePages,
    ...servicePages,
    ...guidePages,
    ...toolPages,
    blogIndex,
    ...blogPages,
    ...otherPages,
  ]
}
