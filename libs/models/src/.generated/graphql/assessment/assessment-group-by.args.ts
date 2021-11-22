import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssessmentWhereInput } from './assessment-where.input';
import { AssessmentOrderByWithAggregationInput } from './assessment-order-by-with-aggregation.input';
import { AssessmentScalarFieldEnum } from './assessment-scalar-field.enum';
import { AssessmentScalarWhereWithAggregatesInput } from './assessment-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AssessmentCountAggregateInput } from './assessment-count-aggregate.input';
import { AssessmentAvgAggregateInput } from './assessment-avg-aggregate.input';
import { AssessmentSumAggregateInput } from './assessment-sum-aggregate.input';
import { AssessmentMinAggregateInput } from './assessment-min-aggregate.input';
import { AssessmentMaxAggregateInput } from './assessment-max-aggregate.input';

@ArgsType()
export class AssessmentGroupByArgs {

    @Field(() => AssessmentWhereInput, {nullable:true})
    where?: AssessmentWhereInput;

    @Field(() => [AssessmentOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AssessmentOrderByWithAggregationInput>;

    @Field(() => [AssessmentScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AssessmentScalarFieldEnum>;

    @Field(() => AssessmentScalarWhereWithAggregatesInput, {nullable:true})
    having?: AssessmentScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AssessmentCountAggregateInput, {nullable:true})
    _count?: AssessmentCountAggregateInput;

    @Field(() => AssessmentAvgAggregateInput, {nullable:true})
    _avg?: AssessmentAvgAggregateInput;

    @Field(() => AssessmentSumAggregateInput, {nullable:true})
    _sum?: AssessmentSumAggregateInput;

    @Field(() => AssessmentMinAggregateInput, {nullable:true})
    _min?: AssessmentMinAggregateInput;

    @Field(() => AssessmentMaxAggregateInput, {nullable:true})
    _max?: AssessmentMaxAggregateInput;
}
