import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EnvironmentWhereUniqueInput } from './environment-where-unique.input';
import { EnvironmentCreateInput } from './environment-create.input';
import { EnvironmentUpdateInput } from './environment-update.input';

@ArgsType()
export class UpsertOneEnvironmentArgs {

    @Field(() => EnvironmentWhereUniqueInput, {nullable:false})
    where!: EnvironmentWhereUniqueInput;

    @Field(() => EnvironmentCreateInput, {nullable:false})
    create!: EnvironmentCreateInput;

    @Field(() => EnvironmentUpdateInput, {nullable:false})
    update!: EnvironmentUpdateInput;
}
