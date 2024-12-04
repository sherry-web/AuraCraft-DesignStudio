import React from 'react';
import { Link } from 'react-router-dom';
import './styles/NavBar.css';
import logo from '../assets/logo.png'; // Adjust this path relative to NavBar.js

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="AuraCraft Logo" className="navbar-logo" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="navbar-buttons">
        <button className="navbar-cta">Get Started</button>
        <button className="navbar-login">Login</button>
      </div>
    </nav>
  );
};

export default NavBar;
