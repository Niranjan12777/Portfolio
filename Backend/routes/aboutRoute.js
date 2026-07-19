import express from "express";
import * as aboutController from "../controllers/aboutController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import { updateAboutValidation } from "../validation/aboutValidation.js";
import { handleValidation } from "../validation/handleValidation.js";

const router = express.Router();

router.get("/", aboutController.getAbout);

router.put("/", authMiddleware, updateAboutValidation, handleValidation, aboutController.updateAbout);

export default router;
