import CategoryModel from "@repositories/category/category-model";
import {
  CategoryInput,
  CategoryOutput,
} from "@repositories/category/category-type";

export interface ICategoryService {
  create(input: CategoryInput): Promise<CategoryOutput>;
  getAll(): Promise<any>;
}

export class CategoryService {
  //=====================PUBLIC FNC====================
  public async create(input: CategoryInput): Promise<CategoryOutput> {
    console.log("Params.CategoryService.params: ", input);
    let res = await CategoryModel.create(input);
    return res;
  }
  public async getAll(): Promise<any> {
    let res = await CategoryModel.find();
    return res;
  }
  //=====================PRIVATE FNC===================
}
