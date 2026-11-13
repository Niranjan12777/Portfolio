import React, { useState } from "react";
import { getImageUrl } from "../../utils/media.js";
import DescriptionModal from "../Description/DescriptionModal.jsx";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const imageUrl = getImageUrl(project, [
    "image_url",
    "imageUrl",
    "image",
    "project_image",
  ]);

  const description = project.description || "";
  const needsToggle = description.length > 120;

  return (
    <>
      <article className="project-card-container">
        {imageUrl && (
          <div className="project-card-image-wrapper">
            <img
              className="project-card-image"
              src={imageUrl}
              alt={project.title}
              loading="lazy"
            />
          </div>
        )}

        <div className="project-card">
          <div className="project-card-content">
            <p>
              {project.featured ? "Featured Project" : "Project"}
            </p>

            <h3>{project.title}</h3>

            <div className="project-description-wrapper">
              <span className="project-description">
                {description}
              </span>

              {needsToggle && (
                <button
                  type="button"
                  className="description-toggle"
                  onClick={() => setIsDescriptionOpen(true)}
                  aria-haspopup="dialog"
                >
                  Read more
                </button>
              )}
            </div>
          </div>

          <div className="project-card-links">
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            )}

            {project.live_url && (
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            )}
          </div>
        </div>
      </article>

      {isDescriptionOpen && (
        <DescriptionModal
          title={project.title}
          description={description}
          onClose={() => setIsDescriptionOpen(false)}
        />
      )}
    </>
  );
}

export default ProjectCard;
