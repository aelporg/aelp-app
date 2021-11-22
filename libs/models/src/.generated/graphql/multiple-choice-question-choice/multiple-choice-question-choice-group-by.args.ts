import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MultipleChoiceQuestionChoiceWhereInput } from './multiple-choice-question-choice-where.input';
import { MultipleChoiceQuestionChoiceOrderByWithAggregationInput } from './multiple-choice-question-choice-order-by-with-aggregation.input';
import { MultipleChoiceQuestionChoiceScalarFieldEnum } from './multiple-choice-question-choice-scalar-field.enum';
import { MultipleChoiceQuestionChoiceScalarWhereWithAggregatesInput } from './multiple-choice-question-choice-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MultipleChoiceQuestionChoiceCountAggregateInput } from './multiple-choice-question-choice-count-aggregate.input';
import { MultipleChoiceQuestionChoiceMinAggregateInput } from './multiple-choice-question-choice-min-aggregate.input';
import { MultipleChoiceQuestionChoiceMaxAggregateInput } from './multiple-choice-question-choice-max-aggregate.input';

@ArgsType()
export class MultipleChoiceQuestionChoiceGroupByArgs {

    @Field(() => MultipleChoiceQuestionChoiceWhereInput, {nullable:true})
    where?: MultipleChoiceQuestionChoiceWhereInput;

    @Field(() => [MultipleChoiceQuestionChoiceOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MultipleChoiceQuestionChoiceOrderByWithAggregationInput>;

    @Field(() => [MultipleChoiceQuestionChoiceScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MultipleChoiceQuestionChoiceScalarFieldEnum>;

    @Field(() => MultipleChoiceQuestionChoiceScalarWhereWithAggregatesInput, {nullable:true})
    having?: MultipleChoiceQuestionChoiceScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MultipleChoiceQuestionChoiceCountAggregateInput, {nullable:true})
    _count?: MultipleChoiceQuestionChoiceCountAggregateInput;

    @Field(() => MultipleChoiceQuestionChoiceMinAggregateInput, {nullable:true})
    _min?: MultipleChoiceQuestionChoiceMinAggregateInput;

    @Field(() => MultipleChoiceQuestionChoiceMaxAggregateInput, {nullable:true})
    _max?: MultipleChoiceQuestionChoiceMaxAggregateInput;
}
