import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class CreateCompetitionInput {
  @Field(() => Boolean)
  isPrivate!: boolean

  @Field(() => String, { nullable: true })
  assessmentId?: string
}
