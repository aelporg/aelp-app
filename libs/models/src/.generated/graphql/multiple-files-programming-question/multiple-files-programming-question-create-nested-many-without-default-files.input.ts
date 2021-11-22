import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleFilesProgrammingQuestionCreateWithoutDefaultFilesInput } from './multiple-files-programming-question-create-without-default-files.input';
import { MultipleFilesProgrammingQuestionCreateOrConnectWithoutDefaultFilesInput } from './multiple-files-programming-question-create-or-connect-without-default-files.input';
import { MultipleFilesProgrammingQuestionWhereUniqueInput } from './multiple-files-programming-question-where-unique.input';

@InputType()
export class MultipleFilesProgrammingQuestionCreateNestedManyWithoutDefaultFilesInput {

    @Field(() => [MultipleFilesProgrammingQuestionCreateWithoutDefaultFilesInput], {nullable:true})
    create?: Array<MultipleFilesProgrammingQuestionCreateWithoutDefaultFilesInput>;

    @Field(() => [MultipleFilesProgrammingQuestionCreateOrConnectWithoutDefaultFilesInput], {nullable:true})
    connectOrCreate?: Array<MultipleFilesProgrammingQuestionCreateOrConnectWithoutDefaultFilesInput>;

    @Field(() => [MultipleFilesProgrammingQuestionWhereUniqueInput], {nullable:true})
    connect?: Array<MultipleFilesProgrammingQuestionWhereUniqueInput>;
}
