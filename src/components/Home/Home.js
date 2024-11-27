import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faBrush,
  faCode,
  faShoppingCart,
  faCertificate,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

// Components
import OurStory from "./OurStory";
import WhatIsUXUIDesign from "./WhatIsUXUIDesign";
import MeetingGoogleStandards from "./MeetingGoogleStandards";
import WhatIsFrontEndDevelopment from "./WhatIsFrontEndDevelopment";
import Projects from "../Projects/Projects";
import ConnectSection from "./ConnectSection";
import MyButton from "../Button";  
import MenuItem from './MenuItem'; 
import ProjectCard from './ProjectCard'; 
import BackButton from './BackButton';
import NextButton from './NextButton'; 
import PageControl from './PageControl'; 
import Footer from "../Footer";

// Assets
import peepsLogo1 from "../../assets/peepslogo.png";
import peepsLogo2 from "../../assets/peepslogo2.png";
import peepsLogo3 from "../../assets/peepslogo3.png";
import ourStoryImage from "../../assets/ourstory.png";
import centerHero from "../../assets/center-hero.png";
import rightHero from "../../assets/right-hero.png";
import uxImage from "../../assets/UI-UX-differences-amico.png";
import HandCodingBro from "../../assets/hand-coding-bro.png";
import project1 from '../../assets/projec1.png';
import project2 from '../../assets/projec2.png';
import project3 from '../../assets/projec3.png';
import project4 from '../../assets/projec4.png';

// Styles
import "./Home.css";

const HomePage = () => {
  const [activeMenu, setActiveMenu] = useState("All Projects");  // Set default active menu item

  const handleMenuClick = (menu) => {
    setActiveMenu(menu); // Update active menu when clicked
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span style={{ color: "#0A7273" }}>AuraCraft Design Studio</span> 
            <span style={{ color: "#4D4D4D" }}>Transform Your Digital Presence</span>
          </h1>
          <p className="hero-subtitle">
            Elevate your brand with exceptional designs and strategies.
          </p>
          <div className="cta-container">
            <MyButton text="Get Started" onClick={() => alert('Started!')} />
          </div>
        </div>
        <div className="hero-images">
          <img src={centerHero} alt="Center Hero" className="hero-image-center" />
          <img src={rightHero} alt="Right Hero" className="hero-image-right" />
        </div>
      </section>

      {/* Design Section */}
      <section className="design-section">
        <h2 className="section-title">
          <span className="highlight">Design</span> Your Digital Presence
        </h2>
        <div className="card-container">
          {["UX Design", "UI Design", "Front-End Development", "E-Commerce Solutions", "Brand Identity Design", "Digital Strategy"].map((title, index) => (
            <div key={index} className="card">
              <h3 className="card-title">{title}</h3>
              <FontAwesomeIcon 
                icon={[faDesktop, faBrush, faCode, faShoppingCart, faCertificate, faChartLine][index]} 
                className="card-icon" 
              />
            </div>
          ))}
        </div>
      </section>

      {/* Our Peeps Section */}
      <section className="ourPeeps-section">
        <h2 className="section-title">
          Our <span className="highlight">Peeps</span>
        </h2>
        <p className="section-description">We have worked with some amazing peeps.</p>
        <div className="logo-container">
          {[peepsLogo1, peepsLogo2, peepsLogo3].map((logo, index) => (
            <img key={index} src={logo} alt={`Client Logo ${index + 1}`} className="peeps-logo" />
          ))}
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story-section">
        <div className="about-us">
          <div className="overlap-2">
            <img src={ourStoryImage} alt="Our Story" className="mock-up" />
            <div className="frame-2">
              <h2 className="text-wrapper-15">About Us</h2>
              <p className="for-more-than">
                For more than 30 years, we have been delivering world-class construction and building lasting relationships. <br />
                We’ve grown into an industry leader, trusted for quality and innovation.
              </p>
              <MyButton text="More on History" onClick={() => alert('History More Info')} />
            </div>
          </div>
        </div>
      </section>

      {/* What is UX/UI Design Section */}
      <section className="ux-ui-section">
        <div className="unlock-wrapper">
          <div className="unlock">
            <img className="img-2" src={uxImage} alt="UI/UX Differences Illustration" />
            <div className="frame-3">
              <div className="frame-4">
                <p className="text-wrapper-16">What is UX/UI Design?</p>
                <p className="text-wrapper-17">
                  UX/UI Design helps create user-friendly and visually appealing digital experiences, making apps and websites easier to navigate.
                </p>
              </div>
              <MyButton text="Learn More" onClick={() => alert('Learn More about UX/UI')} />
            </div>
          </div>
        </div>
      </section>

      {/* Meeting Google Standards Section */}
      <section className="meeting-google-standards">
        <h2 className="heading-margin text-wrapper-16">Meeting Google’s Standards</h2>
        <p className="this-isn-t-rigged-it">
          Enter your URL to see how well your website meets Google's standards.
        </p>
        <div className="container">
          <div className="form">
            <div className="background-border">
              <input type="url" className="url-input" placeholder="Enter your website URL" required />
              <button className="analyse-button">Analyse</button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Front-End Development Section */}
      <section className="frontend-section">
        <div className="unlock-wrapper">
          <div className="unlock">
            <img className="img-2" src={HandCodingBro} alt="Front-End Development Illustration" />
            <div className="frame-3">
              <h2 className="text-wrapper-16">What is Front-End Development?</h2>
              <p className="text-wrapper-17">
                Front-End Development involves creating the visual elements of a website that users interact with, using HTML, CSS, and JavaScript.
              </p>
            </div>
            <button className="button-3">Learn More</button>
          </div>
        </div>
      </section>

{/* Projects Section */}
<section className="projects-section">
  <div className="projects-container">
    <div className="projects-menu-wrapper">
      <h2>Projects</h2>
      <nav>
        {["All Projects", "UX/UI Design", "Front-End Development", "Other"].map((menu, index) => (
          <div
            key={index}
            className={`menu-item ${menu === activeMenu ? "active" : ""}`}
            onClick={() => handleMenuClick(menu)}
          >
            {menu}
          </div>
        ))}
      </nav>
    </div>
    <div className="projects-grid">
      {[project1, project2, project3, project4].map((project, index) => (
        <div key={index} className="project-card">
          <div className="img-wrapper">
            <img src={project} alt={`Project ${index + 1}`} />
          </div>
          <div className="info">
            <h3 className="PJ-name">Project {index + 1}</h3>
            <p className="address">Description here</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default HomePage;
