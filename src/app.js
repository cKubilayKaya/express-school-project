import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import userRoutes from "./routes/userRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";

dotenv.config();

const app = express();

// Middleware'ler
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

//routes
app.use("/api/auth", userRoutes);
app.use("/api/category", categoryRoutes);

export default app;
