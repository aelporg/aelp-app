import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageCreateWithoutMultipleFilesProgrammingQuestionInput } from './language-create-without-multiple-files-programming-question.input';
import { LanguageCreateOrConnectWithoutMultipleFilesProgrammingQuestionInput } from './language-create-or-connect-without-multiple-files-programming-question.input';
import { LanguageUpsertWithoutMultipleFilesProgrammingQuestionInput } from './language-upsert-without-multiple-files-programming-question.input';
import { LanguageWhereUniqueInput } from './language-where-unique.input';
import { LanguageUpdateWithoutMultipleFilesProgrammingQuestionInput } from './language-update-without-multiple-files-programming-question.input';

@InputType()
export class LanguageUpdateOneRequiredWithoutMultipleFilesProgrammingQuestionInput {

    @Field(() => LanguageCreateWithoutMultipleFilesProgrammingQuestionInput, {nullable:true})
    create?: LanguageCreateWithoutMultipleFilesProgrammingQuestionInput;

    @Field(() => LanguageCreateOrConnectWithoutMultipleFilesProgrammingQuestionInput, {nullable:true})
    connectOrCreate?: LanguageCreateOrConnectWithoutMultipleFilesProgrammingQuestionInput;

    @Field(() => LanguageUpsertWithoutMultipleFilesProgrammingQuestionInput, {nullable:true})
    upsert?: LanguageUpsertWithoutMultipleFilesProgrammingQuestionInput;

    @Field(() => LanguageWhereUniqueInput, {nullable:true})
    connect?: LanguageWhereUniqueInput;

    @Field(() => LanguageUpdateWithoutMultipleFilesProgrammingQuestionInput, {nullable:true})
    update?: LanguageUpdateWithoutMultipleFilesProgrammingQuestionInput;
}
