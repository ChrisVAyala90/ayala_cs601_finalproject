import React from 'react';
import './HamburgerMenu.css';

const HamburgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div className="hamburger" onClick={toggleMenu}>
      <span className={`bar ${isOpen ? 'open' : ''}`}></span>
      <span className={`bar ${isOpen ? 'open' : ''}`}></span>
      <span className={`bar ${isOpen ? 'open' : ''}`}></span>
    </div>
  );
};

export default HamburgerMenu;
