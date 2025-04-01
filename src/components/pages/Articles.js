import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Articles.css";

const Articles = () => {
  return (
    <div className="articles-page">
      <h1>Our Blog & Articles</h1>
      <p>Coming soon - Insights and updates from our design studio</p>
      <div className="placeholder-content">
        <div className="placeholder-card">
          <h3>Design Trends 2023</h3>
          <p>Article coming soon</p>
        </div>
        <div className="placeholder-card">
          <h3>UX Best Practices</h3>
          <p>Article coming soon</p>
        </div>
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
    </div>
  );
};

export default Articles;