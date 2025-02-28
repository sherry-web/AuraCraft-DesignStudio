import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Services.css';
import serviceHero from '../assets/servicehero.svg'; // Hero image
import serviceDualSectImage from '../assets/servicedualsectimage.svg'; // Dual-section image

// Material UI icons
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import CampaignIcon from '@mui/icons-material/Campaign';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Button } from '@mui/material';

const Services = () => (
  <>
    {/* Hero Section */}
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-image">
          <img src={serviceHero} alt="Our Services" />
        </div>
        <div className="hero-content">
          <h1>What We Offer</h1>
          <p>Crafting Digital Experiences that Elevate Your Brand.</p>
        </div>
      </div>
    </section>

 {/* Services Section */}
<section id="services" className="services-container">
  <h2>Our Expertise</h2>
  <div className="services-cards">
    
    {/* UX/UI Design Card */}
    <div className="service-card">
      <h3 className="card-title">UX/UI Design</h3>
      <DesignServicesIcon className="card-icon" fontSize="large" />
      <div className="card-bullets">
  <div className="bullet-row">
    <li className="bullet">User Research</li>
  </div>
  <div className="bullet-row">
    <li className="bullet">Wireframing</li>
    <li className="bullet">Prototyping</li>
  </div>
  <div className="bullet-row">
    <li className="bullet">Usability Testing</li>
    <li className="bullet">Visual Design</li>
  </div>
</div>
      <div className="card-cta">
        <Link to="/services/ux-ui" className="cta-link">Get Started</Link>
      </div>
    </div>

    {/* Front-End Development Card */}
    <div className="service-card">
      <h3 className="card-title">Front-End Development</h3>
      <CodeIcon className="card-icon" fontSize="large" />
        <div className="card-bullets">
  <div className="bullet-row">
    <li className="bullet">Responsive Design</li>
  </div>
  <div className="bullet-row">
    <li className="bullet">Modern JavaScript</li>
    <li className="bullet">React & Vue</li>
  </div>
  <div className="bullet-row">
    <li className="bullet">Performance Optimization</li>
    <li className="bullet">Cross-Browser Compatibility</li>
  </div>
</div>  
      <div className="card-cta">
        <Link to="/services/front-end" className="cta-link">Get Started</Link>
      </div>
    </div>

    {/* Brand Strategy Card */}
    <div className="service-card">
      <h3 className="card-title">Digital Strategy</h3>
      <CampaignIcon className="card-icon" fontSize="large" />
      <div className="card-bullets">
  <div className="bullet-row">
    <li className="bullet">Market Research</li>
  </div>
  <div className="bullet-row">
    <li className="bullet">Digital Positioning</li>
    <li className="bullet">Identity Design</li>
  </div>
  <div className="bullet-row">
    <li className="bullet">Competitive Analysis</li>
    <li className="bullet">Growth Strategy</li>
  </div>
</div>  
      <div className="card-cta">
        <Link to="/services/branding" className="cta-link">Get Started</Link>
      </div>
    </div>

  </div>
</section>


   {/* Why You Need This & How We Achieve It Sections */}
<section className="dual-section-container">
  <div className="left-column">
    <div className="why-you-need-this">
      <h2>Why You Need This</h2>
      <h3>Unlock the Full Potential of Your Digital Presence</h3>
      <p>
        In today's digital landscape, a strong online presence is crucial.
      </p>
      <ul>
        <li>Stunning visual design</li>
        <li>High-performance optimization</li>
        <li>User-focused interaction</li>
      </ul>
    </div>

    {/* How We Achieve It Section */}
    <div className="how-we-achieve-it">
      <h2>How Do We Achieve It</h2>
      <h3>Creating intuitive and engaging user experiences.</h3>
      <ul>
        <li>Responsive and user-friendly designs</li>
        <li>Performance-focused approach</li>
        <li>Data-driven design decisions</li>
        <li>Continuous iteration &amp; feedback loops</li>
      </ul>
      <Button variant="contained" color="primary" size="large">
        Get Started
      </Button>
    </div>
  </div>
  <div className="right-column">
    <img src={serviceDualSectImage} alt="Illustration" />
  </div>
</section>




    
  </>
);

export default Services;
