import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { Language } from '../../language/types/language.model'
import { MultipleFilesProgrammingQuestionCount } from './multiple-files-programming-question-count.output'
import { ProgrammingQuestion } from './programming-question.model'

@ObjectType()
export class MultipleFilesProgrammingQuestion {
  @Field(() => ID, { nullable: false })
  id!: string

  @Field(() => Language, { nullable: false })
  language?: Language

  @Field(() => ProgrammingQuestion, { nullable: true })
  baseProgrammingQuestion?: ProgrammingQuestion | null

  // TODO: Import modal and uncomment this
  // @Field(() => [File], {nullable:true})
  // defaultFiles?: Array<File>;

  @Field(() => String, { nullable: false })
  languageId!: string

  @Field(() => MultipleFilesProgrammingQuestionCount, { nullable: false })
  _count?: MultipleFilesProgrammingQuestionCount
}
