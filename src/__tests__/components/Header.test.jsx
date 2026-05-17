import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Header from '../../components/Header'

describe('Header', () => {
  it('renders the brand title', () => {
    render(<Header />)
    expect(screen.getByText('Portofolio')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Header />)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Skills')).toBeInTheDocument()
    expect(screen.getByText('Location')).toBeInTheDocument()
    expect(screen.getByText('Certificates')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Music')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('has correct href attributes', () => {
    render(<Header />)
    expect(screen.getByText('About').closest('a')).toHaveAttribute('href', '#about')
    expect(screen.getByText('Contact').closest('a')).toHaveAttribute('href', '#contact')
  })

  it('toggles mobile menu', () => {
    render(<Header />)
    const btn = document.querySelector('.menu-toggle')
    const nav = document.querySelector('.nav')
    expect(nav).not.toHaveClass('nav-open')
    fireEvent.click(btn)
    expect(nav).toHaveClass('nav-open')
    fireEvent.click(btn)
    expect(nav).not.toHaveClass('nav-open')
  })

  it('closes menu on nav click', () => {
    render(<Header />)
    fireEvent.click(document.querySelector('.menu-toggle'))
    fireEvent.click(screen.getByText('About'))
    expect(document.querySelector('.nav')).not.toHaveClass('nav-open')
  })

  it('has accessible menu button', () => {
    render(<Header />)
    const btn = document.querySelector('.menu-toggle')
    expect(btn).toHaveAttribute('aria-label')
    expect(btn).toHaveAttribute('aria-expanded')
  })
})
