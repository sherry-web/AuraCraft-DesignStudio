import React from 'react';
import './styles/Footer.css';

import FooterLogo from '../assets/FooterLogo.svg';  // Updated to .svg
import SocialIconsBe from '../assets/SocialIconsBe.png';
import SocialIconsIG from '../assets/SocialIconsIG.png';
import SocialIconsX from '../assets/SocialIconsX.png';
import SendIcon from '../assets/send.png';  // Updated to send.png

const Footer = () => (
  <footer className="footer-container">
    <div className="footer-grid">
      {/* Company Info Section */}
      <div className="footer-column company-info-section">
        <img className="footer-logo" alt="Logo" src={FooterLogo} />
        <div className="footer-copy">
          <p>Copyright © {new Date().getFullYear()} Aura-Craft Design Studio.</p>
          <p>All rights reserved</p>
        </div>
        <div className="social-links">
          <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
            <img className="social-icon" alt="Social Be" src={SocialIconsBe} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img className="social-icon" alt="Social IG" src={SocialIconsIG} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img className="social-icon" alt="Social X" src={SocialIconsX} />
          </a>
        </div>
      </div>

      {/* Company Links Section */}
      <div className="footer-column">
        <h3 className="footer-heading">Company</h3>
        <ul className="footer-list">
          <li><a href="/about-us">About us</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact-us">Contact us</a></li>
          <li><a href="/pricing">Pricing</a></li>
          <li><a href="/testimonials">Testimonials</a></li>
        </ul>
      </div>

      {/* Support Links Section */}
      <div className="footer-column">
        <h3 className="footer-heading">Support</h3>
        <ul className="footer-list">
          <li><a href="/help-center">Help center</a></li>
          <li><a href="/terms-of-service">Terms of service</a></li>
          <li><a href="/legal">Legal</a></li>
          <li><a href="/privacy-policy">Privacy policy</a></li>
        </ul>
      </div>

      {/* Subscribe Section */}
      <div className="footer-column subscribe-section">
        <h3 className="footer-heading">Stay up to date</h3>
        <form className="subscribe-form">
          <input
            type="email"
            className="subscribe-input"
            placeholder="Your email address"
          />
          <button type="submit" className="subscribe-button">
            <img src={SendIcon} alt="Send" />
          </button>
        </form>
      </div>
    </div>

    {/* Footer Bottom Bar */}
    <div className="footer-bottom">
      <ul className="footer-links">
        <li><a href="/privacy-policy">Privacy Policy</a></li>
        <li><a href="/terms">Terms of Service</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
    </div>
  </footer>
);

export default Footer;