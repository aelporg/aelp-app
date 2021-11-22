import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleFilesProgrammingQuestionWhereUniqueInput } from './multiple-files-programming-question-where-unique.input';
import { MultipleFilesProgrammingQuestionUpdateWithoutLanguageInput } from './multiple-files-programming-question-update-without-language.input';

@InputType()
export class MultipleFilesProgrammingQuestionUpdateWithWhereUniqueWithoutLanguageInput {

    @Field(() => MultipleFilesProgrammingQuestionWhereUniqueInput, {nullable:false})
    where!: MultipleFilesProgrammingQuestionWhereUniqueInput;

    @Field(() => MultipleFilesProgrammingQuestionUpdateWithoutLanguageInput, {nullable:false})
    data!: MultipleFilesProgrammingQuestionUpdateWithoutLanguageInput;
}
