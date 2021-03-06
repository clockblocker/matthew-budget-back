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
import { AccountingPeriodCreateNestedManyWithoutAccountPeriodTypesInput } from "./AccountingPeriodCreateNestedManyWithoutAccountPeriodTypesInput";
import {
  ValidateNested,
  IsOptional,
  IsNumber,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
@InputType()
class AccountPeriodTypeCreateInput {
  @ApiProperty({
    required: false,
    type: () => AccountingPeriodCreateNestedManyWithoutAccountPeriodTypesInput,
  })
  @ValidateNested()
  @Type(() => AccountingPeriodCreateNestedManyWithoutAccountPeriodTypesInput)
  @IsOptional()
  @Field(() => AccountingPeriodCreateNestedManyWithoutAccountPeriodTypesInput, {
    nullable: true,
  })
  accountingPeriods?: AccountingPeriodCreateNestedManyWithoutAccountPeriodTypesInput;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  durationInMonths!: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;
}
export { AccountPeriodTypeCreateInput };
