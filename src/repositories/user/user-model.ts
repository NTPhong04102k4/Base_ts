import Mongoose from "mongoose";
import { UserOutput } from "./user-type";
import { AppConst } from "@libs/app-const";

const { Schema } = Mongoose;

const user_chema = new Schema<UserOutput>(
  {
    id: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    hashed_pass: {
      type: String,
      required: true,
    },
    conf_pass: {
      type: String,
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
    code: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = Mongoose.model("user", user_chema);
export default UserModel;
