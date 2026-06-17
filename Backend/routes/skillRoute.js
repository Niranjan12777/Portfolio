import express from "express";
import * as skillController from "../controllers/skillController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", skillController.getSkills);

router.post("/", authMiddleware, skillController.createSkill);

router.put("/:id", authMiddleware, skillController.updateSkill);

router.delete("/:id", authMiddleware, skillController.deleteSkill);

export default router;