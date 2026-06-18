import * as projectService from "../services/projectService.js";

export const getProjects = async (req, res) => {
  try {
    const projects = await projectService.fetchProjects();

    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getProjectCount = async (req, res) => {
  try {
    const count = await projectService.fetchProjectCount();

    res.status(200).json({ count });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const createProject = async (req, res) => {
  try {
    const project = await projectService.addProject(req.body);

    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateProject = async (req, res) => {
  try {
    const project = await projectService.editProject(
      req.params.id,
      req.body
    );

    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteProject = async (req, res) => {
  try {
    await projectService.removeProject(req.params.id);

    res.status(200).json({
      message: "Project deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};