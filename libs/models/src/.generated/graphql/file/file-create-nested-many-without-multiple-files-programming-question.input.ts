import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutMultipleFilesProgrammingQuestionInput } from './file-create-without-multiple-files-programming-question.input';
import { FileCreateOrConnectWithoutMultipleFilesProgrammingQuestionInput } from './file-create-or-connect-without-multiple-files-programming-question.input';
import { FileWhereUniqueInput } from './file-where-unique.input';

@InputType()
export class FileCreateNestedManyWithoutMultipleFilesProgrammingQuestionInput {

    @Field(() => [FileCreateWithoutMultipleFilesProgrammingQuestionInput], {nullable:true})
    create?: Array<FileCreateWithoutMultipleFilesProgrammingQuestionInput>;

    @Field(() => [FileCreateOrConnectWithoutMultipleFilesProgrammingQuestionInput], {nullable:true})
    connectOrCreate?: Array<FileCreateOrConnectWithoutMultipleFilesProgrammingQuestionInput>;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    connect?: Array<FileWhereUniqueInput>;
}
