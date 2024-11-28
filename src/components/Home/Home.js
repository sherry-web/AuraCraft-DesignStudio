import React, { useState } from "react";
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
import ConnectForm from "../ConnectForm";
import MyButton from "../Button";
import Footer from "../Footer";

// Assets
import peepsLogo1 from "../../assets/peepslogo.png";
import peepsLogo2 from "../../assets/peepslogo2.png";
import peepsLogo3 from "../../assets/peepslogo3.png";
import centerHero from "../../assets/center-hero.png";
import rightHero from "../../assets/right-hero.png";
import project1 from "../../assets/projec1.png";
import project2 from "../../assets/projec2.png";
import project3 from "../../assets/projec3.png";
import project4 from "../../assets/projec4.png";

// Styles
import "./Home.css";

const HomePage = () => {
  const [activeMenu, setActiveMenu] = useState("All Projects");
  const [activeDot, setActiveDot] = useState(0);

  const designServices = [
    { title: "UX Design", icon: faDesktop },
    { title: "UI Design", icon: faBrush },
    { title: "Front-End Development", icon: faCode },
    { title: "E-Commerce Solutions", icon: faShoppingCart },
    { title: "Brand Identity Design", icon: faCertificate },
    { title: "Digital Strategy", icon: faChartLine },
  ];

  const projects = [
    { img: project1, title: "Project 1", description: "Short description of project 1." },
    { img: project2, title: "Project 2", description: "Short description of project 2." },
    { img: project3, title: "Project 3", description: "Short description of project 3." },
    { img: project4, title: "Project 4", description: "Short description of project 4." },
  ];

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const handlePrevClick = () => {
    setActiveDot((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setActiveDot((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
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
            <MyButton text="Get Started" onClick={() => alert("Started!")} />
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
          {designServices.map(({ title, icon }, index) => (
            <div key={index} className="card">
              <h3 className="card-title">{title}</h3>
              <FontAwesomeIcon icon={icon} className="card-icon" />
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

      {/* Projects Section */}
      <section className="projects-section">
        <div className="projects-menu-wrapper">
          <h2>All Projects</h2>
          <nav>
            {["All Projects", "UX/UI Design", "Front-End Development", "Other"].map((menu, index) => (
              <div
                key={index}
                className={`menu-item ${activeMenu === menu ? "active" : ""}`}
                onClick={() => handleMenuClick(menu)}
              >
                {menu}
              </div>
            ))}
          </nav>
        </div>

        <div className="projects-grid-navigation">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className={`project-card ${index === activeDot ? "active" : ""}`}>
                <div className="img-wrapper">
                  <img src={project.img} alt={project.title} className="project-image" />
                </div>
                <div className="info">
                  <h3 className="PJ-name">{project.title}</h3>
                  <p className="address">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="projects-navigation">
            <MyButton text="Back" onClick={handlePrevClick} />
            <div className="dots">
              {projects.map((_, index) => (
                <div
                  key={index}
                  className={`dot ${index === activeDot ? "active" : ""}`}
                  onClick={() => setActiveDot(index)}
                ></div>
              ))}
            </div>
            <MyButton text="Next" onClick={handleNextClick} />
          </div>
        </div>
      </section>

     {/* Connect Section */}
<section className="connect-section">
  <h2 className="section-title">
    <span className="highlight">Connect</span> With Us
  </h2>
  <ConnectForm />
</section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default HomePage;
