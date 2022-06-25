import { AccountingPeriodWhereUniqueInput } from "../accountingPeriod/AccountingPeriodWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type TransactionCreateInput = {
  accountingPeriod?: AccountingPeriodWhereUniqueInput | null;
  amount: number;
  category?: CategoryWhereUniqueInput | null;
  date: Date;
};
