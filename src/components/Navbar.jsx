import { Menu, MapPin, Phone, ShoppingCart, BadgePercent } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const NavLinks = () => (
    <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-start lg:items-center text-slate-100/90">
      <li><a href="#filialen" className="hover:text-white transition">Filialen</a></li>
      <li><a href="#angebote" className="hover:text-white transition inline-flex items-center gap-2"><BadgePercent className="w-4 h-4"/>Angebote</a></li>
      <li><a href="#sortiment" className="hover:text-white transition">Sortiment</a></li>
      <li><a href="#kontakt" className="hover:text-white transition inline-flex items-center gap-2"><Phone className="w-4 h-4"/>Kontakt</a></li>
    </ul>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md">
          <div className="flex items-center justify-between px-4 py-4">
            <a href="#top" className="inline-flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 grid place-items-center shadow-lg shadow-emerald-500/20 ring-1 ring-white/10">
                <ShoppingCart className="w-5 h-5 text-slate-900"/>
              </div>
              <div className="text-left">
                <p className="text-white font-semibold leading-none">Azzam Supermarkt</p>
                <p className="text-xs text-slate-300/80 leading-none mt-1">Frisch • Fair • Berlin</p>
              </div>
            </a>

            <nav className="hidden lg:block"><NavLinks/></nav>

            <div className="flex items-center gap-3">
              <a href="#filialen" className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-slate-900 bg-white hover:bg-slate-100 px-3 py-2 rounded-lg transition">
                <MapPin className="w-4 h-4"/> Filiale finden
              </a>
              <button className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white" onClick={() => setOpen(!open)}>
                <Menu className="w-5 h-5"/>
              </button>
            </div>
          </div>

          {open && (
            <div className="px-4 pb-4 lg:hidden"><NavLinks/></div>
          )}
        </div>
      </div>
    </header>
  );
}
