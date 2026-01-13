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

// Helper to scan directory for page.js files
function scanPages(dir) {
  const pages = []
  const appDir = path.join(process.cwd(), 'app')
  const fullDir = path.join(appDir, dir)

  if (!fs.existsSync(fullDir)) return pages

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
    url: `${BASE_URL}${route}`,
    lastModified: modDate,
    changeFrequency: 'weekly',
    priority: 0.95,
  }))

  // ============================================
  // GUIDE PAGES (high priority - SEO content)
  // ============================================
  const guidePages = scanPages('guides').map(({ route, modDate }) => ({
    url: `${BASE_URL}${route}`,
    lastModified: modDate,
    changeFrequency: 'monthly',
    priority: 0.85,
  }))

  // ============================================
  // TOOL PAGES (medium-high priority - interactive)
  // ============================================
  const toolPages = scanPages('tools').map(({ route, modDate }) => ({
    url: `${BASE_URL}${route}`,
    lastModified: modDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // ============================================
  // BLOG (index + posts)
  // ============================================
  const blogIndex = {
    url: `${BASE_URL}/blog`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.9,
  }

  const blogPages = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // ============================================
  // OTHER PAGES (medium priority)
  // ============================================
  const otherPages = [
    {
      url: `${BASE_URL}/about`,
      lastModified: getFileModDate(path.join(process.cwd(), 'app/about/page.js')),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/cofounder`,
      lastModified: getFileModDate(path.join(process.cwd(), 'app/cofounder/page.js')),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/refer`,
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
