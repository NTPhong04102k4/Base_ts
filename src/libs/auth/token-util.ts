import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const secretKey: string = process.env.JWT_SECRET || "jwt_secret";
const TOKEN_EXPIRES_IN = "1d";
const token = jwt.sign({ _id: 1 }, secretKey, { expiresIn: TOKEN_EXPIRES_IN });
export function generateToken(
  _payload: object,
  _expiresIn: string | number = TOKEN_EXPIRES_IN
): string {
  const token = jwt.sign(_payload, secretKey, {
    expiresIn: TOKEN_EXPIRES_IN,
  });
  return token;
}

export function verifyToken(token: string): any {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    throw new Error("Invalid or expired token");
  }
}
