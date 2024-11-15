import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Jane Doe',
    feedback: 'AuraCraft Design Studio transformed our website into a masterpiece.',
  },
  {
    name: 'John Smith',
    feedback: 'The team’s UX expertise improved our user engagement significantly.',
  },
];

const Testimonials = () => (
  <div className="testimonials-container">
    <h2>What Our Clients Say</h2>
    {testimonials.map((testimonial, index) => (
      <div key={index} className="testimonial-card">
        <p>"{testimonial.feedback}"</p>
        <h4>- {testimonial.name}</h4>
      </div>
    ))}
  </div>
);

export default Testimonials;
