// How a founder can buy the seat (owner, 27 Nov 2026, after a competitor's
// "Ways to work together"). Every model restates terms the site already
// publishes: retainer for the fractional seat and fixed fee for a defined
// project (homepage "How We Work"), typical hours and scaling for a raise (FAQ).
// No fees here: the cost guide carries market ranges, and quotes follow scope.
const TONES = {
  cto: { rule: 'border-t-primary-600', label: 'text-primary-700' },
  cfo: { rule: 'border-t-accent-400', label: 'text-accent-700' },
}

export default function WaysToWork({ seat, intro, models, note }) {
  const tone = TONES[seat]
  return (
    <section className="py-24 bg-slate-50" aria-labelledby={`${seat}-ways-to-work`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 id={`${seat}-ways-to-work`} className="font-serif text-4xl font-bold text-slate-900 mb-4">
            Ways to Work Together
          </h2>
          <p className="text-xl text-slate-600">{intro}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((m) => (
            <div key={m.name} className={`bg-white rounded-2xl border border-slate-200 border-t-4 ${tone.rule} p-8 flex flex-col`}>
              <p className={`text-sm font-semibold uppercase tracking-wider mb-2 ${tone.label}`}>{m.terms}</p>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{m.name}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{m.body}</p>
              <p className="text-sm text-slate-700 border-t border-slate-100 pt-4 mt-auto">
                <span className="font-semibold text-slate-900">Right when: </span>{m.when}
              </p>
            </div>
          ))}
        </div>
        {note && <p className="text-slate-600 mt-10 max-w-3xl">{note}</p>}
      </div>
    </section>
  )
}
