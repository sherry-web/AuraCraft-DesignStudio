import React from 'react';
import './styles/Footer.css';

const Footer = () => (
  <footer className="footer-container">
    <p>&copy; {new Date().getFullYear()} AuraCraft Design Studio. All rights reserved.</p>
    <ul className="footer-links">
      <li><a href="/privacy-policy">Privacy Policy</a></li>
      <li><a href="/terms">Terms of Service</a></li>
      <li><a href="/contact">Contact Us</a></li>
    </ul>
  </footer>
);

export default Footer;
