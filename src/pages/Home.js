import React from 'react';
import './Home.css';
import ImageCarousel from '../components/ImageCarousel';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/new-case');
  };
  return (
    <div>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Manage Your Cases Efficiently</h1>
          <p>We help small criminal defense law firms manage their cases effectively.</p>
          <button className="cta-button" onClick={handleGetStarted}>Get Started</button>
        </div>
        <div className="hero-image">
        <ImageCarousel />
        </div>
      </section>
      <section className="info-section">
        <div className="info-box">
          <h3>Efficient Case Management</h3>
          <p>Simplify your workflow with our intuitive case management system. Easily track and update case statuses, assign tasks, and manage deadlines all in one place.</p>
        </div>
        <div className="info-box">
          <h3>Collaborative Workflow</h3>
          <p>Enhance team collaboration with our real-time update and sharing features. Attorneys, paralegals, and other staff members can seamlessly work together, share notes, and access case information anytime, anywhere.</p>
        </div>
        <div className="info-box">
          <h3>Comprehensive Case Documentation</h3>
          <p>Keep all your case-related documents, notes, and evidence securely stored and easily accessible. Our app provides robust document management capabilities, allowing you to upload, categorize, and retrieve documents with ease.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
