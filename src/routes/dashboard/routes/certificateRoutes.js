import express from "express";
import { createCertificate } from "../../../controllers/dashboard/createCertificate.js";

export const CertificateRoutes = express.Router();

CertificateRoutes.post('/',createCertificate);  //create post
CertificateRoutes.put('/update/:id',updateCertificate); //update put
CertificateRoutes.delete('/delete/:id',deleteCertificate); //delete delete
CertificateRoutes.get('/view/:id',viewCertificate); //view get
CertificateRoutes.get('/all',getAllCertificate); //all get
