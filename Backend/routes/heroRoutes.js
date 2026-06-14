import express from "express";
import { getHero, updateHero } from "../controllers/heroController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getHero);

router.put("/", authMiddleware, updateHero);

export default router;
