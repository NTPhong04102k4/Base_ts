import { ErrorCode } from "@libs/error-code";
import CategoryModel from "@repositories/category/category-model";
import {
  CategoryInput,
  CategoryOutput,
} from "@repositories/category/category-type";
import UserModel from "@repositories/user/user-model";
import { UserOutput } from "@repositories/user/user-type";

export interface ICategoryService {
  create(input: CategoryInput): Promise<CategoryOutput>;
  getAll(userInfor: any): Promise<any>;
}

export class CategoryService {
  //=====================PUBLIC FNC====================
  public async create(input: CategoryInput): Promise<CategoryOutput> {
    console.log("Params.CategoryService.params: ", input);
    let res = await CategoryModel.create(input);
    return res;
  }
  public async getAll(userInfor: any): Promise<any> {
    let user = await this._getUserById(userInfor._id);
    console.log("user", user);
    let res = await CategoryModel.find();
    return res;
  }
  //=====================PRIVATE FNC===================
  private async _getUserById(id: string): Promise<UserOutput> {
    let user = await UserModel.findById(id);
    if (!user) {
      throw ErrorCode.USER_INACTIVE;
    }
    return user;
  }
}
