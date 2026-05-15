import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import '../framer/styles.css'
import './App.css'

import Footer from '../framer/footer'

import Home from './pages/Home'
import About from './pages/About'
import Notes from './pages/Notes'
import Contact from './pages/Contact'
import Projects from './pages/Projects'

const siteUrl = 'https://departamentuldebranding.ro'

const routeMeta = {
  '/': {
    title: 'Departamentul de Branding | Marketing, Branding, Web, SEO și AI',
    description: 'Studio de marketing, branding și digital pentru businessuri care vor mai multă claritate, vizibilitate și creștere coerentă.'
  },
  '/projects': {
    title: 'Servicii | Departamentul de Branding',
    description: 'Branding, marketing, social media, web, SEO și AI conectate într-un sistem coerent pentru vizibilitate, consistență și creștere.'
  },
  '/about': {
    title: 'Despre Noi | Departamentul de Branding',
    description: 'Un studio de marketing, branding și digital pentru businessuri care vor mai multă claritate, vizibilitate și control.'
  },
  '/notes': {
    title: 'Note | Brand, Marketing, Digital și AI',
    description: 'Idei despre brand, marketing, conținut, digital și AI pentru businessuri care vor să devină mai clare și mai vizibile.'
  },
  '/blog': {
    title: 'Note | Brand, Marketing, Digital și AI',
    description: 'Idei despre brand, marketing, conținut, digital și AI pentru businessuri care vor să devină mai clare și mai vizibile.'
  },
  '/contact': {
    title: 'Contact | Departamentul de Branding',
    description: 'Hai să vorbim despre proiectul tău: branding, marketing, social media, website, SEO, automatizări sau strategie de creștere.'
  }
}

function setMeta(selector, value, attr = 'content') {
  const element = document.head.querySelector(selector)
  if (element) element.setAttribute(attr, value)
}

function MetaManager() {
  const location = useLocation()

  useEffect(() => {
    const meta = routeMeta[location.pathname] || routeMeta['/']
    const canonical = `${siteUrl}${location.pathname === '/' ? '/' : location.pathname}`

    document.title = meta.title
    setMeta('meta[name="description"]', meta.description)
    setMeta('meta[property="og:title"]', meta.title)
    setMeta('meta[property="og:description"]', meta.description)
    setMeta('meta[property="og:url"]', canonical)
    setMeta('meta[name="twitter:title"]', meta.title)
    setMeta('meta[name="twitter:description"]', meta.description)
    setMeta('link[rel="canonical"]', canonical, 'href')
  }, [location.pathname])

  return null
}

function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="header-left">
          <Link to="/" className="logo">.departamentul de<br /><span className="logo-accent">branding</span></Link>
          <nav className="nav-desktop">
            <Link to="/projects" className="nav-link">servicii</Link>
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
          <Link to="/" className="footer-link">.departamentul de branding</Link>
        </div>
        <nav className="footer-nav">
          <Link to="/projects" className="footer-link">servicii</Link>
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
        <MetaManager />
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
