import Link from 'next/link'

// The named executive behind a seat, shown on that seat's service page.
//
// Both service pages used to sell a seat without ever naming who fills it: a
// visitor deciding whether to hire a Fractional CFO met a stock photo and no
// human. The whole positioning is two named principals rather than one
// generalist (BRANDING.md §2.4), and it was invisible at the point of decision.
//
// Every fact here already appears on /about — this restates, it never claims
// anything new. Dishoom's numbers stay attached to Michelle's *role* rather than
// to her personally (§13.15).
//
// Deliberately no avatar. Real headshots are still outstanding, and a
// letter-avatar placeholder is barred in production (§5) — an initial in a
// coloured box is worse than nothing here. The left column is sized to take a
// portrait when the files exist; drop it above the name.

const ACCENT_STYLES = {
  primary: {
    role: 'text-primary-700',
    chip: 'bg-primary-50 text-primary-800 border-primary-200',
    rule: 'bg-primary-600',
    marker: 'text-primary-600',
    proof: 'bg-primary-50 text-primary-800 border-primary-200',
    link: 'text-primary-700 hover:text-primary-800',
  },
  accent: {
    role: 'text-accent-700',
    chip: 'bg-accent-50 text-accent-800 border-accent-200',
    rule: 'bg-accent-500',
    marker: 'text-accent-700',
    proof: 'bg-accent-50 text-accent-800 border-accent-200',
    link: 'text-accent-700 hover:text-accent-800',
  },
}

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

export default function PrincipalBand({
  eyebrow = 'Who you would be working with',
  name,
  role,
  accent,
  credentials,
  bio,
  highlights,
  proof,
  linkedin,
}) {
  const style = ACCENT_STYLES[accent]

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-[0.2em] text-accent-700 mb-10 font-medium">{eyebrow}</p>

        {/* Asymmetric, not another centred card grid (§5). Identity on the left,
            evidence on the right. */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-1">{name}</h2>
            <p className={`${style.role} font-semibold mb-5`}>{role}</p>
            <div className={`w-16 h-1 rounded-full mb-6 ${style.rule}`} />

            <div className="flex flex-wrap gap-2 mb-6">
              {credentials.map((credential) => (
                <span key={credential} className={`px-3 py-1 border rounded-full text-xs font-medium ${style.chip}`}>
                  {credential}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <Link href="/about/" className={`inline-flex items-center gap-2 font-semibold ${style.link}`}>
                Full background
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 font-medium ${style.link}`}
              >
                <LinkedInIcon />
                {name.split(' ')[0]} on LinkedIn
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-lg text-slate-700 leading-relaxed mb-8">{bio}</p>

            <ul className="space-y-4 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className={`w-5 h-5 mt-0.5 flex-shrink-0 ${style.marker}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <p className={`text-sm font-semibold border rounded-lg px-4 py-3 inline-block ${style.proof}`}>
              {proof}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
