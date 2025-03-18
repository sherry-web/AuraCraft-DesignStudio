import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Projects.css"; // Ensure this file exists and follows grid layout
import ScrollButton from "../../components/ScrollButton";

// Assets
import heroImage from "../../assets/projectshero.svg";
import project1 from "../../assets/projec1.png";
import project2 from "../../assets/projec2.png";
import project3 from "../../assets/projec3.png";
import project4 from "../../assets/projec4.png";
import project5 from "../../assets/projec5.png";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");

  // Sample project data
  const projects = [
    { id: 1, title: "Project 1", description: "A stunning UX/UI design for a modern e-commerce platform.", image: project1, category: "UX/UI Design" },
    { id: 2, title: "Project 2", description: "A responsive front-end development for a corporate website.", image: project2, category: "Front-End Dev" },
    { id: 3, title: "Project 3", description: "A creative branding and design project for a startup.", image: project3, category: "UX/UI Design" },
    { id: 4, title: "Project 4", description: "A modern web application with advanced features.", image: project4, category: "Front-End Dev" },
    { id: 5, title: "Project 5", description: "A user-friendly mobile app design.", image: project5, category: "UX/UI Design" },
  ];

  // Filter projects based on active tab
  const filteredProjects = activeTab === "All" ? projects : projects.filter((project) => project.category === activeTab);

  return (
    <>
      <div className="projects-page">
        {/* ✅ Hero Section */}
        <section className="projects-hero-section">
          <div className="grid-layout">
            <div className="hero-text">
              <h1 className="section-title">Our Projects</h1>
              <p className="section-description">Crafting Digital Experiences that Elevate Your Brand</p>
              <p className="hero-subtext">Explore our diverse portfolio of UX/UI and front-end development works.</p>
            </div>
            <div className="hero-image">
              <img src={heroImage} alt="Our Projects" />
            </div>
          </div>
        </section>

        {/* ✅ Tab Group */}
        <section className="tab-group container">
          <div className="tab-buttons">
            {["All", "UX/UI Design", "Front-End Dev"].map((tab) => (
              <button key={tab} className={activeTab === tab ? "active" : ""} onClick={() => setActiveTab(tab)}>
                {tab}
              </button>
            ))}
          </div>
        </section>

        {/* ✅ Projects Grid */}
        <section className="bento-projects-container container">
          <h2 className="section-title">Our Featured Projects</h2>
          <p className="section-description">
            Explore our latest UX/UI and development projects that showcase creativity and precision.
          </p>

          <div className="bento-grid">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className={`bento-card ${index === 3 ? "bento-card-large" : index === 4 ? "bento-card-xl" : ""}`}>
                <figure className="bento-image-wrapper">
                  <img src={project.image} alt={`Preview of ${project.title}`} className="bento-image" loading="lazy" />
                </figure>

                <div className="bento-info">
                  <h3 className="bento-title">{project.title}</h3>
                  <p className="bento-description">{project.description}</p>
                  <Link to={`/projects/${project.id}`} className="bento-view-button" aria-label={`View more about ${project.title}`}>
                    View More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

     
    </>
  );
};

export default Projects;
