import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EvaluationCriteriaWhereInput } from './evaluation-criteria-where.input';
import { EvaluationCriteriaOrderByWithRelationInput } from './evaluation-criteria-order-by-with-relation.input';
import { EvaluationCriteriaWhereUniqueInput } from './evaluation-criteria-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EvaluationCriteriaScalarFieldEnum } from './evaluation-criteria-scalar-field.enum';

@ArgsType()
export class FindManyEvaluationCriteriaArgs {

    @Field(() => EvaluationCriteriaWhereInput, {nullable:true})
    where?: EvaluationCriteriaWhereInput;

    @Field(() => [EvaluationCriteriaOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EvaluationCriteriaOrderByWithRelationInput>;

    @Field(() => EvaluationCriteriaWhereUniqueInput, {nullable:true})
    cursor?: EvaluationCriteriaWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [EvaluationCriteriaScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof EvaluationCriteriaScalarFieldEnum>;
}
