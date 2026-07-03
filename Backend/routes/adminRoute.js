import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { getProfile, loginAdmin } from "../controllers/adminController.js";
const router = express.Router();

router.post("/login", loginAdmin);
router.get("/profile", authMiddleware, getProfile);

export default router;
