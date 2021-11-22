import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnvironmentCreateWithoutFilesInput } from './environment-create-without-files.input';
import { EnvironmentCreateOrConnectWithoutFilesInput } from './environment-create-or-connect-without-files.input';
import { EnvironmentWhereUniqueInput } from './environment-where-unique.input';

@InputType()
export class EnvironmentCreateNestedOneWithoutFilesInput {

    @Field(() => EnvironmentCreateWithoutFilesInput, {nullable:true})
    create?: EnvironmentCreateWithoutFilesInput;

    @Field(() => EnvironmentCreateOrConnectWithoutFilesInput, {nullable:true})
    connectOrCreate?: EnvironmentCreateOrConnectWithoutFilesInput;

    @Field(() => EnvironmentWhereUniqueInput, {nullable:true})
    connect?: EnvironmentWhereUniqueInput;
}
