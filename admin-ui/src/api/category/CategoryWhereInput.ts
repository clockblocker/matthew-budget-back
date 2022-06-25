import { StringFilter } from "../../util/StringFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type CategoryWhereInput = {
  id?: StringFilter;
  label?: StringFilter;
  transactions?: TransactionListRelationFilter;
};
