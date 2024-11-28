import React from "react";
import './styles/ConnectForm.css';

const ConnectForm = () => {
  return (
    <div className="connect-section-container">
      <h2>Contact Us</h2>
      <p>We are here to help you with any inquiries or collaborations. Let’s get started!</p>
      
      <form className="connect-form">
        {/* Name Field */}
        <div className="form-element full-width">
          <label className="required">Your Name</label>
          <input type="text" placeholder="Enter your name" required />
        </div>
        
        {/* Email Field */}
        <div className="form-element">
          <label className="required">Email</label>
          <input type="email" placeholder="Enter your email" required />
        </div>
        
        {/* Phone Field */}
        <div className="form-element">
          <label className="required">Phone</label>
          <input type="tel" placeholder="Enter your phone number" required />
        </div>
        
        {/* Reason for Contacting */}
        <div className="form-element full-width">
          <label className="required">Reason for Contacting</label>
          <select required>
            <option value="">Select a reason</option>
            <option value="inquiry">General Inquiry</option>
            <option value="project">Project Collaboration</option>
            <option value="support">Support</option>
          </select>
        </div>
        
        {/* Message Field */}
        <div className="form-element full-width">
          <label className="required">Message</label>
          <textarea placeholder="Write your message" rows="5" required></textarea>
        </div>
        
        {/* Submit Button */}
        <button type="submit" className="button-6">Submit</button>
        
        {/* Instructional Text */}
        <p className="indicates-a-required">
          <span>*</span> Required fields are marked with an asterisk
        </p>
      </form>
    </div>
  );
};

export default ConnectForm;
