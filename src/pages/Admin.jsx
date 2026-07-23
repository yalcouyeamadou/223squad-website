import { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'

function Admin() {
    const [session, setSession] = useState(null)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [uploading, setUploading] = useState(false)
    const [uploadType, setUploadType] = useState('photos')
    const [message, setMessage] = useState('')
    const [files, setFiles] = useState([])

    useEffect(() => {
        supabase.auth.getSession().then(({ data }) => setSession(data.session))
        const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })
        return () => listener.subscription.unsubscribe()
    }, [])

    useEffect(() => {
        if (session) fetchFiles()
    }, [session, uploadType])

    const fetchFiles = async () => {
        const { data, error } = await supabase.storage
            .from('223squad-media')
            .list(uploadType, { sortBy: { column: 'created_at', order: 'desc' } })

        if (!error && data) {
            const withUrls = data.map((file) => {
                const { data: urlData } = supabase.storage
                    .from('223squad-media')
                    .getPublicUrl(`${uploadType}/${file.name}`)
                return { name: file.name, url: urlData.publicUrl }
            })
            setFiles(withUrls)
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        setError('')
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) setError(error.message)
    }

    const handleLogout = async () => {
        await supabase.auth.signOut()
    }

    const handleUpload = async (e) => {
        const file = e.target.files[0]
        if (!file) return

        setUploading(true)
        setMessage('')

        const cleanName = file.name
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-zA-Z0-9.\-_]/g, '_')

        const fileName = `${uploadType}/${Date.now()}-${cleanName}`
        const { error } = await supabase.storage
            .from('223squad-media')
            .upload(fileName, file)

        if (error) {
            setMessage(`Erreur : ${error.message}`)
        } else {
            setMessage('Fichier ajouté avec succès !')
            fetchFiles()
        }
        setUploading(false)
    }

    const handleDelete = async (fileName) => {
        const confirmDelete = window.confirm('Supprimer ce fichier définitivement ?')
        if (!confirmDelete) return

        const { error } = await supabase.storage
            .from('223squad-media')
            .remove([`${uploadType}/${fileName}`])

        if (error) {
            setMessage(`Erreur : ${error.message}`)
        } else {
            setMessage('Fichier supprimé.')
            fetchFiles()
        }
    }

    if (!session) {
        return (
            <div className="px-6 py-16 max-w-sm mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8">
                    Connexion <span className="text-amber-500">Admin</span>
                </h1>
                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-stone-900 border border-amber-800/40 rounded-lg px-4 py-3 text-white"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Mot de passe"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-stone-900 border border-amber-800/40 rounded-lg px-4 py-3 text-white"
                        required
                    />
                    {error && <p className="text-red-400 text-sm">{error}</p>}
                    <button
                        type="submit"
                        className="bg-amber-500 text-stone-950 font-semibold py-3 rounded-lg hover:bg-amber-400 transition-colors"
                    >
                        Se connecter
                    </button>
                </form>
            </div>
        )
    }

    return (
        <div className="px-6 py-16 max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold">Espace Admin</h1>
                <button
                    onClick={handleLogout}
                    className="text-sm text-stone-400 hover:text-amber-500 transition-colors"
                >
                    Déconnexion
                </button>
            </div>

            <div className="flex gap-2 mb-6 max-w-md">
                <button
                    onClick={() => setUploadType('photos')}
                    className={`flex-1 py-2 rounded-lg font-medium transition-colors ${uploadType === 'photos' ? 'bg-amber-500 text-stone-950' : 'bg-stone-900 text-stone-300'
                        }`}
                >
                    Photos
                </button>
                <button
                    onClick={() => setUploadType('videos')}
                    className={`flex-1 py-2 rounded-lg font-medium transition-colors ${uploadType === 'videos' ? 'bg-amber-500 text-stone-950' : 'bg-stone-900 text-stone-300'
                        }`}
                >
                    Vidéos
                </button>
            </div>

            <label className="block max-w-md border-2 border-dashed border-amber-800/40 rounded-xl p-8 text-center cursor-pointer hover:border-amber-500/60 transition-colors mb-4">
                <input
                    type="file"
                    accept={uploadType === 'photos' ? 'image/*' : 'video/*'}
                    onChange={handleUpload}
                    className="hidden"
                    disabled={uploading}
                />
                <span className="text-stone-400">
                    {uploading ? 'Envoi en cours...' : `Clique pour ajouter une ${uploadType === 'photos' ? 'photo' : 'vidéo'}`}
                </span>
            </label>

            {message && <p className="mb-6 text-sm text-amber-400">{message}</p>}

            <h2 className="text-lg font-semibold mb-4">
                Fichiers existants ({files.length})
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {files.map((file) => (
                    <div key={file.name} className="relative group">
                        {uploadType === 'photos' ? (
                            <img
                                src={file.url}
                                alt={file.name}
                                className="w-full aspect-square object-cover rounded-lg border border-amber-800/30"
                            />
                        ) : (
                            <video
                                src={file.url}
                                className="w-full aspect-square object-cover rounded-lg border border-amber-800/30"
                            />
                        )}
                        <button
                            onClick={() => handleDelete(file.name)}
                            className="absolute top-2 right-2 bg-red-600 hover:bg-red-500 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            Supprimer
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Admin