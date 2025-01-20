import React from 'react';
import { Link } from 'react-router-dom';
import './styles/GetStarted.css';

const GetStartedButton = ({ className = '' }) => {
  return (
    <Link to="/get-started" className={`get-started-button ${className}`}>
      Get Started
    </Link>
  );
};

export default GetStartedButton;