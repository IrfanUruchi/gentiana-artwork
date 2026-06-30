import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import YearCard from '../components/YearCard'
import { getFeaturedYears, getHeroArtwork } from '../data/gallery'

function Home({ language, t }) {
  const featuredYears = getFeaturedYears()
  const heroArtwork = getHeroArtwork()

  return (
    <>
      <SEO title={t.seo.homeTitle} description={t.seo.homeDescription} />
      <section className="hero-section exhibition-hero">
        <div className="hero-glow" aria-hidden="true" />
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
        >
          <p className="eyebrow">{t.home.eyebrow}</p>
          <h1>{t.home.title}</h1>
          <p className="hero-subtitle">{t.home.subtitle}</p>
          <p className="lead">{t.home.intro}</p>
          <div className="hero-actions">
            <Link className="button primary" to="/portfolio">
              {t.home.primary}
              <FiArrowRight aria-hidden="true" />
            </Link>
            <Link className="button ghost" to="/about">
              {t.home.secondary}
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="hero-artwork-panel"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.16, ease: 'easeOut' }}
        >
          {heroArtwork && (
            <img
              src={heroArtwork.image}
              alt={heroArtwork.title[language] || `Painting from ${heroArtwork.year}`}
            />
          )}
          <div className="hero-artwork-label">
            <p>{t.home.latest}</p>
            <strong>2018-2024</strong>
            <span>{t.home.statement}</span>
          </div>
        </motion.div>
      </section>

      <motion.section
        className="section"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65 }}
      >
        <div className="section-heading">
          <p className="eyebrow">{t.home.featured}</p>
          <h2>{t.portfolio.title}</h2>
        </div>
        <div className="year-grid featured-grid">
          {featuredYears.map((year) => (
            <YearCard key={year} year={year} language={language} t={t} />
          ))}
        </div>
      </motion.section>
    </>
  )
}

export default Home
