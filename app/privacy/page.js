import Link from 'next/link'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import JsonLd from '../components/JsonLd'
import { breadcrumbs, ORGANIZATION_ID, WEBSITE_ID } from '../../lib/schema'

export const metadata = {
  title: 'Privacy Policy',
  description:
    'How Codenest collects, uses and stores personal data submitted through this site, who processes it, and the rights you have under UK GDPR.',
  openGraph: {
    title: 'Privacy Policy | Codenest',
    description: 'How Codenest handles personal data submitted through this website.',
    type: 'website',
    url: 'https://codenest.uk/privacy/',
    images: [
      {
        url: '/img/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Codenest - Fractional CTO & CFO for UK startups',
      },
    ],
  },
  alternates: {
    canonical: 'https://codenest.uk/privacy/',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const pageSchema = [
  breadcrumbs([{ name: 'Privacy Policy', path: '/privacy/' }]),
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Privacy Policy',
    url: 'https://codenest.uk/privacy/',
    description: 'How Codenest handles personal data submitted through this website.',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORGANIZATION_ID },
  },
]

// Kept as data so the two collection points stay in sync with the forms
// themselves — if a field is added to ContactForm or RunwayCalculator, it is
// added here in the same change.
const collectionPoints = [
  {
    name: 'Strategy call request form',
    where: 'Homepage contact section and /contact',
    fields: [
      'Your name (required)',
      'Email address (required)',
      'Company or startup name (optional)',
      'Which service you are interested in — Fractional CTO, Fractional CFO, both, or a co-founder partnership (optional)',
      'Your message (required)',
    ],
  },
  {
    name: 'Runway calculator',
    where: '/tools/runway-calculator',
    fields: [
      'Email address, only if you choose to have your projection sent to you',
      'The figures you enter into the calculator, which are sent alongside that projection',
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd schema={pageSchema} />
      <Navigation />

      <main id="main-content">
        <section className="pt-28 md:pt-40 pb-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14">
              <p className="text-sm uppercase tracking-[0.2em] text-accent-700 mb-4 font-medium">Legal</p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">Privacy Policy</h1>
              <p className="text-xl text-slate-600">
                What we collect when you contact us, who else touches it, and how to get it removed.
              </p>
              <p className="text-sm text-slate-500 mt-4">Last updated: 4 August 2026</p>
            </div>

            <div className="space-y-12 text-slate-600 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Who we are</h2>
                <p>
                  Codenest Ltd (&ldquo;Codenest&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is an advisory practice
                  providing Fractional CTO and Fractional CFO services to UK startups. We are the data controller for
                  the personal data described on this page.
                </p>
                <p className="mt-4">
                  Codenest Ltd is registered in England and Wales, company number 10909723. Registered office:
                  Clearways Accountants, Clearways, Colley Way, Reigate RH2 9JH, United Kingdom. VAT registration
                  number 275 3255 93.
                </p>
                <p className="mt-4">
                  You can reach us about anything on this page at{' '}
                  <a href="mailto:hello@codenest.uk" className="font-semibold text-primary-700 hover:text-primary-800 underline">
                    hello@codenest.uk
                  </a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What we collect, and when</h2>
                <p className="mb-6">
                  We only collect personal data that you type into a form yourself. There are two places on this site
                  where that happens.
                </p>
                <div className="space-y-6">
                  {collectionPoints.map((point) => (
                    <div key={point.name} className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                      <h3 className="font-bold text-slate-900">{point.name}</h3>
                      <p className="text-sm text-slate-500 mb-3">{point.where}</p>
                      <ul className="space-y-2">
                        {point.fields.map((field) => (
                          <li key={field} className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-accent-700 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm">{field}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <p className="mt-6">
                  We do not run analytics, advertising or tracking scripts on this site, and we do not set cookies of
                  our own. There is no cookie banner because there is nothing to consent to.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Why we use it, and on what basis</h2>
                <p>
                  We use what you send us for one purpose: to reply to you and, if it goes further, to scope and run an
                  engagement. We do not sell personal data, and we do not add you to a marketing list on the strength of
                  an enquiry.
                </p>
                <p className="mt-4">
                  Our lawful basis under UK GDPR is legitimate interests — responding to someone who has deliberately
                  asked us to get in touch — and, where an engagement follows, performance of a contract.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Who else processes it</h2>
                <ul className="space-y-4">
                  <li>
                    <strong className="text-slate-900">EmailJS</strong> delivers both forms on this site. Everything you
                    submit passes through EmailJS on its way to our inbox.
                  </li>
                  <li>
                    <strong className="text-slate-900">Our email provider</strong> holds the resulting message, in the
                    same way it holds any other email we receive.
                  </li>
                  <li>
                    <strong className="text-slate-900">GitHub Pages</strong> hosts this site. GitHub processes standard
                    server log data, including your IP address, when you load a page. This happens on every website you
                    visit and is not something we collect or can see.
                  </li>
                  <li>
                    <strong className="text-slate-900">Cusdis</strong> powers the comment section at the bottom of blog
                    posts. Commenting is entirely optional and needs no account. Cusdis sets no cookies. The nickname
                    you type, your comment, and an email address if you choose to give one are stored by Cusdis under
                    its own privacy policy; we see them in its moderation dashboard. Approved comments are public, and
                    an email address is never displayed.
                  </li>
                </ul>
                <p className="mt-4 text-sm text-slate-500">
                  The contact form contains an optional email-verification step that would check an address against a
                  third-party validation service. It is switched off, and no address is sent anywhere for verification.
                  If we ever enable it, this page will say so before it goes live.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">How long we keep it</h2>
                <p>
                  Enquiries that do not lead to an engagement are deleted within 24 months. Records relating to an
                  actual engagement are kept for as long as we need them to meet our legal, tax and accounting
                  obligations — normally six years after the engagement ends.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Your rights</h2>
                <p className="mb-4">Under UK GDPR you can ask us to:</p>
                <ul className="space-y-2 mb-4">
                  {[
                    'Tell you what personal data we hold about you, and give you a copy',
                    'Correct anything that is wrong',
                    'Delete it',
                    'Restrict or object to how we use it',
                    'Transfer it to someone else',
                  ].map((right) => (
                    <li key={right} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent-700 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{right}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  Email{' '}
                  <a href="mailto:hello@codenest.uk" className="font-semibold text-primary-700 hover:text-primary-800 underline">
                    hello@codenest.uk
                  </a>{' '}
                  and we will respond within one month. If you are not happy with how we have handled it, you can
                  complain to the Information Commissioner&apos;s Office at{' '}
                  <a
                    href="https://ico.org.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-primary-700 hover:text-primary-800 underline"
                  >
                    ico.org.uk
                  </a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to this policy</h2>
                <p>
                  If we change how we handle personal data, we will update this page and move the date at the top. The
                  current version is always the one published here.
                </p>
              </section>
            </div>

            <div className="mt-16 pt-8 border-t border-slate-200">
              <Link href="/contact/" className="inline-flex items-center font-semibold text-primary-700 hover:text-primary-800">
                Back to contact
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
