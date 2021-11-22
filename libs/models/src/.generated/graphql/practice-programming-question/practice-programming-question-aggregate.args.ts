import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PracticeProgrammingQuestionWhereInput } from './practice-programming-question-where.input';
import { PracticeProgrammingQuestionOrderByWithRelationInput } from './practice-programming-question-order-by-with-relation.input';
import { PracticeProgrammingQuestionWhereUniqueInput } from './practice-programming-question-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PracticeProgrammingQuestionCountAggregateInput } from './practice-programming-question-count-aggregate.input';
import { PracticeProgrammingQuestionMinAggregateInput } from './practice-programming-question-min-aggregate.input';
import { PracticeProgrammingQuestionMaxAggregateInput } from './practice-programming-question-max-aggregate.input';

@ArgsType()
export class PracticeProgrammingQuestionAggregateArgs {

    @Field(() => PracticeProgrammingQuestionWhereInput, {nullable:true})
    where?: PracticeProgrammingQuestionWhereInput;

    @Field(() => [PracticeProgrammingQuestionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PracticeProgrammingQuestionOrderByWithRelationInput>;

    @Field(() => PracticeProgrammingQuestionWhereUniqueInput, {nullable:true})
    cursor?: PracticeProgrammingQuestionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PracticeProgrammingQuestionCountAggregateInput, {nullable:true})
    _count?: PracticeProgrammingQuestionCountAggregateInput;

    @Field(() => PracticeProgrammingQuestionMinAggregateInput, {nullable:true})
    _min?: PracticeProgrammingQuestionMinAggregateInput;

    @Field(() => PracticeProgrammingQuestionMaxAggregateInput, {nullable:true})
    _max?: PracticeProgrammingQuestionMaxAggregateInput;
}
