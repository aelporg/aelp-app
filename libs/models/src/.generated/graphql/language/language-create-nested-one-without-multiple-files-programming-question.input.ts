import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageCreateWithoutMultipleFilesProgrammingQuestionInput } from './language-create-without-multiple-files-programming-question.input';
import { LanguageCreateOrConnectWithoutMultipleFilesProgrammingQuestionInput } from './language-create-or-connect-without-multiple-files-programming-question.input';
import { LanguageWhereUniqueInput } from './language-where-unique.input';

@InputType()
export class LanguageCreateNestedOneWithoutMultipleFilesProgrammingQuestionInput {

    @Field(() => LanguageCreateWithoutMultipleFilesProgrammingQuestionInput, {nullable:true})
    create?: LanguageCreateWithoutMultipleFilesProgrammingQuestionInput;

    @Field(() => LanguageCreateOrConnectWithoutMultipleFilesProgrammingQuestionInput, {nullable:true})
    connectOrCreate?: LanguageCreateOrConnectWithoutMultipleFilesProgrammingQuestionInput;

    @Field(() => LanguageWhereUniqueInput, {nullable:true})
    connect?: LanguageWhereUniqueInput;
}
