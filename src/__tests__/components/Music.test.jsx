import { describe, it, expect } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
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

  it('renders Spotify facade button initially (perf: no iframe until interaction)', () => {
    render(<Music />)
    expect(document.querySelector('.spotify-facade')).toBeInTheDocument()
    expect(document.querySelector('iframe')).not.toBeInTheDocument()
  })

  it('loads iframe after facade click with lazy loading', () => {
    render(<Music />)
    const btn = document.querySelector('.spotify-facade')
    fireEvent.click(btn)
    const iframe = document.querySelector('iframe')
    expect(iframe).toBeInTheDocument()
    expect(iframe.src).toContain('open.spotify.com/embed')
    expect(iframe.getAttribute('loading')).toBe('lazy')
  })
})
