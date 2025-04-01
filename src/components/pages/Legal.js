import React from 'react';
import { Link } from 'react-router-dom';
import './LegalPages.css';

const Legal = () => {
  return (
    <div className="legal-page">
      <h1>Legal Information</h1>
      <div className="legal-links">
        <Link to="/terms" className="legal-link">Terms of Service</Link>
        <Link to="/privacy" className="legal-link">Privacy Policy</Link>
        <Link to="/contact" className="legal-link">Contact for Legal Inquiries</Link>
      </div>
      <div className="legal-info">
        <p>© {new Date().getFullYear()} AuraCraft Design Studio. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Legal;