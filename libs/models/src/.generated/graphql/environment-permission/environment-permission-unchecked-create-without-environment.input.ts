import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnvironmentPermissionLevel } from '../prisma/environment-permission-level.enum';

@InputType()
export class EnvironmentPermissionUncheckedCreateWithoutEnvironmentInput {

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => EnvironmentPermissionLevel, {nullable:false})
    permission!: keyof typeof EnvironmentPermissionLevel;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
