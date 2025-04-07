import express from "express";
import dotenv from "dotenv";
import apis from "./apis";
import connectDB from "./configs/connect-db";

dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
//Connect database
connectDB();
app.use("/", apis);
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
