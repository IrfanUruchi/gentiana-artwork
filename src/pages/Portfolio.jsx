import SEO from '../components/SEO'
import YearCard from '../components/YearCard'
import { galleryYears } from '../data/gallery'
import { motion } from 'framer-motion'

function Portfolio({ language, t }) {
  return (
    <>
      <SEO
        title={t.seo.portfolioTitle}
        description={t.seo.portfolioDescription}
      />
      <motion.section
        className="page-hero"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
      >
        <p className="eyebrow">{t.portfolio.eyebrow}</p>
        <h1>{t.portfolio.title}</h1>
        <p className="lead">{t.portfolio.intro}</p>
      </motion.section>

      <section className="section compact">
        <div className="timeline-grid">
          {galleryYears.map((year) => (
            <YearCard key={year} year={year} language={language} t={t} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Portfolio
