import React, { useEffect, useState } from "react";
import {
  createProject,
  deleteProject,
  getProjects,
  updateProject,
} from "../../api/projectApi.js";
import EmptyState from "../components/EmptyState.jsx";
import Feedback from "../components/Feedback.jsx";
import FormField from "../components/FormField.jsx";
import { getErrorMessage, getId } from "../utils.js";
import { getImageUrl } from "../../utils/media.js";

const emptyProject = {
  title: "",
  description: "",
  github_url: "",
  live_url: "",
  image_url: "",
  featured: false,
};

function ProjectsManager() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState(emptyProject);
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const loadProjects = async () => {
    try {
      setLoading(true);
      setError("");
      const { data } = await getProjects();
      setProjects(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(getErrorMessage(err, "Could not load projects"));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const resetForm = () => {
    setForm(emptyProject);
    setEditingId(null);
    setShowForm(false);
  };

  const openCreate = () => {
    setForm(emptyProject);
    setEditingId(null);
    setShowForm(true);
    setSuccess("");
  };

  const openEdit = (project) => {
    setForm({ ...emptyProject, ...project, featured: Boolean(project.featured) });
    setEditingId(getId(project));
    setShowForm(true);
    setSuccess("");
  };

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSaving(true);
    setError("");
    setSuccess("");

    try {
      if (editingId) {
        await updateProject(editingId, form);
        setSuccess("Project updated successfully.");
      } else {
        await createProject(form);
        setSuccess("Project created successfully.");
      }

      resetForm();
      await loadProjects();
    } catch (err) {
      setError(getErrorMessage(err, "Could not save project"));
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (project) => {
    if (!window.confirm(`Delete "${project.title}"?`)) return;

    try {
      setError("");
      setSuccess("");
      await deleteProject(getId(project));
      setSuccess("Project deleted successfully.");
      await loadProjects();
    } catch (err) {
      setError(getErrorMessage(err, "Could not delete project"));
    }
  };

  return (
    <section className="grid gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="admin-kicker">Projects</p>
          <h1 className="text-3xl font-black text-[#24211f] sm:text-5xl">Projects management</h1>
        </div>
        <button className="admin-button-primary" type="button" onClick={openCreate}>
          Add Project
        </button>
      </div>

      <Feedback error={error} success={success} />

      {showForm && (
        <form className="admin-card grid gap-5 p-5 sm:p-7" onSubmit={handleSubmit}>
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-black">{editingId ? "Edit project" : "Add project"}</h2>
            <button className="admin-button-secondary" type="button" onClick={resetForm}>
              Cancel
            </button>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            <FormField label="Title" name="title" value={form.title} onChange={handleChange} />
            <FormField label="Image URL" name="image_url" value={form.image_url || ""} onChange={handleChange} />
            <FormField label="GitHub URL" name="github_url" value={form.github_url || ""} onChange={handleChange} />
            <FormField label="Live URL" name="live_url" value={form.live_url || ""} onChange={handleChange} />
          </div>
          <FormField label="Description" name="description" value={form.description} onChange={handleChange} textarea />
          <label className="flex items-center gap-3 text-sm font-black">
            <input
              className="h-5 w-5 accent-[#24211f]"
              name="featured"
              type="checkbox"
              checked={form.featured}
              onChange={handleChange}
            />
            Featured project
          </label>
          <button className="admin-button-primary justify-self-start" type="submit" disabled={saving}>
            {saving ? "Saving..." : editingId ? "Update project" : "Create project"}
          </button>
        </form>
      )}

      {loading ? (
        <div className="admin-card p-6 text-[#70665c]">Loading projects...</div>
      ) : projects.length === 0 ? (
        <EmptyState
          title="No projects yet"
          description="Create your first project to start filling the portfolio work section."
          actionLabel="Add Project"
          onAction={openCreate}
        />
      ) : (
        <div className="grid gap-4 lg:grid-cols-2">
          {projects.map((project) => (
            <article className="admin-card grid gap-4 p-5" key={getId(project)}>
              {getImageUrl(project, ["image_url", "imageUrl", "image", "project_image"]) && (
                <img
                  className="h-48 w-full rounded-lg border border-[#e6d8c2] object-cover"
                  src={getImageUrl(project, ["image_url", "imageUrl", "image", "project_image"])}
                  alt={project.title}
                />
              )}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.12em] text-[#70665c]">
                    {project.featured ? "Featured" : "Project"}
                  </p>
                  <h2 className="mt-2 text-2xl font-black">{project.title}</h2>
                </div>
                <div className="flex gap-2">
                  <button className="admin-button-secondary" type="button" onClick={() => openEdit(project)}>
                    Edit
                  </button>
                  <button className="admin-button-danger" type="button" onClick={() => handleDelete(project)}>
                    Delete
                  </button>
                </div>
              </div>
              <p className="text-[#70665c]">{project.description}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default ProjectsManager;
