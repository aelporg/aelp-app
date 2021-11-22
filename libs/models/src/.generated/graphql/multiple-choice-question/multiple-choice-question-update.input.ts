import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MultipleChoiceQuestionChoiceUpdateManyWithoutQuestionInput } from '../multiple-choice-question-choice/multiple-choice-question-choice-update-many-without-question.input';
import { QuestionUpdateOneWithoutMultipleChoiceQuestionInput } from '../question/question-update-one-without-multiple-choice-question.input';

@InputType()
export class MultipleChoiceQuestionUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => MultipleChoiceQuestionChoiceUpdateManyWithoutQuestionInput, {nullable:true})
    choices?: MultipleChoiceQuestionChoiceUpdateManyWithoutQuestionInput;

    @Field(() => QuestionUpdateOneWithoutMultipleChoiceQuestionInput, {nullable:true})
    baseQuestion?: QuestionUpdateOneWithoutMultipleChoiceQuestionInput;
}
