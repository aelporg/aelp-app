import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleFilesProgrammingQuestionWhereUniqueInput } from './multiple-files-programming-question-where-unique.input';
import { MultipleFilesProgrammingQuestionCreateWithoutDefaultFilesInput } from './multiple-files-programming-question-create-without-default-files.input';

@InputType()
export class MultipleFilesProgrammingQuestionCreateOrConnectWithoutDefaultFilesInput {

    @Field(() => MultipleFilesProgrammingQuestionWhereUniqueInput, {nullable:false})
    where!: MultipleFilesProgrammingQuestionWhereUniqueInput;

    @Field(() => MultipleFilesProgrammingQuestionCreateWithoutDefaultFilesInput, {nullable:false})
    create!: MultipleFilesProgrammingQuestionCreateWithoutDefaultFilesInput;
}
