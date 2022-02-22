import { PrismaService } from '@aelp-app/models'
import { ResolveField, Resolver, Root } from '@nestjs/graphql'
import { ProgrammingQuestionAnswer } from '../environment/types/programming-question-answer.model'
import { QuestionAnswer } from './types/question-answer.model'

@Resolver(() => ProgrammingQuestionAnswer)
export default class ProgrammingQuestionAnswerResolver {
  constructor(private prismaService: PrismaService) {}

  @ResolveField(() => QuestionAnswer)
  async baseAnswer(@Root() answer: ProgrammingQuestionAnswer) {
    return this.prismaService.programmingQuestionAnswer
      .findUnique({ where: { id: answer.id } })
      .baseAnswer()
  }
}
