import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export { Home } from "./Home";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);