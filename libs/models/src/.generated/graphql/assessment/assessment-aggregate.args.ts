import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssessmentWhereInput } from './assessment-where.input';
import { AssessmentOrderByWithRelationInput } from './assessment-order-by-with-relation.input';
import { AssessmentWhereUniqueInput } from './assessment-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AssessmentCountAggregateInput } from './assessment-count-aggregate.input';
import { AssessmentAvgAggregateInput } from './assessment-avg-aggregate.input';
import { AssessmentSumAggregateInput } from './assessment-sum-aggregate.input';
import { AssessmentMinAggregateInput } from './assessment-min-aggregate.input';
import { AssessmentMaxAggregateInput } from './assessment-max-aggregate.input';

@ArgsType()
export class AssessmentAggregateArgs {

    @Field(() => AssessmentWhereInput, {nullable:true})
    where?: AssessmentWhereInput;

    @Field(() => [AssessmentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AssessmentOrderByWithRelationInput>;

    @Field(() => AssessmentWhereUniqueInput, {nullable:true})
    cursor?: AssessmentWhereUniqueInput;

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
