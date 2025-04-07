import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const MONGO_URI = process.env.MONGO_URI;
const connectDB = async () => {
  try {
    if (!MONGO_URI) {
      throw new Error("MongoDB URI is not defined in environment variables.");
    }

    await mongoose.connect(MONGO_URI);
    console.log(`Connected ${MONGO_URI}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectDB;
