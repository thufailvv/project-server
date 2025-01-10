import express from "express";
import { postAuthentication } from "../../../controllers/dashboard/UniversityAuthController.js";

export const UniversityAuthRoutes = express.Router();

UniversityAuthRoutes.post('/login',postAuthentication);