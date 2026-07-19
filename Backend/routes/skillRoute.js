import express from "express";
import * as skillController from "../controllers/skillController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import { handleValidation } from "../validation/handleValidation.js";
import { skillBodyValidation, skillIdValidation } from "../validation/skillValidation.js";

const router = express.Router();

router.get("/count", skillController.getSkillCount);

router.get("/", skillController.getSkills);

router.post("/", authMiddleware, skillBodyValidation, handleValidation, skillController.createSkill);

router.put("/:id", authMiddleware, skillIdValidation, skillBodyValidation, handleValidation, skillController.updateSkill);

router.delete("/:id", authMiddleware, skillIdValidation, handleValidation, skillController.deleteSkill);

export default router;
