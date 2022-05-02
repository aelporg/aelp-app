import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'

@ObjectType()
export class ChatMessage {
  @Field(() => ID, { nullable: false })
  id!: string

  @Field(() => String, { nullable: false })
  message!: string

  @Field(() => Date, { nullable: false })
  updatedAt!: Date

  @Field(() => Date, { nullable: false })
  createdAt!: Date
}
