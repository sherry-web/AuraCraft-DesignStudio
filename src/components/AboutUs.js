import React from "react";
import MyButton from "./Button";
import Footer from "./Footer";

// Assets
import aboutHeroImage from "../assets/aboutherobg.svg";
import journeyImage from "../assets/ourJour.svg";
import { SvgIcon } from '@mui/material';
import BrushIcon from '@mui/icons-material/Brush'; // Creativity
import VerifiedIcon from '@mui/icons-material/Verified'; // Quality
import PeopleIcon from '@mui/icons-material/People'; // Community
// Styles
import "./styles/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <section className="hero-section about-us-section">
        <div className="hero-container">
          {/* Left Content */}
          <div className="hero-content">
            <h1 className="hero-title">Our Story</h1>
            <h2 className="hero-subtitle">MEET THE FOUNDER</h2>

            <div className="foreword-container">
              <p className="foreword-title">A Foreword From Sherry</p>
              <p className="foreword-text">
                “We know the challenges of bringing digital dreams to life - we built AuraCraft to be your trusted partner in design and development.”
              </p>
            </div>

            <p className="hero-description">
              Hello! We’re AuraCraft Design Studio, a place where creativity meets technology. We’re passionate about helping individuals and businesses carve out their unique space in the digital world.
            </p>

            <div className="cta-container">
              <MyButton text="About Sherry" onClick={() => alert("About Sherry")} />
            </div>
          </div>
        </div>

        {/* Move Right Image OUTSIDE .hero-container */}
        <div className="hero-image">
          <img src={aboutHeroImage} alt="Our Story" />
        </div>
      </section>

      {/* Who We Are & What We Offer Section */}
      <section className="who-we-are-section about-us-section">
        <div className="info-container">
          <div className="text-container">
            <h2 className="section-title">Who We Are</h2>
            <h3 className="section-subtitle">Your Vision, Our Mission</h3>
            <p className="section-description">
              We’re driven by the belief that everyone deserves a stunning, user-friendly digital presence. Whether you’re a startup or an established business, we’re here to help you make a lasting impression online.
            </p>
          </div>

          <div className="text-container">
            <h2 className="section-title">What We Offer</h2>
            <h3 className="section-subtitle">Innovation at Its Best</h3>
            <p className="section-description">We specialize in:</p>
            <ul className="offer-list">
              <li className="offer-item">
                <strong>UX/UI Design</strong>: Crafting intuitive and engaging user experiences.
              </li>
              <li className="offer-item">
                <strong>Front-End Development</strong>: Building responsive and dynamic websites.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="our-values-section about-us-section">
  <div className="values-header">
    <h2 className="section-title">Our Values</h2>
  </div>
  <br></br>
  <br></br>
  <div className="values-container">
    <div className="value-item">
      <SvgIcon component={BrushIcon} className="value-icon" />
      <h3 className="value-title">Creativity</h3>
      <p className="value-description">Pushing the boundaries of design to create unique solutions.</p>
    </div>
    <div className="value-item">
      <SvgIcon component={VerifiedIcon} className="value-icon" />
      <h3 className="value-title">Quality</h3>
      <p className="value-description">Ensuring excellence in every project.</p>
    </div>
    <div className="value-item">
      <SvgIcon component={PeopleIcon} className="value-icon" />
      <h3 className="value-title">Community</h3>
      <p className="value-description">Building strong relationships and supporting your growth.</p>
    </div>
  </div>
</section>

    {/* Our Journey Section */}
<section className="our-journey-section about-us-section">
  <div className="journey-content">
    {/* Left Content */}
    <div className="journey-text">
      <h2 className="section-title">Our Journey</h2>
      <h3 className="section-subtitle">A Path of Passion and Innovation</h3>
      <ul className="journey-list">
        <li className="journey-description">2020: AuraCraft was born from a desire to innovate.</li>
        <li className="journey-description">2021: Expanded to offer comprehensive development services.</li>
        <li className="journey-description">2022: Launched new AI-driven solutions.</li>
        <li className="journey-description">2023: Opened new offices worldwide.</li>
        <li className="journey-description">2024: Reached 1 million users globally.</li>
      </ul>
    </div>

    {/* Right Image */}
    <div className="journey-image">
      <img src={journeyImage} alt="Our Journey" />
    </div>
  </div>
</section>

      {/* Call to Action Section */}
      <section className="create-something-section about-us-section">
        <h2 className="section-title">Let’s Create Something Amazing</h2>
        <p className="section-description">
          Ready to start your project with us? Get in touch and let's create something amazing together.
        </p>
        <div className="cta-container">
          <MyButton text="Get Started" onClick={() => alert("Get Started")} />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;