import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  FiChevronLeft,
  FiChevronRight,
  FiMinus,
  FiPlus,
  FiX,
} from 'react-icons/fi'
import { motion } from 'framer-motion'

function Lightbox({ state, language, t, onClose, onNavigate }) {
  const [zoom, setZoom] = useState(1)
  const artwork = state?.artworks[state.index]
  const count = state?.artworks.length ?? 0
  const title = artwork?.title?.[language]
  const displayTitle = title || `Painting, ${artwork?.year}`
  const description = artwork?.description?.[language]
  const medium = artwork?.medium?.[language]
  const dimensions = artwork?.dimensions?.[language]

  const nextIndex = useMemo(() => {
    if (!count) {
      return 0
    }

    return (state.index + 1) % count
  }, [count, state])

  const previousIndex = useMemo(() => {
    if (!count) {
      return 0
    }

    return (state.index - 1 + count) % count
  }, [count, state])

  const navigateTo = useCallback((index) => {
    setZoom(1)
    onNavigate(index)
  }, [onNavigate])

  useEffect(() => {
    if (!artwork) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }

      if (event.key === 'ArrowRight') {
        navigateTo(nextIndex)
      }

      if (event.key === 'ArrowLeft') {
        navigateTo(previousIndex)
      }
    }

    document.body.classList.add('modal-open')
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.classList.remove('modal-open')
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [artwork, navigateTo, nextIndex, onClose, previousIndex])

  if (!artwork) {
    return null
  }

  return (
    <motion.div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button className="lightbox-backdrop" type="button" onClick={onClose}>
        <span className="sr-only">Close preview</span>
      </button>
      <div className="lightbox-stage">
        <button
          className="icon-button lightbox-close"
          type="button"
          onClick={onClose}
          aria-label="Close preview"
        >
          <FiX />
        </button>

        {count > 1 && (
          <>
            <button
              className="icon-button lightbox-nav previous"
              type="button"
              onClick={() => navigateTo(previousIndex)}
              aria-label={t.gallery.previous}
            >
              <FiChevronLeft />
            </button>
            <button
              className="icon-button lightbox-nav next"
              type="button"
              onClick={() => navigateTo(nextIndex)}
              aria-label={t.gallery.next}
            >
              <FiChevronRight />
            </button>
          </>
        )}

        <div className="lightbox-image-wrap">
          <img
            src={artwork.image}
            alt={displayTitle}
            style={{ transform: `scale(${zoom})` }}
          />
        </div>

        <div className="lightbox-caption">
          <div>
            <p className="meta">{artwork.year}</p>
            <h2>{displayTitle}</h2>
          </div>
          <div className="lightbox-details">
            {medium && <p>{medium}</p>}
            {dimensions && <p>{dimensions}</p>}
            {description && <p>{description}</p>}
          </div>
          <div className="lightbox-tools">
            <button
              className="icon-button"
              type="button"
              onClick={() => setZoom((value) => Math.max(1, value - 0.2))}
              aria-label={t.gallery.zoomOut}
            >
              <FiMinus />
            </button>
            <span>{Math.round(zoom * 100)}%</span>
            <button
              className="icon-button"
              type="button"
              onClick={() => setZoom((value) => Math.min(2.4, value + 0.2))}
              aria-label={t.gallery.zoomIn}
            >
              <FiPlus />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Lightbox
