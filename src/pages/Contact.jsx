export default function Contact() {
  return (
    <div className="page-content">
      <section className="page-hero">
        <div className="container">
          <span className="section-label">.contact</span>
          <h1 className="page-title">Hai să vorbim despre proiectul tău.</h1>
          <p className="page-subtitle">
            Scrie-ne ce vrei să construiești, ce nu mai funcționează și ce rezultat vrei să obții — mai multă claritate, mai multă vizibilitate, un website mai bun, social media, SEO, automatizări sau o strategie completă de creștere.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-label">Email</span>
                <a href="mailto:office@departamentul-de-branding.ro" className="contact-value">office@departamentul-de-branding.ro</a>
              </div>

              <div className="contact-item">
                <span className="contact-label">Locație</span>
                <span className="contact-value">România / remote</span>
              </div>

              <div className="contact-item">
                <span className="contact-label">Disponibilitate</span>
                <span className="contact-value contact-available">
                  <span className="status-dot"></span>
                  Disponibili pentru proiecte noi
                </span>
              </div>
            </div>

            <div className="contact-socials">
              <span className="contact-label">Ne găsești și aici</span>
              <div className="social-links">
                <a href="https://www.linkedin.com/company/departamentul-de-branding" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                <a href="https://www.facebook.com/profile.php?id=61589861304888" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
                <a href="https://www.tiktok.com/@departamentuldebranding?_r=1&_t=ZN-96LtIYzsv9a" target="_blank" rel="noopener noreferrer" className="social-link">TikTok</a>
                <a href="https://www.instagram.com/departamentuldebranding" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
