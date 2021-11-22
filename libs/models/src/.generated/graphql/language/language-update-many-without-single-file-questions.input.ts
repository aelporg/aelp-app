import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageCreateWithoutSingleFileQuestionsInput } from './language-create-without-single-file-questions.input';
import { LanguageCreateOrConnectWithoutSingleFileQuestionsInput } from './language-create-or-connect-without-single-file-questions.input';
import { LanguageUpsertWithWhereUniqueWithoutSingleFileQuestionsInput } from './language-upsert-with-where-unique-without-single-file-questions.input';
import { LanguageWhereUniqueInput } from './language-where-unique.input';
import { LanguageUpdateWithWhereUniqueWithoutSingleFileQuestionsInput } from './language-update-with-where-unique-without-single-file-questions.input';
import { LanguageUpdateManyWithWhereWithoutSingleFileQuestionsInput } from './language-update-many-with-where-without-single-file-questions.input';
import { LanguageScalarWhereInput } from './language-scalar-where.input';

@InputType()
export class LanguageUpdateManyWithoutSingleFileQuestionsInput {

    @Field(() => [LanguageCreateWithoutSingleFileQuestionsInput], {nullable:true})
    create?: Array<LanguageCreateWithoutSingleFileQuestionsInput>;

    @Field(() => [LanguageCreateOrConnectWithoutSingleFileQuestionsInput], {nullable:true})
    connectOrCreate?: Array<LanguageCreateOrConnectWithoutSingleFileQuestionsInput>;

    @Field(() => [LanguageUpsertWithWhereUniqueWithoutSingleFileQuestionsInput], {nullable:true})
    upsert?: Array<LanguageUpsertWithWhereUniqueWithoutSingleFileQuestionsInput>;

    @Field(() => [LanguageWhereUniqueInput], {nullable:true})
    set?: Array<LanguageWhereUniqueInput>;

    @Field(() => [LanguageWhereUniqueInput], {nullable:true})
    disconnect?: Array<LanguageWhereUniqueInput>;

    @Field(() => [LanguageWhereUniqueInput], {nullable:true})
    delete?: Array<LanguageWhereUniqueInput>;

    @Field(() => [LanguageWhereUniqueInput], {nullable:true})
    connect?: Array<LanguageWhereUniqueInput>;

    @Field(() => [LanguageUpdateWithWhereUniqueWithoutSingleFileQuestionsInput], {nullable:true})
    update?: Array<LanguageUpdateWithWhereUniqueWithoutSingleFileQuestionsInput>;

    @Field(() => [LanguageUpdateManyWithWhereWithoutSingleFileQuestionsInput], {nullable:true})
    updateMany?: Array<LanguageUpdateManyWithWhereWithoutSingleFileQuestionsInput>;

    @Field(() => [LanguageScalarWhereInput], {nullable:true})
    deleteMany?: Array<LanguageScalarWhereInput>;
}
