import express from "express";
import { Approving, createUniversity, deleteUniversity, getAllRequest, getAllUniversity, Rejecting, updateUniversity, viewUniversity } from "../../../controllers/dashboard/UniversityController.js";
import { uploadFile } from "../../../utils/fileUploader.js";

export const UniversityRoutes = express.Router();

UniversityRoutes.post('/create', uploadFile('universities').single('universityLogo'), createUniversity);  //create post
UniversityRoutes.post('/approve/:id', Approving);  //create post
UniversityRoutes.post('/reject/:id', Rejecting);  //create post
UniversityRoutes.put('/update/:id', uploadFile('universities').single('universityLogo'), updateUniversity); //update put
UniversityRoutes.delete('/delete/:id', deleteUniversity); //delete delete
UniversityRoutes.get('/view/:id', viewUniversity); //view get
UniversityRoutes.get('/all', getAllUniversity); //all get
UniversityRoutes.get('/requests', getAllRequest); //all get
