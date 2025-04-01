import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Footer.css';
import FooterLogo from '../assets/FooterLogo.svg';
import SocialIconsBe from '../assets/SocialIconsBe.png';
import SocialIconsIG from '../assets/SocialIconsIG.png';
import SocialIconsX from '../assets/SocialIconsX.png';
import SendIcon from '../assets/send.png';

const Footer = () => (
  <footer className="footer-container">
    <div className="footer-grid">
      {/* Company Info Section */}
      <div className="footer-column company-info-section">
        <Link to="/">
          <img className="footer-logo" alt="Logo" src={FooterLogo} />
        </Link>
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
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/articles">Blog</Link></li> {/* Assuming you have Articles.js */}
          <li><Link to="/contact">Contact us</Link></li>
          <li><Link to="/get-started#pricing">Pricing</Link></li> {/* Link to pricing section */}
          <li><Link to="/about#testimonials">Testimonials</Link></li> {/* Link to testimonials section */}
        </ul>
      </div>

      {/* Support Links Section */}
      <div className="footer-column">
        <h3 className="footer-heading">Support</h3>
        <ul className="footer-list">
          <li><Link to="/contact">Help center</Link></li>
          <li><Link to="/terms">Terms of service</Link></li>
          <li><Link to="/legal">Legal</Link></li>
          <li><Link to="/privacy">Privacy policy</Link></li>
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
        <li><Link to="/privacy">Privacy Policy</Link></li>
        <li><Link to="/terms">Terms of Service</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </div>
  </footer>
);

export default Footer;