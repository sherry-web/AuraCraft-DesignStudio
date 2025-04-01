import React from 'react';
import './LegalPages.css';

const Privacy = () => {
  return (
    <div className="legal-page">
      <h1>Privacy Policy</h1>
      <div className="content-section">
        <h2>Data Collection</h2>
        <p>We collect minimal data necessary to provide our services.</p>
        
        <h2>Data Usage</h2>
        <p>Your data is used solely for service improvement and communication.</p>
        
        <h2>Data Protection</h2>
        <p>We implement industry-standard security measures to protect your information.</p>
      </div>
    </div>
  );
};

export default Privacy;