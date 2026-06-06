import { useState, useEffect } from 'react';
import '../styles/planets.css';

const API_URL = "https://anurella.github.io/json/planets.json";
function PlanetImages() {
  const [planets, setPlanets] = useState([]);
  useEffect(() => {
  fetch(API_URL)
      .then(res => res.json())
      .then(data => setPlanets(data));
  }, []);
  return (
    <section id="planets" className="planets-section">
      <div className="planets-header">
      <h2 className="planets-title">Visualizing the Differences Between Planets</h2>
      <p className="planets-subtitle">
        Each planet in our solar system has unique physical characteristics. Visual comparisons help highlight how vastly different terrestrial planets are from gas giants and ice giants.
      </p>
      </div>
      <div className="planets-grid">
        {planets.map((planet) => (
          <figure key={planet.planet} className="planet-card">
            <div className="planet-image-wrapper">
              <img
                src={planet.image}
                alt={`Photo of ${planet.planet}`}
                className="planet-image"
                loading="lazy"
              />
            </div>

            <figcaption className="planet-info">
              <h3 className="planet-name">{planet.planet}</h3>
              <p className="planet-distance">
                <span className="label">Distance from Sun:</span>
                <span className="value">{planet.distanceFromSun} AU</span>
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default PlanetImages;