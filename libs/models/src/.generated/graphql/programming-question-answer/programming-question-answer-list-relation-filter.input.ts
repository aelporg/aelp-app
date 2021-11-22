import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgrammingQuestionAnswerWhereInput } from './programming-question-answer-where.input';

@InputType()
export class ProgrammingQuestionAnswerListRelationFilter {

    @Field(() => ProgrammingQuestionAnswerWhereInput, {nullable:true})
    every?: ProgrammingQuestionAnswerWhereInput;

    @Field(() => ProgrammingQuestionAnswerWhereInput, {nullable:true})
    some?: ProgrammingQuestionAnswerWhereInput;

    @Field(() => ProgrammingQuestionAnswerWhereInput, {nullable:true})
    none?: ProgrammingQuestionAnswerWhereInput;
}
