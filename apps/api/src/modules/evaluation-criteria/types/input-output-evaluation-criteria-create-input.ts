import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
@InputType()
export class InputOutputEvaluationCriteriaCreateInput {
  @Field(() => String, {
    nullable: true,
  })
  inputs?: string

  @Field(() => String, {
    nullable: true,
  })
  outputs?: string
}
