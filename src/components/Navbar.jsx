import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'

function Navbar({ language, setLanguage, t }) {
  const [open, setOpen] = useState(false)

  const links = [
    ['/', t.nav.home],
    ['/portfolio', t.nav.portfolio],
    ['/about', t.nav.about],
    ['/contact', t.nav.contact],
  ]

  const closeMenu = () => setOpen(false)

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Primary navigation">
        <NavLink to="/" className="brand" onClick={closeMenu}>
          <span>Gentiana</span>
          <small>Uruçi</small>
        </NavLink>

        <button
          type="button"
          className="icon-button mobile-toggle"
          aria-label={open ? t.nav.close : t.nav.menu}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

        <div className={`nav-panel ${open ? 'is-open' : ''}`}>
          <div className="nav-links">
            {links.map(([to, label]) => (
              <NavLink key={to} to={to} onClick={closeMenu}>
                {label}
              </NavLink>
            ))}
          </div>

          <div className="language-toggle" aria-label="Language selection">
            {['en', 'de'].map((code) => (
              <button
                key={code}
                type="button"
                className={language === code ? 'is-active' : ''}
                onClick={() => {
                  setLanguage(code)
                  closeMenu()
                }}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
