import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Contact from '../../components/Contact'

describe('Contact', () => {
  it('renders the section title', () => {
    render(<Contact />)
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('has correct section id', () => {
    render(<Contact />)
    expect(document.getElementById('contact')).toBeInTheDocument()
  })

  it('renders all 3 contact links', () => {
    render(<Contact />)
    expect(screen.getByText('Telegram')).toBeInTheDocument()
    expect(screen.getByText('Instagram')).toBeInTheDocument()
    expect(screen.getByText('WhatsApp Channel')).toBeInTheDocument()
  })

  it('has correct hrefs', () => {
    render(<Contact />)
    const telegram = screen.getByText('Telegram').closest('a')
    expect(telegram).toHaveAttribute('href', 'https://FikXzXmodsTzy.t.me')

    const instagram = screen.getByText('Instagram').closest('a')
    expect(instagram).toHaveAttribute('href', 'https://www.instagram.com/fmds_whps')
  })

  it('links open in new tab', () => {
    render(<Contact />)
    const links = document.querySelectorAll('.contact-card')
    links.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })

  it('has accessible aria labels', () => {
    render(<Contact />)
    const links = document.querySelectorAll('.contact-card')
    links.forEach(link => {
      expect(link).toHaveAttribute('aria-label')
    })
  })
})
