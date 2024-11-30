import express from "express";
import { createCompany } from "../../../controllers/dashboard/createcompany.js";

export const CompanyRoutes = express.Router();

CompanyRoutes.post('/',createCompany);
