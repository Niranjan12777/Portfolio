import React from "react";
import { getImageUrl } from "../../utils/media.js";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  const imageUrl = getImageUrl(project, ["image_url", "imageUrl", "image", "project_image"]);

  return (
    <article className="project-card">
      {imageUrl && (
        <img className="project-card-image" src={imageUrl} alt={project.title} />
      )}
      <p>{project.featured ? "Featured Project" : "Project"}</p>
      <h3>{project.title}</h3>
      <span>{project.description}</span>
      <div className="project-card-links">
        {project.github_url && <a href={project.github_url}>GitHub</a>}
        {project.live_url && <a href={project.live_url}>Live</a>}
      </div>
    </article>
  );
}

export default ProjectCard;
