import { FiMaximize2 } from 'react-icons/fi'

function ArtworkCard({ artwork, index, language, onOpen, openLabel }) {
  const title = artwork.title?.[language]
  const displayTitle = title || `Painting, ${artwork.year}`
  const medium = artwork.medium?.[language]
  const dimensions = artwork.dimensions?.[language]

  return (
    <article className="art-card">
      <button
        type="button"
        className="art-card-image"
        onClick={() => onOpen(index)}
        aria-label={`${openLabel}: ${displayTitle}`}
      >
        <img src={artwork.image} alt={displayTitle} loading="lazy" />
        <span>
          <FiMaximize2 aria-hidden="true" />
        </span>
      </button>
      <div className="art-card-body">
        <h3>{displayTitle}</h3>
        <p className="museum-label-year">{artwork.year}</p>
        {medium && <p>{medium}</p>}
        {dimensions && <p>{dimensions}</p>}
      </div>
    </article>
  )
}

export default ArtworkCard
