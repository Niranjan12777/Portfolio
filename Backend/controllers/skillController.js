import * as skillService from "../services/skillService.js";

export const getSkills = async (req, res) => {
  try {
    const skills = await skillService.fetchSkills();

    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const createSkill = async (req, res) => {
  try {
    const skill = await skillService.addSkill(req.body);

    res.status(201).json(skill);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateSkill = async (req, res) => {
  try {
    const skill = await skillService.editSkill(
      req.params.id,
      req.body
    );

    res.status(200).json(skill);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteSkill = async (req, res) => {
  try {
    await skillService.removeSkill(req.params.id);

    res.status(200).json({
      message: "Skill deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};