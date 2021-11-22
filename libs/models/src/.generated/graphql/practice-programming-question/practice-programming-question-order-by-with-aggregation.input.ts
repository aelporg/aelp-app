import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PracticeProgrammingQuestionCountOrderByAggregateInput } from './practice-programming-question-count-order-by-aggregate.input';
import { PracticeProgrammingQuestionMaxOrderByAggregateInput } from './practice-programming-question-max-order-by-aggregate.input';
import { PracticeProgrammingQuestionMinOrderByAggregateInput } from './practice-programming-question-min-order-by-aggregate.input';

@InputType()
export class PracticeProgrammingQuestionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    questionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    diffculty?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    classroomId?: keyof typeof SortOrder;

    @Field(() => PracticeProgrammingQuestionCountOrderByAggregateInput, {nullable:true})
    _count?: PracticeProgrammingQuestionCountOrderByAggregateInput;

    @Field(() => PracticeProgrammingQuestionMaxOrderByAggregateInput, {nullable:true})
    _max?: PracticeProgrammingQuestionMaxOrderByAggregateInput;

    @Field(() => PracticeProgrammingQuestionMinOrderByAggregateInput, {nullable:true})
    _min?: PracticeProgrammingQuestionMinOrderByAggregateInput;
}
