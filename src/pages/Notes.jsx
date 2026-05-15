const blogPosts = [
  {
    id: 1,
    title: "Cum îți dai seama că brandul tău nu mai comunică suficient de clar",
    date: "8 Apr 2026",
    excerpt: "Semne vizuale și de comunicare care pot reduce încrederea, chiar și atunci când produsul este bun.",
    link: "/blog/brandul-pare-mai-mic"
  },
  {
    id: 2,
    title: "Ce trebuie să facă o pagină de prezentare bună",
    date: "15 Mar 2026",
    excerpt: "Cum structurezi mesajul, oferta și acțiunea următoare pentru ca vizitatorii să înțeleagă rapid ce au de făcut.",
    link: "/blog/landing-page-birou-vanzari"
  },
  {
    id: 3,
    title: "De ce un brand are nevoie de reguli, nu doar de gust",
    date: "28 Feb 2026",
    excerpt: "Un sistem vizual bun nu te limitează. Te ajută să arăți coerent peste tot, mai repede.",
    link: "/blog/reguli-brand"
  },
  {
    id: 4,
    title: "Social media fără improvizație de la o zi la alta",
    date: "10 Feb 2026",
    excerpt: "Cum organizezi ideile, campaniile și postările într-un calendar care poate fi susținut pe termen lung.",
    link: "/blog/social-media-fara-improvizatie"
  },
  {
    id: 5,
    title: "Ce păstrezi, ce tai și ce rescrii într-un rebrand",
    date: "25 Ian 2026",
    excerpt: "Un ghid scurt pentru deciziile grele: active, ton, culori, logo, mesaje și priorități.",
    link: "/blog/ce-rescrii-in-rebrand"
  },
  {
    id: 6,
    title: "Cum folosești AI în marketing fără să pierzi vocea brandului",
    date: "12 Ian 2026",
    excerpt: "Automatizarea poate ajuta, dar direcția, tonul și deciziile trebuie să rămână clare.",
    link: "/blog/ai-in-marketing"
  },
  {
    id: 7,
    title: "SEO nu înseamnă doar articole pe blog",
    date: "5 Ian 2026",
    excerpt: "De la structură tehnică la conținut și intenție de căutare, vizibilitatea organică începe cu un sistem bun.",
    link: "/blog/seo-nu-inseamna-doar-articole"
  },
  {
    id: 8,
    title: "Website-ul tău este o broșură sau un canal de vânzare?",
    date: "18 Dec 2025",
    excerpt: "Diferența dintre un site care doar arată bine și unul care explică, convinge și convertește.",
    link: "/blog/website-brosura-sau-vanzare"
  },
]

export default function Notes() {
  return (
    <div className="page-content">
      <section className="page-hero">
        <div className="container">
          <span className="section-label">.note</span>
          <h1 className="page-title">Idei despre brand, marketing, conținut, digital și AI.</h1>
          <p className="page-subtitle">
            Articole scurte despre cum un business devine mai clar, mai vizibil și mai eficient prin strategie, comunicare și tehnologie.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <a key={post.id} href={post.link} className="blog-card">
                <div className="blog-card-content">
                  <span className="blog-card-date">{post.date}</span>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                </div>
                <div className="blog-card-arrow">→</div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
