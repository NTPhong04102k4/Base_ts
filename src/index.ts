import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();

const PORT = process.env.PORT;

// Middleware để xử lý JSON
app.use(express.json());

// Route mẫu
app.get("/", (req, res) => {
  res.send("Hello World!");
});
// Lắng nghe port
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
