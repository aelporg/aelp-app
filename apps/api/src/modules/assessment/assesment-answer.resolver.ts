import { PrismaService } from '@aelp-app/models'
import { Resolver, ResolveField, Root } from '@nestjs/graphql'
import { User } from '../user/types/user.model'
import { AssessmentAnswer } from './types/assessment-answer.model'
import { QuestionAnswer } from './types/question-answer.model'

@Resolver(() => AssessmentAnswer)
export default class AssessmentAnswerResolver {
  constructor(private prismaService: PrismaService) { }


  @ResolveField(() => User, { nullable: true })
  async user(@Root() answer: AssessmentAnswer) {
    return this.prismaService.assessmentAnswer.findUnique({
      where: {
        assessmentId_userId: {
          assessmentId: answer.assessmentId,
          userId: answer.userId
        }
      }
    }).user()
  }


  @ResolveField(() => [QuestionAnswer], { nullable: true })
  async questionsSubmissions(@Root() answer: AssessmentAnswer) {
    return this.prismaService.assessmentAnswer.findUnique({
      where: {
        assessmentId_userId: {
          assessmentId: answer.assessmentId,
          userId: answer.userId
        }
      }
    }).questionsSubmissions()
  }
}
