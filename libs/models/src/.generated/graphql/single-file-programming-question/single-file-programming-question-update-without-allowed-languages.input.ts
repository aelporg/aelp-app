import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ProgrammingQuestionUpdateOneWithoutSingleFileProgrammingQuestionInput } from '../programming-question/programming-question-update-one-without-single-file-programming-question.input';

@InputType()
export class SingleFileProgrammingQuestionUpdateWithoutAllowedLanguagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    defaultCode?: StringFieldUpdateOperationsInput;

    @Field(() => ProgrammingQuestionUpdateOneWithoutSingleFileProgrammingQuestionInput, {nullable:true})
    baseProgrammingQuestion?: ProgrammingQuestionUpdateOneWithoutSingleFileProgrammingQuestionInput;
}
