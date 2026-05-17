import { Component } from 'react'

/**
 * Error Boundary component that catches JavaScript errors in child components
 * and displays a minimal fallback UI instead of crashing the entire app.
 *
 * Usage: <ErrorBoundary><ChildComponent /></ErrorBoundary>
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('[ErrorBoundary] Component error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || null
    }
    return this.props.children
  }
}

export default ErrorBoundary
