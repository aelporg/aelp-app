import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PracticeProgrammingQuestionWhereInput } from './practice-programming-question-where.input';
import { PracticeProgrammingQuestionOrderByWithAggregationInput } from './practice-programming-question-order-by-with-aggregation.input';
import { PracticeProgrammingQuestionScalarFieldEnum } from './practice-programming-question-scalar-field.enum';
import { PracticeProgrammingQuestionScalarWhereWithAggregatesInput } from './practice-programming-question-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PracticeProgrammingQuestionCountAggregateInput } from './practice-programming-question-count-aggregate.input';
import { PracticeProgrammingQuestionMinAggregateInput } from './practice-programming-question-min-aggregate.input';
import { PracticeProgrammingQuestionMaxAggregateInput } from './practice-programming-question-max-aggregate.input';

@ArgsType()
export class PracticeProgrammingQuestionGroupByArgs {

    @Field(() => PracticeProgrammingQuestionWhereInput, {nullable:true})
    where?: PracticeProgrammingQuestionWhereInput;

    @Field(() => [PracticeProgrammingQuestionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PracticeProgrammingQuestionOrderByWithAggregationInput>;

    @Field(() => [PracticeProgrammingQuestionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PracticeProgrammingQuestionScalarFieldEnum>;

    @Field(() => PracticeProgrammingQuestionScalarWhereWithAggregatesInput, {nullable:true})
    having?: PracticeProgrammingQuestionScalarWhereWithAggregatesInput;

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
