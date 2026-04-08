import Button from '../../framer/button'

export default function About() {
  return (
    <div className="page-content">
      <section className="page-hero">
        <div className="container">
          <span className="section-label">.about</span>
          <h1 className="page-title">Hey, I'm Nick</h1>
          <p className="page-subtitle">
            a product design partner with focus on no-code websites and software interfaces
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text-block">
              <h2>My Story</h2>
              <p>
                I've been designing digital products for over 8 years, working with startups 
                and established companies to create meaningful experiences that solve real problems.
              </p>
              <p>
                My craft is building experiences that bring value to people and celebrate 
                function over form. Let's hide the ego and give some freedom to creativity 
                and make the first small step changing the world to a better place.
              </p>
            </div>

            <div className="about-text-block">
              <h2>What I Do</h2>
              <ul className="services-list">
                <li>UI/UX Design</li>
                <li>Brand Identity</li>
                <li>No-Code Development</li>
                <li>Design Systems</li>
                <li>Product Strategy</li>
              </ul>
            </div>

            <div className="about-text-block">
              <h2>Tools I Use</h2>
              <p>
                Figma, Framer, Webflow, Adobe Creative Suite, and various prototyping tools 
                to bring ideas to life.
              </p>
            </div>
          </div>

          <div className="about-cta">
            <Button
              label="contact me"
              link="/contact"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
