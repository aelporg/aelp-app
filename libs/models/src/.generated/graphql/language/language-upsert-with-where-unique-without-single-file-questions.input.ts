import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageWhereUniqueInput } from './language-where-unique.input';
import { LanguageUpdateWithoutSingleFileQuestionsInput } from './language-update-without-single-file-questions.input';
import { LanguageCreateWithoutSingleFileQuestionsInput } from './language-create-without-single-file-questions.input';

@InputType()
export class LanguageUpsertWithWhereUniqueWithoutSingleFileQuestionsInput {

    @Field(() => LanguageWhereUniqueInput, {nullable:false})
    where!: LanguageWhereUniqueInput;

    @Field(() => LanguageUpdateWithoutSingleFileQuestionsInput, {nullable:false})
    update!: LanguageUpdateWithoutSingleFileQuestionsInput;

    @Field(() => LanguageCreateWithoutSingleFileQuestionsInput, {nullable:false})
    create!: LanguageCreateWithoutSingleFileQuestionsInput;
}
