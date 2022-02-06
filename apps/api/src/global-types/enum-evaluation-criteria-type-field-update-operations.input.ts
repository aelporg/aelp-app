import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { EvaluationCriteriaType } from './evaluation-criteria-type.enum'

@InputType()
export class EnumEvaluationCriteriaTypeFieldUpdateOperationsInput {
  @Field(() => EvaluationCriteriaType, { nullable: true })
  set?: keyof typeof EvaluationCriteriaType
}
