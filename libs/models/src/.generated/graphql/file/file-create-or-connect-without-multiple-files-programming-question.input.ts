import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileCreateWithoutMultipleFilesProgrammingQuestionInput } from './file-create-without-multiple-files-programming-question.input';

@InputType()
export class FileCreateOrConnectWithoutMultipleFilesProgrammingQuestionInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    where!: FileWhereUniqueInput;

    @Field(() => FileCreateWithoutMultipleFilesProgrammingQuestionInput, {nullable:false})
    create!: FileCreateWithoutMultipleFilesProgrammingQuestionInput;
}
