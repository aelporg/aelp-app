import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MultipleChoiceQuestionCountOrderByAggregateInput } from './multiple-choice-question-count-order-by-aggregate.input';
import { MultipleChoiceQuestionMaxOrderByAggregateInput } from './multiple-choice-question-max-order-by-aggregate.input';
import { MultipleChoiceQuestionMinOrderByAggregateInput } from './multiple-choice-question-min-order-by-aggregate.input';

@InputType()
export class MultipleChoiceQuestionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => MultipleChoiceQuestionCountOrderByAggregateInput, {nullable:true})
    _count?: MultipleChoiceQuestionCountOrderByAggregateInput;

    @Field(() => MultipleChoiceQuestionMaxOrderByAggregateInput, {nullable:true})
    _max?: MultipleChoiceQuestionMaxOrderByAggregateInput;

    @Field(() => MultipleChoiceQuestionMinOrderByAggregateInput, {nullable:true})
    _min?: MultipleChoiceQuestionMinOrderByAggregateInput;
}
