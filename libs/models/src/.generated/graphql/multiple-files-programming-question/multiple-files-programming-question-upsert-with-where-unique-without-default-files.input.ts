import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleFilesProgrammingQuestionWhereUniqueInput } from './multiple-files-programming-question-where-unique.input';
import { MultipleFilesProgrammingQuestionUpdateWithoutDefaultFilesInput } from './multiple-files-programming-question-update-without-default-files.input';
import { MultipleFilesProgrammingQuestionCreateWithoutDefaultFilesInput } from './multiple-files-programming-question-create-without-default-files.input';

@InputType()
export class MultipleFilesProgrammingQuestionUpsertWithWhereUniqueWithoutDefaultFilesInput {

    @Field(() => MultipleFilesProgrammingQuestionWhereUniqueInput, {nullable:false})
    where!: MultipleFilesProgrammingQuestionWhereUniqueInput;

    @Field(() => MultipleFilesProgrammingQuestionUpdateWithoutDefaultFilesInput, {nullable:false})
    update!: MultipleFilesProgrammingQuestionUpdateWithoutDefaultFilesInput;

    @Field(() => MultipleFilesProgrammingQuestionCreateWithoutDefaultFilesInput, {nullable:false})
    create!: MultipleFilesProgrammingQuestionCreateWithoutDefaultFilesInput;
}
