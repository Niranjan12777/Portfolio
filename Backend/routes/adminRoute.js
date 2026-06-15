import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { loginAdmin } from "../controllers/adminController.js";
const router = express.Router();

router.post("/login", loginAdmin);

export default router;