import React, { useContext } from 'react';
import { HeroContext } from '../context/HeroContext'; 
import './HeroSection.css';

const HeroSection = () => {
  const { heroContent } = useContext(HeroContext);

  return (
    <div className="hero-section">
      <h1>{heroContent.title}</h1>
      <p>{heroContent.subtitle}</p>
      <div className="hero-images">
        <img src="/src/assets/herobg1.svg" alt="Hero" className="hero-image-center" />
      </div>
    </div>
  );
};

export default HeroSection;