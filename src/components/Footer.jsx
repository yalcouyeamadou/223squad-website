import { Phone, Mail } from 'lucide-react'

function Footer() {
    return (
        <footer className="bg-stone-900 border-t border-amber-800/40 mt-auto">
            <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
                {/* Colonne Marque */}
                <div>
                    <span className="text-xl font-extrabold tracking-wide">
                        223<span className="text-amber-500">SQUAD</span>
                    </span>
                    <p className="text-stone-400 text-sm mt-2">
                        L'union en bloc, la voix du 223.
                    </p>
                </div>

                {/* Colonne Contact */}
                <div>
                    <h3 className="text-amber-500 font-semibold mb-3 uppercase text-sm tracking-wide">
                        Contact
                    </h3>
                    <div className="flex flex-col gap-2 text-sm">

                        href="tel:+22378739155"
                        className="flex items-center gap-2 text-stone-300 hover:text-amber-400 transition-colors"
            >
                        <Phone size={16} className="text-amber-500" />
                        (+223) 78 73 91 55
                    </a>

                    href="mailto:medpo9290@gmail.com"
                    className="flex items-center gap-2 text-stone-300 hover:text-amber-400 transition-colors"
            >
                    <Mail size={16} className="text-amber-500" />
                    medpo9290@gmail.com
                </a>
            </div>
        </div>

        {/* Colonne Liens rapides */ }
    <div>
        <h3 className="text-amber-500 font-semibold mb-3 uppercase text-sm tracking-wide">
            Navigation
        </h3>
        <div className="flex flex-col gap-2 text-sm">
            <a href="/about" className="text-stone-300 hover:text-amber-400 transition-colors">À propos</a>
            <a href="/services" className="text-stone-300 hover:text-amber-400 transition-colors">Services</a>
            <a href="/contact" className="text-stone-300 hover:text-amber-400 transition-colors">Contact</a>
        </div>
    </div>
      </div >

        <div className="border-t border-amber-800/20 py-4 text-center text-stone-500 text-xs">
            © {new Date().getFullYear()} 223SQUAD — Tous droits réservés · #223SQUAD
        </div>
    </footer >
  )
}

export default Footer