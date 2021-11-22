import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EnvironmentUpdateInput } from './environment-update.input';
import { EnvironmentWhereUniqueInput } from './environment-where-unique.input';

@ArgsType()
export class UpdateOneEnvironmentArgs {

    @Field(() => EnvironmentUpdateInput, {nullable:false})
    data!: EnvironmentUpdateInput;

    @Field(() => EnvironmentWhereUniqueInput, {nullable:false})
    where!: EnvironmentWhereUniqueInput;
}
