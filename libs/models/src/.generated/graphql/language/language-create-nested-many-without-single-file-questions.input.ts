import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageCreateWithoutSingleFileQuestionsInput } from './language-create-without-single-file-questions.input';
import { LanguageCreateOrConnectWithoutSingleFileQuestionsInput } from './language-create-or-connect-without-single-file-questions.input';
import { LanguageWhereUniqueInput } from './language-where-unique.input';

@InputType()
export class LanguageCreateNestedManyWithoutSingleFileQuestionsInput {

    @Field(() => [LanguageCreateWithoutSingleFileQuestionsInput], {nullable:true})
    create?: Array<LanguageCreateWithoutSingleFileQuestionsInput>;

    @Field(() => [LanguageCreateOrConnectWithoutSingleFileQuestionsInput], {nullable:true})
    connectOrCreate?: Array<LanguageCreateOrConnectWithoutSingleFileQuestionsInput>;

    @Field(() => [LanguageWhereUniqueInput], {nullable:true})
    connect?: Array<LanguageWhereUniqueInput>;
}
