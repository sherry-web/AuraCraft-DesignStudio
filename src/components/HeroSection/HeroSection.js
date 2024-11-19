import React from 'react';
import { Button } from '@mui/material';
import './HeroSection.css';

const HeroSection = () => (
  <div className="hero-container">
    <div className="hero-content">
      <h1>Welcome to AuraCraft Design Studio</h1>
      <p>Innovative Digital Solutions for Your Business</p>
      <Button variant="contained" className="cta-button">Get Started</Button>
    </div>
  </div>
);

export default HeroSection;
