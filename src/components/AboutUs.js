import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import aboutHeroImage from '../assets/aboutherobg.svg'; // Updated import
import journeyStoryImage from '../assets/ourstory.png';
import journeyImage from '../assets/ourJour.svg'; 
import MyButton from './Button';
import './styles/AboutUs.css';

const AboutUs = () => {
  return (
      <Container className="about-page">
 {/* Hero Section */}
<Box className="about-hero-section">
  {/* Left Content (Text) */}
  <Box className="hero-content">
    <Box className="content-container">
      <Typography variant="h1" className="hero-title">Our Story</Typography>
    </Box>
    <Box className="content-container">
      <Typography variant="h2" className="hero-subtitle">MEET THE FOUNDER</Typography>
    </Box>
    <Box className="content-container">
      <Box className="foreword-container">
        <Typography variant="body1" className="foreword-title">A Foreword from Sherry</Typography>
        <Typography variant="body1" className="foreword-text">
          “We know the challenges of bringing digital dreams to life - we built AuraCraft to be your trusted partner in design and development.”
        </Typography>
      </Box>
    </Box>
    <Box className="content-container">
      <Typography variant="body1" className="hero-description">
        Hello! We’re AuraCraft Design Studio, a place where creativity meets technology. We’re passionate about helping individuals and businesses carve out their unique space in the digital world.
      </Typography>
    </Box>
    <Box className="content-container">
      <Box className="cta-container">
        <MyButton text="About Sherry" onClick={() => alert('About Sherry')} />
      </Box>
    </Box>
  </Box>

  {/* Right Content (Image) */}
  <Box className="hero-image">
    <img src={aboutHeroImage} alt="Hero" />
  </Box>
</Box>


    {/* Who We Are and What We Offer Section */}
<Box className="info-container">
  {/* Who We Are Section */}
  <Box className="text-container">
    <Box className="who-we-are-section">
      <Typography variant="h2" className="section-title">Who We Are</Typography>
      <Typography variant="h3" className="section-subtitle">Your Vision, Our Mission</Typography>
      <Typography variant="body1" className="section-description">
        We’re driven by the belief that everyone deserves a stunning, user-friendly digital presence.
        Whether you’re a startup or an established business, we’re here to help you make a lasting
        impression online.
      </Typography>
    </Box>
  </Box>

  {/* What We Offer Section */}
  <Box className="text-container">
    <Box className="what-we-offer-section">
      <Typography variant="h2" className="section-title">What We Offer</Typography>
      <Typography variant="h3" className="section-subtitle">Innovation at Its Best</Typography>
      <Typography variant="body1" className="section-description">We specialize in:</Typography>
      <ul className="offer-list">
        <li className="offer-item">
          <strong>UX/UI Design</strong>: Crafting intuitive and engaging user experiences.
        </li>
        <li className="offer-item">
          <strong>Front-End Development</strong>: Building responsive and dynamic websites.
        </li>
      </ul>
    </Box>
  </Box>
</Box>


{/* Our Values Section */}
<Box className="our-values-section">
  <Box className="values-container">
    {/* Value Item 1 */}
    <Box className="value-item">
      <Typography variant="h3" className="value-title">Our Values</Typography>
      <Typography variant="body1" className="value-description">
        Pushing the boundaries of design to create unique solutions.
      </Typography>
    </Box>

    {/* Value Item 2 */}
    <Box className="value-item">
      <Typography variant="h3" className="value-title">Creativity</Typography>
      <Typography variant="body1" className="value-description">
        Pushing the boundaries of design to create unique solutions.
      </Typography>
    </Box>

    {/* Value Item 3 */}
    <Box className="value-item">
      <Typography variant="h3" className="value-title">Quality</Typography>
      <Typography variant="body1" className="value-description">
        Ensuring excellence in every project.
      </Typography>
    </Box>

    {/* Value Item 4 */}
    <Box className="value-item">
      <Typography variant="h3" className="value-title">Community</Typography>
      <Typography variant="body1" className="value-description">
        Building strong relationships and supporting your growth.
      </Typography>
    </Box>
  </Box>
</Box>



{/* Our Journey Section */}
<Box className="our-journey-section">
  <Box className="journey-content">
    {/* Left Content (Text) */}
    <Box className="journey-text">
    <Typography variant="h2" className="section-title">Our Journey</Typography>
    <Typography variant="h3" className="section-subtitle">A Path of Passion and Innovation</Typography>
      <Typography variant="body1" className="journey-description">2020: AuraCraft was born from a desire to innovate.</Typography>
      <Typography variant="body1" className="journey-description">2021: Expanded to offer comprehensive development services.</Typography>
    </Box>
    {/* Right Content (Image) */}
    <Box className="journey-image">
      <img src={journeyImage} alt="Our Journey" /> {/* Updated image */}
    </Box>
  </Box>
</Box>

   {/* Let's Create Something Section */}
   <Box className="create-something-section">
        <Typography variant="h2" className="section-title">Let’s Create Something Amazing</Typography>
        <Typography variant="body1" className="section-description">Ready to start your project with us? Get in touch and let's create something amazing together.</Typography>
        <Box className="cta-container">
          <MyButton text="Get Started" onClick={() => alert('Get Started')} />
        </Box>
      </Box>
    </Container>
  );
};

export default AboutUs;
