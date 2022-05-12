import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { QuestionType } from '../../../global-types'
import { Assessment } from '../../assessment/types/assessment.model'
import { QuestionAnswer } from '../../assessment/types/question-answer.model'
import { MultipleChoiceQuestion } from './multiple-choice-question.model'
import { ProgrammingQuestion } from './programming-question.model'
import { QuestionCount } from './question-count.output'

@ObjectType()
export class Question {
  @Field(() => ID, { nullable: false })
  id!: string

  @Field(() => QuestionType, { nullable: false })
  questionType!: keyof typeof QuestionType

  @Field(() => Int, { nullable: false })
  points!: number

  @Field(() => MultipleChoiceQuestion, { nullable: true })
  multipleChoiceQuestion?: MultipleChoiceQuestion | null

  @Field(() => String, { nullable: true })
  multipleChoiceQuestionId!: string | null

  @Field(() => ProgrammingQuestion, { nullable: true })
  programmingQuestion?: ProgrammingQuestion | null

  @Field(() => String, { nullable: true })
  programmingQuestionId!: string | null

  @Field(() => Assessment, { nullable: true })
  assessment?: Assessment | null

  @Field(() => String, { nullable: true })
  assessmentId!: string | null

  @Field(() => Date, { nullable: false })
  updatedAt!: Date

  @Field(() => Date, { nullable: false })
  createdAt!: Date

  @Field(() => [QuestionAnswer], { nullable: true })
  answers?: Array<QuestionAnswer>

  @Field(() => QuestionCount, { nullable: false })
  _count?: QuestionCount
}
