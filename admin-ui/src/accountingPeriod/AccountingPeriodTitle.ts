import { AccountingPeriod as TAccountingPeriod } from "../api/accountingPeriod/AccountingPeriod";

export const ACCOUNTINGPERIOD_TITLE_FIELD = "id";

export const AccountingPeriodTitle = (record: TAccountingPeriod): string => {
  return record.id || record.id;
};
