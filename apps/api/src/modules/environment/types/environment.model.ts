import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { EnvironmentCount } from './environment-count.output'
import { EnvironmentPermission } from './environment-permission.model'
import { File } from './file.model'
import { ProgrammingQuestionAnswer } from './programming-question-answer.model'
@ObjectType()
export class Environment {
  @Field(() => ID, { nullable: false })
  id!: string

  @Field(() => [File], { nullable: true })
  files?: Array<File>

  @Field(() => String, { nullable: false })
  scratchPadData!: string

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  submitted!: boolean

  @Field(() => Date, { nullable: false })
  createdAt!: Date

  @Field(() => Date, { nullable: false })
  updatedAt!: Date

  @Field(() => [ProgrammingQuestionAnswer], { nullable: true })
  answers?: Array<ProgrammingQuestionAnswer>

  @Field(() => [EnvironmentPermission], { nullable: true })
  permissions?: Array<EnvironmentPermission>

  @Field(() => EnvironmentCount, { nullable: false })
  _count?: EnvironmentCount
}
