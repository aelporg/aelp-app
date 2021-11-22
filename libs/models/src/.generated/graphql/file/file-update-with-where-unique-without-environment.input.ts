import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileUpdateWithoutEnvironmentInput } from './file-update-without-environment.input';

@InputType()
export class FileUpdateWithWhereUniqueWithoutEnvironmentInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    where!: FileWhereUniqueInput;

    @Field(() => FileUpdateWithoutEnvironmentInput, {nullable:false})
    data!: FileUpdateWithoutEnvironmentInput;
}
