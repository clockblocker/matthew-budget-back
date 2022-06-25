import { AccountingPeriod } from "../accountingPeriod/AccountingPeriod";

export type AccountPeriodType = {
  accountingPeriods?: Array<AccountingPeriod>;
  createdAt: Date;
  durationInMonths: number;
  id: string;
  name: string;
  updatedAt: Date;
};
