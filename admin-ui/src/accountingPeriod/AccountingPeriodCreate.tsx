import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TransactionTitle } from "../transaction/TransactionTitle";
import { AccountPeriodTypeTitle } from "../accountPeriodType/AccountPeriodTypeTitle";
import { UserTitle } from "../user/UserTitle";

export const AccountingPeriodCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
