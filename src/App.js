import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import NavBar from './components/NavBar';
import Login from './components/pages/Login'; 
import Home from './components/Home/Home';
import Dashboard from './components/pages/Dashboard'; 
import PrivateRoute from './components/pages/PrivateRoute';  
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Works from './components/Works';
import ContactForm from './components/pages/ContactForm';
import Footer from './components/Footer';
import Header from './components/Header';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <Router>
      <NavBar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={login} />} />
        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Dashboard onLogout={logout} />
            </PrivateRoute>
          } 
        />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
