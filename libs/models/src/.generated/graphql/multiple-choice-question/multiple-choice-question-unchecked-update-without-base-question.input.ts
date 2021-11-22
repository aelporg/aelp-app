import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MultipleChoiceQuestionChoiceUncheckedUpdateManyWithoutQuestionInput } from '../multiple-choice-question-choice/multiple-choice-question-choice-unchecked-update-many-without-question.input';

@InputType()
export class MultipleChoiceQuestionUncheckedUpdateWithoutBaseQuestionInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => MultipleChoiceQuestionChoiceUncheckedUpdateManyWithoutQuestionInput, {nullable:true})
    choices?: MultipleChoiceQuestionChoiceUncheckedUpdateManyWithoutQuestionInput;
}
