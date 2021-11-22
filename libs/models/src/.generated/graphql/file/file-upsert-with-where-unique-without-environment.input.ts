import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileUpdateWithoutEnvironmentInput } from './file-update-without-environment.input';
import { FileCreateWithoutEnvironmentInput } from './file-create-without-environment.input';

@InputType()
export class FileUpsertWithWhereUniqueWithoutEnvironmentInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    where!: FileWhereUniqueInput;

    @Field(() => FileUpdateWithoutEnvironmentInput, {nullable:false})
    update!: FileUpdateWithoutEnvironmentInput;

    @Field(() => FileCreateWithoutEnvironmentInput, {nullable:false})
    create!: FileCreateWithoutEnvironmentInput;
}
