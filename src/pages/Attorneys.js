import React, { useEffect, useState } from 'react';
import './Attorneys.css';

function Attorneys() {
  const [attorneys, setAttorneys] = useState([]);

  useEffect(() => {
    fetch('${process.env.PUBLIC_URL}/data/attorneys.json')
      .then(response => response.json())
      .then(data => setAttorneys(data));
  }, []);

  return (
    <div className="attorneys-container" role="main" aria-labelledby="attorneys-heading">
      <h2 id="attorneys-heading">Our Attorneys</h2>
      <div className="attorneys-grid">
        {attorneys.map(attorney => (
          <div key={attorney.id} className="attorney-card" role="article" aria-labelledby={`attorney-name-${attorney.id}`} aria-describedby={`attorney-desc-${attorney.id}`}>
            <img src={attorney.image} alt={`Image of ${attorney.name}`} className="attorney-image" />
            <h3 id={`attorney-name-${attorney.id}`}>{attorney.name}</h3>
            <p><strong>Hometown:</strong> {attorney.hometown}</p>
            <p><strong>Law School:</strong> {attorney.lawSchool}</p>
            <p id={`attorney-desc-${attorney.id}`}>{attorney.description}</p>
            <p><strong>Email:</strong> <a href={`mailto:${attorney.email}`}>{attorney.email}</a></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Attorneys;
