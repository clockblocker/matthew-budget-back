import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ACCOUNTINGPERIOD_TITLE_FIELD } from "./AccountingPeriodTitle";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { ACCOUNTPERIODTYPE_TITLE_FIELD } from "../accountPeriodType/AccountPeriodTypeTitle";

export const AccountingPeriodShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="End" source="end" />
        <TextField label="ID" source="id" />
        <TextField label="Start" source="start" />
        <ReferenceField
          label="Type_id"
          source="accountperiodtype.id"
          reference="AccountPeriodType"
        >
          <TextField source={ACCOUNTPERIODTYPE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Transaction"
          target="AccountingPeriodId"
          label="Transactions"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="User"
          target="AccountingPeriodId"
          label="Users"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Accounting period"
              source="accountingperiod.id"
              reference="AccountingPeriod"
            >
              <TextField source={ACCOUNTINGPERIOD_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="First Name" source="firstName" />
            <TextField label="ID" source="id" />
            <TextField label="Last Name" source="lastName" />
            <TextField label="Roles" source="roles" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Username" source="username" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
