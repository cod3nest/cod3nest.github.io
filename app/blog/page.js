import Link from 'next/link'
import { getAllBlogPosts } from '../../lib/blog'
import Navigation from '../components/Navigation'

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
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Engineering Insights
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Practical lessons from scaling startups, building resilient infrastructure, and shipping products that matter.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <article className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:border-accent-500 h-full flex flex-col">
                  <div className="flex-grow">
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

                    <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-slate-600 leading-relaxed mb-4">
                      {post.content.substring(0, 150)}...
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-sm text-slate-500 pt-4 border-t border-slate-100">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </time>
                    <span>{post.readTime}</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Need help building your infrastructure?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            We help startups move from 0 to 1 with production-grade infrastructure and GitOps foundations.
          </p>
          <a
            href="/#contact"
            className="inline-block bg-accent-500 text-primary-900 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-accent-600 transition-all shadow-lg hover:shadow-xl"
          >
            Book a Discovery Call
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <img
                src="/img/companylogo-light.svg"
                alt="codenest logo"
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
                <li><a href="/#approach" className="text-slate-400 hover:text-white transition-colors">Our Process</a></li>
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
