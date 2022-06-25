import { TransactionCreateNestedManyWithoutCategoriesInput } from "./TransactionCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  label: string;
  transactions?: TransactionCreateNestedManyWithoutCategoriesInput;
};
