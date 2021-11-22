import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleFilesProgrammingQuestionCreateNestedManyWithoutDefaultFilesInput } from '../multiple-files-programming-question/multiple-files-programming-question-create-nested-many-without-default-files.input';

@InputType()
export class FileCreateWithoutEnvironmentInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    extension!: string;

    @Field(() => String, {nullable:false})
    data!: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => MultipleFilesProgrammingQuestionCreateNestedManyWithoutDefaultFilesInput, {nullable:true})
    multipleFilesProgrammingQuestion?: MultipleFilesProgrammingQuestionCreateNestedManyWithoutDefaultFilesInput;
}
