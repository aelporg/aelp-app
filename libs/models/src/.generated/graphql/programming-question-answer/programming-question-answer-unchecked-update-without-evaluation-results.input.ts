import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { QuestionAnswerUncheckedUpdateOneWithoutProgrammingQuestionAnswerInput } from '../question-answer/question-answer-unchecked-update-one-without-programming-question-answer.input';

@InputType()
export class ProgrammingQuestionAnswerUncheckedUpdateWithoutEvaluationResultsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    envirnmentId?: StringFieldUpdateOperationsInput;

    @Field(() => QuestionAnswerUncheckedUpdateOneWithoutProgrammingQuestionAnswerInput, {nullable:true})
    baseAnswer?: QuestionAnswerUncheckedUpdateOneWithoutProgrammingQuestionAnswerInput;
}
