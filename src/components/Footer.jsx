import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'

function Footer({ t }) {
  return (
    <footer className="site-footer">
      <div>
        <Link to="/" className="footer-brand">
          {t.footer.name}
        </Link>
        <p>{t.footer.profession}</p>
        <p>{t.footer.education}</p>
        <p>{t.footer.location}</p>
      </div>
      <div className="footer-contact">
        <a href={t.contact.instagramUrl}>
          <FaInstagram aria-hidden="true" />
          <span>Instagram: {t.contact.instagram}</span>
        </a>
        <a href={t.contact.facebookUrl}>
          <FaFacebookF aria-hidden="true" />
          <span>Facebook: {t.contact.facebook}</span>
        </a>
      </div>
      <p className="copyright">
        2026 {t.footer.name}. {t.footer.rights}
      </p>
    </footer>
  )
}

export default Footer
