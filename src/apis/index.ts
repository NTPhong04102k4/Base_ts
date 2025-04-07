import express, { Request, Response, Router } from "express";
import auth_router from "./auth/auth";

const apis: Router = express.Router();
apis.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});
apis.use("/auths", auth_router);
export default apis;
