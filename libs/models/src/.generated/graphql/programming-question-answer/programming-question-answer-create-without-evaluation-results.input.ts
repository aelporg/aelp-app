import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionAnswerCreateNestedOneWithoutProgrammingQuestionAnswerInput } from '../question-answer/question-answer-create-nested-one-without-programming-question-answer.input';
import { EnvironmentCreateNestedOneWithoutAnswersInput } from '../environment/environment-create-nested-one-without-answers.input';

@InputType()
export class ProgrammingQuestionAnswerCreateWithoutEvaluationResultsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => QuestionAnswerCreateNestedOneWithoutProgrammingQuestionAnswerInput, {nullable:true})
    baseAnswer?: QuestionAnswerCreateNestedOneWithoutProgrammingQuestionAnswerInput;

    @Field(() => EnvironmentCreateNestedOneWithoutAnswersInput, {nullable:false})
    envirnment!: EnvironmentCreateNestedOneWithoutAnswersInput;
}
