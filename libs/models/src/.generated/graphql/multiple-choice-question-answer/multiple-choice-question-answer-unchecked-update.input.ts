import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { QuestionAnswerUncheckedUpdateOneWithoutMultipleChoiceQuestionAnswerInput } from '../question-answer/question-answer-unchecked-update-one-without-multiple-choice-question-answer.input';

@InputType()
export class MultipleChoiceQuestionAnswerUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    questionChoiceId?: StringFieldUpdateOperationsInput;

    @Field(() => QuestionAnswerUncheckedUpdateOneWithoutMultipleChoiceQuestionAnswerInput, {nullable:true})
    baseAnswer?: QuestionAnswerUncheckedUpdateOneWithoutMultipleChoiceQuestionAnswerInput;
}
