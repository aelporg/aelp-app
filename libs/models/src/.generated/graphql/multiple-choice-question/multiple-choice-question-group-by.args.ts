import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MultipleChoiceQuestionWhereInput } from './multiple-choice-question-where.input';
import { MultipleChoiceQuestionOrderByWithAggregationInput } from './multiple-choice-question-order-by-with-aggregation.input';
import { MultipleChoiceQuestionScalarFieldEnum } from './multiple-choice-question-scalar-field.enum';
import { MultipleChoiceQuestionScalarWhereWithAggregatesInput } from './multiple-choice-question-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MultipleChoiceQuestionCountAggregateInput } from './multiple-choice-question-count-aggregate.input';
import { MultipleChoiceQuestionMinAggregateInput } from './multiple-choice-question-min-aggregate.input';
import { MultipleChoiceQuestionMaxAggregateInput } from './multiple-choice-question-max-aggregate.input';

@ArgsType()
export class MultipleChoiceQuestionGroupByArgs {

    @Field(() => MultipleChoiceQuestionWhereInput, {nullable:true})
    where?: MultipleChoiceQuestionWhereInput;

    @Field(() => [MultipleChoiceQuestionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MultipleChoiceQuestionOrderByWithAggregationInput>;

    @Field(() => [MultipleChoiceQuestionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MultipleChoiceQuestionScalarFieldEnum>;

    @Field(() => MultipleChoiceQuestionScalarWhereWithAggregatesInput, {nullable:true})
    having?: MultipleChoiceQuestionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MultipleChoiceQuestionCountAggregateInput, {nullable:true})
    _count?: MultipleChoiceQuestionCountAggregateInput;

    @Field(() => MultipleChoiceQuestionMinAggregateInput, {nullable:true})
    _min?: MultipleChoiceQuestionMinAggregateInput;

    @Field(() => MultipleChoiceQuestionMaxAggregateInput, {nullable:true})
    _max?: MultipleChoiceQuestionMaxAggregateInput;
}
