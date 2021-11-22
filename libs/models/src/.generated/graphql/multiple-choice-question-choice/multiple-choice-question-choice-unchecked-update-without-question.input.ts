import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MultipleChoiceQuestionAnswerUncheckedUpdateManyWithoutQuestionChoiceInput } from '../multiple-choice-question-answer/multiple-choice-question-answer-unchecked-update-many-without-question-choice.input';

@InputType()
export class MultipleChoiceQuestionChoiceUncheckedUpdateWithoutQuestionInput {

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

    @Field(() => MultipleChoiceQuestionAnswerUncheckedUpdateManyWithoutQuestionChoiceInput, {nullable:true})
    answers?: MultipleChoiceQuestionAnswerUncheckedUpdateManyWithoutQuestionChoiceInput;
}
