export type CategoryInput = {
  name: string;
  status: number;
};

export type CategoryOutput = {
  _id: string;
  name: string;
  status: number;
  createdAt: Date;
  updatedAt: Date;
};
