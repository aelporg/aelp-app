import { PrismaService } from '@aelp-app/models'
import { Injectable } from '@nestjs/common'
import { EnvironmentPermission } from './types/environment-permission.model'

@Injectable()
export default class EnvironmentPermissionService {
  constructor(private prismaService: PrismaService) {}

  async getUser(environmentPermission: EnvironmentPermission) {
    return this.prismaService.environmentPermission
      .findUnique({
        where: {
          environmentId_userId: {
            environmentId: environmentPermission.environmentId,
            userId: environmentPermission.userId,
          },
        },
      })
      .user()
  }
}
