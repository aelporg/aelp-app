import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EnvironmentCreateManyInput } from './environment-create-many.input';

@ArgsType()
export class CreateManyEnvironmentArgs {

    @Field(() => [EnvironmentCreateManyInput], {nullable:false})
    data!: Array<EnvironmentCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
