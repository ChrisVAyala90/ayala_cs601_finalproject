import React, { useEffect, useState } from 'react';
import './Attorneys.css';

function Attorneys() {
  const [attorneys, setAttorneys] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/attorneys.json`)
      .then(response => response.json())
      .then(data => setAttorneys(data));
  }, []);

  return (
    <div className="attorneys-container">
      <h2>Our Attorneys</h2>
      <div className="attorneys-grid">
        {attorneys.map(attorney => (
          <div key={attorney.id} className="attorney-card">
            <img src={`${process.env.PUBLIC_URL}${attorney.image}`} alt={attorney.name} className="attorney-image" />
            <h3>{attorney.name}</h3>
            <p><strong>Hometown:</strong> {attorney.hometown}</p>
            <p><strong>Law School:</strong> {attorney.lawSchool}</p>
            <p>{attorney.description}</p>
            <p><strong>Email:</strong> <a href={`mailto:${attorney.email}`}>{attorney.email}</a></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Attorneys;
