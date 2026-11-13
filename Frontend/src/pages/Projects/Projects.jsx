import React, { useEffect, useState } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx";
import { getProjects } from "../../api/projectApi.js";
import { Layers } from "lucide-react";
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
        <div className="px-5 py-4 bg-(--olive) text-(--primary) rounded-3xl inline-flex">
          <Layers size={40} />
        </div>
        <p className="section-kicker section-kicker text-6xl tracking-wide text-muted">
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
