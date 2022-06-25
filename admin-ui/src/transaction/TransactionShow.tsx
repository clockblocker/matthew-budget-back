import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { ACCOUNTINGPERIOD_TITLE_FIELD } from "../accountingPeriod/AccountingPeriodTitle";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";

export const TransactionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Accounting period"
          source="accountingperiod.id"
          reference="AccountingPeriod"
        >
          <TextField source={ACCOUNTINGPERIOD_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Amount" source="amount" />
        <ReferenceField
          label="Category"
          source="category.id"
          reference="Category"
        >
          <TextField source={CATEGORY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Date" source="date" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
