import React from 'react';
import './Projects.css';

const projects = [
  { title: 'E-commerce Website', description: 'A fully responsive online store.' },
  { title: 'Portfolio Site', description: 'Showcasing our creative designs.' },
  { title: 'Landing Page', description: 'Optimized for lead generation.' },
];

const Projects = () => (
  <div className="projects-container">
    <h2>Our Recent Projects</h2>
    <div className="projects-grid">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
    