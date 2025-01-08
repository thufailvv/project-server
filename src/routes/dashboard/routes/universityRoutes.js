import express from "express";
import { createUniversity, deleteUniversity, getAllUniversity, updateUniversity, viewUniversity } from "../../../controllers/dashboard/UniversityController.js";
import { uploadFile } from "../../../utils/fileUploader.js";

export const UniversityRoutes = express.Router();

UniversityRoutes.post('/',uploadFile('universities').single('universityLogo'), createUniversity);  //create post
UniversityRoutes.put('/update/:id',uploadFile('universities').single('universityLogo'), updateUniversity); //update put
UniversityRoutes.delete('/delete/:id',deleteUniversity); //delete delete
UniversityRoutes.get('/view/:id',viewUniversity); //view get
UniversityRoutes.get('/all',getAllUniversity); //all get
