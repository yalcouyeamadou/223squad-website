import { X } from 'lucide-react'

import PropTypes from 'prop-types'

function Lightbox({ imageUrl, onClose }) {
    if (!imageUrl) return null

    return (
        <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-amber-500 transition-colors"
                aria-label="Fermer"
            >
                <X size={32} />
            </button>
            <img
                src={imageUrl}
                alt="Aperçu"
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
            />
        </div>
    )
}
Lightbox.propTypes = {
    imageUrl: PropTypes.string,
    onClose: PropTypes.func.isRequired,
}


export default Lightbox