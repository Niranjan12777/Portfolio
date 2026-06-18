import * as skillRepository from "../repositories/skillRepository.js";

export const fetchSkills = async () => {
  return await skillRepository.getSkills();
};

export const fetchSkillCount = async () => {
  return await skillRepository.getSkillCount();
};

export const addSkill = async (data) => {
  const { name } = data;

  return await skillRepository.createSkill(name);
};

export const editSkill = async (id, data) => {
  const { name } = data;

  return await skillRepository.updateSkill(id, name);
};

export const removeSkill = async (id) => {
  await skillRepository.deleteSkill(id);
};