/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AccountingPeriodListRelationFilter } from "../../accountingPeriod/base/AccountingPeriodListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { FloatFilter } from "../../util/FloatFilter";
import { StringFilter } from "../../util/StringFilter";
@InputType()
class AccountPeriodTypeWhereInput {
  @ApiProperty({
    required: false,
    type: () => AccountingPeriodListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AccountingPeriodListRelationFilter)
  @IsOptional()
  @Field(() => AccountingPeriodListRelationFilter, {
    nullable: true,
  })
  accountingPeriods?: AccountingPeriodListRelationFilter;

  @ApiProperty({
    required: false,
    type: FloatFilter,
  })
  @Type(() => FloatFilter)
  @IsOptional()
  @Field(() => FloatFilter, {
    nullable: true,
  })
  durationInMonths?: FloatFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  name?: StringFilter;
}
export { AccountPeriodTypeWhereInput };
