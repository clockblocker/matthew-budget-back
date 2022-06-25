import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";
import { AccountPeriodTypeWhereUniqueInput } from "../accountPeriodType/AccountPeriodTypeWhereUniqueInput";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type AccountingPeriodWhereInput = {
  end?: DateTimeFilter;
  id?: StringFilter;
  start?: DateTimeFilter;
  transactions?: TransactionListRelationFilter;
  typeId?: AccountPeriodTypeWhereUniqueInput;
  users?: UserListRelationFilter;
};
