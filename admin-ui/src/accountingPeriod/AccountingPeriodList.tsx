import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ACCOUNTPERIODTYPE_TITLE_FIELD } from "../accountPeriodType/AccountPeriodTypeTitle";

export const AccountingPeriodList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Accounting periods"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
