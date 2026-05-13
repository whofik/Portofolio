import { useState, useEffect } from 'react'
import '../styles/Header.css'

function Header() {
  const [menuopen, setmenuopen] = useState(false)
  const [activelink, setactivelink] = useState('')

  useEffect(() => {
    const hashvalue = window.location.hash
    if (hashvalue && !hashvalue.includes('/')) {
      const sectionid = hashvalue.replace('#', '')
      const targetelement = document.getElementById(sectionid)
      if (targetelement) {
        setTimeout(() => {
          targetelement.scrollIntoView({ behavior: 'smooth' })
          setactivelink(sectionid)
        }, 100)
      }
    }
  }, [])

  const handlenavclick = (link) => {
    setmenuopen(false)
    setactivelink(link)
  }

  return (
    <header className="header">
      <div className="header-inner">
        <div className="brand">
          <span className="brand-title">Portofolio</span>
          <span className="brand-subtitle">Muhammad Fikri</span>
        </div>
        <button
          className={`menu-toggle ${menuopen ? 'menu-open' : ''}`}
          onClick={() => setmenuopen(!menuopen)}
          aria-label={menuopen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuopen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`nav ${menuopen ? 'nav-open' : ''}`}>
          <a
            href="#about"
            className={activelink === 'about' ? 'active' : ''}
            onClick={() => handlenavclick('about')}
            aria-current={activelink === 'about' ? 'page' : undefined}
            aria-label="About section"
          >
            About
          </a>
          <a
            href="#skills"
            className={activelink === 'skills' ? 'active' : ''}
            onClick={() => handlenavclick('skills')}
            aria-label="Skills section"
          >
            Skills
          </a>
          <a
            href="#certificates"
            className={activelink === 'certificates' ? 'active' : ''}
            onClick={() => handlenavclick('certificates')}
            aria-label="Certificates section"
          >
            Certificates
          </a>
          <a
            href="#projects"
            className={activelink === 'projects' ? 'active' : ''}
            onClick={() => handlenavclick('projects')}
            aria-label="Projects section"
          >
            Projects
          </a>
          <a
            href="#music"
            className={activelink === 'music' ? 'active' : ''}
            onClick={() => handlenavclick('music')}
            aria-label="Music section"
          >
            Music
          </a>
          <a
            href="#contact"
            className={activelink === 'contact' ? 'active' : ''}
            onClick={() => handlenavclick('contact')}
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
