import { NavLink } from 'react-router-dom'

function Navbar() {
    const linkClass = ({ isActive }) =>
        `px-4 py-2 rounded transition-colors ${isActive ? 'text-amber-500 font-semibold' : 'text-gray-300 hover:text-amber-400'
        }`

    return (
        <nav className="flex items-center justify-between px-8 py-4 bg-stone-900 border-b border-amber-800/40">
            <span className="text-xl font-extrabold tracking-wide">
                223 <span className="text-amber-500">SQUAD</span>
            </span>
            <div className="flex gap-2">
                <div className="relative group">
                    <NavLink to="/" className={linkClass} end>
                        Accueil
                    </NavLink>

                    <div className="absolute left-0 top-full hidden group-hover:flex flex-col bg-stone-900 border border-amber-800/40 rounded-lg overflow-hidden min-w-[140px] z-10">
                        <NavLink
                            to="/photos"
                            className="px-4 py-2 text-stone-300 hover:bg-stone-800 hover:text-amber-500 transition-colors"
                        >
                            Photos
                        </NavLink>
                        <NavLink
                            to="/videos"
                            className="px-4 py-2 text-stone-300 hover:bg-stone-800 hover:text-amber-500 transition-colors"
                        >
                            Vidéos
                        </NavLink>
                    </div>
                </div>

                <NavLink to="/about" className={linkClass}>À propos</NavLink>
                <NavLink to="/services" className={linkClass}>Services</NavLink>
                <NavLink to="/contact" className={linkClass}>Contact</NavLink>
            </div>
        </nav>
    )
}

export default Navbar