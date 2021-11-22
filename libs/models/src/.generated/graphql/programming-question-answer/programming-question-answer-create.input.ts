import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionAnswerCreateNestedOneWithoutProgrammingQuestionAnswerInput } from '../question-answer/question-answer-create-nested-one-without-programming-question-answer.input';
import { EnvironmentCreateNestedOneWithoutAnswersInput } from '../environment/environment-create-nested-one-without-answers.input';
import { EvaluationResultCreateNestedManyWithoutProgrammingQuestionAnswerInput } from '../evaluation-result/evaluation-result-create-nested-many-without-programming-question-answer.input';

@InputType()
export class ProgrammingQuestionAnswerCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => QuestionAnswerCreateNestedOneWithoutProgrammingQuestionAnswerInput, {nullable:true})
    baseAnswer?: QuestionAnswerCreateNestedOneWithoutProgrammingQuestionAnswerInput;

    @Field(() => EnvironmentCreateNestedOneWithoutAnswersInput, {nullable:false})
    envirnment!: EnvironmentCreateNestedOneWithoutAnswersInput;

    @Field(() => EvaluationResultCreateNestedManyWithoutProgrammingQuestionAnswerInput, {nullable:true})
    evaluationResults?: EvaluationResultCreateNestedManyWithoutProgrammingQuestionAnswerInput;
}
