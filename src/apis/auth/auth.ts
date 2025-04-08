import Response from "@libs/api/Response";
import authController from "@services/auth/auth-controller";
import otpController from "@services/otp/otp-controller";
import express from "express";

const auth_router = express.Router();

auth_router.post("/send-otp", Response(otpController.save));
auth_router.post("/register", Response(authController.register));

export default auth_router;
