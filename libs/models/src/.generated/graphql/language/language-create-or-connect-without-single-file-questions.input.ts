import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageWhereUniqueInput } from './language-where-unique.input';
import { LanguageCreateWithoutSingleFileQuestionsInput } from './language-create-without-single-file-questions.input';

@InputType()
export class LanguageCreateOrConnectWithoutSingleFileQuestionsInput {

    @Field(() => LanguageWhereUniqueInput, {nullable:false})
    where!: LanguageWhereUniqueInput;

    @Field(() => LanguageCreateWithoutSingleFileQuestionsInput, {nullable:false})
    create!: LanguageCreateWithoutSingleFileQuestionsInput;
}
