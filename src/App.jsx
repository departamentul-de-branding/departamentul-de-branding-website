import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import '../framer/styles.css'
import './App.css'

import Footer from '../framer/footer'

import Home from './pages/Home'
import About from './pages/About'
import Notes from './pages/Notes'
import Contact from './pages/Contact'
import Projects from './pages/Projects'

function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="header-left">
          <Link to="/" className="logo">.departamentul de<br /><span className="logo-accent">branding</span></Link>
          <nav className="nav-desktop">
            <Link to="/projects" className="nav-link">proiecte</Link>
            <Link to="/about" className="nav-link">despre</Link>
            <Link to="/notes" className="nav-link">note</Link>
            <Link to="/contact" className="nav-link">contact</Link>
          </nav>
        </div>
        <a href="/contact" className="btn-primary">contactează-ne</a>
      </div>
    </header>
  )
}

function AppFooter() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <a href="https://easyfast.design/" className="footer-link" target="_blank" rel="noopener noreferrer">easyfast.design</a>
        </div>
        <nav className="footer-nav">
          <Link to="/projects" className="footer-link">proiecte</Link>
          <Link to="/about" className="footer-link">despre</Link>
          <Link to="/notes" className="footer-link">note</Link>
          <Link to="/contact" className="footer-link">contact</Link>
        </nav>
        <div className="footer-right">
          <a href="/contact" className="btn-secondary">contactează-ne</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="bg-grid">
          <span /><span /><span /><span /><span /><span /><span /><span /><span />
        </div>
        <div className="bg-grain" />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/blog" element={<Notes />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <AppFooter />
      </div>
    </BrowserRouter>
  )
}
