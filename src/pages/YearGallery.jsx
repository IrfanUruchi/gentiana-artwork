import { Link, Navigate, useParams } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { motion } from 'framer-motion'
import ArtworkCard from '../components/ArtworkCard'
import SEO from '../components/SEO'
import { gallery, galleryYears } from '../data/gallery'

function YearGallery({ language, t, openLightbox }) {
  const { year } = useParams()
  const artworks = gallery[year]

  if (!galleryYears.includes(year)) {
    return <Navigate to="/portfolio" replace />
  }

  return (
    <>
      <SEO
        title={`${t.gallery.titlePrefix} ${year} | Gentiana Uruçi`}
        description={`${t.seo.portfolioDescription} ${year}.`}
      />
      <motion.section
        className="page-hero gallery-hero"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
      >
        <Link className="back-link" to="/portfolio">
          <FiArrowLeft aria-hidden="true" />
          {t.gallery.back}
        </Link>
        <p className="eyebrow">{t.gallery.titlePrefix}</p>
        <h1>{year}</h1>
      </motion.section>

      <section className="section compact">
        {artworks?.length ? (
          <div className="art-grid">
            {artworks.map((artwork, index) => (
              <ArtworkCard
                key={artwork.id}
                artwork={artwork}
                index={index}
                language={language}
                onOpen={(artworkIndex) => openLightbox(artworks, artworkIndex)}
                openLabel={t.gallery.open}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h2>{t.gallery.emptyTitle}</h2>
            <p>{t.gallery.emptyText}</p>
          </div>
        )}
      </section>
    </>
  )
}

export default YearGallery
