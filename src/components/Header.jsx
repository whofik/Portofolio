import { useState, useEffect } from 'react'
import '../styles/Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('')

  useEffect(() => {
    const hashUrl = window.location.hash
    if (hashUrl && !hashUrl.includes('/')) {
      const idElement = hashUrl.replace('#', '')
      const elemenTujuan = document.getElementById(idElement)
      if (elemenTujuan) {
        setTimeout(() => {
          elemenTujuan.scrollIntoView({ behavior: 'smooth' })
          setActiveLink(idElement)
        }, 100)
      }
    }
  }, [])

  const handleNavClick = (link) => {
    setMenuOpen(false)
    setActiveLink(link)
  }

  return (
    <header className="header">
      <div className="header-inner">
        <div className="brand">
          <span className="brand-title">Portofolio</span>
          <span className="brand-subtitle">Muhammad Fikri</span>
        </div>
        <button
          className={`menu-toggle ${menuOpen ? 'menu-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <a
            href="#about"
            className={activeLink === 'about' ? 'active' : ''}
            onClick={() => handleNavClick('about')}
            aria-current={activeLink === 'about' ? 'page' : undefined}
            aria-label="About section"
          >
            About
          </a>
          <a
            href="#skills"
            className={activeLink === 'skills' ? 'active' : ''}
            onClick={() => handleNavClick('skills')}
            aria-label="Skills section"
          >
            Skills
          </a>
          <a
            href="#certificates"
            className={activeLink === 'certificates' ? 'active' : ''}
            onClick={() => handleNavClick('certificates')}
            aria-label="Certificates section"
          >
            Certificates
          </a>
          <a
            href="#projects"
            className={activeLink === 'projects' ? 'active' : ''}
            onClick={() => handleNavClick('projects')}
            aria-label="Projects section"
          >
            Projects
          </a>
          <a
            href="#music"
            className={activeLink === 'music' ? 'active' : ''}
            onClick={() => handleNavClick('music')}
            aria-label="Music section"
          >
            Music
          </a>
          <a
            href="#contact"
            className={activeLink === 'contact' ? 'active' : ''}
            onClick={() => handleNavClick('contact')}
            aria-label="Contact section"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
