import { Transaction } from "../transaction/Transaction";
import { AccountPeriodType } from "../accountPeriodType/AccountPeriodType";
import { User } from "../user/User";

export type AccountingPeriod = {
  createdAt: Date;
  end: Date;
  id: string;
  start: Date;
  transactions?: Array<Transaction>;
  typeId?: AccountPeriodType | null;
  updatedAt: Date;
  users?: Array<User>;
};
