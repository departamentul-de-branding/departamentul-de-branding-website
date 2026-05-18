import { Link } from 'react-router-dom'

const projects = [
  {
    id: 1,
    title: "Brand Strategy & Identity",
    category: "Brand Strategy & Identity",
    year: "2026",
    link: "/services/brand-identity",
    background: "#ff6200",
    textColor: "#000",
    description: "Poziționare, direcție vizuală, mesaje și sistem de brand pregătit pentru comunicare.",
    tags: ["Strategie", "Identitate", "Brand book"]
  },
  {
    id: 2,
    title: "Marketing & Growth Strategy",
    category: "Marketing & Growth",
    year: "2026",
    link: "/services/strategy",
    background: "#f5f5f5",
    textColor: "#0066ff",
    description: "Strategii, campanii, funnel-uri și planuri de acțiune construite în jurul obiectivelor de business.",
    tags: ["Audit", "Campanii", "Growth"]
  },
  {
    id: 3,
    title: "Social Media Management",
    category: "Social Media Management",
    year: "2026",
    link: "/services/social-media",
    background: "#E1306C",
    textColor: "#fff",
    description: "Prezență social media gestionată complet: strategie, conținut, publicare, community management și optimizare lunară.",
    tags: ["Strategie", "Content", "Community"]
  },
  {
    id: 4,
    title: "Web, UX & Digital Products",
    category: "Web & Digital Products",
    year: "2026",
    link: "/services/web-digital",
    background: "#ffcc00",
    textColor: "#000",
    description: "Website-uri, landing pages, interfețe și produse digitale gândite pentru claritate și conversie.",
    tags: ["UI", "UX", "Web"]
  },
  {
    id: 5,
    title: "SEO & Organic Visibility",
    category: "SEO & GEO",
    year: "2026",
    link: "/services/seo",
    background: "#2d2d2d",
    textColor: "#fff",
    description: "Optimizare tehnică, structură de conținut și creștere organică în search și medii AI.",
    tags: ["SEO", "Conținut", "GEO"]
  },
  {
    id: 6,
    title: "AI, Automation & Intelligence",
    category: "AI & Automation",
    year: "2026",
    link: "/services/ai",
    background: "#7C3AED",
    textColor: "#fff",
    description: "Automatizări, chatbot-uri, agenți AI și sisteme inteligente pentru procese mai rapide.",
    tags: ["AI", "Automatizare", "Integrare"]
  },
]

export default function Projects() {
  return (
    <div className="page-content">
      <section className="page-hero">
        <div className="container">
          <span className="section-tag">// SERVICII</span>
          <h1 className="page-title">Servicii și direcții de lucru</h1>
          <p className="page-subtitle">
            Branding, marketing, social media, web, SEO și AI conectate într-un sistem coerent pentru vizibilitate, consistență și creștere.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="work-grid">
            {projects.map((project) => (
              <div
                key={project.id}
                className="work-card"
                style={{ background: project.background, color: project.textColor }}
              >
                <div className="work-card-header">
                  <div className="work-card-logo" style={{ color: project.textColor }}>◆</div>
                  <div className="work-card-info">
                    <h3 className="work-card-title" style={{ color: project.textColor }}>{project.title}</h3>
                    <p className="work-card-description" style={{ color: project.textColor, opacity: 0.7 }}>{project.description}</p>
                  </div>
                </div>
                <div className="work-card-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="work-card-tag" style={{ color: project.textColor, opacity: 0.5, borderColor: project.textColor }}>{tag}</span>
                  ))}
                </div>
                <div className="work-card-footer">
                  <span className="work-card-year" style={{ color: project.textColor, opacity: 0.5 }}>AN/ {project.year}</span>
                  <span className="work-card-category" style={{ color: project.textColor, opacity: 0.5 }}>{project.category}</span>
                </div>
                <div className="work-card-image"></div>
              </div>
            ))}
          </div>

          <div className="work-footer">
            <span className="work-footer-years">Departament activ / 2026</span>
            <Link to="/contact" className="work-footer-link">
              Discută un proiect <span className="work-footer-count">6</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
