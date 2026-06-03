import "../styles/hero.css";

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-content-wrapper">
        <div className="hero-left-content">
          <div className="page-brief">
            <p>Explore Our Solar System Through Data</p>
          </div>
          <div className="page-description">
            <p>
              Understand the planets not just by name, but by measurable facts. From size and mass to gravity and
              density, this page
              breaks down the solar system in a clear, data-driven way.
            </p>
          </div>
          <div className="button-frame">
            <nav>
              <ul>
                <li>
                  <a className="nav-button" href="#planets">
                    Explore the Data
                  </a>
                </li>
                <li>
                  <a className="nav-button" href="#contactSection">
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="hero-right-content">
          <figure>
            <img className="plant-thumbnail" src="/images/075cfe8711f093d2ee4330cfa37d385003066f0a.png" alt="earth" />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Hero;