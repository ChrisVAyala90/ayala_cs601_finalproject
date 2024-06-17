import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ActiveCases.css';

function ActiveCases() {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/activeCases.json`)
      .then(response => response.json())
      .then(data => setCases(data));
  }, []);

  return (
    <div className="active-cases-container">
      <h2>Active Cases</h2>
      <div className="cases-grid">
        {cases.map(caseItem => (
          <div key={caseItem.id} className="case-card">
            <img src={`${process.env.PUBLIC_URL}${caseItem.image}`} alt={caseItem.name} className="case-image" />
            <h3>{caseItem.name}</h3>
            <p><strong>Case Number:</strong> {caseItem.caseNumber}</p>
            <p><strong>Attorney:</strong> {caseItem.attorney}</p>
            <Link to={`/case/${caseItem.id}`} className="details-link">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActiveCases;
