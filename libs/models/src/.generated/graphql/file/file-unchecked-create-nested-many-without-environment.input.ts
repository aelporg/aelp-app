import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutEnvironmentInput } from './file-create-without-environment.input';
import { FileCreateOrConnectWithoutEnvironmentInput } from './file-create-or-connect-without-environment.input';
import { FileCreateManyEnvironmentInputEnvelope } from './file-create-many-environment-input-envelope.input';
import { FileWhereUniqueInput } from './file-where-unique.input';

@InputType()
export class FileUncheckedCreateNestedManyWithoutEnvironmentInput {

    @Field(() => [FileCreateWithoutEnvironmentInput], {nullable:true})
    create?: Array<FileCreateWithoutEnvironmentInput>;

    @Field(() => [FileCreateOrConnectWithoutEnvironmentInput], {nullable:true})
    connectOrCreate?: Array<FileCreateOrConnectWithoutEnvironmentInput>;

    @Field(() => FileCreateManyEnvironmentInputEnvelope, {nullable:true})
    createMany?: FileCreateManyEnvironmentInputEnvelope;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    connect?: Array<FileWhereUniqueInput>;
}
