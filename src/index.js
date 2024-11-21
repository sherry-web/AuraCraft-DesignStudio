import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './components/styles/global.css'; // Global styles for the app

const root = createRoot(document.getElementById('root'));

// Render the App component inside React.StrictMode for development mode (helps identify potential issues)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
