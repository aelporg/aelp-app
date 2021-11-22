import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Environment } from '../environment/environment.model';
import { EnvironmentPermissionLevel } from '../prisma/environment-permission-level.enum';

@ObjectType()
export class EnvironmentPermission {

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Environment, {nullable:false})
    environment?: Environment;

    @Field(() => String, {nullable:false})
    environmentId!: string;

    @Field(() => EnvironmentPermissionLevel, {nullable:false})
    permission!: keyof typeof EnvironmentPermissionLevel;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
