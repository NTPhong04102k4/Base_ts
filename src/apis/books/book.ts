import Response from "@libs/api/Response";
import bookController from "@services/book/book-controller";
import express from "express";

const book_api = express.Router();

book_api.get("/get-all", Response(bookController.getAll));
book_api.post("/create", Response(bookController.create));
book_api.get("/get-one/:id", Response(bookController.getBookById));
book_api.delete("/delete/:id", Response(bookController.delete));
book_api.put("/update/:id", Response(bookController.update));

export default book_api;
