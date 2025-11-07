import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const blogDirectory = path.join(process.cwd(), 'content/blog')

export function getAllBlogSlugs() {
  const fileNames = fs.readdirSync(blogDirectory)
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => fileName.replace(/\.md$/, ''))
}

export function getBlogPost(slug) {
  const fullPath = path.join(blogDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Parse frontmatter
  const { data, content } = matter(fileContents)

  return {
    slug,
    content,
    ...data
  }
}

export function getAllBlogPosts() {
  const slugs = getAllBlogSlugs()
  const posts = slugs.map(slug => getBlogPost(slug))

  // Sort posts by date (newest first)
  return posts.sort((a, b) => {
    return new Date(b.date) - new Date(a.date)
  })
}
