const photos = [
    { label: 'Photo 1', src: '/photos/a1.jpeg' },
    { label: 'Photo 2', src: '/photos/a2.jpeg' },
    { label: 'Photo 3', src: '/photos/a3.jpeg' },
    { label: 'Photo 4', src: '/photos/a5(11).jpg' },
    { label: 'Photo 5', src: '/photos/a5.jpg' },
    { label: 'Photo 6', src: '/photos/a6.jpg' },
    { label: 'Photo 7', src: '/photos/a7.jpg' },
    { label: 'Photo 8', src: '/photos/a8.jpg' },
    { label: 'Photo 9', src: '/photos/a12.jpg' },
    { label: 'Photo 10', src: '/photos/a9.jpg' },
]

function MediaCarousel() {
    return (
        <div className="w-full py-10">
            <h2 className="text-2xl font-bold text-center mb-8">
                Nos <span className="text-amber-500">moments</span>
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-5xl mx-auto px-4">
                {photos.map((photo, i) => (
                    <div
                        key={i}
                        className="aspect-square rounded-xl overflow-hidden bg-stone-900 border border-amber-800/30 hover:border-amber-500/60 transition-colors"
                    >
                        <img
                            src={photo.src}
                            alt={photo.label}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MediaCarousel