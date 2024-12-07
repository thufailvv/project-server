import express from "express";

import { createCompany, deleteCompany, getAllCompany, updateCompany, viewCompany } from "../../../controllers/dashboard/CompanyController.js";

export const CompanyRoutes = express.Router();

CompanyRoutes.post('/',createCompany);  //create post
CompanyRoutes.put('/update/:id',updateCompany); //update put
CompanyRoutes.delete('/delete/:id',deleteCompany); //delete delete
CompanyRoutes.get('/view/:id',viewCompany); //view get
CompanyRoutes.get('/all',getAllCompany); //all get
