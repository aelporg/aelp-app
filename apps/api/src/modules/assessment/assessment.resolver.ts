import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { boolean } from 'joi'
import { LoggedInUser } from '../../utils/decorators/LoggedInUser'
import { User } from '../user/types/user.model'
import AssessmentService from './assessment.service'
import { AssessmentCreateInput } from './types/assessment-create.input'
import { Assessment } from './types/assessment.model'

@Resolver(() => Assessment)
export default class AssessmentResolver {
  constructor(private assessmentService: AssessmentService) {}

  @Mutation(() => Assessment)
  async createAssessment(
    @Args('data') data: AssessmentCreateInput,
    @LoggedInUser() user: User
  ) {
    return this.assessmentService.createAssessment(data, user)
  }

}
