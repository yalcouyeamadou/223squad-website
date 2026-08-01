import { Phone, Mail } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-stone-100 dark:bg-stone-900 border-t border-amber-800/30 dark:border-amber-800/40 mt-auto transition-colors">
      <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <span className="text-xl font-extrabold tracking-wide text-stone-900 dark:text-white">
            223<span className="text-amber-500">SQUAD</span>
          </span>
          <p className="text-stone-600 dark:text-stone-400 text-sm mt-2">
            L'union en bloc, la voix du 223.
          </p>
        </div>

        <div>
          <h3 className="text-amber-500 font-semibold mb-3 uppercase text-sm tracking-wide">
            Contact
          </h3>
          <div className="flex flex-row flex-wrap sm:flex-col gap-4 sm:gap-2 text-sm">
            <a href="tel:+22390003090" className="flex items-center gap-2 text-stone-600 dark:text-stone-300 hover:text-amber-500 transition-colors whitespace-nowrap">
              <Phone size={16} className="text-amber-500 shrink-0" />
              (+223) 90 00 30 90
            </a>

            <a href="mailto:medpo9290@gmail.com" className="flex items-center gap-2 text-stone-600 dark:text-stone-300 hover:text-amber-500 transition-colors whitespace-nowrap">
              <Mail size={16} className="text-amber-500 shrink-0" />
              medpo9290@gmail.com
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-amber-500 font-semibold mb-3 uppercase text-sm tracking-wide">
            Navigation
          </h3>
          <div className="flex flex-col gap-2 text-sm">
            <a href="/about" className="text-stone-600 dark:text-stone-300 hover:text-amber-500 transition-colors">À propos</a>
            <a href="/services" className="text-stone-600 dark:text-stone-300 hover:text-amber-500 transition-colors">Services</a>
            <a href="/contact" className="text-stone-600 dark:text-stone-300 hover:text-amber-500 transition-colors">Contact</a>
          </div>
        </div>
      </div>

      <div className="border-t border-amber-800/20 py-4 text-center text-stone-500 text-xs">
        © {new Date().getFullYear()} 223SQUAD — Tous droits réservés ,A ~Y:78 73 91 55 · #223SQUAD
      </div>
    </footer>
  )
}

export default Footer
