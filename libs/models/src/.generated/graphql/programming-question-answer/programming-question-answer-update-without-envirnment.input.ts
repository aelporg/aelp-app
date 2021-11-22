import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { QuestionAnswerUpdateOneWithoutProgrammingQuestionAnswerInput } from '../question-answer/question-answer-update-one-without-programming-question-answer.input';
import { EvaluationResultUpdateManyWithoutProgrammingQuestionAnswerInput } from '../evaluation-result/evaluation-result-update-many-without-programming-question-answer.input';

@InputType()
export class ProgrammingQuestionAnswerUpdateWithoutEnvirnmentInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => QuestionAnswerUpdateOneWithoutProgrammingQuestionAnswerInput, {nullable:true})
    baseAnswer?: QuestionAnswerUpdateOneWithoutProgrammingQuestionAnswerInput;

    @Field(() => EvaluationResultUpdateManyWithoutProgrammingQuestionAnswerInput, {nullable:true})
    evaluationResults?: EvaluationResultUpdateManyWithoutProgrammingQuestionAnswerInput;
}
