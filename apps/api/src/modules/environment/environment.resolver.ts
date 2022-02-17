import { UseGuards } from '@nestjs/common'
import {
  Args,
  Mutation,
  Query,
  ResolveField,
  Resolver,
  Root,
} from '@nestjs/graphql'
import { LoggedInUser } from '../../utils/decorators/LoggedInUser'
import { JwtAuthGuard } from '../auth/guards/JwtAuthGuard'
import { User } from '../user/types/user.model'
import { EnvironmentService } from './environment.service'
import { EnvironmentPermission } from './types/environment-permission.model'
import { Environment } from './types/environment.model'
import { File } from './types/file.model'

@Resolver(() => Environment)
export default class EnvironmentResolver {
  constructor(private envirnmentService: EnvironmentService) {}

  @Query(() => [Environment])
  @UseGuards(JwtAuthGuard)
  async envirnoments(@LoggedInUser() user: User) {
    return this.envirnmentService.getUserEnvironments(user)
  }

  @Mutation(() => Environment)
  @UseGuards(JwtAuthGuard)
  async createEnvirnment(
    @LoggedInUser() user: User,
    @Args('questionId') questionId: string
  ) {
    return this.envirnmentService.createEnvirnment(questionId, user)
  }

  @Query(() => Environment)
  @UseGuards(JwtAuthGuard)
  async envirnoment(@Args('id') id: string, @LoggedInUser() user: User) {
    if (await this.envirnmentService.getUserEnvPermission(id, user)) {
      return this.envirnmentService.getById(id)
    }

    return null
  }

  @UseGuards(JwtAuthGuard)
  @ResolveField(() => [File])
  async files(@Root() envirnment: Environment) {
    return this.envirnmentService.getEnviromentFiles(envirnment.id)
  }

  @UseGuards(JwtAuthGuard)
  @ResolveField(() => [EnvironmentPermission])
  async permissions(
    @Root() envirnment: Environment,
  ) {
    return this.envirnmentService.getEnvPermissions(envirnment.id)
  }
}
