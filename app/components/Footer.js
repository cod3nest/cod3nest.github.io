import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="/img/companylogo-light.svg"
              alt="Codenest - Boutique Startup Advisory"
              className="h-10 w-auto mb-4"
            />
            <p className="text-slate-400 text-sm leading-relaxed">
              Boutique advisory for ambitious founders. Big 4 rigour meets startup agility.
            </p>
            <p className="text-accent-400 text-sm font-medium mt-3">
              Executive firepower. Startup agility.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Advisory</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/fractional-cto" className="text-slate-400 hover:text-accent-400 transition-colors">Technical Leadership</Link></li>
              <li><Link href="/services/fractional-cfo" className="text-slate-400 hover:text-accent-400 transition-colors">Financial Strategy</Link></li>
              <li><a href="/#services" className="text-slate-400 hover:text-accent-400 transition-colors">0-to-1 Product Builds</a></li>
              <li><a href="/#services" className="text-slate-400 hover:text-accent-400 transition-colors">AI & Data Engineering</a></li>
              <li><a href="/#services" className="text-slate-400 hover:text-accent-400 transition-colors">Due Diligence</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#case-studies" className="text-slate-400 hover:text-accent-400 transition-colors">Client Partnerships</a></li>
              <li><a href="/#how-we-work" className="text-slate-400 hover:text-accent-400 transition-colors">Our Methodology</a></li>
              <li><a href="/#about" className="text-slate-400 hover:text-accent-400 transition-colors">Our Story</a></li>
              <li><Link href="/blog" className="text-slate-400 hover:text-accent-400 transition-colors">Insights</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Partner With Us</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#contact" className="text-slate-400 hover:text-accent-400 transition-colors">Schedule a Strategy Call</a></li>
              <li><a href="https://www.linkedin.com/company/codenest-ltd" className="text-slate-400 hover:text-accent-400 transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
            <div className="mt-6">
              <p className="text-slate-500 text-xs">
                London-based. Serving select founders across the UK and Europe.
              </p>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} Codenest. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Boutique technical & financial advisory for UK startups
          </p>
        </div>
      </div>
    </footer>
  )
}
