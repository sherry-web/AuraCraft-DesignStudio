import React from 'react';
import ReactDOM from 'react-dom/client'; // Use ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'; // Wrap your app here
import App from './App';
import './index.css'; // Assuming you have a global CSS file



// Create the root using ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
