import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateInput,
} from "react-admin";

import { AccountingPeriodTitle } from "../accountingPeriod/AccountingPeriodTitle";
import { CategoryTitle } from "../category/CategoryTitle";

export const TransactionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
