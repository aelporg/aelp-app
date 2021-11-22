import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProgrammingQuestionCountOrderByAggregateInput } from './programming-question-count-order-by-aggregate.input';
import { ProgrammingQuestionMaxOrderByAggregateInput } from './programming-question-max-order-by-aggregate.input';
import { ProgrammingQuestionMinOrderByAggregateInput } from './programming-question-min-order-by-aggregate.input';

@InputType()
export class ProgrammingQuestionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    statementMrkdwn?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    statementCompiled?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    programmingQuestionType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    singleFileProgrammingQuestionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    multipleFilesProgrammingQuestionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => ProgrammingQuestionCountOrderByAggregateInput, {nullable:true})
    _count?: ProgrammingQuestionCountOrderByAggregateInput;

    @Field(() => ProgrammingQuestionMaxOrderByAggregateInput, {nullable:true})
    _max?: ProgrammingQuestionMaxOrderByAggregateInput;

    @Field(() => ProgrammingQuestionMinOrderByAggregateInput, {nullable:true})
    _min?: ProgrammingQuestionMinOrderByAggregateInput;
}
