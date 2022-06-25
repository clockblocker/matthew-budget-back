import { AccountPeriodTypeWhereInput } from "./AccountPeriodTypeWhereInput";
import { AccountPeriodTypeOrderByInput } from "./AccountPeriodTypeOrderByInput";

export type AccountPeriodTypeFindManyArgs = {
  where?: AccountPeriodTypeWhereInput;
  orderBy?: Array<AccountPeriodTypeOrderByInput>;
  skip?: number;
  take?: number;
};
