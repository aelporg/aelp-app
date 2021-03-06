import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { EvaluationCriteriaType } from '../../../global-types/evaluation-criteria-type.enum'
import { ProgrammingQuestion } from '../../question/types/programming-question.model'
import { EvaluationCriteriaCount } from './evaluation-criteria-count.output'
import { EvaluationResult } from './evaluation-result.model'
import { InputOutputEvaluationCriteria } from './input-output-evaluation-criteria.model'

@ObjectType()
export class EvaluationCriteria {
  @Field(() => ID, { nullable: false })
  id!: string

  @Field(() => String, { nullable: false })
  name!: string

  @Field(() => EvaluationCriteriaType, { nullable: false })
  type!: keyof typeof EvaluationCriteriaType

  @Field(() => Int, { nullable: false })
  totalPoints!: number

  @Field(() => InputOutputEvaluationCriteria, { nullable: true })
  inputOutputEvalCrit?: InputOutputEvaluationCriteria | null;

  @Field(() => String, { nullable: true })
  inputOutputEvalCritId!: string | null

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  requiredToPass!: boolean

  @Field(() => ProgrammingQuestion, { nullable: false })
  programmingQuestion?: ProgrammingQuestion

  @Field(() => String, { nullable: false })
  programmingQuestionId!: string

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  hidden!: boolean

  @Field(() => Date, { nullable: false })
  updatedAt!: Date

  @Field(() => Date, { nullable: false })
  createdAt!: Date

  @Field(() => [EvaluationResult], { nullable: true })
  results?: Array<EvaluationResult>

  @Field(() => EvaluationCriteriaCount, { nullable: false })
  _count?: EvaluationCriteriaCount
}
