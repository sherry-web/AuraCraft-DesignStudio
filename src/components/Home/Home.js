import React from 'react';
import HeroSection from '../HeroSection/HeroSection'; 
import ServiceCards from '../ServiceCards/ServiceCards'; 
import Testimonials from '../Testimonials/Testimonials';
import Projects from '../Projects/Projects'; 
import Footer from '../Footer'; 
import Header from '../Header'; 
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Header />  // Ensure Header component exists and is correctly imported
      <HeroSection />
      <ServiceCards />
      <Projects />
      <Testimonials />
      <Footer />  // Ensure Footer component exists and is correctly imported
    </div>
  );
};

export default Home;
