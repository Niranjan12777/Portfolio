import express from "express";
import * as aboutController from "../controllers/aboutController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", aboutController.getAbout);

router.put("/", authMiddleware, aboutController.updateAbout);

export default router;