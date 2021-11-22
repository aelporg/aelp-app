import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ProgrammingQuestionUpdateOneWithoutMultipleFilesProgrammingQuestionInput } from '../programming-question/programming-question-update-one-without-multiple-files-programming-question.input';
import { FileUpdateManyWithoutMultipleFilesProgrammingQuestionInput } from '../file/file-update-many-without-multiple-files-programming-question.input';

@InputType()
export class MultipleFilesProgrammingQuestionUpdateWithoutLanguageInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => ProgrammingQuestionUpdateOneWithoutMultipleFilesProgrammingQuestionInput, {nullable:true})
    baseProgrammingQuestion?: ProgrammingQuestionUpdateOneWithoutMultipleFilesProgrammingQuestionInput;

    @Field(() => FileUpdateManyWithoutMultipleFilesProgrammingQuestionInput, {nullable:true})
    defaultFiles?: FileUpdateManyWithoutMultipleFilesProgrammingQuestionInput;
}
