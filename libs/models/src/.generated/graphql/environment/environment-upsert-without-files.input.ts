import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnvironmentUpdateWithoutFilesInput } from './environment-update-without-files.input';
import { EnvironmentCreateWithoutFilesInput } from './environment-create-without-files.input';

@InputType()
export class EnvironmentUpsertWithoutFilesInput {

    @Field(() => EnvironmentUpdateWithoutFilesInput, {nullable:false})
    update!: EnvironmentUpdateWithoutFilesInput;

    @Field(() => EnvironmentCreateWithoutFilesInput, {nullable:false})
    create!: EnvironmentCreateWithoutFilesInput;
}
