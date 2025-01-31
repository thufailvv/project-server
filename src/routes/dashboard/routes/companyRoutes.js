import express from "express";

import { Approving, certificateVerify, createCompany, deleteCompany, getAllCompany, Rejecting, updateCompany, viewCompany } from "../../../controllers/dashboard/CompanyController.js";
import { uploadFile } from "../../../utils/fileUploader.js";
import { authMiddleware } from "../../../middleware/UniversityMiddleware.js";
import { getAllRequest } from "../../../controllers/dashboard/CompanyController.js";

export const CompanyRoutes = express.Router();

CompanyRoutes.post('/',uploadFile('companies').single('companyLogo'), createCompany);  //create post
CompanyRoutes.post('/certificate-validating', certificateVerify);  //create post
CompanyRoutes.post('/approve/:id', Approving);  //create post
CompanyRoutes.post('/reject/:id', Rejecting);  //create post
CompanyRoutes.put('/update/:id',uploadFile('companies').single('companyLogo'), updateCompany); //update put
CompanyRoutes.delete('/delete/:id',deleteCompany); //delete delete
CompanyRoutes.get('/view/:id',viewCompany); //view get
CompanyRoutes.get('/all',getAllCompany); //all get
CompanyRoutes.get('/requests', getAllRequest); //all get
