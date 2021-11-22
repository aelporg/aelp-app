import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MultipleChoiceQuestionAnswerWhereInput } from './multiple-choice-question-answer-where.input';
import { MultipleChoiceQuestionAnswerOrderByWithAggregationInput } from './multiple-choice-question-answer-order-by-with-aggregation.input';
import { MultipleChoiceQuestionAnswerScalarFieldEnum } from './multiple-choice-question-answer-scalar-field.enum';
import { MultipleChoiceQuestionAnswerScalarWhereWithAggregatesInput } from './multiple-choice-question-answer-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MultipleChoiceQuestionAnswerCountAggregateInput } from './multiple-choice-question-answer-count-aggregate.input';
import { MultipleChoiceQuestionAnswerMinAggregateInput } from './multiple-choice-question-answer-min-aggregate.input';
import { MultipleChoiceQuestionAnswerMaxAggregateInput } from './multiple-choice-question-answer-max-aggregate.input';

@ArgsType()
export class MultipleChoiceQuestionAnswerGroupByArgs {

    @Field(() => MultipleChoiceQuestionAnswerWhereInput, {nullable:true})
    where?: MultipleChoiceQuestionAnswerWhereInput;

    @Field(() => [MultipleChoiceQuestionAnswerOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MultipleChoiceQuestionAnswerOrderByWithAggregationInput>;

    @Field(() => [MultipleChoiceQuestionAnswerScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MultipleChoiceQuestionAnswerScalarFieldEnum>;

    @Field(() => MultipleChoiceQuestionAnswerScalarWhereWithAggregatesInput, {nullable:true})
    having?: MultipleChoiceQuestionAnswerScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MultipleChoiceQuestionAnswerCountAggregateInput, {nullable:true})
    _count?: MultipleChoiceQuestionAnswerCountAggregateInput;

    @Field(() => MultipleChoiceQuestionAnswerMinAggregateInput, {nullable:true})
    _min?: MultipleChoiceQuestionAnswerMinAggregateInput;

    @Field(() => MultipleChoiceQuestionAnswerMaxAggregateInput, {nullable:true})
    _max?: MultipleChoiceQuestionAnswerMaxAggregateInput;
}
