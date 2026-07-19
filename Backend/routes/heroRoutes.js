import express from "express";
import { getHero, updateHero } from "../controllers/heroController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import { updateHeroValidation } from "../validation/heroValidation.js";
import { handleValidation } from "../validation/handleValidation.js";

const router = express.Router();

router.get("/", getHero);

router.put("/", authMiddleware, updateHeroValidation, handleValidation, updateHero);

export default router;
