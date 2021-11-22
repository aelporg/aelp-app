import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MultipleChoiceQuestionChoiceCountOrderByAggregateInput } from './multiple-choice-question-choice-count-order-by-aggregate.input';
import { MultipleChoiceQuestionChoiceMaxOrderByAggregateInput } from './multiple-choice-question-choice-max-order-by-aggregate.input';
import { MultipleChoiceQuestionChoiceMinOrderByAggregateInput } from './multiple-choice-question-choice-min-order-by-aggregate.input';

@InputType()
export class MultipleChoiceQuestionChoiceOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    choice?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    questionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    correct?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => MultipleChoiceQuestionChoiceCountOrderByAggregateInput, {nullable:true})
    _count?: MultipleChoiceQuestionChoiceCountOrderByAggregateInput;

    @Field(() => MultipleChoiceQuestionChoiceMaxOrderByAggregateInput, {nullable:true})
    _max?: MultipleChoiceQuestionChoiceMaxOrderByAggregateInput;

    @Field(() => MultipleChoiceQuestionChoiceMinOrderByAggregateInput, {nullable:true})
    _min?: MultipleChoiceQuestionChoiceMinOrderByAggregateInput;
}
