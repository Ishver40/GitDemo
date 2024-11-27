import { useState } from 'react'
import "../styles/Projects.css";

function Projects() {
  const projects = [
    { name: "Portfolio Website", link: "#" },
    { name: "E-commerce App", link: "#" },
  ];
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">{project.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
