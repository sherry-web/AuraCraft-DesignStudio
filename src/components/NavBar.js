import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/NavBar.css';
import GetStartedButton from './GetStartedButton';
import logo from '../assets/logo.png';
import ScrollButton from './ScrollButton';

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
          {[
            { path: "/", name: "Home" },
            { path: "/about", name: "About" },
            { path: "/services", name: "Services" },
            { path: "/projects", name: "Projects" },
            { path: "/contact", name: "Contact" }
          ].map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={location.pathname === item.path ? "active-link" : ""}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="navbar-buttons">
          <button className="navbar-login">Login</button>
        </div>
      </nav>
      <ScrollButton />
    </>
  );
};

export default NavBar;