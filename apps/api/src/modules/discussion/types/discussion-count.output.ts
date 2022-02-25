import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'

@ObjectType()
export class DiscussionCount {
  @Field(() => Int, { nullable: false })
  responces!: number

  @Field(() => Int, { nullable: false })
  votes!: number

  @Field(() => Int, { nullable: false })
  tags!: number
}
