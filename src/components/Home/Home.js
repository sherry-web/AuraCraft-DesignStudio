import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faBrush,
  faCode,
  faShoppingCart,
  faCertificate,
  faChartLine,
  faArrowRight,
  faComment,
  faLightbulb,
  faPalette,
  faUserFriends,
  faMagic,
} from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router-dom";
const SafeImage = ({ src, alt, fallback, className }) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    if (fallback) setImgSrc(fallback);
  };

  return (
    <img 
      src={imgSrc} 
      alt={alt} 
      onError={handleError} 
      className={className}
    />
  );
};

// Components
import MyButton from "../Button";
import ConnectForm from "../pages/ContactForm";
import Footer from "../Footer";
import ScrollButton from "../ScrollButton";

// Assets
import ourStory from "../../assets/ourstory.png";
import peepsLogo1 from "../../assets/peepslogo.png";
import peepsLogo2 from "../../assets/peepslogo2.png";
import peepsLogo3 from "../../assets/peepslogo3.png";
import project1 from "../../assets/projec1.png";
import project2 from "../../assets/projec2.png";
import project3 from "../../assets/projec3.png";
import project4 from "../../assets/projec4.png";
import project5 from "../../assets/projec5.png";
import uxImage from "../../assets/UI-UX-differences-amico.png";
import HandCodingBro from "../../assets/HandCodingBro.png";
import FooterLogo from "../../assets/FooterLogo.svg";
import SocialIconsBe from "../../assets/SocialIconsBe.png";
import SocialIconsIG from "../../assets/SocialIconsIG.png";
import SocialIconsX from "../../assets/SocialIconsX.png";
import SendIcon from "../../assets/send.png";
import herobg1 from "../../assets/herobg1.svg";

// Styles
import "./Home.css"; 



// UX/UI Design Services
const designServices = [
  {
    title: "User Interface Design",
    icon: faPalette,
    description: "Creating visually appealing and intuitive interfaces that your users will love.",
  },
  {
    title: "User Experience Design",
    icon: faUserFriends,
    description: "Crafting seamless journeys that keep users engaged and satisfied.",
  },
  {
    title: "Front-End Development",
    icon: faCode,
    description: "Bringing designs to life with responsive, interactive code.",
  },
  {
    title: "E-Commerce Solutions",
    icon: faShoppingCart,
    description: "Building shopping experiences that convert browsers to buyers.",
  },
  {
    title: "Interactive Prototypes",
    icon: faMagic,
    description: "Testing concepts with functional prototypes before full development.",
  },
  {
    title: "Conversion Optimization",
    icon: faChartLine,
    description: "Analyzing user behavior to maximize your digital ROI.",
  },
];

const projectCategories = [
  "All Projects",
  "UX/UI Design",
  "Front-End Development",
  "E-Commerce",
  "Mobile Apps",
];

// Project data with more detailed information
const projectData = [
  {
    img: project1,
    title: "Financial App Redesign",
    description: "A complete UX/UI overhaul for a leading fintech platform, increasing user engagement by 43%.",
    category: "UX/UI Design",
    technologies: ["Figma", "React", "CSS", "User Testing"],
  },
  {
    img: project2,
    title: "E-commerce Website",
    description: "Responsive online store with streamlined checkout process resulting in 27% conversion rate improvement.",
    category: "E-Commerce",
    technologies: ["React", "Node.js", "Stripe API", "Redux"],
  },
  {
    img: project3,
    title: "Healthcare Portal",
    description: "Patient-centric interface design making medical information accessible and easy to navigate.",
    category: "UX/UI Design",
    technologies: ["Adobe XD", "Angular", "SCSS", "Accessibility Tools"],
  },
  {
    img: project4,
    title: "Travel Companion App",
    description: "Mobile application with intuitive journey planning and real-time updates for travelers.",
    category: "Mobile Apps",
    technologies: ["React Native", "Firebase", "Maps API", "Offline Functionality"],
  },
  {
    img: project5,
    title: "Corporate Dashboard",
    description: "Data visualization platform with customizable widgets and real-time analytics for business intelligence.",
    category: "Front-End Development",
    technologies: ["Vue.js", "D3.js", "GraphQL", "Responsive Design"],
  },
];

// Custom hook for animation with intersection observer
const useAnimateOnScroll = (threshold = 0.2) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true,
  });

  return [ref, inView];
};

const HomePage = () => {
  const navigate = useNavigate();
  
  // States and refs
  const [activeMenu, setActiveMenu] = useState("All Projects");
  const [projects, setProjects] = useState([]);
  const [activeDot, setActiveDot] = useState(0);
  const [userInterests, setUserInterests] = useState([]);
  const [isInteractiveMode, setIsInteractiveMode] = useState(false);
  const [userPreferences, setUserPreferences] = useState({
    design: 0,
    development: 0,
    ecommerce: 0,
    mobile: 0,
  });
  const [showPreferencePrompt, setShowPreferencePrompt] = useState(false);
  const [urlInput, setUrlInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  // Refs for sections to track user engagement
  const heroRef = useRef(null);
  const designRef = useRef(null);
  const uxuiRef = useRef(null);
  const frontendRef = useRef(null);
  const projectsRef = useRef(null);

  // Animation refs
  const [designSectionRef, designSectionInView] = useAnimateOnScroll();
  const [ourPeepsRef, ourPeepsInView] = useAnimateOnScroll();
  const [storyRef, storyInView] = useAnimateOnScroll();
  const [uxSectionRef, uxSectionInView] = useAnimateOnScroll();
  const [googleStandardsRef, googleStandardsInView] = useAnimateOnScroll();
  const [frontEndRef, frontEndInView] = useAnimateOnScroll();
  const [projectsSectionRef, projectsSectionInView] = useAnimateOnScroll();
  const [connectSectionRef, connectSectionInView] = useAnimateOnScroll();

  // Initialize projects from data
  useEffect(() => {
    filterProjects(activeMenu);

    // Start tracking after 30 seconds
    const timer = setTimeout(() => {
      setShowPreferencePrompt(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, [activeMenu]);

  // Intersection observer to track which sections user is viewing
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Track which section the user is viewing
          const sectionId = entry.target.id;
          if (sectionId) {
            trackUserInterest(sectionId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    const elements = [
      heroRef.current,
      designRef.current,
      uxuiRef.current,
      frontendRef.current,
      projectsRef.current,
    ];

    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Function to track user interests based on sections they view
  const trackUserInterest = (sectionId) => {
    setUserInterests((prev) => {
      // Check if already in array to avoid duplicates
      if (!prev.includes(sectionId)) {
        return [...prev, sectionId];
      }
      return prev;
    });

    // Update preferences based on section interactions
    if (sectionId === "uxui-section") {
      setUserPreferences((prev) => ({ ...prev, design: prev.design + 1 }));
    } else if (sectionId === "frontend-section") {
      setUserPreferences((prev) => ({ ...prev, development: prev.development + 1 }));
    }
  };

  // Filter projects based on selected category
  const filterProjects = (category) => {
    if (category === "All Projects") {
      setProjects(projectData);
    } else {
      setProjects(projectData.filter((project) => project.category === category));
    }
  };

  const handlePrevClick = () => {
    setActiveDot((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setActiveDot((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setActiveDot(0); // Reset to first project when changing categories

    // Track which category the user clicks on
    incrementPreference(menu);
  };

  // Update user preferences based on their interactions
  const incrementPreference = (category) => {
    if (category === "UX/UI Design") {
      setUserPreferences((prev) => ({ ...prev, design: prev.design + 1 }));
    } else if (category === "Front-End Development") {
      setUserPreferences((prev) => ({ ...prev, development: prev.development + 1 }));
    } else if (category === "E-Commerce") {
      setUserPreferences((prev) => ({ ...prev, ecommerce: prev.ecommerce + 1 }));
    } else if (category === "Mobile Apps") {
      setUserPreferences((prev) => ({ ...prev, mobile: prev.mobile + 1 }));
    }
  };

  // Suggest personalized services based on user behavior
  const getPersonalizedSuggestion = () => {
    const { design, development, ecommerce, mobile } = userPreferences;
    const max = Math.max(design, development, ecommerce, mobile);

    if (max === 0) return null;

    if (max === design) {
      return "Based on your interests, our UX/UI Design services might be perfect for your next project!";
    } else if (max === development) {
      return "Looks like you're interested in development. Our front-end team can help bring your vision to life!";
    } else if (max === ecommerce) {
      return "Need an e-commerce solution? We specialize in creating shops that convert!";
    } else {
      return "Considering a mobile app? Let's discuss how we can build the perfect solution for your needs!";
    }
  };

  const handleUrlSubmit = (e) => {
    e.preventDefault();
    if (urlInput) {
      // In a real implementation, you would process this URL
      // For now, just set a preference
      setUserPreferences((prev) => ({ ...prev, design: prev.design + 1 }));
      alert(`Thank you for submitting ${urlInput} for analysis. Our team will review your site and provide UX/UI recommendations.`);
      setUrlInput("");
    }
  };

  const dismissPreferencePrompt = () => {
    setShowPreferencePrompt(false);
    setIsInteractiveMode(true);
  };

  // Get a personalized call-to-action based on user behavior
  const getPersonalizedCTA = () => {
    const suggestion = getPersonalizedSuggestion();
    return suggestion || "Ready to transform your digital presence? Start your project with us today!";
  };

  const handleCTAClick = () => {
    navigate("/get-started");
  };


  // safeimage component
  const SafeImage = ({ src, alt, fallback, className }) => {
    const [imgSrc, setImgSrc] = useState(src);
  
    const handleError = () => {
      if (fallback) setImgSrc(fallback);
    };
  
    return (
      <img 
        src={imgSrc} 
        alt={alt} 
        onError={handleError} 
        className={className}
      />
    );
  };


  return (
    <div className="landing-page">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="home">
            <div className="frame">
              {/* Hero Section with interaction tracking */}
              <section id="home-hero-section" ref={heroRef} className="home-hero-section">
                <div className="about-hero-container">
                  <div className="hero-content">
                    <h1 className="hero-title">
                      Creating Digital <span>Experiences</span> That Matter
                    </h1>
                    <p className="hero-subtitle">
                      We blend creativity with technology <br />to design interfaces that delight users and drive business growth.
                    </p>
                    <div className="cta-container">
                      {isInteractiveMode ? (
                        <button
                          aria-label="Start Your Project"
                          onClick={handleCTAClick}
                          className="primary-cta interactive-cta"
                        >
                          {getPersonalizedCTA()}
                        </button>
                      ) : (
                        <button
                          aria-label="Start Your Project"
                          onClick={handleCTAClick}
                          disabled={isLoading}
                          className="primary-cta"
                        >
                          {isLoading ? <div className="spinner"></div> : "Start Your Project"}
                        </button>
                      )}
                    </div>
                    {feedbackMessage && <p className="feedback-message">{feedbackMessage}</p>}
                  </div>
                </div>
               <SafeImage 
                  src={herobg1} 
                  alt="Hero Background" 
                  fallback="/fallback-hero.jpg" 
                  className="hero-image"
                />
              </section>
              {/* Design Services Section */}    {/* Design Section with interactive features */}
                         <section 
                id="design-section" 
                ref={el => { designRef.current = el; designSectionRef(el); }} 
                className="about-us-section"
              >
                <h2 className="section-title">
                  Design Your Digital<span className="highlight"> Presence</span>
                </h2>
                <p className="section-subtitle">
                  Our specialized design services turn concepts into digital experiences.
                </p>

                <div className="card-container">
                  {designServices.map(({ title, icon }, index) => (
                    <div 
                      key={index} 
                      className="service-card"
                      onMouseEnter={() => incrementPreference(index < 2 ? "UX/UI Design" : index < 4 ? "Front-End Development" : "E-Commerce")}
                    >
                      <div className="card-content">
                        <FontAwesomeIcon icon={icon} className="card-icon" />
                        <h3 className="card-title">{title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Our Peeps Section with animation */}
              <section ref={ourPeepsRef} className="about-us-section">
                <h2 className="section-title">
                  Our <span className="highlight">Clients</span>
                </h2>
                <p className="section-description">Trusted by innovative companies to create exceptional digital experiences.</p>
                <div className="logo-container">
                  {[peepsLogo1, peepsLogo2, peepsLogo3].map((logo, index) => (
                    <img 
                      key={index} 
                      src={logo} 
                      alt={`Client Logo ${index + 1}`} 
                      className="client-logo"
                    />
                  ))}
                </div>
                <div className="client-testimonial">
                  <blockquote>
                    "Auracraft transformed our digital presence with their exceptional UX/UI design. Our user engagement increased by 78% within just three months of launch."
                  </blockquote>
                  <cite>— Marketing Director, Enterprise Client</cite>
                </div>
              </section>

              {/* Our Story Section with parallax effect */}
              <section ref={storyRef} className="about-us-section">
                <h2 className="section-title">
                  About<span className="highlight"> Us</span>
                </h2>
                <div className="about-us">
                  <div className="image-parallax">
                    <img src={ourStory} alt="Our Story" className="mock-up" />
                    <div className="frame-2">
                      <div className="text-wrapper-15">Our Story</div>
                      <p className="for-more-than">
                        Founded by designers and developers with a passion for creating exceptional digital experiences, Auracraft has evolved into a leading UX/UI studio trusted by brands worldwide.
                      </p>
                      <button className="button-instance" onClick={() => {
                        incrementPreference("UX/UI Design");
                        alert("Learn more about our design philosophy");
                      }}>
                        Our Design Philosophy
                      </button>
                    </div>
                  </div>
                  <div className="story-content">
                  </div>
                </div>
              </section>

              {/* UX/UI Section with interactive elements */}
              <section id="uxui-section" ref={el => { uxuiRef.current = el; uxSectionRef(el); }} className="about-us-section">
                <div className="ux-ui-container">
                  <img className="ux-ui-image" src={uxImage} alt="UI/UX Differences Illustration" />
                  <div className="ux-ui-content">
                    <h2 className="section-title">What is <span className="highlight">UX/UI Design</span>?</h2>
                    <p className="section-text">
                      UX/UI Design combines <strong>User Experience</strong> (how things work) with <strong>User Interface</strong> (how things look) to create digital products that are both functional and beautiful.
                    </p>
                    <div className="ux-ui-features">
                      <div className="feature">
                        <span className="feature-number">01</span>
                        <h3>User Research</h3>
                        <p>Understanding your users' needs, behaviors, and motivations</p>
                      </div>
                      <div className="feature">
                        <span className="feature-number">02</span>
                        <h3>Information Architecture</h3>
                        <p>Organizing content for intuitive navigation and discovery</p>
                      </div>
                      <div className="feature">
                        <span className="feature-number">03</span>
                        <h3>Visual Design</h3>
                        <p>Creating beautiful, on-brand interfaces that engage users</p>
                      </div>
                    </div>
                    <MyButton text="Explore UX/UI Services" onClick={() => {
                      incrementPreference("UX/UI Design");
                      alert("Learn more about our UX/UI Design services");
                    }} />
                  </div>
                </div>
              </section>

              {/* Google Standards Section with interactive form */}
                  <section ref={googleStandardsRef} className="home-google-standards">
                    <h2 className="section-title">
                      Meeting <span className="highlight">Google's Standards</span>
                    </h2>
                    <p className="section-description">
                      Does your website meet Google's Core Web Vitals and performance standards?  
                      Enter your URL below to get a free UX and speed analysis.
                    </p>

                    {/* Interactive Form */}
                    <form onSubmit={handleUrlSubmit} className="url-analyzer-form">
                      <div className="form-container">
                        <input 
                          type="url" 
                          className="url-input" 
                          placeholder="Enter your website URL" 
                          value={urlInput}
                          onChange={(e) => setUrlInput(e.target.value)}
                          required 
                        />
                        <button type="submit" className="analyse-button">
                          <img src={SendIcon} alt="Send icon" />
                          Analyze
                        </button>
                      </div>
                      
                      {/* Progress Indicator */}
                      {urlInput && (
                        <p className="form-progress">
                          🔄 Checking your website... Please wait.
                        </p>
                      )}

                      <p className="form-helper-text">
                        We’ll analyze your site's UX, performance, and suggest improvements.
                      </p>
                    </form>
                  </section>


              {/* Front-End Development Section */}
              <section id="frontend-section" ref={el => { frontendRef.current = el; frontEndRef(el); }} className="about-us-section">
                <div className="frontend-container">
                  <div className="frontend-content">
                    <h2 className="section-title">What is <span className="highlight">Front-End Development</span>?</h2>
                    <p className="section-text">
                      Front-end development brings designs to life through code, creating the interactive elements users see and interact with in browsers and apps.
                    </p>
                    <div className="tech-stack">
                      <h3>Our Technology Stack</h3>
                      <div className="tech-pills">
                        <span className="tech-pill">React</span>
                        <span className="tech-pill">Vue.js</span>
                        <span className="tech-pill">Angular</span>
                        <span className="tech-pill">JavaScript</span>
                        <span className="tech-pill">HTML5</span>
                        <span className="tech-pill">CSS3/SASS</span>
                      </div>
                    </div>
                    <MyButton text="Our Development Process" onClick={() => {
                      incrementPreference("Front-End Development");
                      alert("Learn more about our development process");
                    }} />
                  </div>
                  <img className="frontend-image" src={HandCodingBro} alt="Front-end coding illustration" />
                </div>
              </section>

              
                     {/* Projects Section with Bento Grid */}
                    <section 
                      id="projects-section" 
                      ref={el => { projectsRef.current = el; projectsSectionRef(el); }} 
                      className="home-projects-section bento-projects-container"
                    >
                      <div className="projects-header">
                        <h2 className="section-title">Our <span className="highlight">Work</span></h2>
                        <p className="section-description">
                          Explore our portfolio of UX/UI design and development projects.
                        </p>
                      </div>

                      {/* Category Filter Menu */}
                      <div className="projects-menu-wrapper">
                        <nav className="category-filter">
                          {projectCategories.map((category, index) => (
                            <div
                              key={index}
                              className={`menu-item ${activeMenu === category ? "active" : ""}`}
                              onClick={() => handleMenuClick(category)}
                            >
                              {category}
                            </div>
                          ))}
                        </nav>
                      </div>

                      {/* Bento Grid for Projects */}
                      <div className="bento-grid">
                        {projects.map((project, index) => (
                          <div key={index} className={`bento-card ${index === 3 ? "bento-card-large" : index === 4 ? "bento-card-xl" : ""}`}>
                            <figure className="bento-image-wrapper">
                              <img src={project.img} alt={`Preview of ${project.title}`} className="bento-image" loading="lazy" />
                            </figure>

                            <div className="bento-info">
                              <h3 className="bento-title">{project.title}</h3>
                              <p className="bento-description">{project.description}</p>
                              <button className="bento-view-button">View Project</button>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* ✅ Navigation Buttons (Now Inside the Section) */}
                      <div className="projects-navigation">
                        <button
                          className="primary-nav-btn"
                          onClick={handlePrevClick}
                          disabled={activeDot === 0}
                        >
                          Previous
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
                    </section>


              {/* Connect Section with personalized message */}
              <section 
                id="connect-section" 
                ref={connectSectionRef} 
                className="about-us-section"
              >
                <div className="connect-header">
                  <h2 className="section-title">
                    <span className="highlight">Connect</span> With Us
                  </h2>
                  {isInteractiveMode && getPersonalizedSuggestion() ? (
                    <p className="personalized-message">
                      {getPersonalizedSuggestion()} Tell us about your project goals below.
                    </p>
                  ) : (
                    <p className="connect-info">
                      Our team is here for you Monday – Thursday, 9AM to 5PM. 
                      Outside these hours, don't worry—our friendly chatbot is ready to assist!
                    </p>
                  )}
                </div>
                <ConnectForm />
                <div className="chatbot-invite">
                  <p className="chatbot-text">Need immediate help? Chat with our design assistant!</p>
                  <button className="chatbot-btn">
                    <FontAwesomeIcon icon={faComment} className="chat-icon" />
                    Chat Now
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;