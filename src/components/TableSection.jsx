import "../styles/table.css";

function TableSection() {
  return (
    <div className="table-container">
      <h2>Planetary Facts at a Glance</h2>
      <p className="table-paragraph">Below is a comparative table of major planets in our solar system. The data highlights key physical properties used by astronomer and researchers worldwide.</p>
      <p><strong>Data about the planets of our solar system (Planetary facts taken from NASA)</strong></p>
      <table>
      <thead>
       <tr>
          <td colSpan="2"></td>
          <th scope="col">Name</th>
          <th scope="col">Mass (10 24kg)</th>
          <th scope="col">Diameter(km)</th>
          <th scope="col">Density(kg/m3)</th>
          <th scope="col">Gravity(m/s2)</th>
        </tr>
      </thead>
      <tbody>
        <tr> 
        <th colSpan="2" rowSpan="4" scope="rowgroup">Terrestial planets</th>
          <td scope="row">Mercury</td>
          <td>0.330</td>
          <td>4,878</td>
          <td>5,427</td>
          <td>3.7</td>
        </tr>
        <tr>
          <td scope="row">Venus</td>
          <td>0.330</td>
          <td>4,878</td>
          <td>5,427</td>
          <td>3.7</td>
        </tr>
        <tr>
          <td scope="row">Earth</td>
          <td>0.330</td>
          <td>4,878</td>
          <td>5,427</td>
          <td>3.7</td>
        </tr>
        <tr>
          <td scope="row">Mars</td>
          <td>0.330</td>
          <td>4,878</td>
          <td>5,427</td>
          <td>3.7</td>
        </tr>
        <tr>
          <th rowSpan="4" className="group">Jovian <br/>Planets </th>
          <th rowSpan="2" className="subgroup">Gas Giants</th>
          <td>Jupiter</td>
          <td>0.330</td>
          <td>4,878</td>
          <td>5,427</td>
          <td>3.7</td>
        </tr>
        <tr>
          <td>Saturn</td>
          <td>0.330</td>
          <td>4,878</td>
          <td>5,427</td>
          <td>3.7</td>
        </tr>
        <tr>
          <th rowSpan="2" className="subgroup">Ice Giants</th>
          <td>Uranus</td>
          <td>0.330</td>
          <td>4,878</td>
          <td>5,427</td>
          <td>3.7</td>
        </tr>
        <tr>
          <td>Neptune</td>
          <td>0.330</td>
          <td>4,878</td>
          <td>5,427</td>
          <td>3.7</td>  
        </tr>
        <tr>
          <th colSpan="2" scope="rowgroup">Dwarf Planets</th>
          <td>Pluto</td> 
          <td>0.330</td>
          <td>4,878</td>
          <td>5,427</td>
          <td>3.7</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}

export default TableSection;