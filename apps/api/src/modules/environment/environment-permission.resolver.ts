import { ResolveField, Resolver, Root } from '@nestjs/graphql'
import EnvironmentPermissionService from './environment-permission.service'
import { EnvironmentPermission } from './types/environment-permission.model'

@Resolver(() => EnvironmentPermission)
export default class EnvironmentPermissionResolver {
  constructor(private envPerService: EnvironmentPermissionService) {}

  @ResolveField()
  async user(@Root() environmentPermission: EnvironmentPermission) {
    return this.envPerService.getUser(environmentPermission)
  }
}
