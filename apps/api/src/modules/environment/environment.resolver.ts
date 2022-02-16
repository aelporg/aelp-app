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
import { Environment } from './types/environment.model'

@Resolver(() => Environment)
export default class EnvironmentResolver {
  constructor(private envirnmentService: EnvironmentService) {}

  @Query(() => [Environment])
  @UseGuards(JwtAuthGuard)
  async envirnoments(@LoggedInUser() user: User) {
    return this.envirnmentService.getUserEnvironments(user)
  }

  @Mutation(() => Environment)
  async createEnvirnment(
    @LoggedInUser() user: User,
    @Args('assessmentId') assessmentId: string
  ) {
    return this.envirnmentService
  }


  @UseGuards(JwtAuthGuard)
  @ResolveField()
  async files(@Root() envirnment: Environment) {
    return this.envirnmentService.getEnviromentFiles(envirnment.id)
  }
}
