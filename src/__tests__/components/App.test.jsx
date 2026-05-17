import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import App from '../../App'
import { author } from '../../constants/settings'

function renderApp() {
  return render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  )
}

describe('App', () => {
  it('renders without crashing', () => {
    renderApp()
    expect(document.querySelector('.app')).toBeInTheDocument()
  })

  it('renders the main element', () => {
    renderApp()
    expect(document.querySelector('.main')).toBeInTheDocument()
  })

  it('renders the About section (eager loaded)', () => {
    renderApp()
    const elements = screen.getAllByText(author.fullName)
    expect(elements.length).toBeGreaterThanOrEqual(1)
  })

  it('renders the Skills section (eager loaded)', () => {
    renderApp()
    expect(screen.getByText('My Skills')).toBeInTheDocument()
  })
})
