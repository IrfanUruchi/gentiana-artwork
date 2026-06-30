import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import portrait from '../assets/artist/portrait.jpg'

function About({ t }) {
  return (
    <>
      <SEO title={t.seo.aboutTitle} description={t.seo.aboutDescription} />
      <motion.section
        className="page-hero about-hero"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
      >
        <p className="eyebrow">{t.about.eyebrow}</p>
        <h1>{t.about.title}</h1>
      </motion.section>

      <section className="about-body">
        <motion.div
          className="about-copy"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="credential-list">
            {t.about.credentials.map((credential) => (
              <span key={credential}>{credential}</span>
            ))}
          </div>
          <div className="text-section">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </motion.div>

        <motion.figure
          className="portrait-frame"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          <img src={portrait} alt="Gentiana Uruçi portrait" />
        </motion.figure>
      </section>
    </>
  )
}

export default About
