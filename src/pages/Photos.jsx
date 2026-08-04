import { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'
import Lightbox from '../components/Lightbox'

function Photos() {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState(null)

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
      <h1 className="text-4xl font-extrabold text-center mb-10 text-stone-900 dark:text-white">
        Toutes nos <span className="text-amber-500">photos</span>
      </h1>

      {loading && <p className="text-center text-stone-600 dark:text-stone-400">Chargement...</p>}
      {!loading && photos.length === 0 && (
        <p className="text-center text-stone-600 dark:text-stone-400">Aucune photo pour le moment.</p>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {photos.map((url, i) => (
          <button
            key={i}
            onClick={() => setSelected(url)}
            className="aspect-square rounded-xl overflow-hidden bg-stone-100 dark:bg-stone-900 border border-amber-800/30 dark:border-amber-800/40 hover:border-amber-500/60 transition-colors cursor-pointer"
          >
            <img src={url} alt={`Photo ${i + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      <Lightbox imageUrl={selected} onClose={() => setSelected(null)} />
    </div>
  )
}

export default Photos
