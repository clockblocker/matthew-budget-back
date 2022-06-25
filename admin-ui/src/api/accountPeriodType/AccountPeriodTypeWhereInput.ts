import { AccountingPeriodListRelationFilter } from "../accountingPeriod/AccountingPeriodListRelationFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { StringFilter } from "../../util/StringFilter";

export type AccountPeriodTypeWhereInput = {
  accountingPeriods?: AccountingPeriodListRelationFilter;
  durationInMonths?: FloatFilter;
  id?: StringFilter;
  name?: StringFilter;
};
