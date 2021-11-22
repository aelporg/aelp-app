import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EvaluationCriteriaType } from '../prisma/evaluation-criteria-type.enum';
import { Int } from '@nestjs/graphql';
import { EvaluationCriteriaCountAggregate } from './evaluation-criteria-count-aggregate.output';
import { EvaluationCriteriaAvgAggregate } from './evaluation-criteria-avg-aggregate.output';
import { EvaluationCriteriaSumAggregate } from './evaluation-criteria-sum-aggregate.output';
import { EvaluationCriteriaMinAggregate } from './evaluation-criteria-min-aggregate.output';
import { EvaluationCriteriaMaxAggregate } from './evaluation-criteria-max-aggregate.output';

@ObjectType()
export class EvaluationCriteriaGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => EvaluationCriteriaType, {nullable:false})
    type!: keyof typeof EvaluationCriteriaType;

    @Field(() => Int, {nullable:false})
    totalPoints!: number;

    @Field(() => String, {nullable:true})
    inputOutputEvalCritId?: string;

    @Field(() => Boolean, {nullable:false})
    requiredToPass!: boolean;

    @Field(() => String, {nullable:false})
    programmingQuestionId!: string;

    @Field(() => Boolean, {nullable:false})
    hidden!: boolean;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => EvaluationCriteriaCountAggregate, {nullable:true})
    _count?: EvaluationCriteriaCountAggregate;

    @Field(() => EvaluationCriteriaAvgAggregate, {nullable:true})
    _avg?: EvaluationCriteriaAvgAggregate;

    @Field(() => EvaluationCriteriaSumAggregate, {nullable:true})
    _sum?: EvaluationCriteriaSumAggregate;

    @Field(() => EvaluationCriteriaMinAggregate, {nullable:true})
    _min?: EvaluationCriteriaMinAggregate;

    @Field(() => EvaluationCriteriaMaxAggregate, {nullable:true})
    _max?: EvaluationCriteriaMaxAggregate;
}
