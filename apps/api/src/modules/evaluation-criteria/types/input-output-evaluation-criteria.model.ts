import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { EvaluationCriteria } from './evaluation-criteria.model';
import { InputOutputEvaluationCriteriaCount } from './input-output-evaluation-criteria-count.output';

@ObjectType()
export class InputOutputEvaluationCriteria {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => [String], {nullable:true})
    inputs!: Array<string>;

    @Field(() => [String], {nullable:true})
    outputs!: Array<string>;

    @Field(() => [EvaluationCriteria], {nullable:true})
    baseCriteria?: Array<EvaluationCriteria>;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => InputOutputEvaluationCriteriaCount, {nullable:false})
    _count?: InputOutputEvaluationCriteriaCount;
}
