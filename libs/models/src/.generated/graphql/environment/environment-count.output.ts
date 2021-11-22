import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class EnvironmentCount {

    @Field(() => Int, {nullable:false})
    files!: number;

    @Field(() => Int, {nullable:false})
    answers!: number;

    @Field(() => Int, {nullable:false})
    permissions!: number;
}
