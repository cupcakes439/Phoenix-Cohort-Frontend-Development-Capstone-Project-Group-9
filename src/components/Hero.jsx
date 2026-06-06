import "../styles/hero.css";
import earthImg from "../assets/images/075cfe8711f093d2ee4330cfa37d385003066f0a.png";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content-wrapper">
        <div className="hero-left-content">
          <h1 className="hero-title">
            Explore Our Solar <br /> System Through Data
          </h1>
          <p className="hero-description">
            Understand the planets not just by name, but by measurable facts. From size and mass to gravity and
            density, this page breaks down the solar system in a clear, data-driven way.
          </p>
          <div className="hero-actions">
            <a className="hero-btn btn-primary" href="#planets">
              Explore the Data
            </a>
            <a className="hero-btn btn-secondary" href="#contactSection">
              Contact Us
            </a>
          </div>
        </div>

        <div className="hero-right-content">
          <figure className="hero-image-container">
            <img className="planet-thumbnail" src={earthImg} alt="Render of Planet Earth" />
          </figure>
        </div>

      </div>
    </section>
  );
}

export default Hero;