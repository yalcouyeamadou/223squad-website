import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react'
import { useTheme } from '../useTheme'

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [homeMenuOpen, setHomeMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded transition-colors ${isActive ? 'text-amber-500 font-semibold' : 'text-stone-600 dark:text-gray-300 hover:text-amber-400'
    }`

  const closeAll = () => {
    setMobileOpen(false)
    setHomeMenuOpen(false)
  }

  return (
    <nav className="bg-stone-100 dark:bg-stone-900 border-b border-amber-800/30 dark:border-amber-800/40 transition-colors">
      <div className="flex items-center justify-between px-8 py-4">
        <span className="text-xl font-extrabold tracking-wide text-stone-900 dark:text-white">
          223 <span className="text-amber-500">SQUAD</span>
        </span>

        <button
          className="md:hidden text-stone-700 dark:text-stone-200"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className="hidden md:flex gap-2 items-center">
          <div className="relative">
            <button
              onClick={() => setHomeMenuOpen(!homeMenuOpen)}
              className="flex items-center gap-1 px-4 py-2 rounded text-stone-600 dark:text-gray-300 hover:text-amber-400 transition-colors"
            >
              Accueil <ChevronDown size={16} />
            </button>
            {homeMenuOpen && (
              <div className="absolute left-0 top-full flex flex-col bg-stone-100 dark:bg-stone-900 border border-amber-800/30 dark:border-amber-800/40 rounded-lg overflow-hidden min-w-[140px] z-10">
                <NavLink to="/" className="px-4 py-2 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-800 hover:text-amber-500" onClick={closeAll} end>
                  Accueil
                </NavLink>
                <NavLink to="/photos" className="px-4 py-2 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-800 hover:text-amber-500" onClick={closeAll}>
                  Photos
                </NavLink>
                <NavLink to="/videos" className="px-4 py-2 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-800 hover:text-amber-500" onClick={closeAll}>
                  Vidéos
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/about" className={linkClass}>À propos</NavLink>
          <NavLink to="/services" className={linkClass}>Services</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>

          <button
            onClick={toggleTheme}
            className="ml-2 p-2 rounded-lg text-stone-600 dark:text-stone-300 hover:text-amber-500 transition-colors"
            aria-label="Changer de thème"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden flex flex-col px-8 pb-4 gap-1">
          <NavLink to="/" className={linkClass} onClick={closeAll} end>Accueil</NavLink>
          <NavLink to="/photos" className={linkClass} onClick={closeAll}>Photos</NavLink>
          <NavLink to="/videos" className={linkClass} onClick={closeAll}>Vidéos</NavLink>
          <NavLink to="/about" className={linkClass} onClick={closeAll}>À propos</NavLink>
          <NavLink to="/services" className={linkClass} onClick={closeAll}>Services</NavLink>
          <NavLink to="/contact" className={linkClass} onClick={closeAll}>Contact</NavLink>
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-4 py-2 text-stone-600 dark:text-gray-300"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />} Changer de thème
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar