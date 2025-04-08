import { ErrorCode } from "@libs/error-code";
import UserModel from "@repositories/user/user-model";
import {
  UserInput,
  UserOutput,
  UserRequest,
} from "@repositories/user/user-type";

export interface iAuthService {
  register(input: UserRequest): Promise<UserOutput>;
}

export class AuthService {
  //============================PUBLIC FUNC===============================
  public async register(input: UserRequest): Promise<UserOutput> {
    console.log("Auth service param:  ", input);
    //Kiểm tra pass == conf_pass
    if (input.password != input.conf_pass) {
      throw ErrorCode.PASSWORD_NOT_MATCHED;
    }
    //kiểm tra email đã tồn tại chưa
    let user = await this._getUserByEmail(input.email);
    if (user) {
      throw ErrorCode.EMAIL_IS_EXISTS;
    }
    let _res = await UserModel.create(input);
    return _res;
    return;
  }
  //============================PRIVATE FUNC===============================
  private async _getUserByEmail(email: string): Promise<UserOutput> {
    let user = await UserModel.findOne({ email });
    return user;
  }
}
