import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnvironmentWhereUniqueInput } from './environment-where-unique.input';
import { EnvironmentCreateWithoutAnswersInput } from './environment-create-without-answers.input';

@InputType()
export class EnvironmentCreateOrConnectWithoutAnswersInput {

    @Field(() => EnvironmentWhereUniqueInput, {nullable:false})
    where!: EnvironmentWhereUniqueInput;

    @Field(() => EnvironmentCreateWithoutAnswersInput, {nullable:false})
    create!: EnvironmentCreateWithoutAnswersInput;
}
