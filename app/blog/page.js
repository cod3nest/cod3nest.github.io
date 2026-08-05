import Link from 'next/link'
import { getAllBlogPosts } from '../../lib/blog'
import { formatDate } from '../../lib/formatDate'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import JsonLd from '../components/JsonLd'
import { breadcrumbs, ORGANIZATION_ID, WEBSITE_ID } from '../../lib/schema'

export const metadata = {
  title: 'Fractional CTO & CFO Insights for UK Founders',
  description: 'Practical guidance for startup founders on technical leadership, startup finance, fundraising, and scaling from 0 to 1.',
  keywords: ['fractional CTO', 'fractional CFO', 'startup engineering blog', 'startup finance blog', 'financial modelling', 'fundraising', 'GitOps', 'Infrastructure as Code', 'startup scaling'],
  openGraph: {
    title: 'Codenest Blog — Fractional CTO & CFO Insights',
    description: 'Practical lessons on technical leadership, startup finance, fundraising, and scaling from 0 to 1.',
    type: 'website',
    url: 'https://codenest.uk/blog/',
    siteName: 'Codenest',
    locale: 'en_GB',
    images: [
      {
        url: '/img/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Codenest - Fractional CTO & CFO for UK startups',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Codenest Blog — Fractional CTO & CFO Insights',
    description: 'Practical lessons on technical leadership, startup finance, fundraising, and scaling from 0 to 1.',
    images: ['/img/og-default.png'],
  },
  alternates: {
    canonical: 'https://codenest.uk/blog/',
  },
}

const pageSchema = [
  breadcrumbs([{ name: 'Blog', path: '/blog/' }]),
  {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': 'https://codenest.uk/blog/#blog',
    name: 'Codenest Blog',
    description: 'Practical guidance for startup founders on technical leadership, startup finance, fundraising, and scaling from 0 to 1.',
    url: 'https://codenest.uk/blog/',
    publisher: { '@id': ORGANIZATION_ID },
    isPartOf: { '@id': WEBSITE_ID },
    inLanguage: 'en-GB',
  },
]

export default function BlogPage() {
  const blogPosts = getAllBlogPosts()

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <JsonLd schema={pageSchema} />
      <Navigation />

      <main id="main-content">

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Not a bare "Insights": the h1 carried no term the page is trying to
              rank for while its own title tag targeted both seats (§8). The nav
              and footer both call this page Blog. */}
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Fractional CTO &amp; CFO Insights
          </h1>
          <p className="text-lg text-slate-600">
            Practical guidance for startup founders on technical leadership, finance, and scaling.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="group"
              >
                <article className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md hover:border-slate-300 transition-all h-full flex flex-col">
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-3">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-2 py-0.5 bg-slate-100 text-slate-600 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                      <span className="text-xs text-slate-500 ml-auto">{post.readTime}</span>
                    </div>

                    <h2 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors leading-snug">
                      {post.title}
                    </h2>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {post.description}
                    </p>
                  </div>

                  {/* The index carried no date at all, which is a gap on a blog
                      and is also what hid ten posts sharing two dates. */}
                  <p className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    {post.updated && (
                      <>
                        {' · updated '}
                        <time dateTime={post.updated}>{formatDate(post.updated)}</time>
                      </>
                    )}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-600 mb-4">
            Need fractional executive leadership to help your startup build, scale, and raise?
          </p>
          <a
            href="/contact/"
            className="inline-block text-primary-600 font-medium hover:text-primary-700 transition-colors"
          >
            Request a Strategy Call &rarr;
          </a>
        </div>
      </section>

      </main>

      <Footer />
    </div>
  )
}
