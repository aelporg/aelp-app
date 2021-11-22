import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class EvaluationResultCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    evaluationCriteriaId!: number;

    @Field(() => Int, {nullable:false})
    evaulationPoints!: number;

    @Field(() => Int, {nullable:false})
    inputOutputEvaluationResultId!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    programmingQuestionAnswerId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
