import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { QuestionAnswerUpdateOneWithoutMultipleChoiceQuestionAnswerInput } from '../question-answer/question-answer-update-one-without-multiple-choice-question-answer.input';

@InputType()
export class MultipleChoiceQuestionAnswerUpdateWithoutQuestionChoiceInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => QuestionAnswerUpdateOneWithoutMultipleChoiceQuestionAnswerInput, {nullable:true})
    baseAnswer?: QuestionAnswerUpdateOneWithoutMultipleChoiceQuestionAnswerInput;
}
