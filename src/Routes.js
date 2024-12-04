import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'; 
import AboutUs from './components/AboutUs';
import ContactForm from './components/pages/ContactForm';
import GetStarted from './components/pages/GetStarted';
import LearnMore from './components/pages/LearnMore';
import Analyze from './components/pages/Analyze';
import Articles from './components/pages/Articles';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<ContactForm />} />
                <Route path="/get-started" element={<GetStarted />} />
                <Route path="/learn-more" element={<LearnMore />} />
                <Route path="/analyze" element={<Analyze />} />
                <Route path="/articles" element={<Articles />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;