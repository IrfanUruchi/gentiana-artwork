import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { getArtworkCount, getCoverArtwork } from '../data/gallery'

function YearCard({ year, language, t }) {
  const cover = getCoverArtwork(year)

  return (
    <Link to={`/portfolio/${year}`} className="year-card">
      <div className="year-card-image">
        {cover && (
          <img
            src={cover.image}
            alt={cover.title[language] || `Painting from ${year}`}
          />
        )}
      </div>
      <div className="year-card-content">
        <p className="meta">{getArtworkCount(year)} {t.portfolio.artworks}</p>
        <h3>{year}</h3>
        <span className="collection-link">
          {t.portfolio.viewYear}
          <FiArrowRight aria-hidden="true" />
        </span>
      </div>
    </Link>
  )
}

export default YearCard
