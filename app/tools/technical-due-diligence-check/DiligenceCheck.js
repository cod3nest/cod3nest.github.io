'use client'

import { useState } from 'react'
import { seatCta, EXTERNAL_LINK_PROPS } from '../../../lib/booking'

// The seven areas and their statements follow the checklist post
// (content/blog/startup-technical-due-diligence-checklist.md). Change one, change
// both. Nothing here is sent anywhere: the score is computed in the browser and
// the tool collects no personal data, so /privacy has no entry for it.
const AREAS = [
  {
    id: 'architecture',
    name: 'Architecture and code quality',
    statements: [
      'We have an up-to-date architecture diagram that someone outside the team could follow.',
      'We can explain how data moves through the system without opening the code.',
      'Every change is reviewed by a second person before it merges.',
      'Automated tests run on every change, and a failing test blocks the merge.',
    ],
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure and delivery',
    statements: [
      'Deployments are automated; nobody deploys by hand.',
      'Our infrastructure is defined in code, not configured by hand in a console.',
      'Monitoring alerts a named person when the product breaks.',
      'Backups run automatically, and we have restored from one.',
    ],
  },
  {
    id: 'security',
    name: 'Security and data protection',
    statements: [
      'No password, key or secret is stored in plain text or in the repository.',
      'Data is encrypted in transit and at rest.',
      'We know what personal data we hold, why, and on what lawful basis under UK GDPR.',
      'We have had at least one external security review or penetration test.',
    ],
  },
  {
    id: 'team',
    name: 'Team and ownership',
    statements: [
      'More than one person can deploy, debug and explain each critical system.',
      'Someone with technical authority owns technical decisions, and they are written down.',
      'Work done by contractors or an agency is documented, not held in one person\'s head.',
      'Our hiring plan matches the one the financial model pays for.',
    ],
  },
  {
    id: 'debt',
    name: 'Technical debt and roadmap',
    statements: [
      'We keep a list of known technical debt, with a rough cost to fix each item.',
      'Our technical roadmap maps to the milestones this round is meant to fund.',
      'Our estimates for the next major features have been checked against what we actually delivered before.',
    ],
  },
  {
    id: 'scalability',
    name: 'Scalability',
    statements: [
      'We know our current capacity and where the first bottleneck will be.',
      'We have a written plan, even a rough one, for ten times today\'s usage.',
      'We can show load-test results or production numbers at peak.',
    ],
  },
  {
    id: 'ip',
    name: 'Intellectual property',
    statements: [
      'Every employee and contractor who wrote code has assigned the IP to the company in writing.',
      'We have an inventory of our open-source dependencies and their licences.',
      'No copyleft (GPL or AGPL) code ships inside our product without legal advice on it.',
    ],
  },
]

const TOTAL = AREAS.reduce((n, a) => n + a.statements.length, 0)

function areaStatus(ticked, total) {
  if (ticked === total) return { label: 'Ready', tone: 'text-green-800 bg-green-50 border-green-200' }
  if (ticked * 2 >= total) return { label: 'Partly ready', tone: 'text-amber-900 bg-amber-50 border-amber-200' }
  return { label: 'Gap', tone: 'text-red-800 bg-red-50 border-red-200' }
}

// Bands describe what the answers say, not how an investor will decide. No
// pass rate or timescale is claimed (BRANDING §2).
function verdict(score) {
  if (score === TOTAL) {
    return 'Every statement is true for you. Diligence will still find questions, but they will be about choices, not gaps.'
  }
  if (score >= Math.ceil(TOTAL * 0.8)) {
    return 'Mostly ready. The gaps below are the questions a diligence team will reach first, so have an honest answer and a plan for each.'
  }
  if (score >= Math.ceil(TOTAL * 0.5)) {
    return 'Partly ready. Several areas would draw follow-up questions. Most of these are fixable, but not in the week before diligence starts.'
  }
  return 'Significant gaps. Start on the areas marked "Gap" before you open a round: they are the ones most likely to slow or reprice it.'
}

export default function DiligenceCheck() {
  const [ticked, setTicked] = useState({})
  const [showResult, setShowResult] = useState(false)
  const cta = seatCta('cto')

  const toggle = (key) => setTicked((prev) => ({ ...prev, [key]: !prev[key] }))
  const key = (areaId, i) => `${areaId}-${i}`

  const results = AREAS.map((area) => {
    const count = area.statements.filter((_, i) => ticked[key(area.id, i)]).length
    const gaps = area.statements.filter((_, i) => !ticked[key(area.id, i)])
    return { ...area, count, gaps, status: areaStatus(count, area.statements.length) }
  })
  const score = results.reduce((n, r) => n + r.count, 0)

  return (
    <div className="space-y-8">
      <p className="text-slate-600">
        Tick every statement that is true for your company today. Leave it unticked if it is not, or if you are not sure:
        an investor will treat &ldquo;not sure&rdquo; the same way.
      </p>

      {AREAS.map((area, index) => (
        <fieldset key={area.id} className="bg-white rounded-2xl border border-slate-200 p-6">
          <legend className="px-2 font-serif text-xl font-bold text-slate-900">
            {index + 1}. {area.name}
          </legend>
          <div className="space-y-3 mt-2">
            {area.statements.map((statement, i) => {
              const id = key(area.id, i)
              return (
                <label key={id} htmlFor={id} className="flex items-start gap-3 cursor-pointer min-h-[44px] py-1">
                  <input
                    id={id}
                    type="checkbox"
                    checked={!!ticked[id]}
                    onChange={() => toggle(id)}
                    className="mt-1 h-5 w-5 flex-shrink-0 rounded border-slate-400 text-primary-700 focus:ring-primary-500"
                  />
                  <span className="text-slate-700">{statement}</span>
                </label>
              )
            })}
          </div>
        </fieldset>
      ))}

      <div className="text-center">
        <button
          type="button"
          onClick={() => setShowResult(true)}
          className="inline-block bg-accent-400 text-primary-900 font-semibold rounded-lg shadow-gold hover:bg-accent-500 px-8 py-4 text-base transition-all"
        >
          Show my readiness
        </button>
      </div>

      {showResult && (
        <section aria-live="polite" aria-labelledby="dd-result-heading" className="bg-slate-50 rounded-2xl border border-slate-200 p-6 md:p-8">
          <h2 id="dd-result-heading" className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-2">
            {score} of {TOTAL} in place
          </h2>
          <p className="text-slate-700 mb-6">{verdict(score)}</p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {results.map((r) => (
              <li key={r.id} className={`flex items-center justify-between gap-3 rounded-lg border px-4 py-3 ${r.status.tone}`}>
                <span className="font-medium">{r.name}</span>
                <span className="text-sm font-semibold whitespace-nowrap">{r.status.label} &middot; {r.count}/{r.statements.length}</span>
              </li>
            ))}
          </ul>

          {score < TOTAL && (
            <>
              <h3 className="font-semibold text-slate-900 mb-3">What a diligence team will ask about first</h3>
              <ul className="space-y-4 mb-8">
                {results.filter((r) => r.gaps.length > 0).map((r) => (
                  <li key={r.id}>
                    <p className="text-sm font-semibold text-slate-900">{r.name}</p>
                    <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1 mt-1">
                      {r.gaps.map((g) => <li key={g}>{g}</li>)}
                    </ul>
                  </li>
                ))}
              </ul>
            </>
          )}

          <div className="border-t border-slate-200 pt-6">
            <p className="text-slate-700 mb-4">
              Want a second read before an investor gives you one? Bring this list to a free 30-minute call with
              Ankit Rana, Fractional CTO.
            </p>
            <a
              href={cta.href}
              {...(cta.external ? EXTERNAL_LINK_PROPS : {})}
              className="inline-block bg-accent-400 text-primary-900 font-semibold rounded-lg shadow-gold hover:bg-accent-500 px-6 py-3 text-sm transition-all"
            >
              {cta.label}
            </a>
          </div>
        </section>
      )}
    </div>
  )
}
