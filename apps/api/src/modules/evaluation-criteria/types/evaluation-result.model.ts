import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { Float } from '@nestjs/graphql'
import { EvaluationCriteria } from './evaluation-criteria.model'

@ObjectType()
export class EvaluationResult {
  @Field(() => ID, { nullable: false })
  id!: string

  @Field(() => EvaluationCriteria, { nullable: false })
  evaluationCriteria?: EvaluationCriteria

  @Field(() => String, { nullable: false })
  evaluationCriteriaId!: string

  @Field(() => Float, { nullable: false })
  evaulationPoints!: number

  // TODO: Uncomment when the following issue is resolved:
  // @Field(() => InputOutputEvaluationResult, {nullable:true})
  // inputOutputEvaulationResult?: InputOutputEvaluationResult | null;

  @Field(() => String, { nullable: true })
  inputOutputEvaluationResultId!: string | null

  @Field(() => Date, { nullable: false })
  updatedAt!: Date

  @Field(() => Date, { nullable: false })
  createdAt!: Date

  // TODO: Uncomment when imported modal
  // @Field(() => ProgrammingQuestionAnswer, {nullable:false})
  // programmingQuestionAnswer?: ProgrammingQuestionAnswer;

  @Field(() => String, { nullable: false })
  programmingQuestionAnswerId!: string
}
