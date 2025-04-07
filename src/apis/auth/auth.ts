import Response from "@libs/api/Response";
import otpController from "@services/otp/otp-controller";
import express from "express";

const auth_router = express.Router();

auth_router.post("/send-otp", Response(otpController.save));

export default auth_router;
