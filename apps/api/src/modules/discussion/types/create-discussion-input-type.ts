import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class CreateDiscussionInput {
  @Field()
  title!: string

  @Field()
  description!: string

  @Field(() => [String], { nullable: true })
  tags?: string[]
}
