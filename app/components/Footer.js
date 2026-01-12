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
              alt="Codenest - Fractional CTO and CFO Services"
              className="h-10 w-auto mb-4"
            />
            <p className="text-slate-400 text-sm leading-relaxed">
              Startup leadership, without the overhead. Engineering rigour and financial discipline for ambitious startups.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/fractional-cto" className="text-slate-400 hover:text-white transition-colors">Fractional CTO</Link></li>
              <li><Link href="/services/fractional-cfo" className="text-slate-400 hover:text-white transition-colors">Financial & Business Strategy</Link></li>
              <li><a href="/#services" className="text-slate-400 hover:text-white transition-colors">0-to-1 Builds</a></li>
              <li><a href="/#services" className="text-slate-400 hover:text-white transition-colors">AI & Data Engineering</a></li>
              <li><a href="/#services" className="text-slate-400 hover:text-white transition-colors">DevOps & Platform</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#case-studies" className="text-slate-400 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="/#how-we-work" className="text-slate-400 hover:text-white transition-colors">Our Process</a></li>
              <li><a href="/#about" className="text-slate-400 hover:text-white transition-colors">Our Story</a></li>
              <li><Link href="/blog" className="text-slate-400 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#contact" className="text-slate-400 hover:text-white transition-colors">Book a Discovery Call</a></li>
              <li><a href="https://www.linkedin.com/company/codenest-ltd" className="text-slate-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
            <div className="mt-6">
              <p className="text-slate-500 text-xs">
                Based in London, serving startups across the UK and Europe.
              </p>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} Codenest. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Fractional CTO & financial strategy for UK startups
          </p>
        </div>
      </div>
    </footer>
  )
}
