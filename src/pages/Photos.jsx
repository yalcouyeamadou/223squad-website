import { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'

function Photos() {
    const [photos, setPhotos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchPhotos() {
            const { data, error } = await supabase.storage
                .from('223squad-media')
                .list('photos', { sortBy: { column: 'created_at', order: 'desc' } })

            if (!error && data) {
                const urls = data.map((file) => {
                    const { data: urlData } = supabase.storage
                        .from('223squad-media')
                        .getPublicUrl(`photos/${file.name}`)
                    return urlData.publicUrl
                })
                setPhotos(urls)
            }
            setLoading(false)
        }
        fetchPhotos()
    }, [])

    return (
        <div className="px-6 py-16 max-w-5xl mx-auto">
            <h1 className="text-4xl font-extrabold text-center mb-10">
                Toutes nos <span className="text-amber-500">photos</span>
            </h1>

            {loading && <p className="text-center text-stone-400">Chargement...</p>}
            {!loading && photos.length === 0 && (
                <p className="text-center text-stone-400">Aucune photo pour le moment.</p>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {photos.map((url, i) => (
                    <div
                        key={i}
                        className="aspect-square rounded-xl overflow-hidden bg-stone-900 border border-amber-800/30 hover:border-amber-500/60 transition-colors"
                    >
                        <img src={url} alt={`Photo ${i + 1}`} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Photos