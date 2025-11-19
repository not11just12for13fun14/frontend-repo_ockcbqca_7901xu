import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Angebote from './components/Angebote';
import Filialen from './components/Filialen';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* SEO basics via head in index.html already; this is SPA with semantic sections */}
      <Navbar/>
      <main>
        <Hero/>
        <Features/>
        <Angebote/>
        <Filialen/>
        <footer id="kontakt" className="border-t border-white/10 bg-slate-950/80">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-white font-semibold">Azzam Supermarkt</h3>
                <p className="mt-2 text-sm text-slate-300">Ihre Nachbarschafts­supermärkte in Berlin – frisch, fair und vielseitig.</p>
              </div>
              <div>
                <h4 className="text-white font-medium">Kontakt</h4>
                <p className="mt-2 text-sm text-slate-300">E-Mail: info@azzam-supermarkt.de</p>
                <p className="mt-1 text-sm text-slate-300">Telefon: +49 (0)30 123 456</p>
              </div>
              <div>
                <h4 className="text-white font-medium">Öffnungszeiten</h4>
                <p className="mt-2 text-sm text-slate-300">Mo–Sa: 8–22 Uhr</p>
                <p className="mt-1 text-sm text-slate-300">So: geschlossen</p>
              </div>
            </div>
            <p className="mt-8 text-xs text-slate-400">© {new Date().getFullYear()} Azzam Supermarkt – Alle Rechte vorbehalten.</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App