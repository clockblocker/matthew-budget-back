import { Transaction } from "../transaction/Transaction";

export type Category = {
  createdAt: Date;
  id: string;
  label: string;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
