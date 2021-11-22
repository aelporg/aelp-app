import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionAnswerUncheckedCreateNestedOneWithoutProgrammingQuestionAnswerInput } from '../question-answer/question-answer-unchecked-create-nested-one-without-programming-question-answer.input';
import { EvaluationResultUncheckedCreateNestedManyWithoutProgrammingQuestionAnswerInput } from '../evaluation-result/evaluation-result-unchecked-create-nested-many-without-programming-question-answer.input';

@InputType()
export class ProgrammingQuestionAnswerUncheckedCreateWithoutEnvirnmentInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => QuestionAnswerUncheckedCreateNestedOneWithoutProgrammingQuestionAnswerInput, {nullable:true})
    baseAnswer?: QuestionAnswerUncheckedCreateNestedOneWithoutProgrammingQuestionAnswerInput;

    @Field(() => EvaluationResultUncheckedCreateNestedManyWithoutProgrammingQuestionAnswerInput, {nullable:true})
    evaluationResults?: EvaluationResultUncheckedCreateNestedManyWithoutProgrammingQuestionAnswerInput;
}
