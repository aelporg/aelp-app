import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ProgrammingQuestionUncheckedUpdateOneWithoutMultipleFilesProgrammingQuestionInput } from '../programming-question/programming-question-unchecked-update-one-without-multiple-files-programming-question.input';

@InputType()
export class MultipleFilesProgrammingQuestionUncheckedUpdateWithoutDefaultFilesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    languageId?: StringFieldUpdateOperationsInput;

    @Field(() => ProgrammingQuestionUncheckedUpdateOneWithoutMultipleFilesProgrammingQuestionInput, {nullable:true})
    baseProgrammingQuestion?: ProgrammingQuestionUncheckedUpdateOneWithoutMultipleFilesProgrammingQuestionInput;
}
