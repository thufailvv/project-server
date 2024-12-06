import express from "express";
import { createCompany } from "../../../controllers/dashboard/createCompany.js";

export const CompanyRoutes = express.Router();

CompanyRoutes.post('/',createCompany);
CompanyRoutes.put('/update/:id',createCompany);
