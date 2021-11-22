import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { QuestionAnswerUncheckedUpdateOneWithoutMultipleChoiceQuestionAnswerInput } from '../question-answer/question-answer-unchecked-update-one-without-multiple-choice-question-answer.input';

@InputType()
export class MultipleChoiceQuestionAnswerUncheckedUpdateWithoutQuestionChoiceInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => QuestionAnswerUncheckedUpdateOneWithoutMultipleChoiceQuestionAnswerInput, {nullable:true})
    baseAnswer?: QuestionAnswerUncheckedUpdateOneWithoutMultipleChoiceQuestionAnswerInput;
}
