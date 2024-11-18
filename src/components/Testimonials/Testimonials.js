import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    { name: 'John Doe', feedback: 'AuraCraft exceeded our expectations with their exceptional designs!' },
    { name: 'Jane Smith', feedback: 'The team was professional, responsive, and delivered outstanding results.' },
    { name: 'Mark Johnson', feedback: 'Highly recommend AuraCraft for any front-end development needs.' },
  ];

  return (
    <section className="testimonials-container section">
      <h2 className="section-title">What Our Clients Say</h2>
      <div className="testimonials-list">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-feedback">{`"${testimonial.feedback}"`}</p>
            <h4 className="testimonial-name">- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
