import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MultipleFilesProgrammingQuestionUncheckedUpdateManyWithoutLanguageInput } from '../multiple-files-programming-question/multiple-files-programming-question-unchecked-update-many-without-language.input';

@InputType()
export class LanguageUncheckedUpdateWithoutSingleFileQuestionsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    extension?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => MultipleFilesProgrammingQuestionUncheckedUpdateManyWithoutLanguageInput, {nullable:true})
    MultipleFilesProgrammingQuestion?: MultipleFilesProgrammingQuestionUncheckedUpdateManyWithoutLanguageInput;
}
