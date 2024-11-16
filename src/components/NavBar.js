import React from 'react';
import { Link } from 'react-router-dom';
import './styles/NavBar.css';

const NavBar = () => (
  <nav className="navbar">
    <div className="navbar-logo">
      <Link to="/">AuraCraft</Link>
    </div>
    <ul className="navbar-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about-us">About Us</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/works">Works</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default NavBar;
    