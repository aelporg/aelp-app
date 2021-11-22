import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuestionAnswerWhereInput } from './question-answer-where.input';
import { QuestionAnswerOrderByWithRelationInput } from './question-answer-order-by-with-relation.input';
import { QuestionAnswerWhereUniqueInput } from './question-answer-where-unique.input';
import { Int } from '@nestjs/graphql';
import { QuestionAnswerScalarFieldEnum } from './question-answer-scalar-field.enum';

@ArgsType()
export class FindFirstQuestionAnswerArgs {

    @Field(() => QuestionAnswerWhereInput, {nullable:true})
    where?: QuestionAnswerWhereInput;

    @Field(() => [QuestionAnswerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<QuestionAnswerOrderByWithRelationInput>;

    @Field(() => QuestionAnswerWhereUniqueInput, {nullable:true})
    cursor?: QuestionAnswerWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [QuestionAnswerScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof QuestionAnswerScalarFieldEnum>;
}
