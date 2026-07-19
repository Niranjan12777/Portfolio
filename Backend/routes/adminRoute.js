import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { getProfile, loginAdmin } from "../controllers/adminController.js";
import { loginValidation } from "../validation/adminValidation.js";
import { handleValidation } from "../validation/handleValidation.js";
const router = express.Router();

router.post("/login", loginValidation, handleValidation, loginAdmin);
router.get("/profile", authMiddleware, getProfile);

export default router;
