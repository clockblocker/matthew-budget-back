import { AccountingPeriod } from "../accountingPeriod/AccountingPeriod";
import { Category } from "../category/Category";

export type Transaction = {
  accountingPeriod?: AccountingPeriod | null;
  amount: number;
  category?: Category | null;
  createdAt: Date;
  date: Date;
  id: string;
  updatedAt: Date;
};
