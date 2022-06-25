import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ACCOUNTPERIODTYPE_TITLE_FIELD } from "./AccountPeriodTypeTitle";

export const AccountPeriodTypeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Duration in months" source="durationInMonths" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="AccountingPeriod"
          target="AccountPeriodTypeId"
          label="Accounting periods"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
