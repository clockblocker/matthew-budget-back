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
import { AccountPeriodTypeWhereInput } from "./AccountPeriodTypeWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AccountPeriodTypeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AccountPeriodTypeWhereInput,
  })
  @ValidateNested()
  @Type(() => AccountPeriodTypeWhereInput)
  @IsOptional()
  @Field(() => AccountPeriodTypeWhereInput, {
    nullable: true,
  })
  every?: AccountPeriodTypeWhereInput;

  @ApiProperty({
    required: false,
    type: () => AccountPeriodTypeWhereInput,
  })
  @ValidateNested()
  @Type(() => AccountPeriodTypeWhereInput)
  @IsOptional()
  @Field(() => AccountPeriodTypeWhereInput, {
    nullable: true,
  })
  some?: AccountPeriodTypeWhereInput;

  @ApiProperty({
    required: false,
    type: () => AccountPeriodTypeWhereInput,
  })
  @ValidateNested()
  @Type(() => AccountPeriodTypeWhereInput)
  @IsOptional()
  @Field(() => AccountPeriodTypeWhereInput, {
    nullable: true,
  })
  none?: AccountPeriodTypeWhereInput;
}
export { AccountPeriodTypeListRelationFilter };
