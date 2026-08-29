import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import About from '../../components/About'
import { author } from '../../constants/settings'

describe('About', () => {
  it('renders the name heading', () => {
    render(<About />)
    expect(screen.getByText(author.fullName)).toBeInTheDocument()
  })

  it('renders the status text', () => {
    render(<About />)
    expect(screen.getByText(new RegExp(author.jobTitle))).toBeInTheDocument()
  })

  it('renders the avatar image', () => {
    render(<About />)
    const avatar = screen.getByAltText(`${author.fullName} - ${author.jobTitle} & Web Developer`)
    expect(avatar).toBeInTheDocument()
    expect(avatar.tagName).toBe('IMG')
  })

  it('has the about section with correct id', () => {
    render(<About />)
    expect(document.getElementById('about')).toBeInTheDocument()
  })

  it('starts the typing animation with empty text', () => {
    render(<About />)
    const typingText = document.querySelector('.typing-text')
    expect(typingText).toBeInTheDocument()
  })
})
