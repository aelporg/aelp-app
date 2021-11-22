import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { InputOutputEvaluationCriteriaCountAggregate } from './input-output-evaluation-criteria-count-aggregate.output';
import { InputOutputEvaluationCriteriaMinAggregate } from './input-output-evaluation-criteria-min-aggregate.output';
import { InputOutputEvaluationCriteriaMaxAggregate } from './input-output-evaluation-criteria-max-aggregate.output';

@ObjectType()
export class InputOutputEvaluationCriteriaGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => [String], {nullable:true})
    inputs?: Array<string>;

    @Field(() => [String], {nullable:true})
    outputs?: Array<string>;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => InputOutputEvaluationCriteriaCountAggregate, {nullable:true})
    _count?: InputOutputEvaluationCriteriaCountAggregate;

    @Field(() => InputOutputEvaluationCriteriaMinAggregate, {nullable:true})
    _min?: InputOutputEvaluationCriteriaMinAggregate;

    @Field(() => InputOutputEvaluationCriteriaMaxAggregate, {nullable:true})
    _max?: InputOutputEvaluationCriteriaMaxAggregate;
}
