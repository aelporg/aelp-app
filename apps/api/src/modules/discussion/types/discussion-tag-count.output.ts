import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'

@ObjectType()
export class DiscussionTagCount {
  @Field(() => Int, { nullable: false })
  discussions!: number
}
