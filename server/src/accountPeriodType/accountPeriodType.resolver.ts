import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { AccountPeriodTypeResolverBase } from "./base/accountPeriodType.resolver.base";
import { AccountPeriodType } from "./base/AccountPeriodType";
import { AccountPeriodTypeService } from "./accountPeriodType.service";

@graphql.Resolver(() => AccountPeriodType)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class AccountPeriodTypeResolver extends AccountPeriodTypeResolverBase {
  constructor(
    protected readonly service: AccountPeriodTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
