import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {

    @Field(() => Int, {nullable:false})
    refreshTokens!: number;

    @Field(() => Int, {nullable:false})
    linkedAccounts!: number;

    @Field(() => Int, {nullable:false})
    joinedClassrooms!: number;

    @Field(() => Int, {nullable:false})
    assessmentAnswers!: number;

    @Field(() => Int, {nullable:false})
    envirnmentPermissions!: number;

    @Field(() => Int, {nullable:false})
    competitionsJoined!: number;

    @Field(() => Int, {nullable:false})
    createdCompetitions!: number;
}
