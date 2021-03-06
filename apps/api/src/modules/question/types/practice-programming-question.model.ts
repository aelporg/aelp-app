import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { Difficulty } from '../../../global-types'
import { Classroom } from '../../classroom/types/classroom.model'
import { ProgrammingQuestion } from './programming-question.model'

@ObjectType()
export class PracticeProgrammingQuestion {
  @Field(() => ID, { nullable: false })
  id!: string

  @Field(() => String, { nullable: false })
  questionId!: string

  @Field(() => Difficulty, { nullable: false })
  diffculty!: keyof typeof Difficulty

  @Field(() => ProgrammingQuestion, { nullable: false })
  question?: ProgrammingQuestion

  @Field(() => Classroom, { nullable: true })
  classroom?: Classroom | null

  @Field(() => String, { nullable: true })
  classroomId!: string | null
}
