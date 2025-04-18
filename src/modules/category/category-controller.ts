import { NextFunction, Request, Response } from "express";
import { CategoryService, ICategoryService } from "./category-service";

class CategoryController {
  private categoryService: ICategoryService;
  constructor() {
    this.categoryService = new CategoryService();
  }
  public create = async (req: Request, res: Response, next: NextFunction) => {
    let newCategory = req.body;
    return await this.categoryService.create(newCategory);
  };
  public getAll = async (req: any, res: Response, next: NextFunction) => {
    let user = req.user;
    console.log("user", user);
    return await this.categoryService.getAll(user);
  };
}
export default new CategoryController();
