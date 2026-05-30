import "../styles/planets.css";
import { useState, useEffect } from 'react';

function PlanetImages() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://anurella.github.io/json/planets.json')
      .then(res => res.json())
      .then(data => {
        setPlanets(data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  if (loading) return <p>Loading planets...</p>;

  return (
    <section id='planets'>
      <div>
        <h2>Visualizing the Differences Between Planets </h2>
        <p>Each planet in our solar system has unique physical characteristics. visual comparisons help highlight how vastly different terrestial planets are from gas giants and ice giants .</p>
        <div class="images">
          {planets.map((planet) => (
            <figure key={planet.planet}>
              <img src={planet.image} alt={planet.planet} />
              <figcaption>
                <h3>{planet.planet}</h3>
                <p>Distance from sun: {planet.distanceFromSun} AU</p>
              </figcaption>
            </figure>
          ))}
        </div>

      </div>

    </section>
  );
}

export default PlanetImages;