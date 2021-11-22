import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleFilesProgrammingQuestionCreateWithoutLanguageInput } from './multiple-files-programming-question-create-without-language.input';
import { MultipleFilesProgrammingQuestionCreateOrConnectWithoutLanguageInput } from './multiple-files-programming-question-create-or-connect-without-language.input';
import { MultipleFilesProgrammingQuestionCreateManyLanguageInputEnvelope } from './multiple-files-programming-question-create-many-language-input-envelope.input';
import { MultipleFilesProgrammingQuestionWhereUniqueInput } from './multiple-files-programming-question-where-unique.input';

@InputType()
export class MultipleFilesProgrammingQuestionCreateNestedManyWithoutLanguageInput {

    @Field(() => [MultipleFilesProgrammingQuestionCreateWithoutLanguageInput], {nullable:true})
    create?: Array<MultipleFilesProgrammingQuestionCreateWithoutLanguageInput>;

    @Field(() => [MultipleFilesProgrammingQuestionCreateOrConnectWithoutLanguageInput], {nullable:true})
    connectOrCreate?: Array<MultipleFilesProgrammingQuestionCreateOrConnectWithoutLanguageInput>;

    @Field(() => MultipleFilesProgrammingQuestionCreateManyLanguageInputEnvelope, {nullable:true})
    createMany?: MultipleFilesProgrammingQuestionCreateManyLanguageInputEnvelope;

    @Field(() => [MultipleFilesProgrammingQuestionWhereUniqueInput], {nullable:true})
    connect?: Array<MultipleFilesProgrammingQuestionWhereUniqueInput>;
}
