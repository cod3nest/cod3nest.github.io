import Link from 'next/link'

// Link budget: the footer is navigation, not a sitemap. Four groups, at most four
// destinations each, plus the CTA and Privacy. It used to carry all 21 routes on the
// site — 9 of them in Resources, where seven guides sat beside a link to the guides
// index. That gave the least commercial pages the largest sitewide internal-link
// footprint (7 links each) while either service page had one. See BRANDING.md §13.30.
const GROUPS = [
  {
    id: 'footer-advisory',
    heading: 'Advisory',
    // Only real destinations. "0-to-1 Product Builds" and "AI & Data Engineering"
    // used to sit here pointing at /services/ — capabilities dressed as pages
    // (BRANDING.md §13.26).
    links: [
      { href: '/services/fractional-cto/', label: 'Fractional CTO' },
      { href: '/services/fractional-cfo/', label: 'Fractional CFO' },
      { href: '/services/', label: 'All Services' },
    ],
  },
  {
    id: 'footer-resources',
    heading: 'Resources',
    // The five comparison guides are reached from /guides/ and from in-content
    // links, not from every page on the site.
    links: [
      { href: '/guides/', label: 'All Guides' },
      { href: '/guides/fractional-cto-guide/', label: 'Fractional CTO Guide' },
      { href: '/guides/fractional-cfo-guide/', label: 'Fractional CFO Guide' },
      { href: '/tools/runway-calculator/', label: 'Runway Calculator' },
    ],
  },
  {
    id: 'footer-company',
    heading: 'Company',
    // Labels match the nav's. "Our Story" and "Insights" pointed at /about and
    // /blog, which the nav calls About and Blog — three names for two pages, and
    // the sitewide anchor text (40 pages) was the one carrying no keyword.
    links: [
      { href: '/case-studies/', label: 'Case Studies' },
      { href: '/#how-we-work', label: 'How We Work' },
      { href: '/about/', label: 'About' },
      { href: '/blog/', label: 'Blog' },
    ],
  },
  {
    id: 'footer-partner',
    heading: 'Partner With Us',
    // "Request a Strategy Call" stays a text link here, and the footer has no CTA
    // button of its own: Navigation.js pins a gold CTA at this scroll depth on both
    // breakpoints, so a footer button would put two identical gold CTAs on screen
    // at once — the duplication the comment in Navigation.js already records.
    links: [
      { href: '/contact/', label: 'Request a Strategy Call' },
      { href: '/cofounder/', label: 'Co-founder Opportunities' },
      { href: '/refer/', label: 'Referral Program' },
      {
        href: 'https://www.linkedin.com/company/codenest-ltd',
        label: 'LinkedIn',
        external: true,
      },
    ],
  },
]

// `inline-block py-1.5` gives the anchor a hit area rather than leaving it at the
// 17px of its own line box. Measured at 375px, every footer link was 15-20px tall
// against the 24px WCAG 2.2 (2.5.8) minimum: `space-y-2` on the <li> separated
// them visually without making any of them easier to hit.
const LINK_CLASS = 'inline-block py-1.5 text-slate-400 hover:text-accent-400 transition-colors'

function FooterLink({ href, label, external }) {
  if (external) {
    return (
      <a href={href} className={LINK_CLASS} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    )
  }
  return (
    <Link href={href} className={LINK_CLASS}>
      {label}
    </Link>
  )
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* The nav groups go two-up from the smallest breakpoint. Stacked one per row
            with a 48px gap, the four groups plus the brand block made the footer 46%
            of the total height of /contact on a 375px screen. */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-10 lg:gap-12 mb-12">
          <div className="col-span-2 lg:col-span-1">
            {/* The logo is the way home: the footer otherwise has no link to "/",
                only the /#how-we-work anchor. */}
            <Link href="/" className="inline-block mb-4" aria-label="Codenest home">
              <img
                src="/img/companylogo-light.svg"
                alt="Codenest - Fractional CTO &amp; CFO for UK startups"
                width={217}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Boutique advisory for UK founders, pre-seed to Series A.
              Big 4 rigour meets founder empathy.
            </p>
            <p className="text-accent-400 text-sm font-medium mt-3">
              Executive firepower. Startup agility.
            </p>
            {/* "London-based" removed: the only address this site publishes is
                the registered office in Reigate, Surrey, and the schema in
                app/layout.js now states that one. Put a locality claim back
                only alongside an address that supports it (BRANDING.md §13.25). */}
            <p className="text-slate-400 text-xs mt-4">
              Serving select founders across the UK and Europe.
            </p>
          </div>
          {GROUPS.map((group) => (
            <nav key={group.id} aria-labelledby={group.id}>
              {/* h3, not h2: these labels are on every page, and on thin pages such
                  as /contact they were the only h2s in the document outline. */}
              <h3 id={group.id} className="font-semibold mb-4">
                {group.heading}
              </h3>
              <ul className="space-y-1 text-sm">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <FooterLink {...link} />
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="pt-8 border-t border-slate-800 space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* No year: this is a static export deployed on push, so a build-time
                new Date().getFullYear() bakes in whichever year the last push
                happened and then goes stale silently. A year is not required for
                the notice to stand. */}
            <p className="text-slate-400 text-sm">
              &copy; Codenest Ltd. All rights reserved.
            </p>
            <Link href="/privacy/" className={`${LINK_CLASS} text-sm`}>
              Privacy Policy
            </Link>
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
