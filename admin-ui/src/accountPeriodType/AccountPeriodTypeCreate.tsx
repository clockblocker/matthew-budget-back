import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { AccountingPeriodTitle } from "../accountingPeriod/AccountingPeriodTitle";

export const AccountPeriodTypeCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="accountingPeriods"
          reference="AccountingPeriod"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AccountingPeriodTitle} />
        </ReferenceArrayInput>
        <NumberInput label="Duration in months" source="durationInMonths" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
