import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx";
import { projects } from "../../data/portfolio.js";
import "./Projects.css";

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-heading">
        <p className="section-kicker section-kicker text-6xl tracking-wide text-muted mb-15">
          Projects
        </p>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
