import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { Environment } from '../../environment/types/environment.model'
import { File } from '../../environment/types/file.model'
import { MultipleFilesProgrammingQuestion } from '../../question/types/multiple-files-programming-question.model'
import { LanguageCount } from './language-count.output'


@ObjectType()
export class Language {
  @Field(() => ID, { nullable: false })
  id!: string

  @Field(() => String, { nullable: false })
  name!: string

  @Field(() => String, { nullable: false })
  extension!: string

  @Field(() => Date, { nullable: false })
  createdAt!: Date

  @Field(() => Date, { nullable: false })
  updatedAt!: Date

  @Field(() => String, { nullable: false, defaultValue: 'main.${extension}' })
  defaultFileName!: string

  @Field(() => String, { nullable: false, defaultValue: '${extension}' })
  editorConfigName!: string

  @Field(() => String, { nullable: false, defaultValue: '' })
  defaultCode!: string

  @Field(() => String, { nullable: false, defaultValue: '' })
  compilerPackageName!: string

  @Field(() => String, { nullable: false, defaultValue: '' })
  version!: string

  @Field(() => [File], { nullable: true })
  File?: Array<File>

  @Field(() => [Environment], { nullable: true })
  Environment?: Array<Environment>

  @Field(() => [MultipleFilesProgrammingQuestion], { nullable: true })
  MultipleFilesProgrammingQuestion?: Array<MultipleFilesProgrammingQuestion>

  // @Field(() => [SingleFileProgrammingQuestionDefaultCode], { nullable: true })
  // SingleFileProgrammingQuestionDefaultCode?: Array<SingleFileProgrammingQuestionDefaultCode>

  @Field(() => LanguageCount, { nullable: false })
  _count?: LanguageCount
}
