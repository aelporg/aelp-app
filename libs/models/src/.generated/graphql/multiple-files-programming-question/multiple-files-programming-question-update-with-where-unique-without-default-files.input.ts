import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleFilesProgrammingQuestionWhereUniqueInput } from './multiple-files-programming-question-where-unique.input';
import { MultipleFilesProgrammingQuestionUpdateWithoutDefaultFilesInput } from './multiple-files-programming-question-update-without-default-files.input';

@InputType()
export class MultipleFilesProgrammingQuestionUpdateWithWhereUniqueWithoutDefaultFilesInput {

    @Field(() => MultipleFilesProgrammingQuestionWhereUniqueInput, {nullable:false})
    where!: MultipleFilesProgrammingQuestionWhereUniqueInput;

    @Field(() => MultipleFilesProgrammingQuestionUpdateWithoutDefaultFilesInput, {nullable:false})
    data!: MultipleFilesProgrammingQuestionUpdateWithoutDefaultFilesInput;
}
