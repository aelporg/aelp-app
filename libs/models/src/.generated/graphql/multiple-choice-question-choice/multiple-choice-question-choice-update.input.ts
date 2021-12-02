import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MultipleChoiceQuestionUpdateOneRequiredWithoutChoicesInput } from '../multiple-choice-question/multiple-choice-question-update-one-required-without-choices.input';
import { MultipleChoiceQuestionAnswerUpdateManyWithoutQuestionChoiceInput } from '../multiple-choice-question-answer/multiple-choice-question-answer-update-many-without-question-choice.input';

@InputType()
export class MultipleChoiceQuestionChoiceUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    choice?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    correct?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => MultipleChoiceQuestionUpdateOneRequiredWithoutChoicesInput, {nullable:true})
    question?: MultipleChoiceQuestionUpdateOneRequiredWithoutChoicesInput;

    @Field(() => MultipleChoiceQuestionAnswerUpdateManyWithoutQuestionChoiceInput, {nullable:true})
    answers?: MultipleChoiceQuestionAnswerUpdateManyWithoutQuestionChoiceInput;
}