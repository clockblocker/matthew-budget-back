import { TransactionCreateNestedManyWithoutAccountingPeriodsInput } from "./TransactionCreateNestedManyWithoutAccountingPeriodsInput";
import { AccountPeriodTypeWhereUniqueInput } from "../accountPeriodType/AccountPeriodTypeWhereUniqueInput";
import { UserCreateNestedManyWithoutAccountingPeriodsInput } from "./UserCreateNestedManyWithoutAccountingPeriodsInput";

export type AccountingPeriodCreateInput = {
  end: Date;
  start: Date;
  transactions?: TransactionCreateNestedManyWithoutAccountingPeriodsInput;
  typeId?: AccountPeriodTypeWhereUniqueInput | null;
  users?: UserCreateNestedManyWithoutAccountingPeriodsInput;
};
