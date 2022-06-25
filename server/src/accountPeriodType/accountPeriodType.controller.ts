import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AccountPeriodTypeService } from "./accountPeriodType.service";
import { AccountPeriodTypeControllerBase } from "./base/accountPeriodType.controller.base";

@swagger.ApiTags("accountPeriodTypes")
@common.Controller("accountPeriodTypes")
export class AccountPeriodTypeController extends AccountPeriodTypeControllerBase {
  constructor(
    protected readonly service: AccountPeriodTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
