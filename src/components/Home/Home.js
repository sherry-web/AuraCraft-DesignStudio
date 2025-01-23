import React, { useState, useEffect } from "react";
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
import MyButton from "../Button";
import ConnectForm from "../pages/ContactForm";
import Footer from "../Footer";

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
import HandCodingBro from "../../assets/HandCodingBro.png";
import FooterLogo from "../../assets/FooterLogo.svg"; // Ensure this import is correct
import SocialIconsBe from "../../assets/SocialIconsBe.png";
import SocialIconsIG from "../../assets/SocialIconsIG.png";
import SocialIconsX from "../../assets/SocialIconsX.png";
import SendIcon from "../../assets/send.png"; // Ensure this import is correct
import herobg1 from "../../assets/herobg1.svg"; // Import the correct hero image

// Styles
import "./Home.css";

const designServices = [
  { title: "Web Design", icon: faDesktop },
  { title: "Graphic Design", icon: faBrush },
  { title: "Front-End Development", icon: faCode },
  { title: "E-Commerce", icon: faShoppingCart },
  { title: "Certification", icon: faCertificate },
  { title: "SEO", icon: faChartLine },
];

const HomePage = () => {
  const [activeMenu, setActiveMenu] = useState("All Projects");
  const [projects, setProjects] = useState([]);
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    setProjects([
      { img: project1, title: "Project 1", description: "Description for Project 1" },
      { img: project2, title: "Project 2", description: "Description for Project 2" },
      { img: project3, title: "Project 3", description: "Description for Project 3" },
      { img: project4, title: "Project 4", description: "Description for Project 4" },
    ]);
  }, []);

  useEffect(() => {
    // Update projects based on activeMenu
    const projectData = [
      { img: project1, title: "Project 1", description: "Description for Project 1" },
      { img: project2, title: "Project 2", description: "Description for Project 2" },
      { img: project3, title: "Project 3", description: "Description for Project 3" },
      { img: project4, title: "Project 4", description: "Description for Project 4" },
    ];

    if (activeMenu === "All Projects") {
      setProjects(projectData);
    } else if (activeMenu === "UX/UI Design") {
      setProjects(projectData.filter((_, idx) => idx % 2 === 0)); // Example filtering
    } else {
      setProjects([]);
    }
  }, [activeMenu]);

  const handlePrevClick = () => {
    setActiveDot((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setActiveDot((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="landing-page">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="home">
            <div className="frame">

          {/* Hero Section */}
          <div className="hero-section">
                <div className="hero-content">
                  <h1 className="hero-title">Welcome to
                    <span> AuraCraft Design Studio</span>
                  </h1>
                  <p className="hero-subtitle">Design your digital presence with us.</p>
                  <div className="cta-container">
                    <button className="primary-cta">Start Your Project</button>
                  </div>
                </div>
                <div className="hero-image">
                  <img src={herobg1} alt="Hero Background" />
                </div>
              </div>

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
                                  <img src={project.img} alt={project.title} />
                                </div>
                                <div className="info">
                                  <h3 className="PJ-name">{project.title}</h3>
                                  <p className="address">{project.description}</p>
                                  <button className="view-more-btn">View More</button> {/* New button */}
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="projects-navigation">
                            <button
                              className="primary-nav-btn"
                              onClick={handlePrevClick}
                              disabled={activeDot === 0}
                            >
                              Back
                            </button>
                            <div className="dots">
                              {projects.map((_, index) => (
                                <div
                                  key={index}
                                  className={`dot ${index === activeDot ? "active" : ""}`}
                                  onClick={() => setActiveDot(index)}
                                ></div>
                              ))}
                            </div>
                            <button
                              className="primary-nav-btn"
                              onClick={handleNextClick}
                              disabled={activeDot === projects.length - 1}
                            >
                              Next
                            </button>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;