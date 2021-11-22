import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EnvironmentPermissionLevel } from '../prisma/environment-permission-level.enum';

@ObjectType()
export class EnvironmentPermissionMinAggregate {

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => String, {nullable:true})
    environmentId?: string;

    @Field(() => EnvironmentPermissionLevel, {nullable:true})
    permission?: keyof typeof EnvironmentPermissionLevel;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
