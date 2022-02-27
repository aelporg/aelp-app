import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { Discussion } from './discussion.model'
import { DiscussionTagCount } from './discussion-tag-count.output'

@ObjectType()
export class DiscussionTag {
  @Field(() => ID, { nullable: false })
  id!: string

  @Field(() => String, { nullable: false })
  name!: string

  @Field(() => Date, { nullable: false })
  updatedAt!: Date

  @Field(() => Date, { nullable: false })
  createdAt!: Date

  @Field(() => [Discussion], { nullable: true })
  discussions?: Array<Discussion>

  @Field(() => DiscussionTagCount, { nullable: false })
  _count?: DiscussionTagCount
}
