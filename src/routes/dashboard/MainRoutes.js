import express from "express";
import { UniversityRoutes } from "./routes/universityRoutes.js";

export const DashboardRouter = express.Router();

DashboardRouter.use('/universities',UniversityRoutes);
