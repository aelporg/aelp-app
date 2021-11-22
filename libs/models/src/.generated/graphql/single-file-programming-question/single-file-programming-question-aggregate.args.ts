import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SingleFileProgrammingQuestionWhereInput } from './single-file-programming-question-where.input';
import { SingleFileProgrammingQuestionOrderByWithRelationInput } from './single-file-programming-question-order-by-with-relation.input';
import { SingleFileProgrammingQuestionWhereUniqueInput } from './single-file-programming-question-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SingleFileProgrammingQuestionCountAggregateInput } from './single-file-programming-question-count-aggregate.input';
import { SingleFileProgrammingQuestionMinAggregateInput } from './single-file-programming-question-min-aggregate.input';
import { SingleFileProgrammingQuestionMaxAggregateInput } from './single-file-programming-question-max-aggregate.input';

@ArgsType()
export class SingleFileProgrammingQuestionAggregateArgs {

    @Field(() => SingleFileProgrammingQuestionWhereInput, {nullable:true})
    where?: SingleFileProgrammingQuestionWhereInput;

    @Field(() => [SingleFileProgrammingQuestionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SingleFileProgrammingQuestionOrderByWithRelationInput>;

    @Field(() => SingleFileProgrammingQuestionWhereUniqueInput, {nullable:true})
    cursor?: SingleFileProgrammingQuestionWhereUniqueInput;

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
