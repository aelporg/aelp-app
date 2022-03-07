import { PrismaService } from '@aelp-app/models'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { Prisma } from '@aelp-app/models'
import { CreateDiscussionInput } from './types/create-discussion-input-type'
import { User } from '../user/types/user.model'
import { Discussion } from '@aelp-app/models'

@Injectable()
export default class DiscussionService {
  constructor(private prismaService: PrismaService) {}

  getById(id: string): Prisma.Prisma__DiscussionClient<Discussion> {
    return this.prismaService.discussion.findUnique({
      where: { id },
    })
  }

  async createDiscussion(data: CreateDiscussionInput, user: User) {
    return this.prismaService.discussion.create({
      data: {
        ...data,
        user: { connect: { id: user.id } },
      },
    })
  }

  async updateDiscussion(
    discussionId: string,
    input: CreateDiscussionInput,
    user: User
  ) {
    const discussion = await this.prismaService.discussion.findUnique({
      where: { id: discussionId },
    })

    // If discussion user is trying to update
    // that is not created by them, throw an Unauthorized Exception
    if (discussion.userId !== user.id)
      return new UnauthorizedException('This discussion is not created by you.')

    return this.prismaService.discussion.update({
      where: { id: discussionId },
      data: input,
    })
  }

  async deleteDiscussion(discussionId: string, user: User) {
    const discussion = await this.prismaService.discussion.findUnique({
      where: { id: discussionId },
    })

    // If discussion user is trying to delete
    // that is not created by them, throw an Unauthorized Exception
    if (discussion.userId !== user.id)
      return new UnauthorizedException(
        'you are not authorized to delete this discussion'
      )

    return this.prismaService.discussion.delete({
      where: { id: discussionId },
    })
  }

  async vote(discussionId: string, user: User, vote: boolean) {
    const prevVote = await this.prismaService.discussionVote.findUnique({
      where: { discussionId_userId: { discussionId, userId: user.id } },
    })

    if (prevVote) {
      return this.prismaService.discussionVote.update({
        where: { id: prevVote.id },
        data: { isUpvote: vote },
      })
    }

    return this.prismaService.discussionVote.create({
      data: {
        isUpvote: vote,
        user: { connect: { id: user.id } },
        discussion: { connect: { id: discussionId } },
      },
    })
  }

  async getVotes(discussionId: string) {
    return this.prismaService.discussionVote.findMany({
      where: { discussionId },
    })
  }

  async createResponce(discussionId: string, user: User, responce: string) {
    return this.prismaService.discussionResponce.create({
      data: {
        responce: responce,
        user: { connect: { id: user.id } },
        discussion: { connect: { id: discussionId } },
      },
    })
  }

  // async getDiscussions() {
  //   return this.prismaService.discussion
  //     .findMany()
  // }
}
