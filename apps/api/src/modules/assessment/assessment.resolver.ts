import { Args, Mutation, Resolver, Query, ResolveField, Root } from '@nestjs/graphql'
import { LoggedInUser } from '../../utils/decorators/LoggedInUser'
import { User } from '../user/types/user.model'
import AssessmentService from './assessment.service'
import { AssessmentAnswer } from './types/assessment-answer.model'
import { AssessmentCreateInput } from './types/assessment-create.input'
import { Assessment } from './types/assessment.model'

@Resolver(() => Assessment)
export default class AssessmentResolver {
  constructor(private assessmentService: AssessmentService) { }

  @Mutation(() => Assessment)
  async createAssessment(
    @Args('data') data: AssessmentCreateInput,
    @LoggedInUser() user: User
  ) {
    return this.assessmentService.createAssessment(data, user)
  }

  @Query(() => [Assessment])
  async assessments(
    @Args('classroomId') classroomId: string,
    @LoggedInUser() user: User,
  ) {
    return this.assessmentService.getAssessments(classroomId, user)
  }


  @Query(() => Assessment)
  async assessment(
    @Args('id') id: string,
    @LoggedInUser() user: User,
  ) {
    return this.assessmentService.getAssessment(id, user)
  }

  @ResolveField(() => AssessmentAnswer, { nullable: true })
  async answer(@Root() assessment: Assessment, @LoggedInUser() user: User) {
    const result = await this.assessmentService.getAssessmentFindUniqueClient(assessment.id).answers({ where: { userId: user.id } })

    if (result.length < 1)
      return null

    return result[0]
  }

  @ResolveField(() => AssessmentAnswer, { nullable: true })
  async questions(@Root() assessment: Assessment) {
    return this.assessmentService.getAssessmentFindUniqueClient(assessment.id).questions()
  }
}
