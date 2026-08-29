import { lazy, Suspense, useEffect } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import Header from './components/Header'
import About from './components/About'
import Location from './components/Location'
import Skills from './components/Skills'
import ErrorBoundary from './components/ErrorBoundary'
import SEO from './components/SEO'
import './styles/App.css'

const Certificates = lazy(() => import('./components/Certificates'))
const Projects = lazy(() => import('./components/Projects'))
const Music = lazy(() => import('./components/Music'))
const Contact = lazy(() => import('./components/Contact'))

function prefetchLazy() {
  const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 1500))
  idle(() => {
    import('./components/Certificates')
    import('./components/Projects')
    import('./components/Music')
    import('./components/Contact')
  })
}

function App() {
  useEffect(() => { prefetchLazy() }, [])
  return (
    <HelmetProvider>
      <SEO />
      <div className="app">
        <Header />
        <main className="main">
          <ErrorBoundary>
            <About />
          </ErrorBoundary>
          <ErrorBoundary>
            <Skills />
          </ErrorBoundary>
          <ErrorBoundary>
            <Location />
          </ErrorBoundary>
          <Suspense fallback={<div className="section" aria-hidden="true" style={{ minHeight: 200 }} />}>
            <ErrorBoundary>
              <Certificates />
            </ErrorBoundary>
          </Suspense>
          <Suspense fallback={<div className="section" aria-hidden="true" style={{ minHeight: 200 }} />}>
            <ErrorBoundary>
              <Projects />
            </ErrorBoundary>
          </Suspense>
          <Suspense fallback={<div className="section" aria-hidden="true" style={{ minHeight: 120 }} />}>
            <ErrorBoundary>
              <Music />
            </ErrorBoundary>
          </Suspense>
          <Suspense fallback={<div className="section" aria-hidden="true" style={{ minHeight: 120 }} />}>
            <ErrorBoundary>
              <Contact />
            </ErrorBoundary>
          </Suspense>
        </main>
      </div>
    </HelmetProvider>
  )
}

export default App
