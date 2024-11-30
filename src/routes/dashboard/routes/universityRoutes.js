import express from "express";
import { createUniversity } from "../../../controllers/dashboard/createUniversity.js";

export const UniversityRoutes = express.Router();

UniversityRoutes.post('/',createUniversity);
