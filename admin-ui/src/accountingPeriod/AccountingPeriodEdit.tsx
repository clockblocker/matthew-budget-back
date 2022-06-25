import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TransactionTitle } from "../transaction/TransactionTitle";
import { AccountPeriodTypeTitle } from "../accountPeriodType/AccountPeriodTypeTitle";
import { UserTitle } from "../user/UserTitle";

export const AccountingPeriodEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateInput label="End" source="end" />
        <DateInput label="Start" source="start" />
        <ReferenceArrayInput
          source="transactions"
          reference="Transaction"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TransactionTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="accountperiodtype.id"
          reference="AccountPeriodType"
          label="Type_id"
        >
          <SelectInput optionText={AccountPeriodTypeTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="users"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
