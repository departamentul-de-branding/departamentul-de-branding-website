import { Link, useParams } from 'react-router-dom'
import { articles } from '../data/articles'

function ArticlesList() {
  return (
    <div className="page-content">
      <section className="page-hero">
        <div className="container">
          <span className="section-label">.articole</span>
          <h1 className="page-title">Idei despre brand, marketing, conținut, digital și AI.</h1>
          <p className="page-subtitle">
            Articole scurte despre cum un business devine mai clar, mai vizibil și mai eficient prin strategie, comunicare și tehnologie.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="blog-grid">
            {articles.map((post) => (
              <Link key={post.slug} to={`/notes/${post.slug}`} className="blog-card">
                <span className="blog-card-kicker">ARTICOL</span>
                <div className="blog-card-content">
                  <span className="blog-card-date">{post.date}</span>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                </div>
                <div className="blog-card-arrow">→</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function ArticleDetail({ article }) {
  const readingTime = `${Math.max(4, Math.ceil(article.content.join(' ').split(/\s+/).length / 180))} min citire`

  return (
    <div className="page-content article-page">
      <article>
        <section className="page-hero article-hero">
          <div className="container">
            <div className="article-topline">
              <Link to="/notes" className="article-back">← înapoi la articole</Link>
              <span>{article.date}</span>
              <span>{readingTime}</span>
            </div>
            <h1 className="page-title">{article.title}</h1>
            <p className="page-subtitle">{article.excerpt}</p>
          </div>
        </section>

        <section className="page-section">
          <div className="container">
            <div className="article-layout">
              <aside className="article-aside" aria-label="Detalii articol">
                <span className="article-aside-label">ARTICOL</span>
                <span>{article.date}</span>
                <span>{readingTime}</span>
              </aside>
              <div className="article-content">
                {article.content.map((paragraph, index) => (
                  <p key={paragraph} data-index={String(index + 1).padStart(2, '0')}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  )
}

export default function Notes() {
  const { slug } = useParams()

  if (!slug) {
    return <ArticlesList />
  }

  const article = articles.find((post) => post.slug === slug)

  if (!article) {
    return (
      <div className="page-content">
        <section className="page-hero">
          <div className="container">
            <span className="section-label">.articole</span>
            <h1 className="page-title">Articolul nu a fost găsit.</h1>
            <p className="page-subtitle">Pagina pe care o cauți nu există sau a fost mutată.</p>
            <Link to="/notes" className="btn-secondary article-not-found-link">vezi articolele</Link>
          </div>
        </section>
      </div>
    )
  }

  return <ArticleDetail article={article} />
}
