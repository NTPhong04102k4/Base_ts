import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // ← Import cors
import apis from "./apis";
import connectDB from "./configs/connect-db";
import { generateToken } from "@libs/auth/token-util";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

// Add CORS middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Allow only frontend origin
    credentials: true, // if you use cookies or authorization headers
  })
);

app.use(express.json());

// Connect to the database
connectDB();

// Mount your routes
app.use("/", apis);
app.get("/api/ping", (req, res) => {
  res.json({ message: "pong from backend" });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
