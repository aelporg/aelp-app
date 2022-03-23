import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { AssessmentType } from '../../../global-types'
import { QuestionCreateInput } from '../../question/types/question-create-input'

@InputType()
export class AssessmentCreateInput {
  @Field(() => String, { nullable: false })
  title!: string

  @Field(() => String, { nullable: false })
  description!: string

  @Field(() => AssessmentType, { nullable: false })
  assessmentType!: AssessmentType

  @Field(() => [QuestionCreateInput], { nullable: false })
  questions!: QuestionCreateInput[]

  @Field(() => Date, { nullable: true })
  startTime?: Date | string

  @Field(() => Date, { nullable: true })
  endTime?: Date | string

  @Field(() => Boolean, { nullable: true })
  submitAfterEnd?: boolean

  @Field(() => Int, { nullable: true })
  totalPoints?: number

  @Field(() => String, { nullable: true })
  classroomId?: string
}
