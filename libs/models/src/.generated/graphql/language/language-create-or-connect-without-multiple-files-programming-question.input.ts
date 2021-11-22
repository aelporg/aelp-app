import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageWhereUniqueInput } from './language-where-unique.input';
import { LanguageCreateWithoutMultipleFilesProgrammingQuestionInput } from './language-create-without-multiple-files-programming-question.input';

@InputType()
export class LanguageCreateOrConnectWithoutMultipleFilesProgrammingQuestionInput {

    @Field(() => LanguageWhereUniqueInput, {nullable:false})
    where!: LanguageWhereUniqueInput;

    @Field(() => LanguageCreateWithoutMultipleFilesProgrammingQuestionInput, {nullable:false})
    create!: LanguageCreateWithoutMultipleFilesProgrammingQuestionInput;
}
