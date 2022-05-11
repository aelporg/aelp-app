import {
  ResolveField,
  Resolver,
  Root,
} from '@nestjs/graphql'
import { User } from '../user/types/user.model'
import { PrismaService } from '@aelp-app/models'
import { DiscussionResponce } from './types/discussion-responce.model'

@Resolver(() => DiscussionResponce)
export default class DiscussionResponseResolver {
  constructor(
    private prismaService: PrismaService
  ) { }

  @ResolveField(() => User)
  async user(@Root() response: DiscussionResponce) {
    return this.prismaService.discussionResponce.findUnique({
      where: {
        id: response.id,
      }
    }).user()
  }
}
