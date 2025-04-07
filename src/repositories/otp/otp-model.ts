import Mongoose from "mongoose";
import { OtpOutput } from "./otp-type";
import { AppConst } from "@libs/app-const";
const { Schema } = Mongoose;
const otp_schema = new Schema<OtpOutput>(
  {
    email: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    status: {
      type: Number,
      default: AppConst.COMMON_STATUS["ACTIVE"],
      enum: [
        AppConst.COMMON_STATUS["ACTIVE"],
        AppConst.COMMON_STATUS["INACTIVE"],
        AppConst.COMMON_STATUS["REMOVE"],
      ],
    },
  },
  {
    timestamps: true,
  }
);

const OtpModel = Mongoose.model("Otp", otp_schema);
export default OtpModel;
