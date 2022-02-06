import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { ProgrammingQuestionCount } from './programming-question-count.output'
import { SingleFileProgrammingQuestion } from './single-file-programming-question.model'
import { MultipleFilesProgrammingQuestion } from './multiple-files-programming-question.model'
import { Question } from './question.model'
import { EvaluationCriteria } from '../../evaluation-criteria/types/evaluation-criteria.model'
import { PracticeProgrammingQuestion } from './practice-programming-question.model'
import { ProgrammingQuestionType } from '../../../global-types'

@ObjectType()
export class ProgrammingQuestion {
  @Field(() => ID, { nullable: false })
  id!: string

  @Field(() => String, { nullable: false })
  title!: string

  @Field(() => String, { nullable: false })
  statementMrkdwn!: string

  @Field(() => String, { nullable: false })
  statementCompiled!: string

  @Field(() => ProgrammingQuestionType, { nullable: false })
  programmingQuestionType!: keyof typeof ProgrammingQuestionType

  @Field(() => SingleFileProgrammingQuestion, { nullable: true })
  singleFileProgrammingQuestion?: SingleFileProgrammingQuestion | null

  @Field(() => String, { nullable: true })
  singleFileProgrammingQuestionId!: string | null

  @Field(() => MultipleFilesProgrammingQuestion, { nullable: true })
  multipleFilesProgrammingQuestion?: MultipleFilesProgrammingQuestion | null

  @Field(() => String, { nullable: true })
  multipleFilesProgrammingQuestionId!: string | null

  @Field(() => Question, { nullable: true })
  baseQuestion?: Question | null

  @Field(() => [EvaluationCriteria], { nullable: true })
  evaluationCriterias?: Array<EvaluationCriteria>

  @Field(() => PracticeProgrammingQuestion, { nullable: true })
  practice?: PracticeProgrammingQuestion | null

  @Field(() => Date, { nullable: false })
  updatedAt!: Date

  @Field(() => Date, { nullable: false })
  createdAt!: Date

  @Field(() => ProgrammingQuestionCount, { nullable: false })
  _count?: ProgrammingQuestionCount
}
