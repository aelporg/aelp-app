import {
  Args,
  Mutation,
  Query,
  ResolveField,
  Resolver,
  Root,
  Subscription,
} from '@nestjs/graphql'
import { PubSub } from 'graphql-subscriptions'
import { LoggedInUser } from '../../utils/decorators/LoggedInUser'
import { QuestionAnswer } from '../question/types/question-answer.model'
import { User } from '../user/types/user.model'
import { EnvironmentService } from './environment.service'
import { EnvironmentPermission } from './types/environment-permission.model'
import { Environment } from './types/environment.model'
import { File } from './types/file.model'

const pubSub = new PubSub()

@Resolver(() => Environment)
export default class EnvironmentResolver {
  constructor(private environmentService: EnvironmentService) {}

  @Query(() => [Environment])
  async envirnoments(@LoggedInUser() user: User) {
    return this.environmentService.getUserEnvironments(user)
  }

  @Mutation(() => Environment)
  async createEnvironment(
    @LoggedInUser() user: User,
    @Args('questionId') questionId: string
  ) {
    return this.environmentService.createEnvirnment(questionId, user)
  }

  @Subscription(() => String)
  async someUpdate() {
    return pubSub.asyncIterator('someUpdate')
  }

  @Query(() => Environment, { nullable: true })
  async envirnoment(@Args('id') id: string, @LoggedInUser() user: User) {
    if (await this.environmentService.getUserEnvPermission(id, user)) {
      return this.environmentService.getById(id)
    }
    return null
  }

  @ResolveField(() => [File])
  async files(@Root() envirnment: Environment) {
    return this.environmentService.getEnviromentFiles(envirnment.id)
  }

  @ResolveField(() => [EnvironmentPermission])
  async permissions(@Root() envirnment: Environment) {
    return this.environmentService.getEnvPermissions(envirnment.id)
  }

  @ResolveField(() => [QuestionAnswer])
  async answers(@Root() envirnment: Environment) {
    return this.environmentService.getById(envirnment.id).answers()
  }
}
