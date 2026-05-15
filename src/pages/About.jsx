import Button from '../../framer/button'

export default function About() {
  return (
    <div className="page-content">
      <section className="page-hero">
        <div className="container">
          <span className="section-label">.despre noi</span>
          <h1 className="page-title">Un studio de marketing, branding și digital pentru businessuri care vor mai multă claritate, vizibilitate și control.</h1>
          <p className="page-subtitle">
            Strategie, identitate vizuală, conținut, website-uri, SEO și AI — construite ca un sistem coerent, nu ca servicii izolate.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text-block">
              <h2>Cine suntem</h2>
              <p>
                Departamentul de branding este o agenție de marketing, brand și digital care ajută businessurile să își clarifice mesajul, să își construiască o prezență coerentă și să crească prin comunicare, tehnologie și AI.
              </p>
              <p>
                Lucrăm cu strategie, design, conținut, social media, website-uri, SEO și automatizări, fără să pierdem din vedere obiectivul comercial al fiecărui proiect: să explice mai bine, să arate mai profesionist și să ajute oamenii să aleagă.
              </p>
              <p>
                Nu construim doar logo-uri, postări sau website-uri. Construim sisteme prin care un business devine mai ușor de înțeles, mai ușor de găsit și mai ușor de ales.
              </p>
            </div>

            <div className="about-text-block">
              <h2>Ce facem</h2>
              <ul className="services-list">
                <li>Strategie și poziționare de brand</li>
                <li>Identitate vizuală și sisteme de comunicare</li>
                <li>Marketing, social media și direcție de conținut</li>
                <li>Website-uri, landing pages și produse digitale</li>
                <li>SEO, conținut organic și optimizare pentru search</li>
                <li>Automatizări, chatbot-uri și sisteme AI pentru procese interne</li>
              </ul>
            </div>

            <div className="about-text-block">
              <h2>Cum lucrăm</h2>
              <p>
                Începem cu înțelegerea contextului: business, public, obiective, competiție și puncte de blocaj.
              </p>
              <p>
                Apoi clarificăm direcția și construim materialele de care ai nevoie: identitate, website, conținut, campanii, SEO sau sisteme digitale. Fiecare etapă are un scop clar, livrabile definite și feedback integrat în proces.
              </p>
              <p>
                La final, primești un sistem coerent, ușor de folosit și pregătit să fie dezvoltat mai departe.
              </p>
            </div>
          </div>

          <div className="about-cta">
            <Button
              label="Hai să vorbim"
              link="/contact"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
