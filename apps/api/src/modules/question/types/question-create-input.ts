import { Field, InputType, Int } from '@nestjs/graphql'
import { ProgrammingQuestionType, QuestionType } from '../../../global-types'
import { EvaluationCriteriaCreateInput } from '../../evaluation-criteria/types/evaluation-criteria-create-input'

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
export class SingleFileProgrammingQuestionInput {
  @Field(() => [DefaultCodeInput], { nullable: false })
  defaultCodes?: DefaultCodeInput[]
}

@InputType()
export class DefaultCodeInput {
  @Field(() => String, { nullable: false })
  defaultCode!: string

  @Field(() => String, { nullable: false })
  languageId!: string
}

// @InputType()
// export class MultipleFileProgrammingQuestionInput {}
@InputType()
export class ProgrammingQuestionInput {
  @Field(() => ProgrammingQuestionType, { nullable: false })
  programmingQuestionType!: ProgrammingQuestionType

  @Field(() => SingleFileProgrammingQuestionInput, { nullable: true })
  singleFileProgrammingQuestion?: SingleFileProgrammingQuestionInput

  // @Field(() => MultipleFileProgrammingQuestionInput, { nullable: true })
  // multipleFileProgrammingQuestion?: MultipleFileProgrammingQuestionInput

  @Field(() => [EvaluationCriteriaCreateInput], { nullable: false })
  evaluationCriteria?: EvaluationCriteriaCreateInput[]

  @Field(() => String, { nullable: false })
  title!: string

  @Field(() => String, { nullable: false })
  statementMrkdwn!: string
}

@InputType()
export class QuestionCreateInput {
  @Field(() => QuestionType, { nullable: false })
  questionType!: QuestionType

  @Field(() => Int, { nullable: true })
  points?: number

  @Field(() => MultipleChoiceQuestionInput, {
    nullable: true,
  })
  multipleChoiceQuestion?: MultipleChoiceQuestionInput

  @Field(() => ProgrammingQuestionInput, { nullable: true })
  programmingQuestion?: ProgrammingQuestionInput
}
