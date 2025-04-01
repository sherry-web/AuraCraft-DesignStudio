import React, { useState, useEffect, useRef, useCallback } from "react";
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
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with seamless checkout experience",
    technologies: ["React", "Node.js", "MongoDB"],
    img: project1
  },
  {
    title: "Healthcare Portal",
    description: "Patient management system for healthcare providers",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    img: project2
  },
  {
    title: "Portfolio Website",
    description: "Creative portfolio for a design agency",
    technologies: ["React", "GSAP", "SCSS"],
    img: project3
  },
  {
    title: "Mobile Banking App",
    description: "Secure banking application with biometric authentication",
    technologies: ["React Native", "Node.js", "Firebase"],
    img: project4
  },
  {
    title: "Restaurant Booking System",
    description: "Online reservation platform for restaurants",
    technologies: ["Next.js", "MongoDB", "Stripe"],
    img: project5
  }
];

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

const HomePage = () => {
  const navigate = useNavigate();
  
  // Define all refs
  const ourPeepsRef = useRef(null);
  const designRef = useRef(null);
  const storyRef = useRef(null);
  const uxuiRef = useRef(null);
  const googleStandardsRef = useRef(null);
  const frontendRef = useRef(null);
  const connectSectionRef = useRef(null);
  
  // Alias refs to match your existing code
  const designSectionRef = designRef;
  const uxSectionRef = uxuiRef;
  const frontEndRef = frontendRef;

  // Define missing state and functions
  const [urlInput, setUrlInput] = useState('');
  const [isInteractiveMode] = useState(false);
  
  const handleUrlSubmit = (e) => {
    e.preventDefault();
    console.log('URL submitted:', urlInput);
    // Add your URL submission logic here
  };

  const incrementPreference = (preference) => {
    console.log(`Preference incremented: ${preference}`);
    // Add your preference tracking logic here
  };

  const getPersonalizedSuggestion = () => {
    return "Based on your interests, we recommend our UX/UI Design services.";
  };

  // Hero section state
  const [heroTitle, setHeroTitle] = useState("Creating Digital Experiences That Matter");
  const [heroSubtitle, setHeroSubtitle] = useState("We blend creativity with technology to design interfaces that delight users and drive business growth.");
  const [ctaHovered, setCtaHovered] = useState(false);

  // Projects section state
  const [activeProject, setActiveProject] = useState(0);
  const [animationDirection, setAnimationDirection] = useState('right');

  // Project navigation
  const navigateProjects = useCallback((direction) => {
    setAnimationDirection(direction);
    setActiveProject(prev => {
      if (direction === 'right') {
        return prev === projects.length - 1 ? 0 : prev + 1;
      } else {
        return prev === 0 ? projects.length - 1 : prev - 1;
      }
    });
  }, [projects.length]);

  // Dynamic hero title effect
  useEffect(() => {
    const keywords = ["Experiences", "Interfaces", "Solutions"];
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % keywords.length;
      setHeroTitle(`Creating Digital ${keywords[currentIndex]} That Matter`);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="home-container">
      <section className="home-hero-section">
        <div className="home-hero-content">
                  <h1 className="hero-title">
            Creating Digital{' '}
            <span className="highlight-keyword" style={{ letterSpacing: '0.05em' }}>
              {heroTitle.split('Digital ')[1].split(' That')[0]}
            </span>
            {' '}That Matter
          </h1>
          <p className="hero-subtitle">{heroSubtitle}</p>
          <div className="cta-container">
            <button 
              className={`primary-cta ${ctaHovered ? 'interactive-cta' : ''}`}
              onMouseEnter={() => setCtaHovered(true)} 
              onMouseLeave={() => setCtaHovered(false)}
              onClick={() => navigate('/get-started')}
            >
              {ctaHovered ? 'Start Your Journey' : 'Start Your Project'}
            </button>
          </div>
        </div>
        <div className="home-hero-image">
          <img src={herobg1} alt="AuraCraft Design Studio" className="animated-hero-svg" />
        </div>
      </section>

      {/* Design Services Section */}
      <section 
        id="design-section" 
        ref={designRef}
        className="about-us-section"
      >
        <h2 className="section-title">
          Design Your Digital<span className="highlight"> Presence</span>
        </h2>
        <p className="section-subtitle">
          Our specialized design services turn concepts into digital experiences.
        </p>

        <div className="card-container">
          {designServices.map(({ title, icon, description }, index) => (
            <div 
              key={index} 
              className="service-card"
              onMouseEnter={() => incrementPreference(index < 2 ? "UX/UI Design" : index < 4 ? "Front-End Development" : "E-Commerce")}
            >
              <div className="card-content">
                <FontAwesomeIcon icon={icon} className="card-icon" />
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Clients Section */}
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

      {/* Our Story Section */}
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
              <button 
                className="button-instance" 
                onClick={() => navigate('/about#philosophy')}  // Added hash for specific section
              >
                Our Design Philosophy
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* UX/UI Section */}
      <section id="uxui-section" ref={uxuiRef} className="about-us-section">
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
            <MyButton 
              text="Explore UX/UI Services" 
              onClick={() => {
                incrementPreference("UX/UI Design");
                navigate('/services');
              }} 
            />
          </div>
        </div>
      </section>

      {/* Google Standards Section */}
      <section ref={googleStandardsRef} className="home-google-standards">
        <h2 className="section-title">
          Meeting <span className="highlight">Google's Standards</span>
        </h2>
        <p className="section-description">
          Does your website meet Google's Core Web Vitals and performance standards?  
          Enter your URL below to get a free UX and speed analysis.
        </p>

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
          
          {urlInput && (
            <p className="form-progress">
              🔄 Checking your website... Please wait.
            </p>
          )}

          <p className="form-helper-text">
            We'll analyze your site's UX, performance, and suggest improvements.
          </p>
        </form>
      </section>

      {/* Front-End Development Section */}
      <section id="frontend-section" ref={frontendRef} className="about-us-section">
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
            <MyButton 
              text="Our Development Process" 
              onClick={() => {
                incrementPreference("Front-End Development");
                navigate('/services#development');
              }} 
            />
          </div>
          <img className="frontend-image" src={HandCodingBro} alt="Front-end coding illustration" />
        </div>
      </section>

      {/* Enhanced Projects Section */}
<section 
  className="home-projects-section"
  aria-labelledby="projects-heading"
>
  <div className="projects-header">
    <h2 id="projects-heading" className="section-title">
      Our <span className="highlight">Work</span>
    </h2>
    <p className="section-description">
      Explore our curated portfolio of innovative design and development projects.
    </p>
  </div>

  <div 
    className="projects-showcase"
    role="region"
    aria-live="polite"
    aria-atomic="false"
    aria-label="Project carousel"
  >
    {projects.map((project, index) => (
      <article 
        key={index} 
        className={`project-card ${index === activeProject ? 'active' : ''} ${animationDirection}`}
        aria-hidden={index !== activeProject}
        aria-labelledby={`project-${index}-title`}
        tabIndex={index === activeProject ? 0 : -1}
      >
        <div className="project-image">
          <img 
            src={project.img} 
            alt="" 
            aria-hidden="true"
            loading={index === activeProject ? "eager" : "lazy"}
          />
          <div className="project-category-badge">
            <span className="visually-hidden">Category:</span>
            {project.category || "Featured"}
          </div>
        </div>
        <div className="project-details">
          <h3 id={`project-${index}-title`}>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-technologies">
            <span className="visually-hidden">Technologies used:</span>
            {project.technologies.map((tech, techIndex) => (
              <span 
                key={techIndex} 
                className="tech-tag"
                aria-label={tech}
              >
                {tech}
              </span>
            ))}
          </div>
          <button 
            className="view-project-btn"
            onClick={() => navigate('/projects')}
            aria-label={`View details about ${project.title}`}
          >
            View Project
            <span aria-hidden="true" className="btn-arrow">→</span>
          </button>
        </div>
      </article>
    ))}
  </div>

  <div className="projects-navigation">
    <button 
      onClick={() => navigateProjects('left')} 
      className="nav-button prev"
      aria-label="Previous project"
      disabled={activeProject === 0}
    >
      <span aria-hidden="true">←</span>
      <span className="visually-hidden">Previous</span>
    </button>
    
    <div className="project-dots" role="tablist">
      {projects.map((_, index) => (
        <button
          key={index}
          className={`dot ${index === activeProject ? 'active' : ''}`}
          onClick={() => setActiveProject(index)}
          role="tab"
          aria-label={`Go to project ${index + 1}`}
          aria-selected={index === activeProject}
          tabIndex={index === activeProject ? 0 : -1}
        />
      ))}
    </div>
    
    <button 
      onClick={() => navigateProjects('right')} 
      className="nav-button next"
      aria-label="Next project"
      disabled={activeProject === projects.length - 1}
    >
      <span className="visually-hidden">Next</span>
      <span aria-hidden="true">→</span>
    </button>
  </div>

  {/* Keyboard navigation instructions for screen readers */}
  <div className="visually-hidden" aria-live="polite">
    {`Project ${activeProject + 1} of ${projects.length}. Use arrow keys to navigate.`}
  </div>
</section>

      {/* Connect Section */}
      <section id="connect-section" ref={connectSectionRef} className="about-us-section">
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
          <button 
            className="chatbot-btn"
            onClick={() => alert("Chatbot functionality coming soon!")}
          >
            <FontAwesomeIcon icon={faComment} className="chat-icon" />
            Chat Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;