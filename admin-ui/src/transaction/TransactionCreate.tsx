import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateInput,
} from "react-admin";

import { AccountingPeriodTitle } from "../accountingPeriod/AccountingPeriodTitle";
import { CategoryTitle } from "../category/CategoryTitle";

export const TransactionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="accountingperiod.id"
          reference="AccountingPeriod"
          label="Accounting period"
        >
          <SelectInput optionText={AccountingPeriodTitle} />
        </ReferenceInput>
        <NumberInput label="Amount" source="amount" />
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="Category"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <DateInput label="Date" source="date" />
      </SimpleForm>
    </Create>
  );
};
