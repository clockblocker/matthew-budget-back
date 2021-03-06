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
import { IsString, ValidateNested, IsOptional } from "class-validator";
import { TransactionCreateNestedManyWithoutCategoriesInput } from "./TransactionCreateNestedManyWithoutCategoriesInput";
import { Type } from "class-transformer";
@InputType()
class CategoryCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  label!: string;

  @ApiProperty({
    required: false,
    type: () => TransactionCreateNestedManyWithoutCategoriesInput,
  })
  @ValidateNested()
  @Type(() => TransactionCreateNestedManyWithoutCategoriesInput)
  @IsOptional()
  @Field(() => TransactionCreateNestedManyWithoutCategoriesInput, {
    nullable: true,
  })
  transactions?: TransactionCreateNestedManyWithoutCategoriesInput;
}
export { CategoryCreateInput };
