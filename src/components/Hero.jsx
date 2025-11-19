import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center text-emerald-300/90 bg-emerald-400/10 ring-1 ring-emerald-300/30 px-3 py-1 rounded-full text-xs mb-4">Berlin • 5+ Filialen</span>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Azzam Supermarkt
          </h1>
          <p className="mt-6 text-lg sm:text-xl leading-relaxed text-slate-200/90">
            Frische Lebensmittel, internationale Spezialitäten und tägliche Angebote – direkt in Ihrer Nähe in Berlin.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#angebote" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-slate-100 transition">
              Aktuelle Angebote ansehen
            </a>
            <a href="#filialen" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-900/60 text-white ring-1 ring-white/15 hover:bg-slate-900/80 transition">
              Nächste Filiale finden
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/40 to-slate-900"></div>
    </section>
  );
}
