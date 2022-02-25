import { UseGuards } from '@nestjs/common'
import {
  Args,
  Mutation,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql'
import { LoggedInUser } from '../../utils/decorators/LoggedInUser'
import DiscussionService from './discussion.service'
import { CreateDiscussionInput } from './types/create-discussion-input-type'
import { PrismaService } from '@aelp-app/models'
import { Discussion } from './types/discussion.model'
import { User } from '../user/types/user.model'

@Resolver(() => Discussion)
export default class DiscussionResolver {
  constructor(
    private prismaService: PrismaService,
    private discussionService: DiscussionService
  ) {}

  @Query(() => Discussion, { nullable: true })
  async discussion(@Args('id') id: string) {
    const discussion = await this.discussionService.getById(id)

    if (!discussion) {
      return null
    }

    return discussion
  }

  @Mutation(() => Discussion)
  async createDiscussion(
    @LoggedInUser() user: User,
    @Args('data') data: CreateClassroomInput,
  ) {
    return this.discussionService.createDiscussion(data, user)
  }

  @Mutation(() => Discussion)
  async updateDiscussion(
    @LoggedInUser() user: User,
    @Args('data') data: CreateDiscussionInput
  ) {
    return this.discussionService.updateDiscussion(data, user)
  }

  @Mutation(() => Discussion)
  async deleteDiscussion(
    @LoggedInUser() user: User,
    @Args('data') data: CreateDiscussionInput
  ) {
    return this.discussionService.deleteDiscussion(data.discussionId, user)
  }

  @ResolveField(() => [Discussion])
  async discussions() {
    return this.discussionService.getDiscussions()
  }

}
