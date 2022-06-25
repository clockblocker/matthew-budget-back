import { AccountPeriodType as TAccountPeriodType } from "../api/accountPeriodType/AccountPeriodType";

export const ACCOUNTPERIODTYPE_TITLE_FIELD = "name";

export const AccountPeriodTypeTitle = (record: TAccountPeriodType): string => {
  return record.name || record.id;
};
