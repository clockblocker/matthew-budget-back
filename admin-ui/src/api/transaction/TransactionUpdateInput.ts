import { AccountingPeriodWhereUniqueInput } from "../accountingPeriod/AccountingPeriodWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type TransactionUpdateInput = {
  accountingPeriod?: AccountingPeriodWhereUniqueInput | null;
  amount?: number;
  category?: CategoryWhereUniqueInput | null;
  date?: Date;
};
