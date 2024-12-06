import express from "express";
import { createCertificate } from "../../../controllers/dashboard/createCertificate.js";

export const CertificateRoutes = express.Router();

CertificateRoutes.post('/',createCertificate);  //creae post
CertificateRoutes.put('/update/:id',createCertificate); //update put
CertificateRoutes.get('/view/:id',createCertificate); //update put
CertificateRoutes.get('/all',createCertificate); //all get
CertificateRoutes.delete('/all',createCertificate); //update put
