import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MultipleChoiceQuestionAnswerWhereInput } from './multiple-choice-question-answer-where.input';
import { MultipleChoiceQuestionAnswerOrderByWithRelationInput } from './multiple-choice-question-answer-order-by-with-relation.input';
import { MultipleChoiceQuestionAnswerWhereUniqueInput } from './multiple-choice-question-answer-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MultipleChoiceQuestionAnswerScalarFieldEnum } from './multiple-choice-question-answer-scalar-field.enum';

@ArgsType()
export class FindFirstMultipleChoiceQuestionAnswerArgs {

    @Field(() => MultipleChoiceQuestionAnswerWhereInput, {nullable:true})
    where?: MultipleChoiceQuestionAnswerWhereInput;

    @Field(() => [MultipleChoiceQuestionAnswerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MultipleChoiceQuestionAnswerOrderByWithRelationInput>;

    @Field(() => MultipleChoiceQuestionAnswerWhereUniqueInput, {nullable:true})
    cursor?: MultipleChoiceQuestionAnswerWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MultipleChoiceQuestionAnswerScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MultipleChoiceQuestionAnswerScalarFieldEnum>;
}
