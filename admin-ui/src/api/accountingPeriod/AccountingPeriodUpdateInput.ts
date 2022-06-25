import { TransactionUpdateManyWithoutAccountingPeriodsInput } from "./TransactionUpdateManyWithoutAccountingPeriodsInput";
import { AccountPeriodTypeWhereUniqueInput } from "../accountPeriodType/AccountPeriodTypeWhereUniqueInput";
import { UserUpdateManyWithoutAccountingPeriodsInput } from "./UserUpdateManyWithoutAccountingPeriodsInput";

export type AccountingPeriodUpdateInput = {
  end?: Date;
  start?: Date;
  transactions?: TransactionUpdateManyWithoutAccountingPeriodsInput;
  typeId?: AccountPeriodTypeWhereUniqueInput | null;
  users?: UserUpdateManyWithoutAccountingPeriodsInput;
};
