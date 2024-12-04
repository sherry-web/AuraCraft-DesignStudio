import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'; 
import AboutUs from './components/AboutUs';
import ContactForm from './components/pages/ContactForm';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<ContactForm />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;