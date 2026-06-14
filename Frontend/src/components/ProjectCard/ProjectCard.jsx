import React from "react";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <p>{project.type}</p>
      <h3>{project.title}</h3>
      <span>{project.description}</span>
    </article>
  );
}

export default ProjectCard;
