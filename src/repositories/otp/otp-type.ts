export type OtpInput = {
  email: string;
  code: string;
  status: number;
};

export type OtpOutput = {
  _id: string;
  email: string;
  code: string;
  status: number;
  createdAt: Date;
  updatedAt: Date;
};
