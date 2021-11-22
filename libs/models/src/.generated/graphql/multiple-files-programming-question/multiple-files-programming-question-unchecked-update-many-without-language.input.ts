import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleFilesProgrammingQuestionCreateWithoutLanguageInput } from './multiple-files-programming-question-create-without-language.input';
import { MultipleFilesProgrammingQuestionCreateOrConnectWithoutLanguageInput } from './multiple-files-programming-question-create-or-connect-without-language.input';
import { MultipleFilesProgrammingQuestionUpsertWithWhereUniqueWithoutLanguageInput } from './multiple-files-programming-question-upsert-with-where-unique-without-language.input';
import { MultipleFilesProgrammingQuestionCreateManyLanguageInputEnvelope } from './multiple-files-programming-question-create-many-language-input-envelope.input';
import { MultipleFilesProgrammingQuestionWhereUniqueInput } from './multiple-files-programming-question-where-unique.input';
import { MultipleFilesProgrammingQuestionUpdateWithWhereUniqueWithoutLanguageInput } from './multiple-files-programming-question-update-with-where-unique-without-language.input';
import { MultipleFilesProgrammingQuestionUpdateManyWithWhereWithoutLanguageInput } from './multiple-files-programming-question-update-many-with-where-without-language.input';
import { MultipleFilesProgrammingQuestionScalarWhereInput } from './multiple-files-programming-question-scalar-where.input';

@InputType()
export class MultipleFilesProgrammingQuestionUncheckedUpdateManyWithoutLanguageInput {

    @Field(() => [MultipleFilesProgrammingQuestionCreateWithoutLanguageInput], {nullable:true})
    create?: Array<MultipleFilesProgrammingQuestionCreateWithoutLanguageInput>;

    @Field(() => [MultipleFilesProgrammingQuestionCreateOrConnectWithoutLanguageInput], {nullable:true})
    connectOrCreate?: Array<MultipleFilesProgrammingQuestionCreateOrConnectWithoutLanguageInput>;

    @Field(() => [MultipleFilesProgrammingQuestionUpsertWithWhereUniqueWithoutLanguageInput], {nullable:true})
    upsert?: Array<MultipleFilesProgrammingQuestionUpsertWithWhereUniqueWithoutLanguageInput>;

    @Field(() => MultipleFilesProgrammingQuestionCreateManyLanguageInputEnvelope, {nullable:true})
    createMany?: MultipleFilesProgrammingQuestionCreateManyLanguageInputEnvelope;

    @Field(() => [MultipleFilesProgrammingQuestionWhereUniqueInput], {nullable:true})
    set?: Array<MultipleFilesProgrammingQuestionWhereUniqueInput>;

    @Field(() => [MultipleFilesProgrammingQuestionWhereUniqueInput], {nullable:true})
    disconnect?: Array<MultipleFilesProgrammingQuestionWhereUniqueInput>;

    @Field(() => [MultipleFilesProgrammingQuestionWhereUniqueInput], {nullable:true})
    delete?: Array<MultipleFilesProgrammingQuestionWhereUniqueInput>;

    @Field(() => [MultipleFilesProgrammingQuestionWhereUniqueInput], {nullable:true})
    connect?: Array<MultipleFilesProgrammingQuestionWhereUniqueInput>;

    @Field(() => [MultipleFilesProgrammingQuestionUpdateWithWhereUniqueWithoutLanguageInput], {nullable:true})
    update?: Array<MultipleFilesProgrammingQuestionUpdateWithWhereUniqueWithoutLanguageInput>;

    @Field(() => [MultipleFilesProgrammingQuestionUpdateManyWithWhereWithoutLanguageInput], {nullable:true})
    updateMany?: Array<MultipleFilesProgrammingQuestionUpdateManyWithWhereWithoutLanguageInput>;

    @Field(() => [MultipleFilesProgrammingQuestionScalarWhereInput], {nullable:true})
    deleteMany?: Array<MultipleFilesProgrammingQuestionScalarWhereInput>;
}
