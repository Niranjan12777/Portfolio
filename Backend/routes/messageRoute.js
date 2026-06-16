import express from "express";
import * as messageController from "../controllers/messageController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, messageController.getMessages());

export default router;