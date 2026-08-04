import { Target, Megaphone, Users, Zap, Eye } from 'lucide-react'

const values = [
  { icon: Target, title: 'Stratégie', desc: 'Concevoir, planifier, innover.' },
  { icon: Megaphone, title: 'Communication', desc: 'Informer, coordonner, faire passer le message.' },
  { icon: Users, title: "Esprit d'équipe", desc: 'Confiance, respect, solidarité.' },
  { icon: Zap, title: 'Impact', desc: 'Créativité, réactivité, résultats.' },
  { icon: Eye, title: 'Vision', desc: "Analyser, s'adapter, grandir." },
]

function About() {
  return (
    <div className="px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold text-center mb-4 text-stone-900 dark:text-white">
        À propos de <span className="text-amber-500">223SQUAD</span>
      </h1>
      <p className="text-stone-700 dark:text-stone-300 text-center max-w-2xl mx-auto mb-4">
        <span className="font-semibold text-amber-500">Un objectif. Une équipe. Une vision.</span>
      </p>
      <p className="text-stone-600 dark:text-stone-400 text-center max-w-2xl mx-auto mb-16 italic">
        "223SQUAD — la force de notre coordination, la puissance de nos actions."
      </p>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {values.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex flex-col items-center text-center">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-stone-100 dark:bg-stone-900 border border-amber-800/30 dark:border-amber-800/40 mb-3">
              <Icon className="text-amber-500" size={24} />
            </div>
            <h3 className="font-bold text-amber-500 mb-1">{title}</h3>
            <p className="text-sm text-stone-600 dark:text-stone-400">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
