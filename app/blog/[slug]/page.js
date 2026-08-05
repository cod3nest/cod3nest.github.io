import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import CusdisComments from '../../components/CusdisComments'
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
  const description = post.description || post.content.substring(0, 160).replace(/[#*\n]/g, ' ').trim()

  return {
    // The root layout template already appends "| Codenest"; a "– Codenest Blog"
    // suffix here branded every post twice and pushed titles past 100 characters.
    // seoTitle lets a long editorial headline ship a shorter SERP title.
    title: post.seoTitle || post.title,
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
      url: `https://codenest.uk/blog/${slug}/`,
      siteName: 'Codenest',
      locale: 'en_GB',
      images: [
        {
          url: '/img/og-default.png',
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
      images: ['/img/og-default.png'],
    },
    alternates: {
      canonical: `https://codenest.uk/blog/${slug}/`,
    },
  }
}

export default async function BlogPost({ params }) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return <div>Post not found</div>
  }

  // Bylines are split by domain, so the author entity has to resolve to the right
  // principal — a single shared author URL would merge two people into one in
  // Google's knowledge graph.
  const AUTHORS = {
    'Ankit Rana': {
      jobTitle: 'Fractional CTO',
      sameAs: 'https://www.linkedin.com/in/arana198',
    },
    'Michelle Rana': {
      jobTitle: 'Fractional CFO',
      sameAs: 'https://www.linkedin.com/in/michellerana1/',
    },
  }
  const authorInfo = AUTHORS[post.author]

  // Structured data for breadcrumbs
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://codenest.uk/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://codenest.uk/blog/'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://codenest.uk/blog/${slug}/`
      }
    ]
  }

  // Structured data for the article
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description || post.content.substring(0, 160).replace(/[#*\n]/g, ' ').trim(),
    author: {
      '@type': 'Person',
      name: post.author,
      url: 'https://codenest.uk/about/',
      ...(authorInfo && { jobTitle: authorInfo.jobTitle, sameAs: [authorInfo.sameAs] })
    },
    publisher: {
      '@id': 'https://codenest.uk/#organization'
    },
    image: 'https://codenest.uk/img/og-default.png',
    datePublished: post.date,
    dateModified: post.updated || post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://codenest.uk/blog/${slug}/`
    },
    keywords: post.tags.join(', '),
    articleSection: post.tags?.[0] || 'Startups',
    inLanguage: 'en-GB'
  }

  // Route the end-of-post CTA to the service the post actually supports:
  // finance-tagged posts sell the Fractional CFO service unless an explicitly
  // technical tag overrides (e.g. technical due-diligence, CTO cost guides).
  const FINANCE_TAGS = ['Fractional CFO', 'Finance', 'Startup Finance', 'Financial Modelling', 'Fundraising', 'Cash Management', 'Unit Economics', 'Data Room', 'Metrics']
  const TECH_OVERRIDE_TAGS = ['Fractional CTO', 'Technical Leadership', 'Infrastructure']
  const postTags = post.tags ?? []
  const isFinancePost =
    postTags.some((tag) => FINANCE_TAGS.includes(tag)) &&
    !postTags.some((tag) => TECH_OVERRIDE_TAGS.includes(tag))
  const cta = isFinancePost
    ? {
        heading: 'Need investor-ready financials?',
        body: 'Our Fractional CFO service covers financial modelling, runway planning, and data rooms that stand up to due diligence.',
        href: '/services/fractional-cfo/',
        label: 'Explore Fractional CFO Services',
      }
    : {
        heading: 'Need senior technical leadership?',
        body: 'Our Fractional CTO service covers architecture, engineering hiring, and infrastructure that scales from day one.',
        href: '/services/fractional-cto/',
        label: 'Explore Fractional CTO Services',
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

      <main id="main-content">

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/blog/"
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

        {/* Author CTA — routed to the service this post supports */}
        <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            {cta.heading}
          </h3>
          <p className="text-slate-600 mb-6">
            {cta.body}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={cta.href}
              className="inline-block bg-accent-500 text-primary-900 px-6 py-3 rounded-xl font-semibold hover:bg-accent-600 transition-all text-center"
            >
              {cta.label}
            </Link>
            <a
              href="/contact/"
              className="inline-block border-2 border-slate-300 text-slate-700 px-6 py-3 rounded-xl font-semibold hover:border-accent-400 hover:text-primary-700 transition-all text-center"
            >
              Request a Strategy Call
            </a>
          </div>
        </div>
      </article>

      {/* Comments Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Comments</h2>
        <p className="text-slate-600 mb-8">
          No account needed. Comments are reviewed before they appear.
        </p>
        <CusdisComments
          pageId={slug}
          pageUrl={`https://codenest.uk/blog/${slug}/`}
          pageTitle={post.title}
        />
      </section>

      </main>

      <Footer />
    </div>
  )
}
