export default function Contact() {
  return (
    <div className="page-content">
      <section className="page-hero">
        <div className="container">
          <span className="section-label">.say hello</span>
          <h1 className="page-title">Let's Work Together</h1>
          <p className="page-subtitle">
            I'm open for freelance projects, feel free to email me to see how we can collaborate
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-label">Email</span>
                <a href="mailto:hello@nitro.design" className="contact-value">hello@nitro.design</a>
              </div>
              
              <div className="contact-item">
                <span className="contact-label">Location</span>
                <span className="contact-value">San Francisco, CA</span>
              </div>
              
              <div className="contact-item">
                <span className="contact-label">Availability</span>
                <span className="contact-value contact-available">
                  <span className="status-dot"></span>
                  Available for new projects
                </span>
              </div>
            </div>

            <div className="contact-socials">
              <span className="contact-label">Find me on</span>
              <div className="social-links">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
                <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="social-link">Dribbble</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
