import express, { Request, Response, Router } from "express";
import book_api from "./books/book";
import category_api from "./categories/category";
import auth_api from "./auth/auth";
const apis: Router = express.Router();
apis.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});
apis.use("/auths", auth_api);
apis.use("/books", book_api);
apis.use("/categories", category_api);
export default apis;
