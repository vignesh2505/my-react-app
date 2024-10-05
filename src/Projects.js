import React from "react";
import "./Projects.css";

const projectData = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with React, showcasing my projects and skills.",
    link: "https://your-portfolio-link.com",
    tech: ["React", "CSS", "JavaScript"],
  },
  {
    title: "Weather App",
    description: "A weather forecasting application using OpenWeather API to display real-time weather information.",
    link: "https://github.com/yourname/weather-app",
    tech: ["JavaScript", "API", "CSS"],
  },
  {
    title: "E-commerce Website",
    description: "A full-fledged e-commerce platform built with Node.js and MongoDB, featuring user authentication and product management.",
    link: "https://github.com/yourname/e-commerce-site",
    tech: ["Node.js", "MongoDB", "Express", "React"],
  },
  {
    title: "Task Manager App",
    description: "A task management tool with drag-and-drop functionality for organizing tasks using the Kanban methodology.",
    link: "https://github.com/yourname/task-manager",
    tech: ["React", "CSS", "Firebase"],
  },
  // Add more projects as needed
];

function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-container">
        <h1>My Projects</h1>
        <p>
          Here are some of the projects I've worked on recently. Feel free to
          check out the source code or live demos.
        </p>

        <div className="projects-grid">
          {projectData.map((project, index) => (
            <div key={index} className="project-card">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>

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