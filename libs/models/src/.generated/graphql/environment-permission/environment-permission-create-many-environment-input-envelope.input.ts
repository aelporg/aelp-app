import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnvironmentPermissionCreateManyEnvironmentInput } from './environment-permission-create-many-environment.input';

@InputType()
export class EnvironmentPermissionCreateManyEnvironmentInputEnvelope {

    @Field(() => [EnvironmentPermissionCreateManyEnvironmentInput], {nullable:false})
    data!: Array<EnvironmentPermissionCreateManyEnvironmentInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
