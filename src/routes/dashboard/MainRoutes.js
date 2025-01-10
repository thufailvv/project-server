import express from "express";
import { UniversityRoutes } from "./routes/universityRoutes.js";
import { CompanyRoutes } from "./routes/companyRoutes.js";
import { CertificateRoutes } from "./routes/certificateRoutes.js";
import { AuthRoutes } from "./routes/AuthRoutes.js";
import { UniversityAuthRoutes } from "./routes/UniversityAuthRoute.js";
import { CompanyAuthRoutes } from "./routes/CompanyAuthRoutes.js";

export const DashboardRouter = express.Router();

DashboardRouter.use('/universities',UniversityRoutes);
DashboardRouter.use('/companies',CompanyRoutes);
DashboardRouter.use('/certificates',CertificateRoutes);
DashboardRouter.use('/auth',AuthRoutes);
DashboardRouter.use('/university-auth',UniversityAuthRoutes);
DashboardRouter.use('/company-auth',CompanyAuthRoutes);
