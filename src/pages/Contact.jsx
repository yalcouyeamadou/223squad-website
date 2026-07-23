import { Phone } from 'lucide-react'

const socials = [
    {
        label: 'Instagram',
        href: '#',
        path: 'M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-3.5a1 1 0 100 2 1 1 0 000-2z',
    },
    {
        label: 'Facebook',
        href: '#',
        path: 'M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0022 12z',
    },
    {
        label: 'TikTok',
        href: '#',
        path: 'M14 2h2.5c.2 1.6 1.3 3 2.9 3.4V8c-1.5 0-2.8-.5-3.9-1.3v6.4c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c.3 0 .7 0 1 .1v2.6c-.3-.1-.6-.2-1-.2-1.9 0-3.5 1.6-3.5 3.5S6.6 16.5 8.5 16.5 12 14.9 12 13V2h2z',
    },
    {
        label: 'YouTube',
        href: '#',
        path: 'M21.6 7.2s-.2-1.5-.8-2.1c-.8-.8-1.7-.8-2.1-.9C15.9 4 12 4 12 4h0s-3.9 0-6.7.2c-.4 0-1.3.1-2.1.9-.6.6-.8 2.1-.8 2.1S2.2 9 2.2 10.7v1.6c0 1.7.2 3.5.2 3.5s.2 1.5.8 2.1c.8.8 1.9.8 2.3.9 1.7.2 7.3.2 7.3.2S16.1 19 18.9 18.8c.4 0 1.3-.1 2.1-.9.6-.6.8-2.1.8-2.1s.2-1.8.2-3.5v-1.6c0-1.7-.2-3.5-.2-3.5zM9.9 14.6V9l5.4 2.8-5.4 2.8z',
    },
]

function Contact() {
    return (
        <div className="px-6 py-16 max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold mb-2">
                Contacte <span className="text-amber-500">223SQUAD</span>
            </h1>
            <p className="text-stone-400 mb-10">
                L'union en bloc, la voix du 223.
            </p>


            <a href="tel:+22390003890"
                className="inline-flex items-center gap-3 bg-stone-900 border border-amber-800/40 rounded-xl px-6 py-4 mb-10 hover:border-amber-500/60 transition-colors">

                <Phone className="text-amber-500" size={24} />
                <span className="text-xl font-semibold tracking-wide">
                    (+223) 90 00 38 90
                </span>
            </a>

            <div className="flex justify-center gap-6">
                {socials.map((s) => (

                    <a key={s.label}
                        href={s.href}
                        aria-label={s.label}
                        className="text-stone-300 hover:text-amber-500 transition-colors"
                    >
                        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                            <path d={s.path} />
                        </svg>
                    </a>
                ))
                }
            </div >

            <p className="text-stone-500 text-sm mt-10">#223SQUAD</p>
        </div >
    )
}

export default Contact