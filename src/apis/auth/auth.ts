import Response from "@libs/api/Response";
import authController from "@services/auth/auth-controller";
import otpController from "@services/otp/otp-controller";
import express from "express";
import { authenticateJWT } from "src/middlewares/auth-middleware";

const auth_api = express.Router();

auth_api.post("/send-otp", Response(otpController.save));
auth_api.post("/register", Response(authController.register));
auth_api.post("/login", Response(authController.login));
export default auth_api;
