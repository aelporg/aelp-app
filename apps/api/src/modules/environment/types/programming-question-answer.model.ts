import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { QuestionAnswer } from '../../assessment/types/question-answer.model'
import { EvaluationResult } from '../../evaluation-criteria/types/evaluation-result.model'
import { Environment } from './environment.model'
import { ProgrammingQuestionAnswerCount } from './programming-question-answer-count.output'

@ObjectType()
export class ProgrammingQuestionAnswer {
  @Field(() => ID, { nullable: false })
  id!: string

  @Field(() => QuestionAnswer, { nullable: false })
  baseAnswer?: QuestionAnswer

  @Field(() => Environment, { nullable: false })
  envirnment?: Environment

  @Field(() => String, { nullable: false })
  envirnmentId!: string

  @Field(() => [EvaluationResult], { nullable: true })
  evaluationResults?: Array<EvaluationResult>

  @Field(() => ProgrammingQuestionAnswerCount, { nullable: false })
  _count?: ProgrammingQuestionAnswerCount
}
