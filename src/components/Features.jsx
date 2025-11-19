import { Leaf, Sparkles, Timer, Truck } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Frisch & Regional",
    desc: "Obst, Gemüse und Fleisch aus verantwortungsvoller Herkunft – täglich frisch."
  },
  {
    icon: Sparkles,
    title: "Internationale Vielfalt",
    desc: "Arabische, türkische und mediterrane Spezialitäten – alles an einem Ort."
  },
  {
    icon: Timer,
    title: "Lange Öffnungszeiten",
    desc: "Flexibel einkaufen: viele Filialen mit erweiterten Öffnungszeiten."
  },
  {
    icon: Truck,
    title: "Bequem geliefert",
    desc: "In ausgewählten Bezirken Lieferung nach Hause – schnell und unkompliziert."
  }
];

export default function Features() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.08),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(6,182,212,0.08),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Warum Azzam?</h2>
          <p className="mt-4 text-slate-300">Qualität, Auswahl und Service – für Ihren täglichen Einkauf in Berlin.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({icon: Icon, title, desc}) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-sm hover:border-emerald-400/40 transition">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 text-slate-900 grid place-items-center shadow-lg shadow-emerald-400/20">
                <Icon className="w-6 h-6"/>
              </div>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
