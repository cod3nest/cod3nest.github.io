import Link from 'next/link'
import { getAllBlogPosts } from '../../lib/blog'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Blog – Codenest | Insights on Startup Engineering & Infrastructure',
  description: 'Technical insights on GitOps, Infrastructure as Code, startup engineering, and scaling from 0 to 1.',
  keywords: ['startup engineering blog', 'GitOps', 'Infrastructure as Code', 'Kubernetes', 'DevOps', 'fractional CTO', 'startup scaling', 'cloud architecture'],
  openGraph: {
    title: 'Codenest Engineering Blog',
    description: 'Practical lessons from scaling startups, building resilient infrastructure, and shipping products that matter.',
    type: 'website',
    url: 'https://codenest.uk/blog',
    siteName: 'Codenest',
    locale: 'en_GB',
    images: [
      {
        url: '/img/companylogo.png',
        width: 1200,
        height: 630,
        alt: 'Codenest Blog - Startup Engineering Insights',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Codenest Engineering Blog',
    description: 'Practical lessons from scaling startups, building resilient infrastructure, and shipping products that matter.',
    images: ['/img/companylogo.png'],
  },
  alternates: {
    canonical: 'https://codenest.uk/blog',
  },
}

export default function BlogPage() {
  const blogPosts = getAllBlogPosts()

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Insights
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
                href={`/blog/${post.slug}`}
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
                      <span className="text-xs text-slate-400 ml-auto">{post.readTime}</span>
                    </div>

                    <h2 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors leading-snug">
                      {post.title}
                    </h2>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {post.description}
                    </p>
                  </div>
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
            href="/#contact"
            className="inline-block text-primary-600 font-medium hover:text-primary-700 transition-colors"
          >
            Book a discovery call &rarr;
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
