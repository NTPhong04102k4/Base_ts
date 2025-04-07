import { AppConst } from "@libs/app-const";
import UserModel from "@repositories/user/user-model";
import { UserOutput } from "@repositories/user/user-type";
import { OtpOutput, OtpInput } from "@repositories/otp/otp-type";
import sendMail, { EmailOption } from "@libs/email-helper";
import { generate_otp, gennerate_secret } from "@libs/otp-helper";
import OtpModel from "@repositories/otp/otp-model";

export type OtpReq = {
  email: string;
  type: string; //register || forget-password
};
export interface IOtpService {
  save(_params: OtpReq): Promise<Boolean>;
}

export class OtpService {
  // ======================PUBLIC FUNC =============================
  public async save(params: OtpReq): Promise<Boolean> {
    const user = await this._getUserByEmail(params.email);
    let otp = await this._getOtpByEmail(params.email);
    if (params.type === AppConst.OTP_TYPE.REGISTER) {
      if (user) {
        throw new Error("User is exist");
      }
    } else if (params.type === AppConst.OTP_TYPE.FORGET_PASSWORD) {
      if (!user) {
        throw new Error("User is not exist");
      }
    } else {
      return false;
    }
    if (!otp) {
      const newOtp = await this._generateOtp();
      const otpInput = {
        email: params.email,
        code: newOtp,
      };
      const res = await OtpModel.create(otpInput);
      await this._sendOTP(otpInput);
    } else {
      const newOtp = await this._generateOtp();
      const otpInput = {
        email: params.email,
        code: newOtp,
      };
      let res = await OtpModel.updateOne({ _id: otp._id }, otpInput);
      await this._sendOTP(otpInput);
    }
    return true;
  }
  // ======================PRIVATE FUNC=============================
  private async _getUserByEmail(email: string): Promise<UserOutput> {
    return await UserModel.findOne({ email });
  }
  private async _sendOTP(params: any) {
    let to = params.email;
    let subject = "Your OTP Code for Email Verification";
    let html = `Your Verification Code: <span style="font-weight: 700">${params.code}</span> - Complete Your Email Verification`;
    let mailOptions: EmailOption = { to, subject, html };
    return await sendMail(mailOptions);
  }
  private async _getOtpByEmail(email: string): Promise<OtpOutput> {
    let otp = await OtpModel.findOne({
      email,
      status: AppConst.COMMON_STATUS.ACTIVE,
    });
    return otp;
  }
  private async _generateOtp() {
    let secret = gennerate_secret();
    let otp = generate_otp(secret);
    return otp;
  }
}
