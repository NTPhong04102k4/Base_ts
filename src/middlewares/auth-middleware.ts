import { verifyToken } from "@libs/auth/token-util";
import { Request, Response, NextFunction } from "express";

export function authenticateJWT(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];
    try {
      const decoded = verifyToken(token);
      // Lưu user vào request để dùng ở các middleware hoặc controller sau
      (req as any).user = decoded;
      next();
    } catch (err) {
      return res.status(401).json({ message: "Unauthorized" });
    }
  } else {
    return res.status(401).json({ message: "No token provided" });
  }
}
