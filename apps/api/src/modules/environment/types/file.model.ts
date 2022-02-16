import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { MultipleFilesProgrammingQuestion } from '../../question/types/multiple-files-programming-question.model'
import { Environment } from './environment.model'
import { FileCount } from './file-count.output'

@ObjectType()
export class File {
  @Field(() => ID, { nullable: false })
  id!: string

  @Field(() => String, { nullable: false })
  name!: string

  @Field(() => String, { nullable: false })
  extension!: string

  @Field(() => String, { nullable: false })
  data!: string

  @Field(() => Date, { nullable: false })
  updatedAt!: Date

  @Field(() => Date, { nullable: false })
  createdAt!: Date

  @Field(() => [MultipleFilesProgrammingQuestion], { nullable: true })
  multipleFilesProgrammingQuestion?: Array<MultipleFilesProgrammingQuestion>

  @Field(() => Environment, { nullable: true })
  environment?: Environment | null

  @Field(() => String, { nullable: true })
  environmentId!: string | null

  @Field(() => FileCount, { nullable: false })
  _count?: FileCount
}
