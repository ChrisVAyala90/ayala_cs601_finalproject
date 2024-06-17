import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './CaseDetails.css';
import jsPDF from 'jspdf';

function CaseDetails() {
  const { id } = useParams();
  const [caseDetails, setCaseDetails] = useState(null);

  useEffect(() => {
    fetch('${process.env.PUBLIC_URL}/data/activeCases.json')
      .then(response => response.json())
      .then(data => {
        const caseItem = data.find(c => c.id === parseInt(id));
        setCaseDetails(caseItem);
      });
  }, [id]);

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text(`Case Details for ${caseDetails.name}`, 10, 10);
    doc.text(`Name: ${caseDetails.name}`, 10, 20);
    doc.text(`Case Number: ${caseDetails.caseNumber}`, 10, 30);
    doc.text(`Attorney: ${caseDetails.attorney}`, 10, 40);
    doc.text(`Statutes: ${caseDetails.statutes}`, 10, 50);
    doc.text(`County: ${caseDetails.county}`, 10, 60);
    doc.text(`State: ${caseDetails.state}`, 10, 70);
    doc.text(`Date: ${caseDetails.date}`, 10, 80);
    doc.text(`Description: ${caseDetails.description}`, 10, 90);
    doc.save(`case_${caseDetails.caseNumber}.pdf`);
  };

  if (!caseDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div className="case-details-container" role="main" aria-labelledby="case-details-heading">
      <h2 id="case-details-heading">Case Details for {caseDetails.name}</h2>
      <div className="case-details">
        <img src={caseDetails.image} alt={`Image of ${caseDetails.name}`} className="case-image" />
        <p><strong>Name:</strong> {caseDetails.name}</p>
        <p><strong>Case Number:</strong> {caseDetails.caseNumber}</p>
        <p><strong>Attorney:</strong> {caseDetails.attorney}</p>
        <p><strong>Statutes:</strong> {caseDetails.statutes}</p>
        <p><strong>County:</strong> {caseDetails.county}</p>
        <p><strong>State:</strong> {caseDetails.state}</p>
        <p><strong>Date:</strong> {caseDetails.date}</p>
        <p><strong>Description:</strong> {caseDetails.description}</p>
        <button onClick={generatePDF} className="pdf-button" aria-label={`Generate PDF`}>Generate PDF</button>
      </div>
      <Link to="/active-cases" className="back-link">Back to Active Cases</Link>
    </div>
  );
}

export default CaseDetails;
