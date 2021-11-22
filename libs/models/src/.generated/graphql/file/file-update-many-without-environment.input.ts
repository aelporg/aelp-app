import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutEnvironmentInput } from './file-create-without-environment.input';
import { FileCreateOrConnectWithoutEnvironmentInput } from './file-create-or-connect-without-environment.input';
import { FileUpsertWithWhereUniqueWithoutEnvironmentInput } from './file-upsert-with-where-unique-without-environment.input';
import { FileCreateManyEnvironmentInputEnvelope } from './file-create-many-environment-input-envelope.input';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileUpdateWithWhereUniqueWithoutEnvironmentInput } from './file-update-with-where-unique-without-environment.input';
import { FileUpdateManyWithWhereWithoutEnvironmentInput } from './file-update-many-with-where-without-environment.input';
import { FileScalarWhereInput } from './file-scalar-where.input';

@InputType()
export class FileUpdateManyWithoutEnvironmentInput {

    @Field(() => [FileCreateWithoutEnvironmentInput], {nullable:true})
    create?: Array<FileCreateWithoutEnvironmentInput>;

    @Field(() => [FileCreateOrConnectWithoutEnvironmentInput], {nullable:true})
    connectOrCreate?: Array<FileCreateOrConnectWithoutEnvironmentInput>;

    @Field(() => [FileUpsertWithWhereUniqueWithoutEnvironmentInput], {nullable:true})
    upsert?: Array<FileUpsertWithWhereUniqueWithoutEnvironmentInput>;

    @Field(() => FileCreateManyEnvironmentInputEnvelope, {nullable:true})
    createMany?: FileCreateManyEnvironmentInputEnvelope;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    set?: Array<FileWhereUniqueInput>;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    disconnect?: Array<FileWhereUniqueInput>;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    delete?: Array<FileWhereUniqueInput>;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    connect?: Array<FileWhereUniqueInput>;

    @Field(() => [FileUpdateWithWhereUniqueWithoutEnvironmentInput], {nullable:true})
    update?: Array<FileUpdateWithWhereUniqueWithoutEnvironmentInput>;

    @Field(() => [FileUpdateManyWithWhereWithoutEnvironmentInput], {nullable:true})
    updateMany?: Array<FileUpdateManyWithWhereWithoutEnvironmentInput>;

    @Field(() => [FileScalarWhereInput], {nullable:true})
    deleteMany?: Array<FileScalarWhereInput>;
}
