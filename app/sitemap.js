import { getAllBlogPosts } from '../lib/blog'
import fs from 'fs'
import path from 'path'
import { execFileSync } from 'child_process'

// Required for static export (GitHub Pages)
export const dynamic = 'force-static'

const BASE_URL = 'https://codenest.uk'

// Last-modified dates come from git, not the filesystem. A CI checkout writes every
// file at clone time, so fs.statSync would stamp all 36 URLs with the build timestamp
// and tell Google the whole site changed on every deploy — which is how a sitemap
// teaches a crawler to ignore its own lastmod values.
//
// Accurate per-file history needs the full history in CI (`fetch-depth: 0` in
// .github/workflows/deploy.yml). Under a shallow clone git still answers, just with
// the same commit date for everything; the mtime fallback only fires outside git.
const gitDateCache = new Map()

function getGitModDate(filePath) {
  if (gitDateCache.has(filePath)) return gitDateCache.get(filePath)

  let result
  try {
    const iso = execFileSync('git', ['log', '-1', '--format=%cI', '--', filePath], {
      cwd: process.cwd(),
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim()
    result = iso ? new Date(iso) : getFileModDate(filePath)
  } catch {
    result = getFileModDate(filePath)
  }

  gitDateCache.set(filePath, result)
  return result
}

function getFileModDate(filePath) {
  try {
    return fs.statSync(filePath).mtime
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
      modDate: getGitModDate(indexPage)
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
          modDate: getGitModDate(pageFile)
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
  const blogPosts = getAllBlogPosts()

  // ============================================
  // CORE PAGES (highest priority)
  // ============================================
  const corePages = [
    {
      url: `${BASE_URL}/`,
      lastModified: getGitModDate(path.join(process.cwd(), 'app/page.js')),
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
  // getAllBlogPosts sorts newest-first, so the index genuinely last changed when the
  // most recent post landed. Stamping it with the build clock would make it look
  // freshly updated on every deploy.
  const blogPages = blogPosts.map((post) => ({
    url: withSlash(`/blog/${post.slug}`),
    lastModified: new Date(post.updated || post.date),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const blogIndex = {
    url: withSlash('/blog'),
    lastModified: blogPages.length
      ? new Date(Math.max(...blogPages.map((p) => p.lastModified.getTime())))
      : getGitModDate(path.join(process.cwd(), 'app/blog/page.js')),
    changeFrequency: 'weekly',
    priority: 0.9,
  }

  // ============================================
  // OTHER PAGES (medium priority)
  // ============================================
  const otherPages = [
    {
      url: withSlash('/case-studies'),
      lastModified: getGitModDate(path.join(process.cwd(), 'app/case-studies/page.js')),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: withSlash('/contact'),
      lastModified: getGitModDate(path.join(process.cwd(), 'app/contact/page.js')),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: withSlash('/about'),
      lastModified: getGitModDate(path.join(process.cwd(), 'app/about/page.js')),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: withSlash('/cofounder'),
      lastModified: getGitModDate(path.join(process.cwd(), 'app/cofounder/page.js')),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: withSlash('/refer'),
      lastModified: getGitModDate(path.join(process.cwd(), 'app/refer/page.js')),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: withSlash('/privacy'),
      lastModified: getGitModDate(path.join(process.cwd(), 'app/privacy/page.js')),
      changeFrequency: 'yearly',
      priority: 0.3,
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
