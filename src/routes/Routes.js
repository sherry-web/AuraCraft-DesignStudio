import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import AboutUs from '../components/AboutUs';
import ContactForm from '../components/pages/ContactForm';
import GetStarted from '../components/pages/GetStarted';
import LearnMore from '../components/pages/LearnMore';
import Analyze from '../components/pages/Analyze';
import Articles from '../components/pages/Articles';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/learn-more" element={<LearnMore />} />
      <Route path="/analyze" element={<Analyze />} />
      <Route path="/articles" element={<Articles />} />
    </Routes>
  );
}

export default AppRoutes;
