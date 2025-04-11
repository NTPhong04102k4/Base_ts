export type OtpInput = {
  email: string;
  code: string;
  secret: string;
  status: number;
};

export type OtpOutput = {
  _id: string;
  email: string;
  code: string;
  secret: string;
  status: number;
  createdAt: Date;
  updatedAt: Date;
};
