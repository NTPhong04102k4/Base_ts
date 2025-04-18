import { AppConst } from "@libs/app-const";
import { hashPassword } from "@libs/auth/password-util";
import { generateToken } from "@libs/auth/token-util";
import { ErrorCode } from "@libs/error-code";
import { verify_otp } from "@libs/otp-helper";
import OtpModel from "@repositories/otp/otp-model";
import { OtpOutput } from "@repositories/otp/otp-type";
import UserModel from "@repositories/user/user-model";
import {
  UserInput,
  UserOutput,
  UserRequest,
} from "@repositories/user/user-type";

export interface iAuthService {
  register(input: UserRequest): Promise<UserOutput>;
  login(input: any): Promise<any>;
}

export class AuthService {
  //============================PUBLIC FUNC===============================
  public async register(input: UserRequest): Promise<UserOutput> {
    console.log("Params.Authservice.params: ", input);
    //Kiểm tra pass == conf_pass
    if (input.password != input.conf_pass) {
      throw ErrorCode.PASSWORD_NOT_MATCHED;
    }
    //kiểm tra email đã tồn tại chưa
    let user = await this._getUserByEmail(input.email);
    if (user) {
      throw ErrorCode.EMAIL_IS_EXISTS;
    }
    //Kiểm tra pass đầu vào
    if (!AppConst.REGEX.ADMIN_PASSWORD.test(input.password)) {
      throw ErrorCode.PASSWORD_IS_NOT_CORRECT;
    }
    //Kiểm tra otp
    let isVerifySuccess = await this._verifyOtp(input);
    if (!isVerifySuccess) {
      throw ErrorCode.INCORRECT_OTP_CODE;
    }
    const { password, conf_pass, code, ...rest } = input;

    const newUser = {
      ...rest,
      hashed_pass: await hashPassword(password),
    };
    console.log("user; ", newUser);
    return await UserModel.create(newUser);
  }
  public async login(input: any): Promise<any> {
    console.log("Params.Authservice.params: ", input);
    let user = await this._getUserByEmail(input.email);
    if (!user) {
      throw ErrorCode.EMAIL_DOES_NOT_EXISTS;
    }

    let payload = {
      _id: user._id,
      email: user.email,
    };
    let token = generateToken(payload);
    console.log("token: ", token);
  }
  //============================PRIVATE FUNC===============================
  private async _getUserByEmail(email: string): Promise<UserOutput> {
    let user = await UserModel.findOne({ email });
    return user;
  }
  private async _verifyOtp(params: any): Promise<Boolean> {
    let otp = await this._getOtpByEmail(params.email);
    if (otp) {
      if (otp.code != params.code) return false;
      // await OtpModel.deleteOne({ _id: otp._id });
      // return verify_otp(otp.code, otp.secret);
      return true;
    }
    return false;
  }
  private async _getOtpByEmail(email: string): Promise<OtpOutput> {
    let otp = await OtpModel.findOne({ email });
    return otp;
  }
}
