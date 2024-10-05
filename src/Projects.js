import React from "react";
import "./Projects.css";

const projectData = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with React, showcasing my projects and skills.",
    tech: ["React", "CSS", "JavaScript"],
  },
  {
    title: "Weather App",
    description: "A weather forecasting application using OpenWeather API to display real-time weather information.",
    tech: ["JavaScript", "API", "CSS"],
  },
  {
    title: "E-commerce Website",
    description: "A full-fledged e-commerce platform built with Node.js and MongoDB, featuring user authentication and product management.",
    tech: ["Node.js", "MongoDB", "Express", "React"],
  },
  {
    title: "Task Manager App",
    description: "A task management tool with drag-and-drop functionality for organizing tasks using the Kanban methodology.",
    tech: ["React", "CSS", "Firebase"],
  },
];

function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-container">
        <h1>My Projects</h1>
        <p>
          Here are some of the projects I've worked on recently. 
        </p>

        <div className="projects-grid">
          {projectData.map((project, index) => (
            <div key={index} className="project-card">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              

              <div className="tech-stack">
                {project.tech.map((techItem, techIndex) => (
                  <span key={techIndex} className="tech-item">
                    {techItem}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;