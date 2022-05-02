import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { ChatMessage } from './chat-message.model'
import { User } from '../../user/types/user.model'

@ObjectType()
export class PrivateChat {
  @Field(() => ID, { nullable: false })
  id!: string

  @Field(() => [User], { nullable: false })
  users: Array<User>

  @Field(() => [ChatMessage], { nullable: false })
  messages: Array<ChatMessage>
}
