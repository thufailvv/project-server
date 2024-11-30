import express from "express";
import { CompanyRoutes } from "./routes/companyRoutes.js";

export const DashboardRouter = express.Router();

DashboardRouter.use('/companies',CompanyRoutes);
