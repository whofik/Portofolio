import { useState, useEffect } from 'react'
import '../styles/About.css'
import avatarImg from '../assets/avatar.jpg'

function About() {
  const quote = "It always seems impossible until it's done"
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < quote.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + quote[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 80)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex])

  return (
    <section id="about" className="section about">
      <div className="profile-container">
        <img
          src={avatarImg}
          alt="Muhammad Fikri - Pelajar & Web Developer"
          className="avatar"
          width="140"
          height="140"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </div>
      <h1 className="name">Muhammad Fikri</h1>
      <p className="status">Pelajar Sekolah</p>
      <p className="bio" aria-live="polite">
        <span className="typing-text">{displayedText}</span>
        <span className="cursor"></span>
      </p>
    </section>
  )
}

export default About
