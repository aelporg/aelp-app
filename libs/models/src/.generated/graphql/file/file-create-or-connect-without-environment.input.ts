import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileCreateWithoutEnvironmentInput } from './file-create-without-environment.input';

@InputType()
export class FileCreateOrConnectWithoutEnvironmentInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    where!: FileWhereUniqueInput;

    @Field(() => FileCreateWithoutEnvironmentInput, {nullable:false})
    create!: FileCreateWithoutEnvironmentInput;
}
