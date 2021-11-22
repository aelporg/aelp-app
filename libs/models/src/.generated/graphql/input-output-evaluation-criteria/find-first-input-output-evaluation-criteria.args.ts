import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InputOutputEvaluationCriteriaWhereInput } from './input-output-evaluation-criteria-where.input';
import { InputOutputEvaluationCriteriaOrderByWithRelationInput } from './input-output-evaluation-criteria-order-by-with-relation.input';
import { InputOutputEvaluationCriteriaWhereUniqueInput } from './input-output-evaluation-criteria-where-unique.input';
import { Int } from '@nestjs/graphql';
import { InputOutputEvaluationCriteriaScalarFieldEnum } from './input-output-evaluation-criteria-scalar-field.enum';

@ArgsType()
export class FindFirstInputOutputEvaluationCriteriaArgs {

    @Field(() => InputOutputEvaluationCriteriaWhereInput, {nullable:true})
    where?: InputOutputEvaluationCriteriaWhereInput;

    @Field(() => [InputOutputEvaluationCriteriaOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<InputOutputEvaluationCriteriaOrderByWithRelationInput>;

    @Field(() => InputOutputEvaluationCriteriaWhereUniqueInput, {nullable:true})
    cursor?: InputOutputEvaluationCriteriaWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [InputOutputEvaluationCriteriaScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof InputOutputEvaluationCriteriaScalarFieldEnum>;
}
