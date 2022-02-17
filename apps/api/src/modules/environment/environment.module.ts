import { ModelsModule } from '@aelp-app/models'
import { Module } from '@nestjs/common'
import EnvironmentPermissionResolver from './environment-permission.resolver'
import EnvironmentPermissionService from './environment-permission.service'
import EnvironmentResolver from './environment.resolver'
import { EnvironmentService } from './environment.service'

@Module({
  imports: [ModelsModule],
  providers: [
    EnvironmentService,
    EnvironmentResolver,
    EnvironmentPermissionResolver,
    EnvironmentPermissionService,
  ],
})
export class EnvironmentModule {}
