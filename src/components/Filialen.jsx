import { MapPin } from "lucide-react";

const stores = [
  { name: "Kreuzberg", address: "Oranienstr. 12, 10999 Berlin", hours: "Mo–Sa 8–22 Uhr" },
  { name: "Neukölln", address: "Sonnenallee 75, 12045 Berlin", hours: "Mo–Sa 8–22 Uhr" },
  { name: "Wedding", address: "Müllerstr. 110, 13349 Berlin", hours: "Mo–Sa 8–22 Uhr" },
  { name: "Charlottenburg", address: "Kantstr. 45, 10625 Berlin", hours: "Mo–Sa 8–22 Uhr" },
  { name: "Friedrichshain", address: "Boxhagener Str. 80, 10245 Berlin", hours: "Mo–Sa 8–22 Uhr" },
];

export default function Filialen() {
  return (
    <section id="filialen" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-cyan-400 grid place-items-center text-slate-900">
            <MapPin className="w-5 h-5"/>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Unsere Filialen in Berlin</h2>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stores.map((s) => (
            <div key={s.name} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-sm">
              <h3 className="text-white font-semibold">{s.name}</h3>
              <p className="mt-1 text-slate-300 text-sm">{s.address}</p>
              <p className="mt-3 text-slate-200 text-sm">{s.hours}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
