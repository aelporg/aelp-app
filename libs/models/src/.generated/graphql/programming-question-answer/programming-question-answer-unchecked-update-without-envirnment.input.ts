import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { QuestionAnswerUncheckedUpdateOneWithoutProgrammingQuestionAnswerInput } from '../question-answer/question-answer-unchecked-update-one-without-programming-question-answer.input';
import { EvaluationResultUncheckedUpdateManyWithoutProgrammingQuestionAnswerInput } from '../evaluation-result/evaluation-result-unchecked-update-many-without-programming-question-answer.input';

@InputType()
export class ProgrammingQuestionAnswerUncheckedUpdateWithoutEnvirnmentInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => QuestionAnswerUncheckedUpdateOneWithoutProgrammingQuestionAnswerInput, {nullable:true})
    baseAnswer?: QuestionAnswerUncheckedUpdateOneWithoutProgrammingQuestionAnswerInput;

    @Field(() => EvaluationResultUncheckedUpdateManyWithoutProgrammingQuestionAnswerInput, {nullable:true})
    evaluationResults?: EvaluationResultUncheckedUpdateManyWithoutProgrammingQuestionAnswerInput;
}
