import { useEffect, useMemo, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Lightbox from './components/Lightbox'
import Navbar from './components/Navbar'
import { galleryYears } from './data/gallery'
import { translations } from './i18n/translations'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import YearGallery from './pages/YearGallery'

function App() {
  const [language, setLanguage] = useState('en')
  const [lightboxState, setLightboxState] = useState(null)
  const location = useLocation()

  const t = translations[language]

  const context = useMemo(
    () => ({
      language,
      setLanguage,
      t,
      openLightbox: (artworks, index) => setLightboxState({ artworks, index }),
    }),
    [language, t],
  )

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div className="site-shell">
      <Navbar {...context} />
      <main>
        <Routes>
          <Route path="/" element={<Home {...context} />} />
          <Route path="/portfolio" element={<Portfolio {...context} />} />
          <Route
            path="/portfolio/:year"
            element={<YearGallery {...context} />}
          />
          <Route path="/gallery/:year" element={<NavigateToPortfolioYear />} />
          <Route path="/about" element={<About {...context} />} />
          <Route path="/contact" element={<Contact {...context} />} />
          <Route
            path="*"
            element={<Navigate to={`/portfolio/${galleryYears[0]}`} replace />}
          />
        </Routes>
      </main>
      <Footer {...context} />
      <Lightbox
        state={lightboxState}
        language={language}
        t={t}
        onClose={() => setLightboxState(null)}
        onNavigate={(index) =>
          setLightboxState((current) => ({ ...current, index }))
        }
      />
    </div>
  )
}

function NavigateToPortfolioYear() {
  const location = useLocation()
  const year = location.pathname.split('/').pop()

  return <Navigate to={`/portfolio/${year}`} replace />
}

export default App
