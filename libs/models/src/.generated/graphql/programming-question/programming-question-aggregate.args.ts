import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProgrammingQuestionWhereInput } from './programming-question-where.input';
import { ProgrammingQuestionOrderByWithRelationInput } from './programming-question-order-by-with-relation.input';
import { ProgrammingQuestionWhereUniqueInput } from './programming-question-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProgrammingQuestionCountAggregateInput } from './programming-question-count-aggregate.input';
import { ProgrammingQuestionMinAggregateInput } from './programming-question-min-aggregate.input';
import { ProgrammingQuestionMaxAggregateInput } from './programming-question-max-aggregate.input';

@ArgsType()
export class ProgrammingQuestionAggregateArgs {

    @Field(() => ProgrammingQuestionWhereInput, {nullable:true})
    where?: ProgrammingQuestionWhereInput;

    @Field(() => [ProgrammingQuestionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProgrammingQuestionOrderByWithRelationInput>;

    @Field(() => ProgrammingQuestionWhereUniqueInput, {nullable:true})
    cursor?: ProgrammingQuestionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProgrammingQuestionCountAggregateInput, {nullable:true})
    _count?: ProgrammingQuestionCountAggregateInput;

    @Field(() => ProgrammingQuestionMinAggregateInput, {nullable:true})
    _min?: ProgrammingQuestionMinAggregateInput;

    @Field(() => ProgrammingQuestionMaxAggregateInput, {nullable:true})
    _max?: ProgrammingQuestionMaxAggregateInput;
}
