import Response from "@libs/api/Response";
import categoryController from "@services/category/category-controller";
import express from "express";
const category_api = express.Router();

category_api.post("/create", Response(categoryController.create));
category_api.get("/get-all", Response(categoryController.getAll));
export default category_api;
