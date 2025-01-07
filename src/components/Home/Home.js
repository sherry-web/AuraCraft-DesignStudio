import React, { useState, useContext, createContext } from "react";
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
import WhatIsUXUIDesign from "./WhatIsUXUIDesign";
import MeetingGoogleStandards from "./MeetingGoogleStandards";
import WhatIsFrontEndDevelopment from "./WhatIsFrontEndDevelopment";
import Projects from "../Projects/Projects"; // Check path correctness
import ConnectForm from "../pages/ContactForm"; // Updated path
import MyButton from "../ServiceCards/ServiceCards"; // Updated path
import Footer from "../Footer"; // Check path correctness

// Assets
import ourStory from "../../assets/ourstory.png";
import peepsLogo1 from "../../assets/peepslogo.png";
import peepsLogo2 from "../../assets/peepslogo2.png";
import peepsLogo3 from "../../assets/peepslogo3.png";
import project1 from "../../assets/projec1.png";
import project2 from "../../assets/projec2.png";
import project3 from "../../assets/projec3.png";
import project4 from "../../assets/projec4.png";
import uxImage from "../../assets/UI-UX-differences-amico.png";
import prompt01 from "../../assets/prompt01.svg";
import prompt02 from "../../assets/prompt02.svg";
import prompt03 from "../../assets/prompt03.svg";
import FooterLogo from "../../assets/FooterLogo.svg";
import SocialIconsBe from "../../assets/SocialIconsBe.png";
import SocialIconsIG from "../../assets/SocialIconsIG.png";
import SocialIconsX from "../../assets/SocialIconsX.png";
import SendIcon from "../../assets/send.png";
import HandCodingBro from "../../assets/HandCodingBro.png";

// Styles
import "./Home.css";

// Context for managing hero content
const HeroContext = createContext();

const HomePage = () => {
  const [activeMenu, setActiveMenu] = useState("All Projects");
  const [activeDot, setActiveDot] = useState(0);
  const [heroContent, setHeroContent] = useState({
    title: "Welcome to AuraCraft",
    subtitle: "Design your digital presence with us.",
    image: prompt01,
  });

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

  const handlePrevClick = () => {
    setActiveDot((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setActiveDot((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handleJourneySelection = (imageSource, title, subtitle) => {
    setHeroContent({
      title,
      subtitle,
      image: imageSource,
    });
  };

  return (
    <HeroContext.Provider value={{ heroContent, setHeroContent }}>
      <div>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              <span style={{ color: "#0A7273" }}>{heroContent.title}</span>
            </h1>
            <p className="hero-subtitle">{heroContent.subtitle}</p>
            <MyButton text="Get Started" onClick={() => alert("Started!")} />
          </div>
          <img src={heroContent.image} alt="Hero" className="hero-image" />
        </section>

        {/* Intro Journey Section */}
        <section className="intro-journey-section">
          <h2>Your Journey Starts Here</h2>
          <div>
            <button
              onClick={() =>
                handleJourneySelection(prompt01, "Start Your Project", "Let's begin your project journey.")
              }
            >
              Start
            </button>
            <button
              onClick={() =>
                handleJourneySelection(prompt02, "Learn More", "Explore our services and get more details.")
              }
            >
              Learn More
            </button>
            <button
              onClick={() =>
                handleJourneySelection(prompt03, "Innovate with Us", "Let’s bring your ideas to life!")
              }
            >
              Innovate
            </button>
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

        {/* Our Story Section */}
        <section className="our-story-section">
          <div className="about-us">
            <img src={ourStory} alt="Our Story" className="mock-up" />
            <div className="frame-2">
              <h2 className="text-wrapper-15">About Us</h2>
              <p className="for-more-than">
                For more than 30 years, we have been delivering world-class construction and building lasting relationships.
                We’ve grown into an industry leader, trusted for quality and innovation.
              </p>
              <MyButton text="More on History" onClick={() => alert("History More Info")} />
            </div>
          </div>
        </section>

        {/* UX/UI Section */}
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
              <button className="analyse-button">
                <img src={SendIcon} alt="Send icon" />
                Analyze
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Front-End Development Section */}
<section className="frontend-section">
  <div className="unlock-wrapper">
    <div className="unlock">
      <img className="img-2" src={HandCodingBro} alt="Hand coding illustration" />
      <div className="frame-3">
        <div className="frame-4">
          <p className="text-wrapper-16">What is Front-End Development?</p>
          <p className="text-wrapper-17">
            Front-end development refers to the client-side development of websites and applications. It focuses on building the interface users interact with.
          </p>
        </div>
        <MyButton text="Read More" onClick={() => alert('Read More about Front-End')} />
      </div>
    </div>
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

        {/* Footer */}
        <footer className="footer">
  <div className="footer-big">
    {/* Company Info Section */}
    <div className="footer-column">
      <div className="company-info">
        <img className="logo-2" alt="Logo" src={FooterLogo} />
        <div className="copyright">
          <p>Copyright © 2024 Aura-Craft Design Studio.</p>
          <p>All rights reserved</p>
        </div>
        <div className="social-links">
          <img className="social-icons" alt="Social Be" src={SocialIconsBe} />
          <img className="social-icons" alt="Social IG" src={SocialIconsIG} />
          <img className="social-icons" alt="Social X" src={SocialIconsX} />
        </div>
      </div>
    </div>

    {/* Company Links Section */}
    <div className="footer-column">
      <div className="col">
        <div className="text-wrapper-33">Company</div>
        <div className="list-items">
          <a href="/about-us">About us</a>
          <a href="/blog">Blog</a>
          <a href="/contact-us">Contact us</a>
          <a href="/pricing">Pricing</a>
          <a href="/testimonials">Testimonials</a>
        </div>
      </div>
    </div>

    {/* Support Links Section */}
    <div className="footer-column">
      <div className="col">
        <div className="text-wrapper-33">Support</div>
        <div className="list-items">
          <a href="/help-center">Help center</a>
          <a href="/terms-of-service">Terms of service</a>
          <a href="/legal">Legal</a>
          <a href="/privacy-policy">Privacy policy</a>
        </div>
      </div>
    </div>

    {/* Subscribe Section */}
    <div className="footer-column">
      <div className="col-2">
        <div className="text-wrapper-33">Stay up to date</div>
        <div className="email-input-field">
          <div className="overlap-group-3">
            <input
              type="email"
              className="input-field"
              placeholder="Your email address"
            />
            <button className="essential-icons-send">
              <img src={SendIcon} alt="Send" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
      </div>
    </HeroContext.Provider>
  );
};

export default HomePage;