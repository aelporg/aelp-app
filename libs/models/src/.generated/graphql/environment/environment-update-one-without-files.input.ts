import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnvironmentCreateWithoutFilesInput } from './environment-create-without-files.input';
import { EnvironmentCreateOrConnectWithoutFilesInput } from './environment-create-or-connect-without-files.input';
import { EnvironmentUpsertWithoutFilesInput } from './environment-upsert-without-files.input';
import { EnvironmentWhereUniqueInput } from './environment-where-unique.input';
import { EnvironmentUpdateWithoutFilesInput } from './environment-update-without-files.input';

@InputType()
export class EnvironmentUpdateOneWithoutFilesInput {

    @Field(() => EnvironmentCreateWithoutFilesInput, {nullable:true})
    create?: EnvironmentCreateWithoutFilesInput;

    @Field(() => EnvironmentCreateOrConnectWithoutFilesInput, {nullable:true})
    connectOrCreate?: EnvironmentCreateOrConnectWithoutFilesInput;

    @Field(() => EnvironmentUpsertWithoutFilesInput, {nullable:true})
    upsert?: EnvironmentUpsertWithoutFilesInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => EnvironmentWhereUniqueInput, {nullable:true})
    connect?: EnvironmentWhereUniqueInput;

    @Field(() => EnvironmentUpdateWithoutFilesInput, {nullable:true})
    update?: EnvironmentUpdateWithoutFilesInput;
}
