import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgrammingQuestionAnswerWhereInput } from './programming-question-answer-where.input';

@InputType()
export class ProgrammingQuestionAnswerRelationFilter {

    @Field(() => ProgrammingQuestionAnswerWhereInput, {nullable:true})
    is?: ProgrammingQuestionAnswerWhereInput;

    @Field(() => ProgrammingQuestionAnswerWhereInput, {nullable:true})
    isNot?: ProgrammingQuestionAnswerWhereInput;
}
