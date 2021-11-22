import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EvaluationResultUncheckedUpdateManyWithoutProgrammingQuestionAnswerInput } from '../evaluation-result/evaluation-result-unchecked-update-many-without-programming-question-answer.input';

@InputType()
export class ProgrammingQuestionAnswerUncheckedUpdateWithoutBaseAnswerInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    envirnmentId?: StringFieldUpdateOperationsInput;

    @Field(() => EvaluationResultUncheckedUpdateManyWithoutProgrammingQuestionAnswerInput, {nullable:true})
    evaluationResults?: EvaluationResultUncheckedUpdateManyWithoutProgrammingQuestionAnswerInput;
}
