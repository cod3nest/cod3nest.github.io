import Link from 'next/link'
import Navigation from './components/Navigation'

// Static export emits this page twice: out/404.html (which GitHub Pages serves with a
// real 404 status) and out/404/index.html (which it serves with 200, making it a
// crawlable soft-404). Next already adds noindex to not-found pages, but not a
// canonical — so without this the 404 inherited the root layout's and told Google the
// 404 page IS the homepage.
export const metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist or has been moved.',
  alternates: { canonical: 'https://codenest.uk/404/' },
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />

      <section className="pt-28 md:pt-40 pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-8xl font-bold text-primary-600 mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Page Not Found
          </h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-accent-500 text-primary-900 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-accent-600 transition-all shadow-lg hover:shadow-xl text-center"
            >
              Back to Home
            </Link>
            <Link
              href="/contact/"
              className="border-2 border-primary-600 text-primary-700 px-8 py-4 rounded-2xl text-lg font-semibold hover:border-primary-700 hover:bg-primary-50 transition-all text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-16 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Codenest. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
