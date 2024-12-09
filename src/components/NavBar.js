import React from 'react';
import { Link } from 'react-router-dom';
import './styles/NavBar.css';
import GetStartedButton from './GetStartedButton';
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
      {["/", "/about", "/services", "/projects", "/contact"].map((path) => (
          <li key={path}>
            <Link
              to={path}
              className={location.pathname === path ? "active-link" : ""}
            >
              {path.replace("/", "") || "Home"}
            </Link>
          </li>
        ))}
    </ul>
    <div className="navbar-buttons">
        <button className="navbar-login">Login</button>
      </div>
    </nav>
  );
};

export default NavBar;
