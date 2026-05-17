import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Skills from '../../components/Skills'

describe('Skills', () => {
  it('renders the section title', () => {
    render(<Skills />)
    expect(screen.getByText('My Skills')).toBeInTheDocument()
  })

  it('has the skills section with correct id', () => {
    render(<Skills />)
    expect(document.getElementById('skills')).toBeInTheDocument()
  })

  it('renders all 6 skills', () => {
    render(<Skills />)
    expect(screen.getByText('JavaScript')).toBeInTheDocument()
    expect(screen.getByText('Python')).toBeInTheDocument()
    expect(screen.getByText('Scraping Website')).toBeInTheDocument()
    expect(screen.getByText('Vibe Code')).toBeInTheDocument()
    expect(screen.getByText('Yapping')).toBeInTheDocument()
    expect(screen.getByText('Turu')).toBeInTheDocument()
  })

  it('renders progress bars with correct widths', () => {
    render(<Skills />)
    const progressBars = document.querySelectorAll('.progress')
    expect(progressBars.length).toBe(6)
    expect(progressBars[0].style.width).toBe('30%')
    expect(progressBars[3].style.width).toBe('100%')
  })

  it('renders percentage labels', () => {
    render(<Skills />)
    expect(screen.getByText('30%')).toBeInTheDocument()
    const hundredPercents = screen.getAllByText('100%')
    expect(hundredPercents).toHaveLength(2)
    expect(screen.getByText('80%')).toBeInTheDocument()
  })
})
