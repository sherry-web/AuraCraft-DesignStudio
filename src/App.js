import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import PrivateRoute from './components/pages/PrivateRoute';
import Home from './components/Home/Home'; // Import Home properly
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Works from './components/Works';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <Router>
      {/* Header is always visible */}
      <Header />

      {/* Application Routes */}
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Login page */}
        <Route path="/login" element={<Login onLogin={login} />} />

        {/* Protected route for Dashboard */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Dashboard onLogout={logout} />
            </PrivateRoute>
          }
        />

        {/* Other pages */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/works" element={<Works />} />
      </Routes>

      {/* Footer is always visible */}
      <Footer />
    </Router>
  );
};

export default App;
