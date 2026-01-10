import Link from 'next/link'
import Navigation from './components/Navigation'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />

      <section className="pt-40 pb-32">
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
              href="/#contact"
              className="border-2 border-primary-600 text-primary-700 px-8 py-4 rounded-2xl text-lg font-semibold hover:border-primary-700 hover:bg-primary-50 transition-all text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-16 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-500 text-sm">
            &copy; 2025 Codenest. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
