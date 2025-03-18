import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/NavBar.css';
import GetStartedButton from './GetStartedButton';
import logo from '../assets/logo.png';
import ScrollButton from './ScrollButton'; // Import the ScrollButton component

const NavBar = () => {
  const location = useLocation();

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="AuraCraft Logo" className="navbar-logo" />
          </Link>
        </div>
        <ul className="navbar-links">
          {["/", "/About", "/Services", "/Projects", "/Contact"].map((path) => (
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

      {/* Add the ScrollButton component here */}
      <ScrollButton />
    </>
  );
};

export default NavBar;