import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { AccountingPeriodResolverBase } from "./base/accountingPeriod.resolver.base";
import { AccountingPeriod } from "./base/AccountingPeriod";
import { AccountingPeriodService } from "./accountingPeriod.service";

@graphql.Resolver(() => AccountingPeriod)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class AccountingPeriodResolver extends AccountingPeriodResolverBase {
  constructor(
    protected readonly service: AccountingPeriodService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
