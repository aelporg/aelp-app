import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SingleFileProgrammingQuestionCountOrderByAggregateInput } from './single-file-programming-question-count-order-by-aggregate.input';
import { SingleFileProgrammingQuestionMaxOrderByAggregateInput } from './single-file-programming-question-max-order-by-aggregate.input';
import { SingleFileProgrammingQuestionMinOrderByAggregateInput } from './single-file-programming-question-min-order-by-aggregate.input';

@InputType()
export class SingleFileProgrammingQuestionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    defaultCode?: keyof typeof SortOrder;

    @Field(() => SingleFileProgrammingQuestionCountOrderByAggregateInput, {nullable:true})
    _count?: SingleFileProgrammingQuestionCountOrderByAggregateInput;

    @Field(() => SingleFileProgrammingQuestionMaxOrderByAggregateInput, {nullable:true})
    _max?: SingleFileProgrammingQuestionMaxOrderByAggregateInput;

    @Field(() => SingleFileProgrammingQuestionMinOrderByAggregateInput, {nullable:true})
    _min?: SingleFileProgrammingQuestionMinOrderByAggregateInput;
}
