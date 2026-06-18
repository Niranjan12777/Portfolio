import * as projectRepository from "../repositories/projectRepository.js";

export const fetchProjects = async () => {
  return await projectRepository.getProjects();
};

export const fetchProjectCount = async () => {
  return await projectRepository.getProjectCount();
};

export const addProject = async (data) => {
  const {
    title,
    description,
    github_url,
    live_url,
    image_url,
    featured,
  } = data;

  return await projectRepository.createProject(
    title,
    description,
    github_url,
    live_url,
    image_url,
    featured
  );
};

export const editProject = async (id, data) => {
  const {
    title,
    description,
    github_url,
    live_url,
    image_url,
    featured,
  } = data;

  return await projectRepository.updateProject(
    id,
    title,
    description,
    github_url,
    live_url,
    image_url,
    featured
  );
};

export const removeProject = async (id) => {
  await projectRepository.deleteProject(id);
};