import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AccountingPeriodService } from "./accountingPeriod.service";
import { AccountingPeriodControllerBase } from "./base/accountingPeriod.controller.base";

@swagger.ApiTags("accountingPeriods")
@common.Controller("accountingPeriods")
export class AccountingPeriodController extends AccountingPeriodControllerBase {
  constructor(
    protected readonly service: AccountingPeriodService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
