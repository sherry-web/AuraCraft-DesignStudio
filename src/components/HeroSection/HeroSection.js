import React from 'react';
import GetStartedButton from '../GetStarted.css';
import './HeroSection.css';

const HeroSection = ({ title, subtitle }) => (
  <div className="hero-section">
      <h1>{title}</h1>
      <p>{subtitle}</p>
  </div>
);

export default HeroSection;
