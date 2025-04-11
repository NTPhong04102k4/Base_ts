export type UserInput = {
  id: string;
  email: string;
  username: string;
  password: string;
  hashed_pass: string;
  status: number;
  code: string;
  conf_pass: string;
};

export type UserOutput = {
  _id: string;
  id: string;
  email: string;
  username: string;
  password: string;
  hashed_pass: string;
  conf_pass: string;
  status: number;
  code: string;
  createdAt: Date;
  updatedAt: Date;
};

export type UserRequest = {
  id: string;
  email: string;
  username: string;
  code: string;
  status: string;
  password: string;
  conf_pass: string;
};
