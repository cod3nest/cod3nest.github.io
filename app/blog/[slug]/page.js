import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import Navigation from '../../components/Navigation'
import GiscusComments from '../../components/GiscusComments'
import { getBlogPost, getAllBlogSlugs } from '../../../lib/blog'
import 'highlight.js/styles/github-dark.css'

export function generateStaticParams() {
  const slugs = getAllBlogSlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getBlogPost(slug)
  const description = post.content.substring(0, 160).replace(/[#*\n]/g, ' ').trim()

  return {
    title: `${post.title} – Codenest Blog`,
    description: description,
    keywords: post.tags.join(', '),
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      url: `https://codenest.uk/blog/${slug}`,
      siteName: 'Codenest',
      locale: 'en_GB',
      images: [
        {
          url: '/img/companylogo.png',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: description,
      images: ['/img/companylogo.png'],
    },
    alternates: {
      canonical: `https://codenest.uk/blog/${slug}`,
    },
  }
}

export default async function BlogPost({ params }) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return <div>Post not found</div>
  }

  // Structured data for breadcrumbs
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://codenest.uk'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://codenest.uk/blog'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://codenest.uk/blog/${slug}`
      }
    ]
  }

  // Structured data for the article
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: post.title,
    description: post.content.substring(0, 160).replace(/[#*\n]/g, ' ').trim(),
    author: {
      '@type': 'Person',
      name: post.author,
      url: 'https://codenest.uk/#about'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Codenest',
      logo: {
        '@type': 'ImageObject',
        url: 'https://codenest.uk/img/companylogo.png'
      }
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://codenest.uk/blog/${slug}`
    },
    keywords: post.tags.join(', '),
    articleSection: 'Technology',
    inLanguage: 'en-GB'
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Navigation />

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/blog"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 font-medium"
        >
          ← Back to Blog
        </Link>

        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-3 py-1 bg-accent-100 text-primary-800 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-slate-600">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </time>
            <span>•</span>
            <span>{post.readTime}</span>
            <span>•</span>
            <span>{post.author}</span>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg prose-slate max-w-none
          prose-headings:font-bold prose-headings:text-slate-900
          prose-h1:text-4xl prose-h1:mb-8
          prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
          prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
          prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-6
          prose-a:text-primary-600 prose-a:no-underline hover:prose-a:text-primary-700 hover:prose-a:underline
          prose-strong:text-slate-900 prose-strong:font-semibold
          prose-code:text-primary-600 prose-code:bg-slate-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:rounded-xl prose-pre:overflow-x-auto
          prose-ul:my-6 prose-ol:my-6
          prose-li:text-slate-700 prose-li:my-2
          prose-blockquote:border-l-4 prose-blockquote:border-primary-500 prose-blockquote:pl-4 prose-blockquote:italic">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Author CTA */}
        <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Want help with your infrastructure?
          </h3>
          <p className="text-slate-600 mb-6">
            We help startups build production-grade systems using GitOps, Infrastructure as Code, and cloud-native platforms.
          </p>
          <a
            href="/#contact"
            className="inline-block bg-accent-500 text-primary-900 px-6 py-3 rounded-xl font-semibold hover:bg-accent-600 transition-all"
          >
            Book a Discovery Call
          </a>
        </div>
      </article>

      {/* Comments Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Comments</h2>
        <GiscusComments />
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <img
                src="/img/companylogo-light.svg"
                alt="Codenest - Fractional CTO and Startup Engineering Services"
                className="h-10 w-auto mb-4 company-logo"
              />
              <p className="text-slate-400 text-sm">
                Build a product that scales from day one — with automation-first engineering and cloud-native delivery.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/#case-studies" className="text-slate-400 hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="/#services" className="text-slate-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="/#how-we-work" className="text-slate-400 hover:text-white transition-colors">Our Process</a></li>
                <li><a href="/#about" className="text-slate-400 hover:text-white transition-colors">Our Story</a></li>
                <li><a href="/blog" className="text-slate-400 hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/#contact" className="text-slate-400 hover:text-white transition-colors">Book a Discovery Call</a></li>
                <li><a href="https://www.linkedin.com/company/codenest-ltd" className="text-slate-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-center">
            <p className="text-slate-500 text-sm">
              © 2025 Codenest. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
