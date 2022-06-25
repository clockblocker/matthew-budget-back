import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { AccountPeriodTypeServiceBase } from "./base/accountPeriodType.service.base";

@Injectable()
export class AccountPeriodTypeService extends AccountPeriodTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
