import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleFilesProgrammingQuestionWhereUniqueInput } from './multiple-files-programming-question-where-unique.input';
import { MultipleFilesProgrammingQuestionUpdateWithoutLanguageInput } from './multiple-files-programming-question-update-without-language.input';
import { MultipleFilesProgrammingQuestionCreateWithoutLanguageInput } from './multiple-files-programming-question-create-without-language.input';

@InputType()
export class MultipleFilesProgrammingQuestionUpsertWithWhereUniqueWithoutLanguageInput {

    @Field(() => MultipleFilesProgrammingQuestionWhereUniqueInput, {nullable:false})
    where!: MultipleFilesProgrammingQuestionWhereUniqueInput;

    @Field(() => MultipleFilesProgrammingQuestionUpdateWithoutLanguageInput, {nullable:false})
    update!: MultipleFilesProgrammingQuestionUpdateWithoutLanguageInput;

    @Field(() => MultipleFilesProgrammingQuestionCreateWithoutLanguageInput, {nullable:false})
    create!: MultipleFilesProgrammingQuestionCreateWithoutLanguageInput;
}
