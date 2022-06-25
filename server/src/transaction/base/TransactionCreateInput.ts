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
import { AccountingPeriodWhereUniqueInput } from "../../accountingPeriod/base/AccountingPeriodWhereUniqueInput";
import { ValidateNested, IsOptional, IsNumber, IsDate } from "class-validator";
import { Type } from "class-transformer";
import { CategoryWhereUniqueInput } from "../../category/base/CategoryWhereUniqueInput";
@InputType()
class TransactionCreateInput {
  @ApiProperty({
    required: false,
    type: () => AccountingPeriodWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AccountingPeriodWhereUniqueInput)
  @IsOptional()
  @Field(() => AccountingPeriodWhereUniqueInput, {
    nullable: true,
  })
  accountingPeriod?: AccountingPeriodWhereUniqueInput | null;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  amount!: number;

  @ApiProperty({
    required: false,
    type: () => CategoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CategoryWhereUniqueInput)
  @IsOptional()
  @Field(() => CategoryWhereUniqueInput, {
    nullable: true,
  })
  category?: CategoryWhereUniqueInput | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  date!: Date;
}
export { TransactionCreateInput };
