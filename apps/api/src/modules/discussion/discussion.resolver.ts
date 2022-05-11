import {
  Args,
  Int,
  Mutation,
  Query,
  ResolveField,
  Resolver,
  Root,
} from '@nestjs/graphql'
import { LoggedInUser } from '../../utils/decorators/LoggedInUser'
import DiscussionService from './discussion.service'
import { CreateDiscussionInput } from './types/create-discussion-input-type'
import { Discussion } from './types/discussion.model'
import { User } from '../user/types/user.model'
import SkipAuth from '../auth/helpers/SkipAuth'
import { DiscussionTag } from './types/discussion-tag.model'
import { DiscussionVote } from './types/discussion-vote.model'
import { DiscussionResponce } from "./types/discussion-responce.model"

@Resolver(() => Discussion)
export default class DiscussionResolver {
  constructor(
    private discussionService: DiscussionService
  ) { }

  @SkipAuth()
  @Query(() => [Discussion])
  async discussions(
    @Args('take', { type: () => Int, nullable: true, }) take?: number,
  ) {
    return this.discussionService.getAll({
      take,
    })
  }

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
    @Args('data') data: CreateDiscussionInput,
  ) {
    return this.discussionService.createDiscussion(data, user)
  }

  @Mutation(() => Discussion)
  async createDiscussionResponse(
    @LoggedInUser() user: User,
    @Args('response') response: string,
    @Args('discussionId') discussionId: string
  ) {
    return this.discussionService.createResponce(discussionId, user, response)
  }


  @Mutation(() => Discussion)
  async updateDiscussion(
    @Args('discussionId') discussionId: string,
    @LoggedInUser() user: User,
    @Args('data') data: CreateDiscussionInput
  ) {
    return this.discussionService.updateDiscussion(discussionId, data, user)
  }

  @Mutation(() => Discussion)
  async deleteDiscussion(
    @Args('discussionId') discussionId: string,
    @LoggedInUser() user: User
  ) {
    return this.discussionService.deleteDiscussion(discussionId, user)
  }

  @Mutation(() => DiscussionVote)
  async vote(
    @Args('id') id: string,
    @Args('isUpvote', { nullable: true }) isUpvote: boolean | null,
    @LoggedInUser() user: User,
  ) {
    return this.discussionService.vote(id, user, isUpvote)
  }

  @ResolveField(() => [DiscussionTag])
  async tags(@Root() discussion: Discussion) {
    return this.discussionService.getById(discussion.id).tags()
  }

  @ResolveField(() => Int)
  async votesCount(@Root() discussion: Discussion) {
    const votes = await this.discussionService.getById(discussion.id).votes({})

    return votes.reduce((acc, vote) => {
      if (vote.isUpvote) {
        return acc + 1
      }
      else {
        return acc - 1
      }
    }, 0)
  }

  @ResolveField(() => User)
  async user(@Root() discussion: Discussion) {
    return this.discussionService.getById(discussion.id).user()
  }

  @ResolveField(() => [DiscussionVote])
  async votes(@Root() discussion: Discussion) {
    return this.discussionService.getById(discussion.id).votes({

    })
  }

  @ResolveField(() => [DiscussionResponce])
  async responces(@Root() discussion: Discussion) {
    return this.discussionService.getById(discussion.id).responces()
  }
}
