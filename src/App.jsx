import { HelmetProvider } from 'react-helmet-async'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Certificates from './components/Certificates'
import Projects from './components/Projects'
import Music from './components/Music'
import Contact from './components/Contact'
import SEO from './components/SEO'
import './styles/App.css'

function App() {
  return (
    <HelmetProvider>
      <SEO />
      <div className="app">
        <Header />
        <main className="main">
          <About />
          <Skills />
          <Certificates />
          <Projects />
          <Music />
          <Contact />
        </main>
      </div>
    </HelmetProvider>
  )
}

export default App
