import express from "express";
import { createCertificate, deleteCertificate, getAllCertificate, updateCertificate, viewCertificate } from "../../../controllers/dashboard/CertificateController.js";
import { uploadFile } from "../../../utils/fileUploader.js";

export const CertificateRoutes = express.Router();

CertificateRoutes.post('/',uploadFile('certificates').single('universityLogo'),createCertificate);  //create post
CertificateRoutes.put('/update/:id',uploadFile('certificates').single('universityLogo'),updateCertificate); //update put
CertificateRoutes.put('/delete/:id',deleteCertificate); //delete delete
CertificateRoutes.get('/view/:id',viewCertificate); //view get
CertificateRoutes.get('/all',getAllCertificate); //all get
