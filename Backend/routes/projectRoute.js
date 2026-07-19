import express from "express";
import * as projectController from "../controllers/projectController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import { handleValidation } from "../validation/handleValidation.js";
import { projectBodyValidation, projectIdValidation } from "../validation/projectValidation.js";

const router = express.Router();

router.get("/count", projectController.getProjectCount);

router.get("/", projectController.getProjects);

router.post("/", authMiddleware, projectBodyValidation, handleValidation, projectController.createProject);

router.put("/:id", authMiddleware, projectIdValidation, projectBodyValidation, handleValidation, projectController.updateProject);

router.delete("/:id", authMiddleware, projectIdValidation, handleValidation, projectController.deleteProject);

export default router;
