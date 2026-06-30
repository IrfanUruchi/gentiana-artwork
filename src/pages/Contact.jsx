import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'

function Contact({ t }) {
  return (
    <>
      <SEO title={t.seo.contactTitle} description={t.seo.contactDescription} />
      <motion.section
        className="page-hero contact-hero"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
      >
        <p className="eyebrow">{t.contact.eyebrow}</p>
        <h1>{t.contact.title}</h1>
        <p className="lead">{t.contact.intro}</p>
      </motion.section>

      <section className="contact-section">
        <a className="contact-card primary-contact" href={t.contact.instagramUrl}>
          <span>
            <FaInstagram aria-hidden="true" />
          </span>
          <small>{t.contact.instagramLabel}</small>
          <strong>{t.contact.instagram}</strong>
        </a>

        <a className="contact-card" href={t.contact.facebookUrl}>
          <span>
            <FaFacebookF aria-hidden="true" />
          </span>
          <small>{t.contact.facebookLabel}</small>
          <strong>{t.contact.facebook}</strong>
        </a>
      </section>
    </>
  )
}

export default Contact
