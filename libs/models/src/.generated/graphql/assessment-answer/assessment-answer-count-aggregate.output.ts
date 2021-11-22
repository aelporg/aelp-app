import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AssessmentAnswerCountAggregate {

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    assessmentId!: number;

    @Field(() => Int, {nullable:false})
    reviewed!: number;

    @Field(() => Int, {nullable:false})
    submittedAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    recPoints!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
