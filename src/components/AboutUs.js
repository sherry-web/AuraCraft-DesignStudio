import React from 'react';
import './styles/AboutUs.css';


const AboutUs = () => {
  return (
    <section className="about-us-container section">
      <h2 className="section-title">About Us</h2>
      <p className="about-us-content">
        AuraCraft Design Studio is dedicated to creating exceptional digital experiences. Our team specializes in 
        UX/UI design and front-end development, helping businesses craft user-friendly, visually stunning platforms.
      </p>
    </section>
  );
};
const [showMore, setShowMore] = useState(false);

return (
  <div>
    <p>
      {showMore 
        ? "Detailed history of AuraCraft..."
        : "A brief introduction..."}
    </p>
    <button onClick={() => setShowMore(!showMore)}>
      {showMore ? "Show Less" : "More on History"}
    </button>
  </div>
);

export default AboutUs;
