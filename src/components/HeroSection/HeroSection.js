import React from 'react';
import GetStartedButton from '../GetStarted.css';
import './HeroSection.css';

const HeroSection = () => (
  <div className="hero-container">
    <div className="hero-content">
      <h1>Welcome to AuraCraft Design Studio</h1>
      <p>Innovative Digital Solutions for Your Business</p>
      <GetStartedButton className="hero-cta-button" />
    </div>
  </div>
);

export default HeroSection;
