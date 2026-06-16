import express from "express";
import * as projectController from "../controllers/projectController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", projectController.getProjects);

router.post("/", authMiddleware, projectController.createProject);

router.put("/:id", authMiddleware, projectController.updateProject);

router.delete("/:id", authMiddleware, projectController.deleteProject);

export default router;