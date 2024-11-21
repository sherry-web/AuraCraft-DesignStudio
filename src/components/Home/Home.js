import React from "react";
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
import MyButton from "../Button";  // Import MyButton here
import Footer from "../Footer";

// Assets
import peepsLogo1 from "../../assets/peepslogo.png";
import peepsLogo2 from "../../assets/peepslogo2.png";
import peepsLogo3 from "../../assets/peepslogo3.png";
import centerHero from "../../assets/center hero.png";
import rightHero from "../../assets/right hero.png";
import ourStoryImage from "../../assets/ourstory.png";
import uxImage from '../../assets/UI-UX differences-amico.png';

// Styles
import "./Home.css";

const HomePage = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span style={{ color: "#0A7273" }}>AuraCraft Design Studio</span>{" "}
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
          <div className="card">
            <h3 className="card-title">UX Design</h3>
            <FontAwesomeIcon icon={faDesktop} className="card-icon" />
          </div>
          <div className="card">
            <h3 className="card-title">UI Design</h3>
            <FontAwesomeIcon icon={faBrush} className="card-icon" />
          </div>
          <div className="card">
            <h3 className="card-title">Front-End Development</h3>
            <FontAwesomeIcon icon={faCode} className="card-icon" />
          </div>
          <div className="card">
            <h3 className="card-title">E-Commerce Solutions</h3>
            <FontAwesomeIcon icon={faShoppingCart} className="card-icon" />
          </div>
          <div className="card">
            <h3 className="card-title">Brand Identity Design</h3>
            <FontAwesomeIcon icon={faCertificate} className="card-icon" />
          </div>
          <div className="card">
            <h3 className="card-title">Digital Strategy</h3>
            <FontAwesomeIcon icon={faChartLine} className="card-icon" />
          </div>
        </div>
      </section>

      {/* Our Peeps Section */}
      <section className="ourPeeps-section">
        <h2 className="section-title">
          Our <span className="highlight">Peeps</span>
        </h2>
        <p className="section-description">We have worked with some amazing peeps.</p>
        <div className="logo-container">
          <img src={peepsLogo1} alt="Client Logo 1" className="peeps-logo" />
          <img src={peepsLogo2} alt="Client Logo 2" className="peeps-logo" />
          <img src={peepsLogo3} alt="Client Logo 3" className="peeps-logo" />
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
                For more than 30 years, we have been delivering world-class construction and
                building lasting relationships along the way. <br />
                <br />
                We’ve grown into an industry leader and a trusted resource for those seeking
                quality, innovation, and reliability when building in the U.S.
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
            <img 
              className="img-2" 
              src={uxImage} 
              alt="UI/UX Differences Illustration" 
            />
            <div className="frame-3">
              <div className="frame-4">
                <p className="text-wrapper-16">
                  What is User&nbsp;Experience / User Interface Design?
                </p>
                <p className="text-wrapper-17">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. 
                  Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum 
                  lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus 
                  pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. 
                  Donec elementum pulvinar odio.
                </p>
              </div>
              <MyButton text="Learn More" onClick={() => alert('Learn More about UX/UI')} />
            </div>
          </div>
        </div>
      </section>

    {/* Meeting Google Standards Section */}
<div className="meeting-google-standards">
  <div className="background">
    <h2 className="heading-margin text-wrapper-16">
      Meeting Google’s Standards
    </h2>
    <p className="this-isn-t-rigged-it">
      This isn’t rigged—It&#39;s a clear-cut check to boost your visitor
      <br />
      experience. Enter your URL and discover what Google thinks!
    </p>
    <div className="container">
      <div className="form">
        <div className="background-border">
          <input 
            type="url" 
            className="url-input" 
            placeholder="Enter your website URL" 
            aria-label="Website URL" 
            required 
          />
          <button className="analyse-button">Analyse</button>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* What is Front-End Development Section */}
      <WhatIsFrontEndDevelopment />

      {/* Projects Section */}
      <Projects />

      {/* Connect Section */}
      <ConnectSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
