import express from "express";
import { createUniversity } from "../../../controllers/dashboard/createUniversity.js";

export const UniversityRoutes = express.Router();

UniversityRoutes.post('/',createUniversity);  //create post
UniversityRoutes.put('/update/:id',updateUniversity); //update put
UniversityRoutes.delete('/delete/:id',deleteUniversity); //delete delete
UniversityRoutes.get('/view/:id',viewUniversity); //view get
UniversityRoutes.get('/all',getAllUniversity); //all get
