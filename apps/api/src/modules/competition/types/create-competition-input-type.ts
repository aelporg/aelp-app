import { InputType, Field } from '@nestjs/graphql'
import { Assessment } from '../../assessment/types/assessment.model'

@InputType()
export class CreateCompetitionInput {
  @Field()
  isPrivate!: string

  @Field({ nullable: true })
  assessment?: Assessment
}
