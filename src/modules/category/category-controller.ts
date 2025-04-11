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
  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    return await this.categoryService.getAll();
  };
}
export default new CategoryController();
