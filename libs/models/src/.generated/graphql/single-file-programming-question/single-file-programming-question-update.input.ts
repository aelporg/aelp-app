import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ProgrammingQuestionUpdateOneWithoutSingleFileProgrammingQuestionInput } from '../programming-question/programming-question-update-one-without-single-file-programming-question.input';
import { LanguageUpdateManyWithoutSingleFileQuestionsInput } from '../language/language-update-many-without-single-file-questions.input';

@InputType()
export class SingleFileProgrammingQuestionUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    defaultCode?: StringFieldUpdateOperationsInput;

    @Field(() => ProgrammingQuestionUpdateOneWithoutSingleFileProgrammingQuestionInput, {nullable:true})
    baseProgrammingQuestion?: ProgrammingQuestionUpdateOneWithoutSingleFileProgrammingQuestionInput;

    @Field(() => LanguageUpdateManyWithoutSingleFileQuestionsInput, {nullable:true})
    allowedLanguages?: LanguageUpdateManyWithoutSingleFileQuestionsInput;
}
