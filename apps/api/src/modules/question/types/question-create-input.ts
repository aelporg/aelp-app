import { Field, InputType, Int } from '@nestjs/graphql'
import { ProgrammingQuestionType, QuestionType } from '../../../global-types'

@InputType()
export class QuestionCreateInput {
  @Field()
  questionType!: QuestionType

  @Field(() => Int, { nullable: true })
  points?: number

  @Field(() => MultipleChoiceQuestionInput, {
    nullable: true,
  })
  multipleChoiceQuestion?: MultipleChoiceQuestionInput

  @Field(() => ProgrammingQuestionInput, { nullable: true })
  programmingQuestion?: ProgrammingQuestionInput

  @Field(() => String, { nullable: true })
  assessmentId?: string
}

@InputType()
export class MultipleChoiceQuestionInput {
  @Field(() => [String], { nullable: false })
  choices!: string[]

  @Field(() => Int, { nullable: false })
  correctChoiceIndex!: number

  @Field(() => String, { nullable: false })
  description!: string
}

@InputType()
export class ProgrammingQuestionInput {
  @Field(() => ProgrammingQuestionType, { nullable: true })
  programmingQuestionType!: ProgrammingQuestionType

  @Field(() => SingleFileProgrammingQuestionInput, { nullable: true })
  singleFileProgrammingQuestion?: SingleFileProgrammingQuestionInput

  @Field(() => MultipleFileProgrammingQuestionInput, { nullable: true })
  multipleFileProgrammingQuestion?: MultipleFileProgrammingQuestionInput

  @Field(() => String, { nullable: false })
  title!: string

  @Field(() => String, { nullable: false })
  statementMrkdwn!: string
}

@InputType()
export class SingleFileProgrammingQuestionInput {
  @Field(() => String, { nullable: false })
  defaultCode?: string
}

@InputType()
export class MultipleFileProgrammingQuestionInput {}
