import { TransactionUpdateManyWithoutCategoriesInput } from "./TransactionUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  label?: string;
  transactions?: TransactionUpdateManyWithoutCategoriesInput;
};
