import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import HeadingCycler from '../../framer/heading-cycler'
import Button from '../../framer/button'
import headAnimation from '../../assets/animation_final.mp4'

const projects = [
  {
    id: 1,
    title: "Brand Strategy & Identity",
    category: "Branding & Identitate",
    year: "2026",
    link: "/services/brand-identity",
    background: "#FF6B00",
    textColor: "#000000",
    image: "/images/service-brand-orange-v2.png",
    subtitle: "Construim identități de brand clare, coerente și ușor de recunoscut — de la poziționare și mesaj până la sistem vizual complet.",
    tags: [
      "Strategie de brand și poziționare",
      "Arhitectură de mesaje și tone of voice",
      "Logo, culori, fonturi și direcție vizuală",
      "Brand book și reguli de utilizare",
      "Asset-uri pentru social media, website și campanii"
    ]
  },
  {
    id: 2,
    title: "Marketing & Growth Strategy",
    category: "Marketing & Strategie",
    year: "2026",
    link: "/services/strategy",
    background: "#FFFFFF",
    textColor: "#4400FF",
    image: "/images/service-strategy-blue-v2.png",
    subtitle: "Transformăm obiectivele de business în strategii de comunicare, campanii și trasee clare de conversie.",
    tags: [
      "Audit de brand, marketing și comunicare",
      "Cercetare de piață, public și competiție",
      "Strategie de campanie și plan de acțiune",
      "Funnel-uri de conversie și lead generation",
      "Calendar de implementare și raportare"
    ]
  },
  {
    id: 3,
    title: "Social Media Management",
    category: "Social Media",
    year: "2026",
    link: "/services/social-media",
    background: "#E1306C",
    textColor: "#FFFFFF",
    image: "/images/service-social-pink-v2.png",
    subtitle: "Gestionăm complet prezența brandului tău în social media — de la strategie și creație până la interacțiunea cu audiența și optimizarea rezultatelor.",
    tags: [
      "Strategie de conținut: target, obiective, tone of voice și direcție vizuală",
      "Plan editorial lunar și copywriting pentru postări",
      "Creare și administrare conturi: Instagram, Facebook, TikTok",
      "Producție content: foto, video și materiale pentru campanii",
      "Editare foto/video: Reels, TikTok, stories și grafică social media",
      "Community management: comentarii, mesaje și engagement",
      "Raportare lunară și recomandări de optimizare"
    ]
  },
  {
    id: 4,
    title: "Web, UX & Digital Products",
    category: "Web & Digital",
    year: "2026",
    link: "/services/web-digital",
    background: "#FFD000",
    textColor: "#000000",
    image: "/images/service-design-yellow-v2.png",
    subtitle: "Creăm website-uri, landing pages și experiențe digitale clare, rapide și orientate spre conversie.",
    tags: [
      "UX/UI design pentru website-uri și produse digitale",
      "Website-uri de prezentare și landing pages",
      "Magazine online și platforme digitale",
      "Prototipare, testare și iterare",
      "Dezvoltare web custom și mentenanță"
    ]
  },
  {
    id: 5,
    title: "SEO & Organic Visibility",
    category: "SEO & GEO",
    year: "2026",
    link: "/services/seo",
    background: "#1A1A1A",
    textColor: "#FFFFFF",
    image: "/images/service-seo-mono-v2.png",
    subtitle: "Optimizăm website-uri și conținut pentru vizibilitate organică în Google, motoare de căutare și medii asistate de AI.",
    tags: [
      "Audit SEO și analiză tehnică",
      "Keyword research și strategie de conținut",
      "Optimizare on-page și structură website",
      "SEO local și optimizare Google Business Profile",
      "Optimizare pentru vizibilitate în AI search / GEO"
    ]
  },
  {
    id: 6,
    title: "AI, Automation & Intelligence",
    category: "AI & Automatizare",
    year: "2026",
    link: "/services/ai",
    background: "#7C3AED",
    textColor: "#FFFFFF",
    image: "/images/service-ai-purple-v2.png",
    subtitle: "Construim soluții AI și automatizări care reduc munca repetitivă, accelerează procesele și conectează mai bine marketingul, vânzările și suportul.",
    tags: [
      "Automatizări bazate pe AI",
      "Chatbot-uri, asistenți conversaționali și agenți AI",
      "Integrare AI în fluxuri interne și website-uri",
      "Sisteme pentru suport, lead qualification și operațiuni",
      "Dashboard-uri, procese inteligente și soluții custom"
    ]
  }
]

const plans = [
  {
    id: 1,
    number: "01",
    name: "Launch",
    subtitle: "Pentru businessuri noi, startup-uri și proiecte aflate la început",
    description: "Durată orientativă: 2–3 săptămâni",
    timeline: "2–3 săptămâni",
    tagline: "Un pachet pentru branduri care au nevoie de o fundație clară: identitate, mesaj, prezență digitală și materiale esențiale pentru lansare.",
    cta: "Începe un proiect",
    features: [
      "Direcție de brand și mesaje principale",
      "Kit de identitate vizuală",
      "Setup social media de bază",
      "Design pentru website sau landing page",
      "SEO de bază pentru lansare",
      "Materiale vizuale pentru comunicare",
      "Fișiere finale pregătite pentru utilizare",
      "Milestone-uri clare de la început până la final"
    ],
    extras: []
  },
  {
    id: 2,
    number: "02",
    name: "Presence",
    subtitle: "Pentru branduri care vor o prezență coerentă și activă",
    description: "Durată orientativă: colaborare lunară sau proiect dedicat",
    timeline: "Lunar sau proiect dedicat",
    tagline: "Un pachet pentru businessuri care au deja o bază, dar au nevoie de consistență în comunicare, social media, conținut și vizibilitate.",
    cta: "Construiește prezența brandului",
    features: [
      "Strategie de conținut",
      "Plan editorial lunar",
      "Copywriting și design pentru social media",
      "Administrare Instagram, Facebook și TikTok",
      "Producție și editare foto/video",
      "Community management",
      "Raportare lunară și recomandări de optimizare",
      "Direcție creativă pentru campanii"
    ],
    extras: []
  },
  {
    id: 3,
    number: "03",
    name: "Growth",
    subtitle: "Pentru businessuri care vor mai multă vizibilitate, leaduri și conversii",
    description: "Durată orientativă: 4–6 săptămâni sau colaborare recurentă",
    timeline: "4–6 săptămâni sau recurent",
    tagline: "Un pachet pentru echipe care au nevoie de strategie, campanii, funnel-uri, conținut, SEO și optimizare continuă.",
    cta: "Crește mai clar",
    features: [
      "Audit de brand, marketing și comunicare",
      "Strategie de marketing și plan de acțiune",
      "Funnel-uri de conversie și lead generation",
      "Campanii organice și/sau plătite",
      "SEO on-page și strategie de conținut",
      "Landing pages sau pagini de conversie",
      "Raportare și optimizare periodică",
      "Recomandări pentru creștere pe termen lung"
    ],
    extras: []
  },
  {
    id: 4,
    number: "04",
    name: "Transform",
    subtitle: "Pentru businessuri care au nevoie de repoziționare, website nou sau sistem digital complet",
    description: "Durată orientativă: 6–8 săptămâni",
    timeline: "6–8 săptămâni",
    tagline: "Un pachet pentru companii care au crescut, dar brandul, website-ul sau comunicarea nu mai reflectă nivelul actual al businessului.",
    cta: "Transformă brandul",
    features: [
      "Audit de brand și prezență digitală",
      "Strategie de repoziționare",
      "Identitate vizuală extinsă",
      "Website complex sau platformă digitală",
      "UX/UI pentru fluxuri importante",
      "SEO tehnic și structură de conținut",
      "Campanie de relansare",
      "Suport pentru implementare și rollout"
    ],
    extras: []
  },
  {
    id: 5,
    number: "05",
    name: "Scale",
    subtitle: "Pentru businessuri care vor automatizare, eficiență și sisteme inteligente",
    description: "Durată orientativă: în funcție de complexitate",
    timeline: "În funcție de complexitate",
    tagline: "Un pachet pentru echipe care vor să folosească tehnologia și AI-ul pentru a automatiza procese, a reduce munca repetitivă și a scala operațiunile.",
    cta: "Scalează cu AI",
    features: [
      "Audit de procese și oportunități de automatizare",
      "Automatizări AI pentru marketing, vânzări sau suport",
      "Chatbot-uri, asistenți conversaționali sau agenți AI",
      "Integrare cu website, CRM, formulare sau tool-uri interne",
      "Dashboard-uri și raportare inteligentă",
      "Sisteme pentru lead qualification sau customer support",
      "Soluții custom adaptate contextului de business",
      "Suport și optimizare după implementare"
    ],
    extras: []
  }
]

const blogPosts = [
  {
    title: "Cum îți dai seama că brandul tău nu mai comunică suficient de clar",
    date: "8 Apr 2026",
    link: "/notes#brandul-pare-mai-mic"
  },
  {
    title: "Ce trebuie să facă o pagină de prezentare bună",
    date: "15 Mar 2026",
    link: "/notes#landing-page-birou-vanzari"
  },
  {
    title: "De ce un brand are nevoie de reguli, nu doar de gust",
    date: "28 Feb 2026",
    link: "/notes#reguli-brand"
  },
]

const latestNotes = [
  {
    title: "Cum îți dai seama că brandul tău nu mai comunică suficient de clar",
    date: "8 Apr 2026",
    link: "/notes#brandul-pare-mai-mic"
  },
  {
    title: "Ce trebuie să facă o pagină de prezentare bună",
    date: "15 Mar 2026",
    link: "/notes#landing-page-birou-vanzari"
  },
  {
    title: "De ce un brand are nevoie de reguli, nu doar de gust",
    date: "28 Feb 2026",
    link: "/notes#reguli-brand"
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
            {project.image && <img src={project.image} alt={project.title} />}
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
          <h2 className="projects-title">Ce construim</h2>
          <p className="projects-subtitle">
            Combinăm strategie, design, conținut, tehnologie și AI pentru a transforma ideile în branduri clare, prezențe digitale coerente și sisteme care pot crește.
          </p>
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
              <span className="plan-features-label">Livrabile incluse</span>
              <ul>
                {plan.features.map((f, i) => (
                  <li key={i}>
                    <span className="plan-feature-index">{String(i + 1).padStart(2, '0')}</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              {plan.extras.length > 0 && (
                <div className="plan-expandable-extras">
                  {plan.extras.map((e, i) => (
                    <div key={i} className="plan-extra-item">
                      <span className="plan-extra-icon">+</span>
                      <em>{e}</em>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="plan-expandable-footer">
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
          <span className="section-tag">PACHETE</span>
          <h2 className="pricing-title">Colaborări construite în jurul obiectivelor tale</h2>
          <div className="pricing-subtitle">
            <p>Fiecare business se află într-o etapă diferită. De aceea, pachetele noastre sunt gândite ca puncte de pornire, nu ca soluții rigide.</p>
            <p>Pornim de la obiectivul tău — lansare, creștere, repoziționare, vizibilitate, automatizare sau scalare — și adaptăm livrabilele în funcție de nevoile reale ale businessului.</p>
          </div>
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
        <div className="pricing-note">
          <p>Pachetele pot fi adaptate în funcție de etapa businessului, obiectivele comerciale, buget, echipă, industrie și nivelul de suport necesar.</p>
          <p>Putem construi o colaborare concentrată pe o singură direcție — branding, social media, website, SEO sau AI — sau un sistem integrat care le conectează într-un plan coerent de creștere.</p>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-top">
            <div className="hero-top-left">
              <span className="hero-id">// 00.01°</span>
            </div>
            <div className="status-badge">
              <span className="status-dot"></span>
              disponibili pentru proiecte noi
            </div>
          </div>
          <div className="hero-headline">
            <HeadingCycler
              heading=".departamentul de"
              word1="branding"
              word2="marketing"
              word3="social media"
              word4="digital"
              word5="AI"
              color1="#FF6B00"
              color2="#4400FF"
              color3="#E1306C"
              color4="#FFD000"
              color5="#7C3AED"
              intervalS={2}
              animationS={0.3}
            />
          </div>
          <div className="hero-bottom">
            <div className="hero-description">
              <p>Branding, marketing, social media, web, SEO și AI pentru businessuri care vor mai multă claritate, vizibilitate și creștere coerentă.</p>
            </div>
            <a href="/contact" className="hero-cta">
              <span>Hai să vorbim</span>
              <span className="hero-cta-arrow">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="video-section">
        <div className="video-wrapper">
          <video autoPlay muted loop playsInline aria-hidden="true">
            <source src={headAnimation} type="video/mp4" />
          </video>
          <div className="video-overlay">
            <span className="video-tag">ARHIVĂ VIZUALĂ / 2026</span>
          </div>
        </div>
      </section>

      <ProjectsSection projects={projects} />
      <PricingSection />

      <section className="about">
        <div className="container">
          <span className="section-label">.despre noi</span>
          <div className="about-text">
            <p>Construim sisteme de brand, marketing și digital pentru businessuri care vor să comunice mai clar, să arate mai coerent și să crească mai inteligent.</p>
            <p>Lucrăm la intersecția dintre strategie, design, conținut, tehnologie și AI.</p>
          </div>
          <Button label="despre noi" link="/about" />
        </div>
      </section>

      <section className="blog">
        <div className="container">
          <span className="section-label">.ultimele trei note</span>
          <div className="blog-list">
            {latestNotes.map((post, index) => (
              <Link key={index} to={post.link} className="blog-post">
                <span className="blog-post-title">{post.title}</span>
                <span className="blog-post-date">{post.date}</span>
              </Link>
            ))}
          </div>
          <Button label="vezi notele" link="/notes" />
        </div>
      </section>

      <section className="contact-cta">
        <div className="container">
          <span className="section-label">.salut</span>
          <h2 className="contact-cta-title">Hai să vorbim despre proiectul tău</h2>
          <p className="contact-cta-text">Spune-ne ce vrei să construiești, unde ești acum și ce ai nevoie să funcționeze mai bine — brand, marketing, social media, website, SEO sau AI.</p>
          <Link to="/contact" className="btn-primary btn-large">contactează-ne</Link>
        </div>
      </section>
    </>
  )
}
