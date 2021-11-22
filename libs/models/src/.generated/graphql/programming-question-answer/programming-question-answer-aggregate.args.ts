import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProgrammingQuestionAnswerWhereInput } from './programming-question-answer-where.input';
import { ProgrammingQuestionAnswerOrderByWithRelationInput } from './programming-question-answer-order-by-with-relation.input';
import { ProgrammingQuestionAnswerWhereUniqueInput } from './programming-question-answer-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProgrammingQuestionAnswerCountAggregateInput } from './programming-question-answer-count-aggregate.input';
import { ProgrammingQuestionAnswerMinAggregateInput } from './programming-question-answer-min-aggregate.input';
import { ProgrammingQuestionAnswerMaxAggregateInput } from './programming-question-answer-max-aggregate.input';

@ArgsType()
export class ProgrammingQuestionAnswerAggregateArgs {

    @Field(() => ProgrammingQuestionAnswerWhereInput, {nullable:true})
    where?: ProgrammingQuestionAnswerWhereInput;

    @Field(() => [ProgrammingQuestionAnswerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProgrammingQuestionAnswerOrderByWithRelationInput>;

    @Field(() => ProgrammingQuestionAnswerWhereUniqueInput, {nullable:true})
    cursor?: ProgrammingQuestionAnswerWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProgrammingQuestionAnswerCountAggregateInput, {nullable:true})
    _count?: ProgrammingQuestionAnswerCountAggregateInput;

    @Field(() => ProgrammingQuestionAnswerMinAggregateInput, {nullable:true})
    _min?: ProgrammingQuestionAnswerMinAggregateInput;

    @Field(() => ProgrammingQuestionAnswerMaxAggregateInput, {nullable:true})
    _max?: ProgrammingQuestionAnswerMaxAggregateInput;
}
