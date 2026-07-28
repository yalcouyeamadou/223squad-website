import { useState } from 'react'
import Lightbox from './Lightbox'

const photos = [
    { label: 'Photo 1', src: '/photos/a1.jpeg' },
    { label: 'Photo 2', src: '/photos/a2.jpeg' },
    { label: 'Photo 3', src: '/photos/a3.jpeg' },
    { label: 'Photo 4', src: '/photos/a5(4).jpg' },
    { label: 'Photo 5', src: '/photos/a5(5).jpg' },
    { label: 'Photo 6', src: '/photos/a5(6).jpg' },
    { label: 'Photo 7', src: '/photos/a5(7).jpg' },
    { label: 'Photo 8', src: '/photos/a5(11).jpg' },
    { label: 'Photo 9', src: '/photos/image-4.jpeg' },
    { label: 'Photo 10', src: '/photos/image-1.jpeg' },
    { label: 'Photo 11', src: '/photos/image-2.jpeg' },
    { label: 'Photo 12', src: '/photos/image-3.jpeg' },
]

function MediaCarousel() {
    const [selected, setSelected] = useState(null)

    return (
        <div className="w-full py-10">
            <h2 className="text-2xl font-bold text-center mb-8">
                Nos <span className="text-amber-500">moments</span>
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-5xl mx-auto px-4">
                {photos.map((photo, i) => (
                    <button
                        key={i}
                        onClick={() => setSelected(photo.src)}
                        className="aspect-square rounded-xl overflow-hidden bg-stone-900 border border-amber-800/30 hover:border-amber-500/60 transition-colors cursor-pointer"
                    >
                        <img
                            src={photo.src}
                            alt={photo.label}
                            className="w-full h-full object-cover"
                        />
                    </button>
                ))}
            </div>

            <Lightbox imageUrl={selected} onClose={() => setSelected(null)} />
        </div>
    )
}

export default MediaCarousel