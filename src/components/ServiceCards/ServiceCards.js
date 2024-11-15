import React from 'react';
import './ServiceCards.css';

const services = [
  { title: 'UX/UI Design', description: 'User-centered design to elevate experiences.' },
  { title: 'Front-End Development', description: 'Modern and responsive web solutions.' },
  { title: 'Consulting', description: 'Tailored advice to meet your needs.' },
];

const ServiceCards = () => (
  <div className="service-cards-container">
    {services.map((service, index) => (
      <div key={index} className="service-card">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
    ))}
  </div>
);

export default ServiceCards;
