import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { AccountingPeriodServiceBase } from "./base/accountingPeriod.service.base";

@Injectable()
export class AccountingPeriodService extends AccountingPeriodServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
