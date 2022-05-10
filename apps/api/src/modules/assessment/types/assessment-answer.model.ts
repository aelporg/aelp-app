import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { QuestionAnswer } from '../../question/types/question-answer.model'
import { Int } from '@nestjs/graphql'
import { Assessment } from './assessment.model'
import { User } from '../../user/types/user.model'
import { AssessmentAnswerCount } from './assessment-answer-count.output'

@ObjectType()
export class AssessmentAnswer {
  @Field(() => User, { nullable: false })
  user?: User

  @Field(() => String, { nullable: false })
  userId!: string

  @Field(() => Assessment, { nullable: false })
  assessment?: Assessment

  @Field(() => String, { nullable: false })
  assessmentId!: string

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  reviewed!: boolean

  @Field(() => [QuestionAnswer], { nullable: true })
  questionsSubmissions?: Array<QuestionAnswer>

  @Field(() => Date, { nullable: true })
  submittedAt!: Date | null

  @Field(() => Date, { nullable: false })
  updatedAt!: Date

  @Field(() => Date, { nullable: false })
  createdAt!: Date

  @Field(() => Int, { nullable: true })
  recPoints?: number

  @Field(() => AssessmentAnswerCount, { nullable: false })
  _count?: AssessmentAnswerCount
}
