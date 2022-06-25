import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { AccountingPeriodTitle } from "../accountingPeriod/AccountingPeriodTitle";

export const AccountPeriodTypeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
