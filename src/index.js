import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './components/styles/global.css'; // Global styles for the app

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
