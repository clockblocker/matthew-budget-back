import { AccountingPeriodWhereUniqueInput } from "../accountingPeriod/AccountingPeriodWhereUniqueInput";
import { FloatFilter } from "../../util/FloatFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";

export type TransactionWhereInput = {
  accountingPeriod?: AccountingPeriodWhereUniqueInput;
  amount?: FloatFilter;
  category?: CategoryWhereUniqueInput;
  date?: DateTimeFilter;
  id?: StringFilter;
};
