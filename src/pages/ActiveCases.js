import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ActiveCases.css';

function ActiveCases() {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    fetch('/data/activeCases.json')
      .then(response => response.json())
      .then(data => setCases(data));
  }, []);

  return (
    <div className="active-cases-container" role="main" aria-labelledby="active-cases-heading">
      <h2 id="active-cases-heading">Active Cases</h2>
      <div className="cases-grid">
        {cases.map(caseItem => (
          <div key={caseItem.id} className="case-card" role="article" aria-labelledby={`case-title-${caseItem.id}`} aria-describedby={`case-desc-${caseItem.id}`}>
            <img src={caseItem.image} alt={`Image of ${caseItem.name}`} className="case-image" />
            <h3 id={`case-title-${caseItem.id}`}>{caseItem.name}</h3>
            <p id={`case-desc-${caseItem.id}`}><strong>Case Number:</strong> {caseItem.caseNumber}</p>
            <p><strong>Attorney:</strong> {caseItem.attorney}</p>
            <Link to={`/case/${caseItem.id}`} className="details-link">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActiveCases;
