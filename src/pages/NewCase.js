import React, { useState, useEffect } from 'react';
import Modal from '../components/Modal';
import './NewCase.css';

const NewCase = () => {
  const [formData, setFormData] = useState({
    name: '',
    statutes: '',
    caseNumber: '',
    county: '',
    state: '',
    date: '',
    description: '',
    image: '',
    attorney: ''
  });

  const [errors, setErrors] = useState({});
  const [attorneys, setAttorneys] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch('${process.env.PUBLIC_URL}/data/attorneys.json')
      .then(response => response.json())
      .then(data => setAttorneys(data));
  }, []);

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key] && key !== 'image') {
        newErrors[key] = 'This field is required';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowModal(true);
      setTimeout(() => {
        setFormData({
          name: '',
          statutes: '',
          caseNumber: '',
          county: '',
          state: '',
          date: '',
          description: '',
          image: '',
          attorney: ''
        });
        setErrors({});
      }, 1000);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="new-case-container" role="main" aria-labelledby="new-case-heading">
      <h1 id="new-case-heading">Create New Case</h1>
      <form className="new-case-form" onSubmit={handleSubmit} aria-describedby="form-instructions">
        <p id="form-instructions">Please fill out the form below to create a new case. All fields are required except for the image.</p>
        <div className="form-group">
          <label htmlFor="name">Defendant Name</label>
          {errors.name && <span className="error" id="name-error"> {errors.name}</span>}
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : null}
          />
        </div>
        <div className="form-group">
          <label htmlFor="statutes">Statutes Violated/Crimes Charged</label>
          {errors.statutes && <span className="error" id="statutes-error"> {errors.statutes}</span>}
          <input
            type="text"
            id="statutes"
            name="statutes"
            value={formData.statutes}
            onChange={handleChange}
            aria-invalid={!!errors.statutes}
            aria-describedby={errors.statutes ? "statutes-error" : null}
          />
        </div>
        <div className="form-group">
          <label htmlFor="caseNumber">Case Number</label>
          {errors.caseNumber && <span className="error" id="caseNumber-error"> {errors.caseNumber}</span>}
          <input
            type="text"
            id="caseNumber"
            name="caseNumber"
            value={formData.caseNumber}
            onChange={handleChange}
            aria-invalid={!!errors.caseNumber}
            aria-describedby={errors.caseNumber ? "caseNumber-error" : null}
          />
        </div>
        <div className="form-group">
          <label htmlFor="county">County of Offense</label>
          {errors.county && <span className="error" id="county-error"> {errors.county}</span>}
          <input
            type="text"
            id="county"
            name="county"
            value={formData.county}
            onChange={handleChange}
            aria-invalid={!!errors.county}
            aria-describedby={errors.county ? "county-error" : null}
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State of Offense</label>
          {errors.state && <span className="error" id="state-error"> {errors.state}</span>}
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            aria-invalid={!!errors.state}
            aria-describedby={errors.state ? "state-error" : null}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date of Offense</label>
          {errors.date && <span className="error" id="date-error"> {errors.date}</span>}
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            aria-invalid={!!errors.date}
            aria-describedby={errors.date ? "date-error" : null}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description of Charges</label>
          {errors.description && <span className="error" id="description-error"> {errors.description}</span>}
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            aria-invalid={!!errors.description}
            aria-describedby={errors.description ? "description-error" : null}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="image">Image of Offender (optional)</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="attorney">Assigned Attorney</label>
          {errors.attorney && <span className="error" id="attorney-error"> {errors.attorney}</span>}
          <select
            id="attorney"
            name="attorney"
            value={formData.attorney}
            onChange={handleChange}
            aria-invalid={!!errors.attorney}
            aria-describedby={errors.attorney ? "attorney-error" : null}
          >
            <option value="">Select Attorney</option>
            {attorneys.map(attorney => (
              <option key={attorney.id} value={attorney.name}>
                {attorney.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" aria-label="Create new case">Create Case</button>
      </form>
      <Modal show={showModal} handleClose={handleCloseModal}>
        <h2 id="modal-title">Success!</h2>
        <p>The case has been created successfully.</p>
        <button onClick={handleCloseModal} aria-label="Close success modal">Close</button>
      </Modal>
    </div>
  );
};

export default NewCase;
