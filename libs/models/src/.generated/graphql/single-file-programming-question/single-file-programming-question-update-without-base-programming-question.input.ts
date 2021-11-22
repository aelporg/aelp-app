import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { LanguageUpdateManyWithoutSingleFileQuestionsInput } from '../language/language-update-many-without-single-file-questions.input';

@InputType()
export class SingleFileProgrammingQuestionUpdateWithoutBaseProgrammingQuestionInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    defaultCode?: StringFieldUpdateOperationsInput;

    @Field(() => LanguageUpdateManyWithoutSingleFileQuestionsInput, {nullable:true})
    allowedLanguages?: LanguageUpdateManyWithoutSingleFileQuestionsInput;
}
