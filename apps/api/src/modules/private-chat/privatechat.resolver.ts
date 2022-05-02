import {
  Args,
  Mutation,
  Query,
  Resolver,
} from '@nestjs/graphql'
import { LoggedInUser } from '../../utils/decorators/LoggedInUser'
import PrivateChatService from './privatechat.service'
import { PrivateChat } from './types/privatechat.model'
import { User } from '../user/types/user.model'

@Resolver(() => PrivateChat)
export default class PrivateChatResolver {
  constructor(
    private privateChatService: PrivateChatService
  ) {}

  @Query(() => PrivateChat, { nullable: true })
  async privateChat(@Args('id') id: string) {
    const privateChat = await this.privateChatService.getById(id)

    if (!privateChat) {
      return null
    }

    return privateChat
  }

  @Mutation(() => PrivateChat)
  async createPrivateChat(
    @LoggedInUser() sender: User,
    receiver: User,
  ) {
    return this.privateChatService.createPrivateChat(sender, receiver)
  }
}
