import React from 'react';
import { Link } from 'react-router-dom';
import './styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="/src/assets/logo.png" alt="AuraCraft Logo" className="navbar-logo" />
        </Link>
      </div>
    <ul className="navbar-links">
      <li><a href="#services">Services</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <button className="navbar-cta">Get Started</button>
  </nav>
);
};

export default NavBar;