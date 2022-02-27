import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { DiscussionCount } from './discussion-count.output'
import { DiscussionTag } from './discussion-tag.model'

@ObjectType()
export class Discussion {
  @Field(() => ID, { nullable: false })
  id!: string

  @Field(() => String, { nullable: false })
  title!: string

  @Field(() => String, { nullable: true })
  description!: string | null

  @Field(() => Date, { nullable: false })
  updatedAt!: Date

  @Field(() => Date, { nullable: false })
  createdAt!: Date

  @Field(() => [DiscussionTag], { nullable: true })
  tags?: Array<DiscussionTag>

  @Field(() => DiscussionCount, { nullable: false })
  _count?: DiscussionCount
}
