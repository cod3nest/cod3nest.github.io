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

  // The page template renders its own <h1> from the title; drop a leading
  // markdown H1 so posts don't ship two identical h1 elements.
  const body = content.replace(/^\s*#\s+.+\n/, '')

  return {
    slug,
    content: body,
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
