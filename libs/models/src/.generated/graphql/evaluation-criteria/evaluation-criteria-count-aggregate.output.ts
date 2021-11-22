import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class EvaluationCriteriaCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    type!: number;

    @Field(() => Int, {nullable:false})
    totalPoints!: number;

    @Field(() => Int, {nullable:false})
    inputOutputEvalCritId!: number;

    @Field(() => Int, {nullable:false})
    requiredToPass!: number;

    @Field(() => Int, {nullable:false})
    programmingQuestionId!: number;

    @Field(() => Int, {nullable:false})
    hidden!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
