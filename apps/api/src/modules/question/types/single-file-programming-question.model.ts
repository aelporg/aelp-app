import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { Language } from '../../language/types/language.model'
import { ProgrammingQuestion } from './programming-question.model'
import { SingleFileProgrammingQuestionCount } from './single-file-programming-question-count.output'

@ObjectType()
export class SingleFileProgrammingQuestion {
  @Field(() => ID, { nullable: false })
  id!: string

  @Field(() => ProgrammingQuestion, { nullable: true })
  baseProgrammingQuestion?: ProgrammingQuestion | null

  @Field(() => String, { nullable: false })
  defaultCode!: string

  @Field(() => [Language], { nullable: true })
  allowedLanguages?: Array<Language>

  @Field(() => SingleFileProgrammingQuestionCount, { nullable: false })
  _count?: SingleFileProgrammingQuestionCount
}
