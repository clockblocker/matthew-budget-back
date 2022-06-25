import { AccountingPeriod } from "../accountingPeriod/AccountingPeriod";

export type User = {
  accountingPeriod?: AccountingPeriod | null;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
