import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import HamburgerMenu from './HamburgerMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">Marshall</h1>
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/new-case">New Case</Link></li>
            <li><Link to="/active-cases">Active Cases</Link></li>
            <li><Link to="/attorneys">Attorneys</Link></li>
            <li><Link to="/kanban">Kanban</Link></li>
          </ul>
        </nav>
        <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
    </header>
  );
};

export default Header;
