import React, { useState } from "react";
import { getImageUrl } from "../../utils/media.js";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  const [showMore, setShowMore] = useState(false);

  const imageUrl = getImageUrl(project, [
    "image_url",
    "imageUrl",
    "image",
    "project_image",
  ]);

  const description = project.description || "";
  const needsToggle = description.length > 120;

  return (
    <article>
      {imageUrl && (
        <img
          className="project-card-image"
          src={imageUrl}
          alt={project.title}
        />
      )}

      <div className="project-card">
        <p>{project.featured ? "Featured Project" : "Project"}</p>

        <h3>{project.title}</h3>

        <div className="project-description-wrapper">
          <span
            className={`project-description ${showMore ? "expanded" : "collapsed"
              }`}
          >
            {description}
          </span>

          {needsToggle && (
            <button
              type="button"
              className="description-toggle"
              onClick={() => setShowMore((prev) => !prev)}
              aria-expanded={showMore}
            >
              {showMore ? "Show less" : "Show more..."}
            </button>
          )}
        </div>

        <div className="project-card-links">
          {project.github_url && (
            <a href={project.github_url} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}

          {project.live_url && (
            <a href={project.live_url} target="_blank" rel="noreferrer">
              Live
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;