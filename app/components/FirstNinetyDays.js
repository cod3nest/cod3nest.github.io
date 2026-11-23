// "What do I get, and when?" — the question both service pages left unanswered
// (site review, 23 Nov 2026). One component so the two seats stay in parity; each
// page supplies its own phases. Every phase ends in something the client keeps,
// which is why this is not a "discovery phase" (CFO FAQ, first month).
const TONES = {
  cto: { badge: 'bg-primary-100 text-primary-700', rule: 'border-t-primary-600' },
  cfo: { badge: 'bg-accent-100 text-accent-700', rule: 'border-t-accent-400' },
}

export default function FirstNinetyDays({ seat, title, intro, phases }) {
  const tone = TONES[seat]
  return (
    <section className="py-24 bg-white" aria-labelledby={`${seat}-first-90-days`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id={`${seat}-first-90-days`} className="font-serif text-4xl font-bold text-slate-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-slate-600">{intro}</p>
        </div>
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {phases.map((phase) => (
            <li key={phase.days} className={`bg-white rounded-2xl border border-slate-200 border-t-4 ${tone.rule} p-8 shadow-sm`}>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${tone.badge}`}>
                Days {phase.days}
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{phase.name}</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">{phase.work}</p>
              <p className="text-sm text-slate-700">
                <span className="font-semibold text-slate-900">You keep: </span>
                {phase.keep}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
