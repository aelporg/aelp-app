import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleFilesProgrammingQuestionWhereUniqueInput } from './multiple-files-programming-question-where-unique.input';
import { MultipleFilesProgrammingQuestionCreateWithoutLanguageInput } from './multiple-files-programming-question-create-without-language.input';

@InputType()
export class MultipleFilesProgrammingQuestionCreateOrConnectWithoutLanguageInput {

    @Field(() => MultipleFilesProgrammingQuestionWhereUniqueInput, {nullable:false})
    where!: MultipleFilesProgrammingQuestionWhereUniqueInput;

    @Field(() => MultipleFilesProgrammingQuestionCreateWithoutLanguageInput, {nullable:false})
    create!: MultipleFilesProgrammingQuestionCreateWithoutLanguageInput;
}
