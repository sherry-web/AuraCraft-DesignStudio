import React from 'react';
import MyButton from './Button';
import heroImage from '../assets/hero.png'; // Adjust the path as needed
import journeyImage from '../assets/ourstory.png'; // Adjust the path as needed
import './styles/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>About Us</h1>
          <p>Learn more about our journey and what drives us.</p>
          <MyButton text="About Sherry" onClick={() => alert('About Sherry')} />
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Hero" />
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="who-we-are-section">
        <h2>Who We Are</h2>
        <p>
          AuraCraft Design Studio is dedicated to creating exceptional digital experiences. Our team specializes in 
          UX/UI design and front-end development, helping businesses craft user-friendly, visually stunning platforms.
        </p>
      </section>

      {/* Our Values Section */}
      <section className="our-values-section">
        <h2>Our Values</h2>
        <p>
          We believe in innovation, creativity, and delivering high-quality solutions that exceed our clients' expectations.
        </p>
      </section>

      {/* Our Journey Section */}
      <section className="our-journey-section">
        <h2>Our Journey</h2>
        <div className="journey-content">
          <p>
            AuraCraft has a long history of delivering cutting-edge solutions for businesses of all sizes. From startups to established enterprises, our mission is to create designs that captivate and perform.
          </p>
          <div className="journey-image">
            <img src={journeyImage} alt="Our Journey" />
          </div>
        </div>
      </section>

      {/* Let's Create Something Section */}
      <section className="create-something-section">
        <h2>Let's Create Something</h2>
        <p>
          Ready to start your project with us? Get in touch and let's create something amazing together.
        </p>
        <MyButton text="Get Started" onClick={() => alert('Get Started')} />
      </section>
    </div>
  );
};

export default AboutUs;