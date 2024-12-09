import React, { useState } from 'react';
import '../styles/NewsletterSignup.css';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add newsletter signup logic here
    setSuccessMessage('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <section className="newsletter-container">
      <h2>Subscribe to Our Newsletter</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
};

export default NewsletterSignup;
