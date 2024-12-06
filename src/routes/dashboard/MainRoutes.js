import express from "express";
import { UniversityRoutes } from "./routes/universityRoutes.js";
import { CompanyRoutes } from "./routes/companyRoutes.js";
import { CertificateRoutes } from "./routes/certificateRoutes.js";

export const DashboardRouter = express.Router();

DashboardRouter.use('/universities',UniversityRoutes);
DashboardRouter.use('/companies',CompanyRoutes);
DashboardRouter.use('/certificates',CertificateRoutes);
