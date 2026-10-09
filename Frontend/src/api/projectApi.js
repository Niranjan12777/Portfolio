import api from "./axios.js";

export const getProjects = () =>
  api.get("/projects");

export const createProject = (projectData) =>
  api.post("/projects", projectData);

export const updateProject = (id, projectData) =>
  api.put(`/projects/${id}`, projectData);

export const deleteProject = (id) =>
  api.delete(`/projects/${id}`);

export const getProjectCount = () =>
  api.get("/projects/count");