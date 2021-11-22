import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EnvironmentUpdateManyMutationInput } from './environment-update-many-mutation.input';
import { EnvironmentWhereInput } from './environment-where.input';

@ArgsType()
export class UpdateManyEnvironmentArgs {

    @Field(() => EnvironmentUpdateManyMutationInput, {nullable:false})
    data!: EnvironmentUpdateManyMutationInput;

    @Field(() => EnvironmentWhereInput, {nullable:true})
    where?: EnvironmentWhereInput;
}
