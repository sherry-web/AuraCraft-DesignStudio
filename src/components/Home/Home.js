import React from 'react';
import { Link } from 'react-router-dom';

// Components
import HeroSection from '../HeroSection/HeroSection';
import ServiceCards from '../ServiceCards/ServiceCards';
import Testimonials from '../Testimonials/Testimonials';
import Projects from '../Projects/Projects';
import Footer from '../Footer';
import Header from '../Header';
import OurPeeps from './OurPeeps';
import OurStory from './OurStory';
import WhatIsUXUIDesign from './WhatIsUXUIDesign';
import MeetingGoogleStandards from './MeetingGoogleStandards';
import WhatIsFrontEndDevelopment from './WhatIsFrontEndDevelopment';
import ConnectSection from './ConnectSection';

// Assets

import logo from '../../assets/logo.png';
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import icon4 from '../../assets/icon4.png';
import icon5 from '../../assets/icon5.png';
import icon6 from '../../assets/icon6.png';
import peepsLogo1 from '../../assets/peepslogo.png';
import peepsLogo2 from '../../assets/peepslogo2.png';
import peepsLogo3 from '../../assets/peepslogo3.png';
import ourStoryImage from '../../assets/ourstory.png';
import uxUIDifferencesImage from "../../assets/UI-UX differences-amico.png";

import { 
  Brush, 
  LaptopMac, 
  Code, 
  ShoppingCart, 
  Business, 
  ShowChart 
} from '@mui/icons-material';

// Styles
import './Home.css';

const HomePage = () => {
  const serviceCards = [
    { title: "UX Design", icon: icon1 },
    { title: "UI Design", icon: icon2 },
    { title: "Front-End Development", icon: icon3 },
    { title: "E-Commerce Solution", icon: icon4 },
    { title: "Brand Identity", icon: icon5 },
    { title: "Digital Strategy", icon: icon6 },
  ];

  const clientLogos = [peepsLogo1, peepsLogo2, peepsLogo3];

  return (
    <div className="home">
 <section className="hero-section">
  <div className="hero-content">
    <h1 className="hero-title">
      <span style={{ color: "#0A7273" }}>AuraCraft Design Studio</span>{" "}
      <span style={{ color: "#4D4D4D" }}>
        Transform your digital presence
      </span>
    </h1>
    <p className="hero-subtitle">
      Elevate your brand with exceptional designs and strategies.
    </p>
    <div className="cta-container">
      <button className="primary-cta" aria-label="Get Started">
        Get Started
      </button>
    </div>
  </div>

  <div className="hero-images">
    <img
      src={require("../../assets/center hero.png")}
      alt="Center Hero"
      className="hero-image-center"
    />
    <img
      src={require("../../assets/right hero.png")}
      alt="Right Hero"
      className="hero-image-right"
    />
  </div>
</section>


      {/* Service Cards Section */}
      <section className="design-section">
  <h2 className="section-title">Design Your Digital Presence</h2>
  <div className="card-container">
    <div className="card card-1">
      <h3 className="card-title">UX Design</h3>
      <Brush className="card-icon" />
    </div>
    <div className="card card-2">
      <h3 className="card-title">UI Design</h3>
      <LaptopMac className="card-icon" />
    </div>
    <div className="card card-3">
      <h3 className="card-title">Front-End Development</h3>
      <Code className="card-icon" />
    </div>
    <div className="card card-4">
      <h3 className="card-title">E-Commerce Solutions</h3>
      <ShoppingCart className="card-icon" />
    </div>
    <div className="card card-5">
      <h3 className="card-title">Brand Identity Design</h3>
      <Business className="card-icon" />
    </div>
    <div className="card card-6">
      <h3 className="card-title">Digital Strategy</h3>
      <ShowChart className="card-icon" />
    </div>
  </div>
</section>

      {/* Our Peeps Section */}
      <OurPeeps clientLogos={clientLogos} />

      {/* Our Story Section */}
      <OurStory image={ourStoryImage} />

      {/* What is UX/UI Design Section */}
      <WhatIsUXUIDesign image={uxUIDifferencesImage} />

      {/* Meeting Google Standards Section */}
      <MeetingGoogleStandards />

      {/* What is Front-End Development Section */}
      <WhatIsFrontEndDevelopment />

      {/* Projects Section */}
      <Projects />

      {/* Connect Section */}
      <ConnectSection />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default HomePage;
