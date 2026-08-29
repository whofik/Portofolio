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
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Vite')).toBeInTheDocument()
    expect(screen.getByText('CSS')).toBeInTheDocument()
    expect(screen.getByText('Git/GitHub')).toBeInTheDocument()
    expect(screen.getByText('Python')).toBeInTheDocument()
  })

  it('renders progress bars with correct widths', () => {
    render(<Skills />)
    const progressBars = document.querySelectorAll('.progress')
    expect(progressBars.length).toBe(6)
    expect(progressBars[0].style.width).toBe('68%')
    expect(progressBars[1].style.width).toBe('62%')
  })

  it('renders percentage labels', () => {
    render(<Skills />)
    expect(screen.getByText('68%')).toBeInTheDocument()
    expect(screen.getByText('62%')).toBeInTheDocument()
    expect(screen.getByText('35%')).toBeInTheDocument()
  })
})
