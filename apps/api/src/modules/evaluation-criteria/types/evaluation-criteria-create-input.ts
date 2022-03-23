import { Field, InputType, Int } from '@nestjs/graphql'
import { EvaluationCriteriaType } from '../../../global-types'
import { InputOutputEvaluationCriteriaCreateInput } from './input-output-evaluation-criteria-create-input'

@InputType()
export class EvaluationCriteriaCreateInput {
  @Field(() => String, { nullable: false })
  name!: string

  @Field(() => EvaluationCriteriaType, { nullable: false })
  type!: EvaluationCriteriaType

  @Field(() => Int, { nullable: false })
  totalPoints!: number

  @Field(() => InputOutputEvaluationCriteriaCreateInput, { nullable: true })
  inputOutputEvaluationCriteria?: InputOutputEvaluationCriteriaCreateInput
}
