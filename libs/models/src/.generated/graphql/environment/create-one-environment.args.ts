import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EnvironmentCreateInput } from './environment-create.input';

@ArgsType()
export class CreateOneEnvironmentArgs {

    @Field(() => EnvironmentCreateInput, {nullable:false})
    data!: EnvironmentCreateInput;
}
