import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnvironmentWhereUniqueInput } from './environment-where-unique.input';
import { EnvironmentCreateWithoutFilesInput } from './environment-create-without-files.input';

@InputType()
export class EnvironmentCreateOrConnectWithoutFilesInput {

    @Field(() => EnvironmentWhereUniqueInput, {nullable:false})
    where!: EnvironmentWhereUniqueInput;

    @Field(() => EnvironmentCreateWithoutFilesInput, {nullable:false})
    create!: EnvironmentCreateWithoutFilesInput;
}
