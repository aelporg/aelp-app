import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnvironmentCreateNestedOneWithoutFilesInput } from '../environment/environment-create-nested-one-without-files.input';

@InputType()
export class FileCreateWithoutMultipleFilesProgrammingQuestionInput {

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

    @Field(() => EnvironmentCreateNestedOneWithoutFilesInput, {nullable:true})
    environment?: EnvironmentCreateNestedOneWithoutFilesInput;
}
