/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { AccountingPeriodWhereUniqueInput } from "../../accountingPeriod/base/AccountingPeriodWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class AccountingPeriodUpdateManyWithoutAccountPeriodTypesInput {
  @Field(() => [AccountingPeriodWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AccountingPeriodWhereUniqueInput],
  })
  connect?: Array<AccountingPeriodWhereUniqueInput>;

  @Field(() => [AccountingPeriodWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AccountingPeriodWhereUniqueInput],
  })
  disconnect?: Array<AccountingPeriodWhereUniqueInput>;

  @Field(() => [AccountingPeriodWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AccountingPeriodWhereUniqueInput],
  })
  set?: Array<AccountingPeriodWhereUniqueInput>;
}
export { AccountingPeriodUpdateManyWithoutAccountPeriodTypesInput };
