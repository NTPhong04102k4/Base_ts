import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
export type EmailOption = {
  to: string;
  subject: string;
  html: string;
};
const sendMail = async (option: EmailOption) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      ...option,
    });
  } catch (error) {
    console.error("❌ Failed to send email:", error);
  }
};

export default sendMail;
