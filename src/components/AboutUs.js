import React, { useState } from 'react';
import './styles/AboutUs.css';

const AboutUs = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="about-us-container section">
      <h2 className="section-title">About Us</h2>
      <p className="about-us-content">
        AuraCraft Design Studio is dedicated to creating exceptional digital experiences. Our team specializes in 
        UX/UI design and front-end development, helping businesses craft user-friendly, visually stunning platforms.
      </p>
      <div className="about-us-history">
        <p>
          {showMore
            ? "AuraCraft has a long history of delivering cutting-edge solutions for businesses of all sizes. From startups to established enterprises, our mission is to create designs that captivate and perform."
            : "Learn more about our journey and how we became a trusted partner in the design industry."}
        </p>
        <button className="show-more-btn" onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show Less" : "More on History"}
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
