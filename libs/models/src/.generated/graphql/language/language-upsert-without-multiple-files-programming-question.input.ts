import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageUpdateWithoutMultipleFilesProgrammingQuestionInput } from './language-update-without-multiple-files-programming-question.input';
import { LanguageCreateWithoutMultipleFilesProgrammingQuestionInput } from './language-create-without-multiple-files-programming-question.input';

@InputType()
export class LanguageUpsertWithoutMultipleFilesProgrammingQuestionInput {

    @Field(() => LanguageUpdateWithoutMultipleFilesProgrammingQuestionInput, {nullable:false})
    update!: LanguageUpdateWithoutMultipleFilesProgrammingQuestionInput;

    @Field(() => LanguageCreateWithoutMultipleFilesProgrammingQuestionInput, {nullable:false})
    create!: LanguageCreateWithoutMultipleFilesProgrammingQuestionInput;
}
