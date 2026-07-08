import express from "express";
import cors from "cors";

import projectRoutes from "./routes/projectRoute.js";
import skillRoutes from "./routes/skillRoute.js";
import aboutRoutes from "./routes/aboutRoute.js";
import heroRoutes from "./routes/heroRoutes.js";
import adminRoutes from "./routes/adminRoute.js";
import messageRoutes from "./routes/messageRoute.js";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      process.env.FRONTEND_URL,
    ],
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/admin", adminRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/hero", heroRoutes);
app.use("/api/messages", messageRoutes);

app.get("/", (req, res) => {
  res.send("Portfolio API Running...");
});

export default app;