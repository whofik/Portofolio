import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import Music from '../../components/Music'

describe('Music', () => {
  it('renders the section title', () => {
    const { getByText } = render(<Music />)
    expect(getByText('Spotify')).toBeInTheDocument()
  })

  it('has correct section id', () => {
    render(<Music />)
    expect(document.getElementById('music')).toBeInTheDocument()
  })

  it('renders Spotify iframe', () => {
    render(<Music />)
    const iframe = document.querySelector('iframe')
    expect(iframe).toBeInTheDocument()
    expect(iframe.src).toContain('open.spotify.com/embed')
  })

  it('iframe has lazy loading', () => {
    render(<Music />)
    const iframe = document.querySelector('iframe')
    expect(iframe.getAttribute('loading')).toBe('lazy')
  })
})
