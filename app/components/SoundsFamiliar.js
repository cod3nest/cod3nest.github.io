// The situations a founder arrives in, named in their words before the page
// describes the service (owner, 23 Nov 2026, after a competitor's version of the
// pattern). One component so the two seats stay in parity; each page supplies its
// own items. Problems only: no figures, outcomes or claims live here.
const TONES = {
  cto: 'text-primary-700',
  cfo: 'text-accent-700',
}

export default function SoundsFamiliar({ seat, intro, items }) {
  return (
    <section className="py-24 bg-white border-b border-slate-100" aria-labelledby={`${seat}-sounds-familiar`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id={`${seat}-sounds-familiar`} className="font-serif text-4xl font-bold text-slate-900 mb-4">
            Sounds Familiar?
          </h2>
          <p className="text-xl text-slate-600">{intro}</p>
        </div>
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <li key={item.title} className="bg-slate-50 rounded-2xl border border-slate-200 p-8">
              <span className={`block font-serif text-2xl font-bold mb-3 ${TONES[seat]}`} aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
