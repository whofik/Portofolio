import { useState, useEffect } from 'react'
import '../styles/About.css'
import avatarimg from '../assets/avatar.jpg'
import { author } from '../constants/settings'

function About() {
  const quote = "It always seems impossible until it's done"
  const [displayedtext, setdisplayedtext] = useState('')
  const [currentindex, setcurrentindex] = useState(0)

  useEffect(() => {
    if (currentindex < quote.length) {
      const timeout = setTimeout(() => {
        setdisplayedtext(prev => prev + quote[currentindex])
        setcurrentindex(prev => prev + 1)
      }, 80)
      return () => clearTimeout(timeout)
    }
  }, [currentindex])

  return (
    <section id="about" className="section about">
      <div className="profile-container">
        <img
          src={avatarimg}
          alt={`${author.fullName} - ${author.jobTitle} & Web Developer`}
          className="avatar"
          width="140"
          height="140"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </div>
      <h1 className="name">{author.fullName}</h1>
      <p className="status">{author.jobTitle}</p>
      <p className="bio" aria-live="polite">
        <span className="typing-text">{displayedtext}</span>
        <span className="cursor"></span>
      </p>
    </section>
  )
}

export default About
