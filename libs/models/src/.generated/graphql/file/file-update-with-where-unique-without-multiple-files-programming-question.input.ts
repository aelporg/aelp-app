import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileUpdateWithoutMultipleFilesProgrammingQuestionInput } from './file-update-without-multiple-files-programming-question.input';

@InputType()
export class FileUpdateWithWhereUniqueWithoutMultipleFilesProgrammingQuestionInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    where!: FileWhereUniqueInput;

    @Field(() => FileUpdateWithoutMultipleFilesProgrammingQuestionInput, {nullable:false})
    data!: FileUpdateWithoutMultipleFilesProgrammingQuestionInput;
}
