import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header" role="banner" aria-label="Main Header">
      <div className="header-content">
        <h1 className="logo">Marshall</h1>
        <nav className="nav" role="navigation" aria-label="Main Navigation">
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
