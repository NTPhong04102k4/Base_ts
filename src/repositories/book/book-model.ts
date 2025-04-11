import Mongoose from "mongoose";
import { BookOutput } from "./book-type";
import { AppConst } from "@libs/app-const";

const { Schema } = Mongoose;
const book_schema = new Schema<BookOutput>({
  id: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  cover_image: {
    type: String,
  },
  description: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
  },
  categories: {
    type: String,
    ref: "Category",
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
});

const BookModel = Mongoose.model("Book", book_schema);
export default BookModel;
