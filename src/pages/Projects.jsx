import { Link } from 'react-router-dom'

const projects = [
  {
    id: 1,
    title: "bizz buzz",
    category: "Personal Project",
    year: "2023",
    link: "/work/bizzbuzz/",
    background: "#ff6200",
    textColor: "#000",
    description: "Branding and website design",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"]
  },
  {
    id: 2,
    title: "aquaflow",
    category: "Branding and Identity",
    year: "2023",
    link: "/work/aquaflow/",
    background: "#f5f5f5",
    textColor: "#0066ff",
    description: "E-commerce platform redesign",
    tags: ["React", "Node.js", "Stripe"]
  },
  {
    id: 3,
    title: "snackify",
    category: "UI/UX",
    year: "2023",
    link: "/work/snackify/",
    background: "#ffcc00",
    textColor: "#000",
    description: "Mobile app design",
    tags: ["Figma", "React Native", "Firebase"]
  },
  {
    id: 4,
    title: "zengo",
    category: "Personal Project",
    year: "2023",
    link: "/work/zengo/",
    background: "#1a1a2e",
    textColor: "#4ade80",
    description: "Meditation app experience",
    tags: ["Swift", "SwiftUI", "CloudKit"]
  },
  {
    id: 5,
    title: "roverride",
    category: "Branding and Identity",
    year: "2023",
    link: "/work/roverride/",
    background: "#2d2d2d",
    textColor: "#fff",
    description: "Automotive digital transformation",
    tags: ["WebGL", "Three.js", "GSAP"]
  },
]

export default function Projects() {
  return (
    <div className="page-content">
      <section className="page-hero">
        <div className="container">
          <span className="section-tag">// WORK</span>
          <h1 className="page-title">Selected Work</h1>
          <p className="page-subtitle">
            A collection of projects spanning brand identity, digital products, and websites.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="work-grid">
            {projects.map((project) => (
              <Link 
                key={project.id} 
                to={project.link} 
                className="work-card"
                style={{ background: project.background }}
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
                  <span className="work-card-year" style={{ color: project.textColor, opacity: 0.5 }}>YR/ {project.year}</span>
                  <span className="work-card-category" style={{ color: project.textColor, opacity: 0.5 }}>{project.category}</span>
                </div>
                <div className="work-card-image"></div>
              </Link>
            ))}
          </div>
          
          <div className="work-footer">
            <span className="work-footer-years">2017-2025</span>
            <Link to="/contact" className="work-footer-link">
              More Projects <span className="work-footer-count">5</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
