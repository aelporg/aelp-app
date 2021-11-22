import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MultipleChoiceQuestionWhereInput } from './multiple-choice-question-where.input';
import { MultipleChoiceQuestionOrderByWithRelationInput } from './multiple-choice-question-order-by-with-relation.input';
import { MultipleChoiceQuestionWhereUniqueInput } from './multiple-choice-question-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MultipleChoiceQuestionCountAggregateInput } from './multiple-choice-question-count-aggregate.input';
import { MultipleChoiceQuestionMinAggregateInput } from './multiple-choice-question-min-aggregate.input';
import { MultipleChoiceQuestionMaxAggregateInput } from './multiple-choice-question-max-aggregate.input';

@ArgsType()
export class MultipleChoiceQuestionAggregateArgs {

    @Field(() => MultipleChoiceQuestionWhereInput, {nullable:true})
    where?: MultipleChoiceQuestionWhereInput;

    @Field(() => [MultipleChoiceQuestionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MultipleChoiceQuestionOrderByWithRelationInput>;

    @Field(() => MultipleChoiceQuestionWhereUniqueInput, {nullable:true})
    cursor?: MultipleChoiceQuestionWhereUniqueInput;

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
