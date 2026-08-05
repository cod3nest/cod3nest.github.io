import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div>
            <img
              src="/img/companylogo-light.svg"
              alt="Codenest - Fractional CTO & CFO for UK startups"
              className="h-10 w-auto mb-4"
            />
            <p className="text-slate-400 text-sm leading-relaxed">
              Boutique advisory for ambitious founders. Big 4 rigour meets founder empathy.
            </p>
            <p className="text-accent-400 text-sm font-medium mt-3">
              Executive firepower. Startup agility.
            </p>
          </div>
          <div>
            <h2 className="font-semibold mb-4">Advisory</h2>
            <ul className="space-y-2 text-sm">
              {/* Only real destinations. "0-to-1 Product Builds" and "AI & Data
                  Engineering" used to sit here pointing at /services/ — capabilities
                  dressed as pages, which is the same bait the service cards had. */}
              <li><Link href="/services/fractional-cto/" className="text-slate-400 hover:text-accent-400 transition-colors">Fractional CTO</Link></li>
              <li><Link href="/services/fractional-cfo/" className="text-slate-400 hover:text-accent-400 transition-colors">Fractional CFO</Link></li>
              <li><Link href="/services/" className="text-slate-400 hover:text-accent-400 transition-colors">All Services</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-4">Resources</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="/guides/" className="text-slate-400 hover:text-accent-400 transition-colors">All Guides</Link></li>
              <li><Link href="/guides/fractional-cto-guide/" className="text-slate-400 hover:text-accent-400 transition-colors">Fractional CTO Guide</Link></li>
              <li><Link href="/guides/fractional-cfo-guide/" className="text-slate-400 hover:text-accent-400 transition-colors">Fractional CFO Guide</Link></li>
              <li><Link href="/guides/fractional-cto-vs-full-time/" className="text-slate-400 hover:text-accent-400 transition-colors">CTO vs Full-Time</Link></li>
              <li><Link href="/guides/fractional-cfo-vs-full-time/" className="text-slate-400 hover:text-accent-400 transition-colors">CFO vs Full-Time</Link></li>
              <li><Link href="/guides/fractional-cto-vs-agency/" className="text-slate-400 hover:text-accent-400 transition-colors">CTO vs Agency</Link></li>
              <li><Link href="/guides/fractional-cfo-vs-outsourced-finance/" className="text-slate-400 hover:text-accent-400 transition-colors">CFO vs Outsourced Finance</Link></li>
              <li><Link href="/guides/technical-cofounder-alternatives/" className="text-slate-400 hover:text-accent-400 transition-colors">Co-founder Alternatives</Link></li>
              <li><Link href="/tools/runway-calculator/" className="text-slate-400 hover:text-accent-400 transition-colors">Runway Calculator</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-4">Company</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="/case-studies/" className="text-slate-400 hover:text-accent-400 transition-colors">Case Studies</a></li>
              <li><a href="/#how-we-work" className="text-slate-400 hover:text-accent-400 transition-colors">Our Methodology</a></li>
              <li><a href="/about/" className="text-slate-400 hover:text-accent-400 transition-colors">Our Story</a></li>
              <li><Link href="/blog/" className="text-slate-400 hover:text-accent-400 transition-colors">Insights</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-4">Partner With Us</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="/contact/" className="text-slate-400 hover:text-accent-400 transition-colors">Request a Strategy Call</a></li>
              <li><a href="/cofounder/" className="text-slate-400 hover:text-accent-400 transition-colors">Co-founder Opportunities</a></li>
              <li><Link href="/refer/" className="text-slate-400 hover:text-accent-400 transition-colors">Referral Program</Link></li>
              <li><a href="https://www.linkedin.com/company/codenest-ltd" className="text-slate-400 hover:text-accent-400 transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
            <div className="mt-6">
              {/* "London-based" removed: the only address this site publishes is
                  the registered office in Reigate, Surrey, and the schema in
                  app/layout.js now states that one. Put a locality claim back
                  only alongside an address that supports it (BRANDING.md §13.25). */}
              <p className="text-slate-400 text-xs">
                Serving select founders across the UK and Europe.
              </p>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} Codenest Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy/" className="text-slate-400 hover:text-accent-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <p className="text-slate-400 text-xs">
                Boutique technical & financial advisory for UK startups
              </p>
            </div>
          </div>
          {/* Statutory trading disclosures — a limited company must show its
              registered name, number, place of registration and registered office
              on its website (Companies Act 2006 s.82 / Trading Disclosures Regs 2015). */}
          <p className="text-slate-400 text-xs leading-relaxed">
            Codenest Ltd is a company registered in England and Wales, company number 10909723.
            Registered office: Clearways Accountants, Clearways, Colley Way, Reigate RH2 9JH,
            United Kingdom. VAT registration number 275 3255 93.
          </p>
        </div>
      </div>
    </footer>
  )
}
