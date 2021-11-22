import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { LanguageUpdateOneRequiredWithoutMultipleFilesProgrammingQuestionInput } from '../language/language-update-one-required-without-multiple-files-programming-question.input';
import { FileUpdateManyWithoutMultipleFilesProgrammingQuestionInput } from '../file/file-update-many-without-multiple-files-programming-question.input';

@InputType()
export class MultipleFilesProgrammingQuestionUpdateWithoutBaseProgrammingQuestionInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => LanguageUpdateOneRequiredWithoutMultipleFilesProgrammingQuestionInput, {nullable:true})
    language?: LanguageUpdateOneRequiredWithoutMultipleFilesProgrammingQuestionInput;

    @Field(() => FileUpdateManyWithoutMultipleFilesProgrammingQuestionInput, {nullable:true})
    defaultFiles?: FileUpdateManyWithoutMultipleFilesProgrammingQuestionInput;
}
