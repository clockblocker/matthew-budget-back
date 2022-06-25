import { Module } from "@nestjs/common";
import { AccountPeriodTypeModuleBase } from "./base/accountPeriodType.module.base";
import { AccountPeriodTypeService } from "./accountPeriodType.service";
import { AccountPeriodTypeController } from "./accountPeriodType.controller";
import { AccountPeriodTypeResolver } from "./accountPeriodType.resolver";

@Module({
  imports: [AccountPeriodTypeModuleBase],
  controllers: [AccountPeriodTypeController],
  providers: [AccountPeriodTypeService, AccountPeriodTypeResolver],
  exports: [AccountPeriodTypeService],
})
export class AccountPeriodTypeModule {}
