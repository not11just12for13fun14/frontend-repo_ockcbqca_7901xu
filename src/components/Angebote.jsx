import { BadgePercent, ArrowRight } from "lucide-react";

const deals = [
  { title: "Frische Datteln", price: "3,49€", badge: "-20%", desc: "Premium Medjool, 500g" },
  { title: "Bio Olivenöl", price: "7,99€", badge: "Aktion", desc: "Extra Vergine, 750ml" },
  { title: "Halal Rindfleisch", price: "9,49€", badge: "Neu", desc: "Aus der Region, 1kg" },
];

export default function Angebote() {
  return (
    <section id="angebote" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-emerald-400 grid place-items-center text-slate-900">
            <BadgePercent className="w-5 h-5"/>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Aktuelle Angebote</h2>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((d) => (
            <div key={d.title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold">{d.title}</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-emerald-400 text-slate-900 font-semibold">{d.badge}</span>
              </div>
              <p className="mt-1 text-slate-300 text-sm">{d.desc}</p>
              <p className="mt-6 text-2xl font-bold text-white">{d.price}</p>
              <a href="#filialen" className="mt-4 inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200">In der Nähe finden <ArrowRight className="w-4 h-4"/></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
