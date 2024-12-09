import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetail.css';

const projectData = {
  ecommerce: {
    title: 'E-commerce Website',
    description: 'A fully responsive online store with dynamic content.',
    details: 'This project involved creating a modern e-commerce experience with secure payment integration and user-friendly navigation.',
  },
  portfolio: {
    title: 'Portfolio Site',
    description: 'Showcasing creative designs and technical expertise.',
    details: 'We crafted a visually stunning and interactive portfolio for showcasing work and attracting clients.',
  },
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectData[projectId];

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <div className="project-detail-container">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <p>{project.details}</p>
    </div>
  );
};

export default ProjectDetail;
