import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionAnswerCreateNestedOneWithoutProgrammingQuestionAnswerInput } from '../question-answer/question-answer-create-nested-one-without-programming-question-answer.input';
import { EvaluationResultCreateNestedManyWithoutProgrammingQuestionAnswerInput } from '../evaluation-result/evaluation-result-create-nested-many-without-programming-question-answer.input';

@InputType()
export class ProgrammingQuestionAnswerCreateWithoutEnvirnmentInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => QuestionAnswerCreateNestedOneWithoutProgrammingQuestionAnswerInput, {nullable:true})
    baseAnswer?: QuestionAnswerCreateNestedOneWithoutProgrammingQuestionAnswerInput;

    @Field(() => EvaluationResultCreateNestedManyWithoutProgrammingQuestionAnswerInput, {nullable:true})
    evaluationResults?: EvaluationResultCreateNestedManyWithoutProgrammingQuestionAnswerInput;
}
