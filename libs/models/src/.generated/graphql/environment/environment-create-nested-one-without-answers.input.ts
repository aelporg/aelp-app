import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnvironmentCreateWithoutAnswersInput } from './environment-create-without-answers.input';
import { EnvironmentCreateOrConnectWithoutAnswersInput } from './environment-create-or-connect-without-answers.input';
import { EnvironmentWhereUniqueInput } from './environment-where-unique.input';

@InputType()
export class EnvironmentCreateNestedOneWithoutAnswersInput {

    @Field(() => EnvironmentCreateWithoutAnswersInput, {nullable:true})
    create?: EnvironmentCreateWithoutAnswersInput;

    @Field(() => EnvironmentCreateOrConnectWithoutAnswersInput, {nullable:true})
    connectOrCreate?: EnvironmentCreateOrConnectWithoutAnswersInput;

    @Field(() => EnvironmentWhereUniqueInput, {nullable:true})
    connect?: EnvironmentWhereUniqueInput;
}
