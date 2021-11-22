import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { SingleFileProgrammingQuestionUpdateManyWithoutAllowedLanguagesInput } from '../single-file-programming-question/single-file-programming-question-update-many-without-allowed-languages.input';
import { MultipleFilesProgrammingQuestionUpdateManyWithoutLanguageInput } from '../multiple-files-programming-question/multiple-files-programming-question-update-many-without-language.input';

@InputType()
export class LanguageUpdateInput {

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

    @Field(() => SingleFileProgrammingQuestionUpdateManyWithoutAllowedLanguagesInput, {nullable:true})
    singleFileQuestions?: SingleFileProgrammingQuestionUpdateManyWithoutAllowedLanguagesInput;

    @Field(() => MultipleFilesProgrammingQuestionUpdateManyWithoutLanguageInput, {nullable:true})
    MultipleFilesProgrammingQuestion?: MultipleFilesProgrammingQuestionUpdateManyWithoutLanguageInput;
}
