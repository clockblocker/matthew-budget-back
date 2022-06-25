import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  accountingPeriodId?: SortOrder;
  amount?: SortOrder;
  categoryId?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
