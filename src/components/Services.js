import React from 'react';
import './styles/Services.css';

const Services = () => (
  <section id="services" className="services-container">
    <h2>Our Services</h2>
    <div className="services-cards">
      <div className="service-card">
        <h3>UX/UI Design</h3>
        <p>Crafting beautiful and functional user experiences.</p>
      </div>
      <div className="service-card">
        <h3>Front-End Development</h3>
        <p>Bringing designs to life with modern code.</p>
      </div>
      <div className="service-card">
        <h3>Brand Strategy</h3>
        <p>Building brands that stand out in the market.</p>
      </div>
    </div>
  </section>
);

export default Services;