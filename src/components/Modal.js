import React from 'react';
import './Modal.css';

const Modal = ({ show, handleClose, children }) => {
  return (
    <div className={`modal ${show ? 'show' : ''}`}>
      <div className="modal-content">
        <span className="close" aria-label="Close modal" onClick={handleClose}>&times;</span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
