import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EnvironmentPermissionCreateManyInput } from './environment-permission-create-many.input';

@ArgsType()
export class CreateManyEnvironmentPermissionArgs {

    @Field(() => [EnvironmentPermissionCreateManyInput], {nullable:false})
    data!: Array<EnvironmentPermissionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
