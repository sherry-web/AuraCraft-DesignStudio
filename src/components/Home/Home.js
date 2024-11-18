import React from 'react';
import HeroSection from '../HeroSection/HeroSection'; 
import ServiceCards from '../ServiceCards/ServiceCards'; 
import Testimonials from '../Testimonials/Testimonials';
import Projects from '../Projects/Projects'; 
import Footer from '../Footer'; 
import Header from '../Header'; 
import heroImage from '../../assets/hero.png'; 
import './Home.css';

// Importing individual components
import OurPeeps from './OurPeeps';
import OurStory from './OurStory';
import WhatIsUXUIDesign from './WhatIsUXUIDesign';
import MeetingGoogleStandards from './MeetingGoogleStandards';
import WhatIsFrontEndDevelopment from './WhatIsFrontEndDevelopment';
import ConnectSection from './ConnectSection';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <HeroSection />
      </section>
      
      {/* Design Your Digital Presence Section (Service Cards) */}
      <section className="service-cards-section">
        <h2>Design Your Digital Presence</h2>
        <ServiceCards />
      </section>
      
      {/* Our Peeps (Clients/Testimonial Section) */}
      <section className="our-peeps-section">
        <h2>Our Peeps</h2>
        <OurPeeps />
      </section>
      
      {/* Our Story Section */}
      <section className="our-story-section">
        <h2>Our Story</h2>
        <OurStory />
      </section>

      {/* What is UX/UI Design Section */}
      <section className="what-is-ux-ui-section">
        <h2>What is UX/UI Design?</h2>
        <WhatIsUXUIDesign />
      </section>

      {/* Meeting Google Standards Section */}
      <section className="meeting-google-standards-section">
        <h2>Meeting Google Standards</h2>
        <MeetingGoogleStandards />
      </section>

      {/* What is Front-End Development Section */}
      <section className="what-is-front-end-section">
        <h2>What is Front-End Development?</h2>
        <WhatIsFrontEndDevelopment />
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <h2>Our Projects</h2>
        <Projects />
      </section>

      {/* Connect Section */}
      <section className="connect-section">
        <ConnectSection />
      </section>
    </div>
  );
}

export default Home;
