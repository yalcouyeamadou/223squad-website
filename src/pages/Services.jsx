const services = [
    {
        title: 'Montage Vidéo et Clips',
        desc: 'Production et montage professionnel de vidéos et clips musicaux.',
    },
    {
        title: "Conception d'Affiches et Logos",
        desc: 'Créations graphiques sur mesure pour ton image de marque.',
    },
    {
        title: 'Management Artistique',
        desc: "Accompagnement et coordination pour artistes et créateurs.",
    },
    {
        title: 'Création de Pages',
        desc: 'Mise en place et gestion de tes réseaux sociaux (Instagram, Facebook, TikTok...).',
    },
    {
        title: 'Services Supplémentaires',
        desc: 'Solutions additionnelles adaptées à tes besoins spécifiques.',
    },
    {
        title: 'Contrat de Distribution et Promotion',
        desc: 'Stratégies de diffusion et de promotion pour maximiser ton impact.',
    },
]

function Services() {
    return (
        <div className="px-6 py-16 max-w-5xl mx-auto">
            <h1 className="text-4xl font-extrabold text-center mb-2">
                Nos <span className="text-amber-500">Services</span>
            </h1>
            <p className="text-stone-400 text-center mb-12">
                La stratégie et la communication, à ton service.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service) => (
                    <div
                        key={service.title}
                        className="bg-stone-900 border border-amber-800/30 rounded-xl p-6 hover:border-amber-500/60 transition-colors"
                    >
                        <h2 className="text-xl font-bold text-amber-500 mb-2">
                            {service.title}
                        </h2>
                        <p className="text-stone-300">{service.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services