import {
  Args,
  ID,
  Mutation,
  Query,
  ResolveField,
  Resolver,
  Root,
  Subscription,
} from '@nestjs/graphql'
import { PubSub } from 'graphql-subscriptions'
import { LoggedInUser } from '../../utils/decorators/LoggedInUser'
import { QuestionAnswer } from '../assessment/types/question-answer.model'
import { Language } from '../language/types/language.model'
import { User } from '../user/types/user.model'
import { EnvironmentService } from './environment.service'
import { EnvironmentPermission } from './types/environment-permission.model'
import { Environment } from './types/environment.model'
import { File } from './types/file.model'
import { RunCodeOutput, RunTestCasesOutput } from './types/run-code.output'

const pubSub = new PubSub()

@Resolver(() => Environment)
export default class EnvironmentResolver {
  constructor(
    private environmentService: EnvironmentService,
  ) { }

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

  @Mutation(() => Environment)
  async changeLanguage(
    @Args('id', { type: () => ID }) id: string,
    @Args('languageId', { type: () => ID }) languageId: string,
    @LoggedInUser() user: User
  ) {
    return this.environmentService.changeLanguage(id, languageId, user)
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

  @Mutation(() => RunCodeOutput)
  async runCode(@Args('id', { type: () => ID }) id: string, @Args('input', { nullable: true }) input: string) {
    return this.environmentService.runCode(id, input)
  }

  @Mutation(() => Boolean)
  async submitEnv(@Args('id', { type: () => ID }) id: string) {
    return this.environmentService.submit(id)
  }


  @Mutation(() => [RunTestCasesOutput])
  async runTestCases(@Args('id', { type: () => ID }) id: string) {
    return this.environmentService.runTestCases(id)
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
  async answer(@Root() envirnment: Environment) {
    return this.environmentService.getById(envirnment.id).answer()
  }

  @ResolveField(() => Language)
  async language(@Root() envirnment: Environment) {
    return this.environmentService.getById(envirnment.id).language()
  }
}
