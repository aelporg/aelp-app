import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProgrammingQuestionAnswerCountOrderByAggregateInput } from './programming-question-answer-count-order-by-aggregate.input';
import { ProgrammingQuestionAnswerMaxOrderByAggregateInput } from './programming-question-answer-max-order-by-aggregate.input';
import { ProgrammingQuestionAnswerMinOrderByAggregateInput } from './programming-question-answer-min-order-by-aggregate.input';

@InputType()
export class ProgrammingQuestionAnswerOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    envirnmentId?: keyof typeof SortOrder;

    @Field(() => ProgrammingQuestionAnswerCountOrderByAggregateInput, {nullable:true})
    _count?: ProgrammingQuestionAnswerCountOrderByAggregateInput;

    @Field(() => ProgrammingQuestionAnswerMaxOrderByAggregateInput, {nullable:true})
    _max?: ProgrammingQuestionAnswerMaxOrderByAggregateInput;

    @Field(() => ProgrammingQuestionAnswerMinOrderByAggregateInput, {nullable:true})
    _min?: ProgrammingQuestionAnswerMinOrderByAggregateInput;
}
