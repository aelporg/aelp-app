import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class EnvironmentPermissionEnvironmentIdUserIdCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    environmentId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;
}
