import React, { useContext } from 'react';
import { HeroContext } from '../context/HeroContext'; 
import './HeroSection.css';

const HeroSection = () => {
  const { heroContent } = useContext(HeroContext); 

  return (
    <div className="hero-section">
      <h1>{heroContent.title}</h1>  {/* Use the title from context */}
      <p>{heroContent.subtitle}</p> {/* Use the subtitle from context */}
    </div>
  );
};

export default HeroSection;
