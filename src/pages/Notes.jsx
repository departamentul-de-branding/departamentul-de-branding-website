const blogPosts = [
  {
    id: 1,
    title: "Starting and Growing a Career in Web Design",
    date: "Apr 8, 2022",
    excerpt: "Tips and insights for those looking to break into the web design industry and grow their career.",
    link: "/blog/starting-a-career-in-web-design"
  },
  {
    id: 2,
    title: "Create a Landing Page That Performs Great",
    date: "Mar 15, 2022",
    excerpt: "Learn the key elements that make a landing page convert visitors into customers.",
    link: "/blog/create-a-landing-page-that-performs-great"
  },
  {
    id: 3,
    title: "How Can Designers Prepare for the Future?",
    date: "Feb 28, 2022",
    excerpt: "Exploring the skills and mindset designers need to stay relevant in a rapidly changing industry.",
    link: "/blog/how-can-designers-prepare-for-the-future"
  },
  {
    id: 4,
    title: "The Art of Minimalist Design",
    date: "Feb 10, 2022",
    excerpt: "Why less is more and how to apply minimalist principles to your design work.",
    link: "/blog/the-art-of-minimalist-design"
  },
  {
    id: 5,
    title: "Building Design Systems That Scale",
    date: "Jan 25, 2022",
    excerpt: "A practical guide to creating and maintaining design systems for growing products.",
    link: "/blog/building-design-systems-that-scale"
  },
]

export default function Notes() {
  return (
    <div className="page-content">
      <section className="page-hero">
        <div className="container">
          <span className="section-label">.notes</span>
          <h1 className="page-title">Blog & Thoughts</h1>
          <p className="page-subtitle">
            Sharing insights about design, development, and the creative process
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
