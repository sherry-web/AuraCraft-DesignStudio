import React, { useState } from 'react';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (error) setError('');
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation: all fields must be filled
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields.');
      return;
    }
    setSubmitted(true);

    // Simulate a submission process
    setTimeout(() => {
      alert('Thank you for reaching out! We’ll get back to you within 24 hours.');
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="contact-form-container">
      <div className="contact-form-content">
        {/* Left Column: Text Content */}
        <div className="contact-text">
          <header className="contact-header">
            <h2>Let’s Create Something Amazing Together</h2>
            <p className="subtitle">
              Whether you’re a new client or an existing partner, we’re here to help you bring your ideas to life. Let’s collaborate and make something extraordinary!
            </p>
          </header>

          <div className="contact-details">
            <h3>Why Choose Us?</h3>
            <ul>
              <li>🚀 Fast and reliable service</li>
              <li>💡 Innovative solutions tailored to your needs</li>
              <li>🤝 Dedicated support for every project</li>
              <li>🌟 Trusted by businesses worldwide</li>
            </ul>
          </div>

          <p className="contact-note">
            Have questions? We’re here to help! Reach out to us anytime.
          </p>
        </div>

        {/* Right Column: Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Get in Touch</h3>
          {/* Name Field */}
          <div className="form-element">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Field */}
          <div className="form-element">
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Message Field */}
          <div className="form-element full-width">
            <textarea
              name="message"
              placeholder="Tell us about your project..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {error && <p className="error-message">{error}</p>}

          {/* Submit Button */}
          <button type="submit" className="submit-button" disabled={submitted}>
            {submitted ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;