import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProgrammingQuestionAnswerWhereInput } from './programming-question-answer-where.input';
import { ProgrammingQuestionAnswerOrderByWithRelationInput } from './programming-question-answer-order-by-with-relation.input';
import { ProgrammingQuestionAnswerWhereUniqueInput } from './programming-question-answer-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProgrammingQuestionAnswerScalarFieldEnum } from './programming-question-answer-scalar-field.enum';

@ArgsType()
export class FindManyProgrammingQuestionAnswerArgs {

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

    @Field(() => [ProgrammingQuestionAnswerScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProgrammingQuestionAnswerScalarFieldEnum>;
}
