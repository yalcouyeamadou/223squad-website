import MediaCarousel from '../components/MediaCarousel'
import { Link } from 'react-router-dom'


function Home() {
    return (
        <div className="flex flex-col items-center text-center px-6 py-20">
            <span className="uppercase tracking-widest text-amber-500 text-sm font-semibold mb-4">
                Stratégie · Communication · Coordination
            </span>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
                223<span className="text-amber-500">SQUAD</span>
            </h1>

            <p className="text-lg md:text-xl text-stone-300 max-w-2xl mb-2">
                Nous assurons la <span className="text-amber-400 font-semibold">stratégie</span> et la{' '}
                <span className="text-amber-400 font-semibold">communication</span>.
            </p>

            <p className="text-stone-400 max-w-xl mb-10 italic">
                "Chaque idée prend la scène. Chaque message fait réagir. Ensemble, nous créons l'impact."
            </p>

            <div className="flex gap-4">
                <Link
                    to="/services"
                    className="px-6 py-3 bg-amber-500 text-stone-950 font-semibold rounded-lg hover:bg-amber-400 transition-colors"
                >
                    Nos services
                </Link>
                <Link
                    to="/contact"
                    className="px-6 py-3 border border-amber-500 text-amber-500 font-semibold rounded-lg hover:bg-amber-500 hover:text-stone-950 transition-colors"
                >
                    Nous contacter
                </Link>
            </div>
            <MediaCarousel />
        </div>
    )
}

export default Home