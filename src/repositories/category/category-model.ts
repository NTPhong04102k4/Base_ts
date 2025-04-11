import Mongoose from "mongoose";
import { CategoryOutput } from "./category-type";
import { AppConst } from "@libs/app-const";

const { Schema } = Mongoose;
const Category_schema = new Schema<CategoryOutput>(
  {
    name: {
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

const CategoryModel = Mongoose.model("Category", Category_schema);
export default CategoryModel;
