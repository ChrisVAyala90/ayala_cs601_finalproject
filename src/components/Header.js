import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import HamburgerMenu from './HamburgerMenu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">Marshall</h1>
        <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/new-case">New Case</Link></li>
            <li><Link to="/active-cases">Active Cases</Link></li>
            <li><Link to="/attorneys">Attorneys</Link></li>
            <li><Link to="/kanban">Kanban</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
