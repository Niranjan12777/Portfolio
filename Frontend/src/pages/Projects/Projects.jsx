import React, { useEffect, useState } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx";
import { getProjects } from "../../api/projectApi.js";
import "./Projects.css";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const { data } = await getProjects();
        setProjects(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to load projects", error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  return (
    <section className="section" id="projects">
      <div className="section-heading">
        <p className="section-kicker section-kicker text-6xl tracking-wide text-muted mb-15">
          Projects
        </p>
      </div>
      <div className="project-grid">
        {loading && <p className="text-(--muted)">Loading projects...</p>}
        {!loading && projects.length === 0 && (
          <p className="text-(--muted)">No projects available yet.</p>
        )}
        {!loading &&
          projects.map((project) => (
            <ProjectCard project={project} key={project.id || project.title} />
          ))}
      </div>
    </section>
  );
}

export default Projects;
