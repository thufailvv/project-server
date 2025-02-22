import express from "express";
import { createCertificate, deleteCertificate, getAllCertificate, updateCertificate, viewCertificate } from "../../../controllers/dashboard/CertificateController.js";
import { uploadFile } from "../../../utils/fileUploader.js";
import { authMiddleware } from "../../../middleware/UniversityMiddleware.js";

export const CertificateRoutes = express.Router();

CertificateRoutes.post('/',uploadFile('certificates').single('certificatePhoto'),authMiddleware,createCertificate);  //create post
CertificateRoutes.put('/update/:id',uploadFile('certificates').single('certificatePhoto'),authMiddleware,updateCertificate); //update put
CertificateRoutes.put('/delete/:id',authMiddleware,deleteCertificate); //delete delete
CertificateRoutes.get('/view/:id',viewCertificate); //view get
CertificateRoutes.get('/all',authMiddleware,getAllCertificate); //all get
