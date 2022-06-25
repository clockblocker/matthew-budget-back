import { AccountingPeriodCreateNestedManyWithoutAccountPeriodTypesInput } from "./AccountingPeriodCreateNestedManyWithoutAccountPeriodTypesInput";

export type AccountPeriodTypeCreateInput = {
  accountingPeriods?: AccountingPeriodCreateNestedManyWithoutAccountPeriodTypesInput;
  durationInMonths: number;
  name: string;
};
