import express from "express";
import { postAuthentication } from "../../../controllers/dashboard/AuthController.js";

export const AuthRoutes = express.Router();

AuthRoutes.post('/login',postAuthentication);