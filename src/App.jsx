import { lazy, Suspense } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import ErrorBoundary from './components/ErrorBoundary'
import SEO from './components/SEO'
import './styles/App.css'

const Certificates = lazy(() => import('./components/Certificates'))
const Projects = lazy(() => import('./components/Projects'))
const Music = lazy(() => import('./components/Music'))
const Contact = lazy(() => import('./components/Contact'))

function App() {
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
          <Suspense fallback={null}>
            <ErrorBoundary>
              <Certificates />
            </ErrorBoundary>
          </Suspense>
          <Suspense fallback={null}>
            <ErrorBoundary>
              <Projects />
            </ErrorBoundary>
          </Suspense>
          <Suspense fallback={null}>
            <ErrorBoundary>
              <Music />
            </ErrorBoundary>
          </Suspense>
          <Suspense fallback={null}>
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
