import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { AssessmentCount } from './assessment-count.output'
import { Competition } from '../../competition/types/competition.model'
import { Classroom } from '../../classroom/types/classroom.model'
import { AssessmentType } from '../../../global-types/assessment-type.enum'
import { Question } from '../../question/types/question.model'
import { AssessmentAnswer } from './assessment-answer.model'

@ObjectType()
export class Assessment {
  @Field(() => ID, { nullable: false })
  id!: string

  @Field(() => String, { nullable: false })
  title!: string

  @Field(() => String, { nullable: false })
  description!: string

  @Field(() => AssessmentType, { nullable: false })
  assessmentType!: keyof typeof AssessmentType

  @Field(() => [Question], { nullable: true })
  questions?: Array<Question>

  @Field(() => Date, { nullable: false })
  startTime!: Date

  @Field(() => Date, { nullable: true })
  endTime!: Date | null

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  submitAfterEnd!: boolean

  @Field(() => Int, { nullable: false, defaultValue: 0 })
  totalPoints!: number

  @Field(() => Classroom, { nullable: true })
  classroom?: Classroom | null

  @Field(() => String, { nullable: true })
  classroomId!: string | null

  @Field(() => Date, { nullable: false })
  updatedAt!: Date

  @Field(() => Date, { nullable: false })
  createdAt!: Date

  @Field(() => [AssessmentAnswer], { nullable: true })
  answers?: Array<AssessmentAnswer>

  @Field(() => Competition, { nullable: true })
  competition?: Competition | null

  @Field(() => String, { nullable: true })
  competitionId!: string | null

  @Field(() => AssessmentCount, { nullable: false })
  _count?: AssessmentCount
}
