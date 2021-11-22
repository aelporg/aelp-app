import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AssessmentCountOrderByAggregateInput } from './assessment-count-order-by-aggregate.input';
import { AssessmentAvgOrderByAggregateInput } from './assessment-avg-order-by-aggregate.input';
import { AssessmentMaxOrderByAggregateInput } from './assessment-max-order-by-aggregate.input';
import { AssessmentMinOrderByAggregateInput } from './assessment-min-order-by-aggregate.input';
import { AssessmentSumOrderByAggregateInput } from './assessment-sum-order-by-aggregate.input';

@InputType()
export class AssessmentOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    assessmentType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    startTime?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    endTime?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    submitAfterEnd?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    totalPoints?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    classroomId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    competitionId?: keyof typeof SortOrder;

    @Field(() => AssessmentCountOrderByAggregateInput, {nullable:true})
    _count?: AssessmentCountOrderByAggregateInput;

    @Field(() => AssessmentAvgOrderByAggregateInput, {nullable:true})
    _avg?: AssessmentAvgOrderByAggregateInput;

    @Field(() => AssessmentMaxOrderByAggregateInput, {nullable:true})
    _max?: AssessmentMaxOrderByAggregateInput;

    @Field(() => AssessmentMinOrderByAggregateInput, {nullable:true})
    _min?: AssessmentMinOrderByAggregateInput;

    @Field(() => AssessmentSumOrderByAggregateInput, {nullable:true})
    _sum?: AssessmentSumOrderByAggregateInput;
}
