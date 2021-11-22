import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MultipleChoiceQuestionChoiceWhereInput } from './multiple-choice-question-choice-where.input';
import { MultipleChoiceQuestionChoiceOrderByWithRelationInput } from './multiple-choice-question-choice-order-by-with-relation.input';
import { MultipleChoiceQuestionChoiceWhereUniqueInput } from './multiple-choice-question-choice-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MultipleChoiceQuestionChoiceCountAggregateInput } from './multiple-choice-question-choice-count-aggregate.input';
import { MultipleChoiceQuestionChoiceMinAggregateInput } from './multiple-choice-question-choice-min-aggregate.input';
import { MultipleChoiceQuestionChoiceMaxAggregateInput } from './multiple-choice-question-choice-max-aggregate.input';

@ArgsType()
export class MultipleChoiceQuestionChoiceAggregateArgs {

    @Field(() => MultipleChoiceQuestionChoiceWhereInput, {nullable:true})
    where?: MultipleChoiceQuestionChoiceWhereInput;

    @Field(() => [MultipleChoiceQuestionChoiceOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MultipleChoiceQuestionChoiceOrderByWithRelationInput>;

    @Field(() => MultipleChoiceQuestionChoiceWhereUniqueInput, {nullable:true})
    cursor?: MultipleChoiceQuestionChoiceWhereUniqueInput;

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
