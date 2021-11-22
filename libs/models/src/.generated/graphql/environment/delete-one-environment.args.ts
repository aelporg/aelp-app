import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EnvironmentWhereUniqueInput } from './environment-where-unique.input';

@ArgsType()
export class DeleteOneEnvironmentArgs {

    @Field(() => EnvironmentWhereUniqueInput, {nullable:false})
    where!: EnvironmentWhereUniqueInput;
}
