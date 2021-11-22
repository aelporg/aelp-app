import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ProgrammingQuestionUncheckedUpdateOneWithoutSingleFileProgrammingQuestionInput } from '../programming-question/programming-question-unchecked-update-one-without-single-file-programming-question.input';

@InputType()
export class SingleFileProgrammingQuestionUncheckedUpdateWithoutAllowedLanguagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    defaultCode?: StringFieldUpdateOperationsInput;

    @Field(() => ProgrammingQuestionUncheckedUpdateOneWithoutSingleFileProgrammingQuestionInput, {nullable:true})
    baseProgrammingQuestion?: ProgrammingQuestionUncheckedUpdateOneWithoutSingleFileProgrammingQuestionInput;
}
