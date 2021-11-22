import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MultipleFilesProgrammingQuestionCountOrderByAggregateInput } from './multiple-files-programming-question-count-order-by-aggregate.input';
import { MultipleFilesProgrammingQuestionMaxOrderByAggregateInput } from './multiple-files-programming-question-max-order-by-aggregate.input';
import { MultipleFilesProgrammingQuestionMinOrderByAggregateInput } from './multiple-files-programming-question-min-order-by-aggregate.input';

@InputType()
export class MultipleFilesProgrammingQuestionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    languageId?: keyof typeof SortOrder;

    @Field(() => MultipleFilesProgrammingQuestionCountOrderByAggregateInput, {nullable:true})
    _count?: MultipleFilesProgrammingQuestionCountOrderByAggregateInput;

    @Field(() => MultipleFilesProgrammingQuestionMaxOrderByAggregateInput, {nullable:true})
    _max?: MultipleFilesProgrammingQuestionMaxOrderByAggregateInput;

    @Field(() => MultipleFilesProgrammingQuestionMinOrderByAggregateInput, {nullable:true})
    _min?: MultipleFilesProgrammingQuestionMinOrderByAggregateInput;
}
