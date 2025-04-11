import express, { Request, Response, Router } from "express";
import auth_router from "./auth/auth";
import book_api from "./books/book";
import category_api from "./categories/category";
const apis: Router = express.Router();
apis.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});
apis.use("/auths", auth_router);
apis.use("/books", book_api);
apis.use("/categories", category_api);
export default apis;
