import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnvironmentPermissionCreateManyUserInput } from './environment-permission-create-many-user.input';

@InputType()
export class EnvironmentPermissionCreateManyUserInputEnvelope {

    @Field(() => [EnvironmentPermissionCreateManyUserInput], {nullable:false})
    data!: Array<EnvironmentPermissionCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
