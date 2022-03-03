import {
  Args,
  ID,
  Mutation,
  ResolveField,
  Resolver,
  Root,
} from '@nestjs/graphql'
import { PrismaService } from '@aelp-app/models'
import { File } from './types/file.model'
import { Language } from '../language/types/language.model'
import { LoggedInUser } from '../../utils/decorators/LoggedInUser'
import { User } from '../user/types/user.model'
import { EnvironmentPermissionLevel } from '../../global-types/environment-permission-level.enum'
import { UnauthorizedException } from '@nestjs/common'

@Resolver(() => File)
export default class FileResolver {
  constructor(private prismaService: PrismaService) {}

  @Mutation(() => File)
  async updateFile(
    @LoggedInUser() user: User,
    @Args('id', { type: () => ID }) id: string,
    @Args('data') content: string
  ) {
    const file = await this.prismaService.file.findUnique({
      where: { id },
      include: { environment: { include: { permissions: true } } },
    })

    const hasPermission = file.environment.permissions.some(
      ({ permission, userId }) => {
        if (
          userId === user.id &&
          (permission === EnvironmentPermissionLevel.OWNER ||
            permission === EnvironmentPermissionLevel.READ_WRITE)
        ) {
          return true
        }

        return false
      }
    )

    if (!hasPermission) {
      throw new UnauthorizedException(
        'You do not have permission to edit this file'
      )
    }

    return this.prismaService.file.update({
      where: { id },
      data: { data: content },
    })
  }

  @ResolveField(() => Language)
  async language(@Root() file: File) {
    return this.prismaService.file
      .findUnique({
        where: { id: file.id },
      })
      .language()
  }
}
