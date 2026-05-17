import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import ErrorBoundary from '../../components/ErrorBoundary'

function BrokenComponent() {
  throw new Error('Test crash')
}

function WorkingComponent() {
  return <div>Working fine</div>
}

describe('ErrorBoundary', () => {
  // Suppress console.error for expected errors
  const originalError = console.error
  beforeEach(() => {
    console.error = vi.fn()
  })
  afterEach(() => {
    console.error = originalError
  })

  it('renders children when no error', () => {
    render(
      <ErrorBoundary>
        <WorkingComponent />
      </ErrorBoundary>
    )
    expect(screen.getByText('Working fine')).toBeInTheDocument()
  })

  it('renders nothing (null) by default when child throws', () => {
    const { container } = render(
      <ErrorBoundary>
        <BrokenComponent />
      </ErrorBoundary>
    )
    expect(container.innerHTML).toBe('')
  })

  it('renders custom fallback when child throws', () => {
    render(
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <BrokenComponent />
      </ErrorBoundary>
    )
    expect(screen.getByText('Something went wrong')).toBeInTheDocument()
  })

  it('logs error to console', () => {
    render(
      <ErrorBoundary>
        <BrokenComponent />
      </ErrorBoundary>
    )
    expect(console.error).toHaveBeenCalled()
  })
})
