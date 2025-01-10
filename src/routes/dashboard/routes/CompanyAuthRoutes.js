import express from "express";
import { postAuthentication } from "../../../controllers/dashboard/CompanyAuthController.js";

export const CompanyAuthRoutes = express.Router();

CompanyAuthRoutes.post('/login',postAuthentication);