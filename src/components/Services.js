import React from "react";
import { Link } from "react-router-dom";
import "./styles/Services.css";
import serviceHero from "../assets/servicehero.svg";
import serviceDualSectImage from "../assets/servicedualsectimage.svg";
import ScrollButton from "../components/ScrollButton";

// Material UI icons
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CodeIcon from "@mui/icons-material/Code";
import CampaignIcon from "@mui/icons-material/Campaign";
import { Button } from "@mui/material";

// Service card component for DRY code
const ServiceCard = ({ title, icon: Icon, points, linkTo, className = "" }) => (
  <div className={`service-card ${className}`}>
    <h3 className="card-title">{title}</h3>
    <Icon className="card-icon" fontSize="large" />
    <ul className="card-bullets">
      {points.map((point, index) => (
        <li key={index} className="bullet">
          {point}
        </li>
      ))}
    </ul>
    <div className="card-cta">
      <Link to={linkTo} className="cta-link">
        Get Started
      </Link>
    </div>
  </div>
);

const Services = () => {
  const serviceCards = [
    {
      title: "Front-End Development",
      icon: CodeIcon,
      points: [
        "Responsive Design",
        "Modern JavaScript (React & Vue)",
        "Performance Optimization",
        "Cross-Browser Compatibility",
      ],
      linkTo: "/services/front-end",
      className: "frontend-card",
    },
    {
      title: "UX/UI Design",
      icon: DesignServicesIcon,
      points: [
        "User Research",
        "Wireframing & Prototyping",
        "Usability Testing",
        "Visual Design",
      ],
      linkTo: "/services/ux-ui",
      className: "ux-card",
    },
    {
      title: "Digital Strategy",
      icon: CampaignIcon,
      points: [
        "Market Research",
        "Digital Positioning & Branding",
        "Competitive Analysis",
        "Growth Strategy",
      ],
      linkTo: "/services/branding",
      className: "",
    },
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero-section">
        <div className="grid-layout">
          <div className="hero-content">
            <h1 className="section-title">What We Offer</h1>
            <p className="section-description">
              Crafting Digital Experiences that Elevate Your Brand.
            </p>
          </div>
          <div className="hero-image">
            <img src={serviceHero} alt="Our Services" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-container">
        <h2 className="section-title">Our Expertise</h2>
        <div className="grid-layout">
          {serviceCards.map((card, index) => (
            <ServiceCard
              key={index}
              title={card.title}
              icon={card.icon}
              points={card.points}
              linkTo={card.linkTo}
              className={card.className}
            />
          ))}
        </div>
      </section>

      {/* Dual Section */}
      <section className="dual-section-container">
        <div className="grid-layout">
          <div className="left-column">
            <h2 className="section-title">Why You Need This</h2>
            <p className="section-description">
              In today's digital landscape, a strong online presence is crucial for success.
            </p>
            <ul className="benefit-list">
              <li>Stunning visual design</li>
              <li>High-performance optimization</li>
              <li>User-focused interaction</li>
            </ul>

            <h2 className="section-title">How We Achieve It</h2>
            <p className="section-description">
              We create intuitive and engaging user experiences through:
            </p>
            <ul className="benefit-list">
              <li>Responsive and user-friendly designs</li>
              <li>Performance-focused approach</li>
              <li>Data-driven design decisions</li>
              <li>Continuous iteration & feedback loops</li>
            </ul>
            <Button variant="contained" className="primary-button">
              Get Started
            </Button>
          </div>

          <div className="right-column">
            <img src={serviceDualSectImage} alt="Our approach to digital services" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;