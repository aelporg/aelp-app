import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EnvironmentWhereInput } from './environment-where.input';

@ArgsType()
export class DeleteManyEnvironmentArgs {

    @Field(() => EnvironmentWhereInput, {nullable:true})
    where?: EnvironmentWhereInput;
}
