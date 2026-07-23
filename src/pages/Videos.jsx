import { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'

function Videos() {
    const [videos, setVideos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchVideos() {
            const { data, error } = await supabase.storage
                .from('223squad-media')
                .list('videos', { sortBy: { column: 'created_at', order: 'desc' } })

            if (!error && data) {
                const urls = data.map((file) => {
                    const { data: urlData } = supabase.storage
                        .from('223squad-media')
                        .getPublicUrl(`videos/${file.name}`)
                    return urlData.publicUrl
                })
                setVideos(urls)
            }
            setLoading(false)
        }
        fetchVideos()
    }, [])

    return (
        <div className="px-6 py-16 max-w-5xl mx-auto">
            <h1 className="text-4xl font-extrabold text-center mb-10">
                Toutes nos <span className="text-amber-500">vidéos</span>
            </h1>

            {loading && <p className="text-center text-stone-400">Chargement...</p>}
            {!loading && videos.length === 0 && (
                <p className="text-center text-stone-400">Aucune vidéo pour le moment.</p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {videos.map((url, i) => (
                    <div
                        key={i}
                        className="rounded-xl overflow-hidden bg-stone-900 border border-amber-800/30 hover:border-amber-500/60 transition-colors"
                    >
                        <video src={url} controls className="w-full aspect-video object-cover" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Videos