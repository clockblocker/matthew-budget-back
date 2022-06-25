import { AccountingPeriodWhereUniqueInput } from "../accountingPeriod/AccountingPeriodWhereUniqueInput";

export type UserUpdateInput = {
  accountingPeriod?: AccountingPeriodWhereUniqueInput | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
