import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SingleFileProgrammingQuestionWhereInput } from './single-file-programming-question-where.input';
import { SingleFileProgrammingQuestionOrderByWithAggregationInput } from './single-file-programming-question-order-by-with-aggregation.input';
import { SingleFileProgrammingQuestionScalarFieldEnum } from './single-file-programming-question-scalar-field.enum';
import { SingleFileProgrammingQuestionScalarWhereWithAggregatesInput } from './single-file-programming-question-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SingleFileProgrammingQuestionCountAggregateInput } from './single-file-programming-question-count-aggregate.input';
import { SingleFileProgrammingQuestionMinAggregateInput } from './single-file-programming-question-min-aggregate.input';
import { SingleFileProgrammingQuestionMaxAggregateInput } from './single-file-programming-question-max-aggregate.input';

@ArgsType()
export class SingleFileProgrammingQuestionGroupByArgs {

    @Field(() => SingleFileProgrammingQuestionWhereInput, {nullable:true})
    where?: SingleFileProgrammingQuestionWhereInput;

    @Field(() => [SingleFileProgrammingQuestionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SingleFileProgrammingQuestionOrderByWithAggregationInput>;

    @Field(() => [SingleFileProgrammingQuestionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SingleFileProgrammingQuestionScalarFieldEnum>;

    @Field(() => SingleFileProgrammingQuestionScalarWhereWithAggregatesInput, {nullable:true})
    having?: SingleFileProgrammingQuestionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SingleFileProgrammingQuestionCountAggregateInput, {nullable:true})
    _count?: SingleFileProgrammingQuestionCountAggregateInput;

    @Field(() => SingleFileProgrammingQuestionMinAggregateInput, {nullable:true})
    _min?: SingleFileProgrammingQuestionMinAggregateInput;

    @Field(() => SingleFileProgrammingQuestionMaxAggregateInput, {nullable:true})
    _max?: SingleFileProgrammingQuestionMaxAggregateInput;
}
