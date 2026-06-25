import api from "./axios";

export const getSkills = () =>
  api.get("/skills");

export const createSkill = (skillData) =>
  api.post("/skills", skillData);

export const updateSkill = (id, skillData) =>
  api.put(`/skills/${id}`, skillData);

export const deleteSkill = (id) =>
  api.delete(`/skills/${id}`);

export const getSkillCount = () =>
  api.get("/skills/count");