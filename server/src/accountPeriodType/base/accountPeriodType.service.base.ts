/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, AccountPeriodType, AccountingPeriod } from "@prisma/client";

export class AccountPeriodTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.AccountPeriodTypeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountPeriodTypeFindManyArgs>
  ): Promise<number> {
    return this.prisma.accountPeriodType.count(args);
  }

  async findMany<T extends Prisma.AccountPeriodTypeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountPeriodTypeFindManyArgs>
  ): Promise<AccountPeriodType[]> {
    return this.prisma.accountPeriodType.findMany(args);
  }
  async findOne<T extends Prisma.AccountPeriodTypeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountPeriodTypeFindUniqueArgs>
  ): Promise<AccountPeriodType | null> {
    return this.prisma.accountPeriodType.findUnique(args);
  }
  async create<T extends Prisma.AccountPeriodTypeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountPeriodTypeCreateArgs>
  ): Promise<AccountPeriodType> {
    return this.prisma.accountPeriodType.create<T>(args);
  }
  async update<T extends Prisma.AccountPeriodTypeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountPeriodTypeUpdateArgs>
  ): Promise<AccountPeriodType> {
    return this.prisma.accountPeriodType.update<T>(args);
  }
  async delete<T extends Prisma.AccountPeriodTypeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountPeriodTypeDeleteArgs>
  ): Promise<AccountPeriodType> {
    return this.prisma.accountPeriodType.delete(args);
  }

  async findAccountingPeriods(
    parentId: string,
    args: Prisma.AccountingPeriodFindManyArgs
  ): Promise<AccountingPeriod[]> {
    return this.prisma.accountPeriodType
      .findUnique({
        where: { id: parentId },
      })
      .accountingPeriods(args);
  }
}
