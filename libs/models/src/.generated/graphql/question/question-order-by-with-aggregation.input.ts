import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { QuestionCountOrderByAggregateInput } from './question-count-order-by-aggregate.input';
import { QuestionAvgOrderByAggregateInput } from './question-avg-order-by-aggregate.input';
import { QuestionMaxOrderByAggregateInput } from './question-max-order-by-aggregate.input';
import { QuestionMinOrderByAggregateInput } from './question-min-order-by-aggregate.input';
import { QuestionSumOrderByAggregateInput } from './question-sum-order-by-aggregate.input';

@InputType()
export class QuestionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    questionType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    points?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    multipleChoiceQuestionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    programmingQuestionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    assessmentId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => QuestionCountOrderByAggregateInput, {nullable:true})
    _count?: QuestionCountOrderByAggregateInput;

    @Field(() => QuestionAvgOrderByAggregateInput, {nullable:true})
    _avg?: QuestionAvgOrderByAggregateInput;

    @Field(() => QuestionMaxOrderByAggregateInput, {nullable:true})
    _max?: QuestionMaxOrderByAggregateInput;

    @Field(() => QuestionMinOrderByAggregateInput, {nullable:true})
    _min?: QuestionMinOrderByAggregateInput;

    @Field(() => QuestionSumOrderByAggregateInput, {nullable:true})
    _sum?: QuestionSumOrderByAggregateInput;
}
