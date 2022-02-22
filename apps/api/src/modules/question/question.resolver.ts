import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { LoggedInUser } from '../../utils/decorators/LoggedInUser'
import { User } from '../user/types/user.model'
import QuestionService from './question.service'
import { QuestionCreateInput } from './types/question-create-input'
import { Question } from './types/question.model'

@Resolver(() => Question)
export default class QuestionResolver {
  constructor(private questionService: QuestionService) {}

  @Mutation(() => Question)
  async createQuestion(@Args('data') data: QuestionCreateInput, @LoggedInUser() user: User) {
    return this.questionService.createQuestion(data, user)
  }
}
