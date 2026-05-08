import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import HeadingCycler from '../../framer/heading-cycler'
import Button from '../../framer/button'
import abstractSocialVideo from '../../assets/abstract_social2.mp4'

const projects = [
  {
    id: 1,
    title: "Brand Identity",
    category: "Branding și Identitate",
    year: "2025",
    link: "/services/brand-identity",
    background: "#FF6B00",
    textColor: "#000000",
    image: "/images/brand-identity.png",
    video: "/images/abstract.mp4",
    subtitle: "Identitate nouă și sistem de comunicare pentru un brand aflat în proces de repoziționare.",
    tags: ["Poziționare de brand și arhitectură de mesaje", "Sisteme de identitate vizuală", "Ghiduri de brand pentru utilizare coerentă", "Sisteme de brand gândite pentru digital", "Asset-uri de brand pentru campanii și canale de comunicare"]
  },
  {
    id: 2,
    title: "Marketing Strategy",
    category: "Strategie",
    year: "2025",
    link: "/services/strategy",
    background: "#FFFFFF",
    textColor: "#4400FF",
    image: "/images/marketing-strategy.png",
    video: "/images/abstract_marketing.mp4",
    subtitle: "Strategie, design și dezvoltare pentru o prezență digitală mai clară și mai eficientă.",
    tags: ["Cercetare de piață și analiză de audiență", "Strategie de produs și campanii", "Maparea parcursului utilizatorului", "Planuri de implementare și rollout", "Workshop-uri de aliniere și clarificare strategică"]
  },
  {
    id: 3,
    title: "Social Media Management",
    category: "Social Media",
    year: "2025",
    link: "/services/social-media",
    background: "#E1306C",
    textColor: "#FFFFFF",
    image: "/images/social-media.png",
    video: abstractSocialVideo,
    subtitle: "Strategie și management de social media pentru creștere organică și engagement constant.",
    tags: ["Strategie de conținut pentru social media", "Creare și programare de postări", "Community management și engagement", "Monitorizare și raportare de performanță", "Campanii organice și colaborări"]
  },
  {
    id: 4,
    title: "Design & Innovation",
    category: "UI/UX",
    year: "2025",
    link: "/services/design",
    background: "#FFD000",
    textColor: "#000000",
    image: "/images/design-innovation.png",
    video: "/images/abstract_design.mp4",
    subtitle: "Website și structură de conținut construite pentru performanță și scalare.",
    tags: ["Design UX și UI", "Prototipare și testare cu utilizatori", "Design de produse și servicii digitale", "Iterare și validare", "Planificare de lansare și suport"]
  },
  {
    id: 5,
    title: "Development",
    category: "Dezvoltare Web",
    year: "2025",
    link: "/services/development",
    background: "#0A0A1A",
    textColor: "#22C55E",
    image: "/images/development.png",
    video: "/images/abstract_development.mp4",
    videoCrop: 1.6,
    subtitle: "Experiență digitală regândită pentru un produs care avea nevoie de mai multă claritate.",
    tags: ["Website-uri de prezentare", "Landing pages și pagini de conversie", "Magazine online", "Dezvoltare web custom", "Optimizare tehnică și mentenanță"]
  },
  {
    id: 6,
    title: "SEO & GEO",
    category: "Optimizare Search",
    year: "2025",
    link: "/services/seo",
    background: "#1A1A1A",
    textColor: "#FFFFFF",
    image: "/images/seo-geo.png",
    video: "/images/abstract_seo.mp4",
    videoCrop: 1.8,
    subtitle: "Sistem vizual și rollout de campanie pentru un brand într-o nouă etapă de creștere.",
    tags: ["Audit SEO și analiză tehnică", "Optimizare on-page și structură de conținut", "Strategie editorială pentru creștere organică", "Optimizare pentru vizibilitate în medii AI", "Monitorizare, ajustare și creștere continuă"]
  },
  {
    id: 7,
    title: "AI Systems",
    category: "Inteligență Artificială",
    year: "2025",
    link: "/services/ai",
    background: "#7C3AED",
    textColor: "#FFFFFF",
    image: "/images/ai-systems.png",
    video: "/images/abstract_ai.mp4",
    subtitle: "Automatizare și integrare AI pentru procese mai rapide și mai bine organizate.",
    tags: ["Automatizări bazate pe AI", "Asistenți conversaționali și agenți AI", "Integrare AI în procese și fluxuri interne", "Sisteme inteligente pentru suport, vânzări sau operațiuni", "Soluții AI custom, adaptate contextului de business"]
  }
]

const plans = [
  {
    id: 1,
    number: "01",
    name: "Core",
    subtitle: "Plan de Start",
    description: "Pentru startup-uri și primele lansări",
    timeline: "2-3 săptămâni",
    tagline: "Simplu, rapid și eficient — ca să te poți concentra pe creșterea business-ului.",
    features: [
      "Kit de identitate de brand",
      "Design website (pagini principale)",
      "Revizuiri standard",
      "Setup SEO de bază",
      "Imagini stock nelimitate",
      "Fișiere sursă native incluse",
      "Livrare finală completă"
    ],
    extras: [
      "Milestone-uri clare de la început până la final",
      "Te ținem la curent pe tot parcursul",
      "Feedback integrat în proces"
    ]
  },
  {
    id: 2,
    number: "02",
    name: "Studio",
    subtitle: "Plan Avansat",
    description: "Pentru echipe în creștere și proiecte serioase",
    timeline: "4-6 săptămâni",
    tagline: "Pachet complet cu flexibilitate, design avansat și suportul de care ai nevoie pentru a crește mai rapid.",
    features: [
      "Branding extins",
      "Design website complet",
      "Fluxuri UX și design de produs",
      "Revizuiri nelimitate",
      "SEO avansat și conținut",
      "Suport prioritar",
      "Livrare finală"
    ],
    extras: [
      "Design mai profund pentru nevoi complexe",
      "Ajustări nelimitate înainte de lansare",
      "Răspunsuri rapide când ai nevoie de noi"
    ]
  },
  {
    id: 3,
    number: "03",
    name: "Scale",
    subtitle: "Plan de Creștere",
    description: "Pentru echipe stabilite și creștere pe termen lung",
    timeline: "6-8 săptămâni",
    tagline: "Strategie, design și suport dedicat pentru proiecte complexe care necesită scalabilitate și rafinament.",
    features: [
      "Strategie de brand end-to-end",
      "Website complex cu CMS",
      "Design UX și produs avansat",
      "Manageri seniori dedicați",
      "Micro-interacțiuni avansate",
      "Optimizare și suport",
      "Livrare la nivel enterprise"
    ],
    extras: [
      "Soluții scalabile gândite pentru creștere",
      "Manager dedicat care ghidează fiecare etapă",
      "Suport pe termen lung, dincolo de lansare"
    ]
  }
]

const stats = [
  { num: 86, suffix: "+", label: "Proiecte livrate", id: "001" },
  { num: 80, suffix: "%", label: "Colaborări repetate", id: "002" },
  { num: 32, suffix: "", label: "Premii în industrie", id: "003" },
  { num: 89, suffix: "%", label: "Rată de retenție clienți", id: "004" }
]

const blogPosts = [
  {
    title: "Cum să începi și să crești o carieră în web design",
    date: "8 Apr 2022",
    link: "/blog/starting-a-career-in-web-design"
  },
  {
    title: "Cum creezi un landing page care performează",
    date: "15 Mar 2022",
    link: "/blog/create-a-landing-page-that-performs-great"
  },
  {
    title: "Cum se pot pregăti designerii pentru viitor?",
    date: "28 Feb 2022",
    link: "/blog/how-can-designers-prepare-for-the-future"
  },
]

function ProjectCard({ project, index, total, cardRef }) {
  return (
    <div 
      ref={cardRef}
      className="project-card-wrapper"
      data-index={index}
      style={{ '--index': index, '--total': total }}
    >
      <a href={project.link} className="project-card" style={{ background: project.background }}>
        <div className="project-card-header">
          <div className="project-card-meta" style={{ color: project.textColor }}>
            <span>{project.year}</span>
            <span>{project.category}</span>
          </div>
          <div className="project-card-title-row">
            <h3 className="project-card-title" style={{ color: project.textColor }}>{project.title}</h3>
            <span className="project-card-arrow" style={{ color: project.textColor }}>↗</span>
          </div>
          {project.subtitle && <p className="project-card-subtitle" style={{ color: project.textColor }}>{project.subtitle}</p>}
        </div>
        <div className="project-card-body">
          <div className="project-card-image">
            {project.video ? (
              <>
              <video
                autoPlay
                muted
                loop
                playsInline
                style={
                  project.videoCrop != null
                    ? { '--video-scale': project.videoCrop }
                    : undefined
                }
              >
                <source src={project.video} type="video/mp4" />
              </video>
                <div className="project-card-video-overlay">
                  <span className="project-card-play">
                    <span className="play-icon">▶</span>
                    <span>Vezi proiectul</span>
                  </span>
                </div>
              </>
            ) : (
              project.image && <img src={project.image} alt={project.title} />
            )}
          </div>
          <ul className="project-card-list" style={{ color: project.textColor }}>
            {project.tags.map((tag, i) => (
              <li key={i}>{tag}</li>
            ))}
          </ul>
        </div>
      </a>
    </div>
  )
}

function ProjectsSection({ projects }) {
  const cardRefs = useRef([])
  
  useEffect(() => {
    const handleScroll = () => {
      const cards = cardRefs.current
      const stickyTop = 60
      
      cards.forEach((card, index) => {
        if (!card) return
        const rect = card.getBoundingClientRect()
        const isPinned = rect.top <= stickyTop + 5
        
        let stackedCount = 0
        for (let i = index + 1; i < cards.length; i++) {
          const nextCard = cards[i]
          if (nextCard) {
            const nextRect = nextCard.getBoundingClientRect()
            if (nextRect.top <= stickyTop + 20) stackedCount++
          }
        }
        
        const scale = Math.max(0.85, 1 - (stackedCount * 0.05))
        const translateY = stackedCount * -10
        
        if (isPinned && stackedCount > 0) {
          card.style.transform = `scale(${scale}) translateY(${translateY}px)`
          card.style.opacity = Math.max(0.6, 1 - (stackedCount * 0.15))
        } else {
          card.style.transform = 'scale(1) translateY(0)'
          card.style.opacity = '1'
        }
      })
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <section className="projects">
      <div className="container">
        <div className="projects-header">
          <span className="section-tag">SERVICII</span>
          <h2 className="projects-title">Ce facem cel mai bine</h2>
        </div>
      </div>
      <div className="projects-stack">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            index={index}
            total={projects.length}
            cardRef={el => cardRefs.current[index] = el}
          />
        ))}
      </div>
    </section>
  )
}

function AnimatedNumber({ target, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const start = performance.now()
          const animate = (now) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

function PerformanceSection() {
  return (
    <section className="performance">
      <div className="container">
        <div className="performance-layout">
          <div className="performance-left">
            <span className="section-tag">PERFORMANȚĂ</span>
            <h2 className="performance-title">Dovada din spatele muncii noastre</h2>
            <p className="performance-subtitle">De la primele lansări la colaborări de lungă durată, suntem de încredere să livrăm la timp și la calitate.</p>
          </div>
          <div className="performance-right">
            {stats.map((stat, index) => (
              <div key={stat.id} className="stat-row" style={{ '--delay': `${index * 0.1}s` }}>
                <div className="stat-number">
                  <AnimatedNumber target={stat.num} suffix={stat.suffix} />
                </div>
                <div className="stat-info">
                  <span className="stat-label">{stat.label}</span>
                  <span className="stat-id">//{stat.id}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function PlanCard({ plan, isOpen, onToggle }) {
  return (
    <div className={`plan-expandable ${isOpen ? 'is-open' : ''}`}>
      <button className="plan-expandable-header" onClick={onToggle}>
        <div className="plan-expandable-left">
          <span className="plan-expandable-name">{plan.name}</span>
          <span className="plan-expandable-subtitle">{plan.subtitle}</span>
        </div>
        <div className="plan-expandable-right">
          <span className="plan-expandable-desc">{plan.description}</span>
          <span className="plan-expandable-toggle">{isOpen ? '−' : '+'}</span>
        </div>
      </button>
      {isOpen && (
        <div className="plan-expandable-body">
          <p className="plan-expandable-tagline"><em>{plan.tagline}</em></p>
          <div className="plan-expandable-content">
            <div className="plan-expandable-features">
              <ul>
                {plan.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <div className="plan-expandable-extras">
                {plan.extras.map((e, i) => (
                  <div key={i} className="plan-extra-item">
                    <span className="plan-extra-icon">+</span>
                    <em>{e}</em>
                  </div>
                ))}
              </div>
            </div>
            <div className="plan-expandable-footer">
              <a href="/contact" className="plan-expandable-cta">ÎNCEPE ACUM</a>
              <div className="plan-expandable-meta">
                <span className="plan-expandable-timeline">Durată</span>
                <span className="plan-expandable-timeline-value">{plan.timeline}</span>
              </div>
              <span className="plan-expandable-number">{plan.number}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function PricingSection() {
  const [openPlan, setOpenPlan] = useState(null)
  
  return (
    <section className="pricing-section">
      <div className="container">
        <div className="pricing-header">
          <span className="section-tag">PREȚURI</span>
          <h2 className="pricing-title">Planuri construite pe măsura proiectului tău</h2>
          <p className="pricing-subtitle">Fiecare plan îți oferă claritate asupra scopului, funcționalităților și livrabilelor.</p>
        </div>
        <div className="pricing-expandable-list">
          {plans.map((plan) => (
            <PlanCard 
              key={plan.id} 
              plan={plan} 
              isOpen={openPlan === plan.id}
              onToggle={() => setOpenPlan(openPlan === plan.id ? null : plan.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-top">
            <div className="hero-top-left">
              <span className="hero-id">// 00.01°</span>
            </div>
            <div className="status-badge">
              <span className="status-dot"></span>
              disponibil pentru proiecte noi
            </div>
          </div>
          <div className="hero-headline">
            <HeadingCycler
              heading="Departamentul de"
              word1="branding"
              word2="marketing"
              word3="design"
              word4="development"
              word5="AI"
              color1="#FF6B00"
              color2="#FFFFFF"
              color3="#FFD000"
              color4="#4ECDC4"
              color5="#7C3AED"
              intervalS={2}
              animationS={0.3}
            />
          </div>
          <div className="hero-bottom">
            <p className="hero-description">Experiențe digitale care conectează, scalează și performează.</p>
            <a href="/contact" className="hero-cta">
              <span>Hai să vorbim</span>
              <span className="hero-cta-arrow">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* Video Showreel */}
      <section className="video-section">
        <div className="video-wrapper">
          <video autoPlay muted loop playsInline>
            <source src="/images/abstract_head.mp4" type="video/mp4" />
          </video>
          <div className="video-overlay">
            <span className="video-tag">SHOWREEL 2025</span>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection projects={projects} />

      {/* Performance Section */}
      <PerformanceSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* About Section */}
      <section className="about">
        <div className="container">
          <span className="section-label">.despre noi</span>
          <p className="about-text">
            construim experiențe care aduc valoare oamenilor și celebrează funcția deasupra formei. lăsăm ego-ul deoparte, dăm libertate creativității și facem primul pas mic spre o lume mai bună
          </p>
          <Button label="despre noi" link="/about" />
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog">
        <div className="container">
          <span className="section-label">.ultimele trei note</span>
          <div className="blog-list">
            {blogPosts.map((post, index) => (
              <a key={index} href={post.link} className="blog-post">
                <span className="blog-post-title">{post.title}</span>
                <span className="blog-post-date">{post.date}</span>
              </a>
            ))}
          </div>
          <Button label="vezi blogul" link="/notes" />
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="contact-cta">
        <div className="container">
          <span className="section-label">.salut</span>
          <h2 className="contact-cta-title">Hai să creăm ceva extraordinar împreună</h2>
          <p className="contact-cta-text">Suntem deschiși pentru proiecte noi, scrie-ne să vedem cum putem colabora</p>
          <Link to="/contact" className="btn-primary btn-large">contactează-ne</Link>
        </div>
      </section>
    </>
  )
}
