import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnvironmentCreateWithoutAnswersInput } from './environment-create-without-answers.input';
import { EnvironmentCreateOrConnectWithoutAnswersInput } from './environment-create-or-connect-without-answers.input';
import { EnvironmentUpsertWithoutAnswersInput } from './environment-upsert-without-answers.input';
import { EnvironmentWhereUniqueInput } from './environment-where-unique.input';
import { EnvironmentUpdateWithoutAnswersInput } from './environment-update-without-answers.input';

@InputType()
export class EnvironmentUpdateOneRequiredWithoutAnswersInput {

    @Field(() => EnvironmentCreateWithoutAnswersInput, {nullable:true})
    create?: EnvironmentCreateWithoutAnswersInput;

    @Field(() => EnvironmentCreateOrConnectWithoutAnswersInput, {nullable:true})
    connectOrCreate?: EnvironmentCreateOrConnectWithoutAnswersInput;

    @Field(() => EnvironmentUpsertWithoutAnswersInput, {nullable:true})
    upsert?: EnvironmentUpsertWithoutAnswersInput;

    @Field(() => EnvironmentWhereUniqueInput, {nullable:true})
    connect?: EnvironmentWhereUniqueInput;

    @Field(() => EnvironmentUpdateWithoutAnswersInput, {nullable:true})
    update?: EnvironmentUpdateWithoutAnswersInput;
}
